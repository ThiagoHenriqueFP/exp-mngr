import { PrismaClient } from '@prisma/client';
import { endAtGenerator } from '../../../../utils/endAtGenerator';
import { DebtRepository } from '../../../debt/repository/implementation/DebtRepository';
import { ICreatePayment, IRepository, IUpdatePayment } from '../IRepository';

const prisma = new PrismaClient();

export class PaymentRepository implements IRepository {
  async create({ userId, userReceived, date }: ICreatePayment) {
    const payment = await prisma.payments.create({
      data: {
        userId: userId,
        userReceived: userReceived,
        date: date,
      }
    });

    //const payment = await DebtRepository.prototype.getByUserId(userId, date);

    return payment;
  }

  async update({ id, userId, debtValue, userReceived, date }: IUpdatePayment) {
    const payment = await prisma.payments.update({
      where: { id: id },
      data: {
        userId: userId,
        debtValue: debtValue,
        userReceived: userReceived,
        date: date,
      }
    });

    return payment;
  }

  async getById(id: number) {
    const payment = await prisma.payments.findMany({
      where: {
        id: id
      }
    });

    return payment;
  }

  async getByUserId(userId: number);
  async getByUserId(userId: number, date: Date);
  async getByUserId(arg0: unknown, arg1?: unknown) {
    if (arg1) {

      const endAt = {
        lte: endAtGenerator(arg1 as Date),
        gte: arg1 as Date,
      }

      const payment = await prisma.payments.findFirst({
        where: {
          userId: arg0 as number,
          date: endAt,
        },
        orderBy: {
          date: 'asc',
        }
      });

      return payment;
      // Fix on app

      const wage = payment.userReceived.toNumber();
      const paymentValue = payment.debtValue.toNumber();
      const remaining = wage - paymentValue;
      const percentage = (remaining * 100) / wage ?? 1;
      const metrics = {
        wage: wage.toFixed(2),
        paymentValue: paymentValue.toFixed(2),
        remaining: remaining.toFixed(2),
        percentage: percentage.toFixed(2),
      }

      const obj = {
        payment,
        metrics
      }

      return obj;
    }

    const payments = await prisma.payments.findMany({
      where: {
        userId: arg0 as number,
      },
      include: {
        DebtsOnPayments: {
          include: {
            debt: true,
          }
        },
      }
    });

    return payments;
  }

  async getByDate(date: Date) {
    let endDate = date;
    endDate.setDate(1);
    endDate.setMonth(endDate.getMonth() + 1);

    date.setDate(1);
    const endAt = {
      lte: endDate,
      gte: date
    }

    const payment = await prisma.payments.findFirst({
      where: {
        date: endAt
      },
      orderBy: {
        date: 'asc',
      }
    });

    return payment;
  }

  async delete(id: number) {
    const payments = await prisma.payments.delete({
      where: {
        id: id,
      }
    });

    return payments;
  }

  // async list(user_id: number, payment_id: number) {
  //   const debts = await prisma.debt.findMany({
  //     where: {
  //       userId: user_id,
  //     }
  //   });

  //   let data = [];

  //   debts.map((debt, index) => {
  //     data[index] = {
  //       debtId: debt.id,
  //       userId: debt.userId,
  //       paymentId: payment_id,
  //     };
  //   });

  //   console.log(data);

  //   const debtsOnPayment = await prisma.debtsOnPayments.createMany({
  //     data: data
  //   });

  //   return debtsOnPayment;
  // }
}
