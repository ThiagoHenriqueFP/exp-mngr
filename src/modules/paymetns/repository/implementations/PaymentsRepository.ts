import { PrismaClient } from '@prisma/client';
import { endAtGenerator } from '../../../../utils/endAtGenerator';
import { ICreatePayment, IRepository, IUpdatePayment } from '../IRepository';

const prisma = new PrismaClient();

export class PaymentRepository implements IRepository {
  async create({ userId, debtValue, userReceived, date }: ICreatePayment) {
    const payment = await prisma.payments.create({
      data: {
        userId: userId,
        debtValue: debtValue,
        userReceived: userReceived,
        date: date,
      }
    });

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

      const payments = prisma.payments.findMany({
        where: {
          userId: arg0 as number,
          date: endAt,
        }

      });

      return payments;
    }

    const payments = await prisma.payments.findMany({
      where: {
        userId: arg0 as number,
      }
    });

    return payments;
  }

  async delete(id: number) {
    const payments = await prisma.payments.delete({
      where: {
        id: id,
      }
    });

    return payments;
  }

  async list(user_id: number, payment_id: number) {
    const debts = await prisma.debt.findMany({
      where: {
        userId: user_id,
      }
    });

    let data = [];

    debts.map((debt, index) => {
      data[index] = {
        debtId: debt.id,
        userId: debt.userId,
        paymentId: payment_id,
      };
    });

    console.log(data);

    const debtsOnPayment = await prisma.debtsOnPayments.createMany({
      data: data
    });

    return debtsOnPayment;
  }
}
