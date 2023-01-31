import { ICreate, IRepository, IUpdate } from '../IRepository';
import { PrismaClient } from '@prisma/client';
import { PaymentRepository } from '../../../paymetns/repository/implementations/PaymentsRepository';

const prisma = new PrismaClient();

export class DebtRepository implements IRepository {
  async create({ value, startAt, description, userId, endAt, parts }: ICreate) {
    const debt = await prisma.debt.create({
      data: {
        value: value / parts,
        startAt: startAt,
        userId: userId,
        endAt: endAt,
        parts: parts,
        description: description,
      }
    });

    let userWage = await prisma.user.findUnique({
      where: {
        id: userId
      },
      select: {
        wage: true,
      }
    });

    for (let i = 0; i < parts; i++) {
      let parsedDate = new Date(startAt.getFullYear(), startAt.getMonth() - 1 + i, 1);

      let payment = await PaymentRepository.prototype.getByDate(parsedDate);
      if (!payment) {
        payment = await PaymentRepository.prototype.create({
          date: parsedDate,
          userId: userId,
          userReceived: userWage.wage.toNumber(),
        },
        );
      }

      await prisma.debtsOnPayments.create({
        data: {
          debtId: debt.id,
          userId: debt.userId,
          paymentId: payment.id,
        }
      });

      let parsedEndDate = new Date(parsedDate.getFullYear(), parsedDate.getMonth() + 2, 0);

      const updateDebtValue = await prisma.debt.aggregate({
        where: {
          AND: [
            {
              startAt: {
                lte: parsedDate
              },
            }, {
              endAt: {
                gte: parsedEndDate,
              }
            }
          ],
        },
        _sum: {
          value: true,
        }
      });

      const totalDebt = updateDebtValue._sum.value?.toNumber() ?? 0 + value / parts ?? 1;

      await PaymentRepository.prototype.update({
        id: payment.id,
        userId: payment.userId,
        debtValue: totalDebt,
        userReceived: userWage.wage.toNumber(),
        date: payment.date
      });
    }

    return debt;
  }

  async put({ id, startAt, description, userId, value, endAt, parts }: IUpdate) {
    const debt = await prisma.debt.update({
      where: {
        id: id,
      },
      data: {
        value: value,
        startAt: startAt,
        description: description,
        userId: userId,
        endAt: endAt,
        parts: parts
      }
    });

    return debt;
  }

  async getAll() {
    const debt = await prisma.debt.findMany();

    return debt;
  }

  async getById(id: number) {
    const debt = await prisma.debt.findUnique({
      where: {
        id: id
      }
    });

    return debt;
  }

  async getByUserId(userId: number);
  async getByUserId(userId: number, date: Date);
  async getByUserId(arg0: unknown, arg1?: unknown) {
    try {
      if (arg1) {
        (arg1 as Date).setDate(31);

        const month = (arg1 as Date).getMonth();
        const year = (arg1 as Date).getFullYear();

        let latestDate: Date;
        if (month - 1 <= 0) {
          latestDate = new Date(year - 1, month - 1, 31);
        } else {
          latestDate = new Date(year, month - 1, 31);
        }

        const endAt = {
          lte: arg1 as Date,
          gte: latestDate,
        }

        const debts = await prisma.debt.findMany({
          where: {
            userId: arg0,
            endAt: endAt
          }
        });

        if (debts.length == 0) {
          throw new Error('No debts at this month');
        }

        return debts;
      }

      const debts = await prisma.debt.findMany({
        where: {
          userId: arg0
        }
      });

      return debts;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async delete(id: number) {
    const debt = await prisma.debt.delete({
      where: { id: id }
    });

    return debt;
  }

}
