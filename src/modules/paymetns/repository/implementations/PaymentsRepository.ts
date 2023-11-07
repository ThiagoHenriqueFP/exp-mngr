import { Payments, PrismaClient } from '@prisma/client';
import { endAtGenerator } from '../../../../utils/endAtGenerator';
import { ICreatePayment, IRepository, IUpdatePayment } from '../IRepository';
import { Decimal } from '@prisma/client/runtime';

const prisma = new PrismaClient();

export class PaymentRepository implements IRepository {

  numberConverter(num: Decimal | number): number {
    if(num instanceof Decimal)
      return Math.round((num.toNumber() + Number.EPSILON) *100) /100;

    return Math.round((num + Number.EPSILON) *100) / 100;
  }

  async create({ userId, userReceived, date }: ICreatePayment) {
    const payment = await prisma.payments.create({
      data: {
        userId: userId,
        userReceived: userReceived,
        date: date,
      }
    });

    return payment;
  }

  async update(arg0: IUpdatePayment)
  async update(arg0: Payments[])
  async update(arg0: IUpdatePayment | Payments[]) {
    if (Array.isArray(arg0)){
      arg0.forEach(
        async (it) => {
          await prisma.payments.update({
            where: {id: it.id},
            data: {
              paid: true
            }
          });
        }
      );
      return;
    }

    const { id, userId, debtValue, userReceived, date, paid } = arg0;
    const payment = await prisma.payments.update({
      where: { id: id },
      data: {
        userId: userId,
        debtValue: debtValue,
        userReceived: userReceived,
        date: new Date(date),
        paid: paid,
        updatedAt: new Date()
      }
    });

    return payment;
  }

  async getById(id: number) {
    const payment = await prisma.payments.findUnique({
      where: {
        id: id
      }
    });

    return payment;
  }

  async getByUserId(userId: number);
  async getByUserId(userId: number, date: Date);
  async getByUserId(arg0: number, arg1?: Date) {

    function numberConverter(num: Decimal | number): number {
      if(num instanceof Decimal)
        return Math.round((num.toNumber() + Number.EPSILON) *100) /100;

      return Math.round((num + Number.EPSILON) *100) / 100;
    }

    if (arg1) {
      arg1.setDate(1)

      const endAt = {
        lte: endAtGenerator(arg1),
        gte: arg1,
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

      payment.debtValue = new Decimal(numberConverter(payment.debtValue));

      // return payment;
      // Fix on app

      const wage = numberConverter(payment.userReceived);
      const paymentValue = numberConverter(payment.debtValue);
      const remaining = wage - paymentValue;
      const percentage = numberConverter((remaining * 100) / wage ?? 1);
      const metrics = {
        wage: wage,
        paymentValue: paymentValue,
        remaining: remaining,
        percentage: percentage,
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
      orderBy: {
        date: 'asc'
      }
    });

    payments.forEach(it => it.debtValue = new Decimal(numberConverter(it.debtValue)));

    return payments;
  }

  async getByDate(date: Date)
  async getByDate(date: Date, userId: number)
  async getByDate(date: Date, isCron: boolean)
  async getByDate(arg0: Date, arg1?: unknown) {
    let endDate = arg0;
    endDate.setDate(1);
    endDate.setMonth(endDate.getMonth() + 1);

    arg0.setDate(1);
    const endAt = {
      lte: endDate,
      gte: arg0
    }

    if(typeof arg1==='number') {
      const payment = await prisma.payments.findFirst({
        where: {
          date: endAt,
          userId: arg1
        },
        orderBy: {
          date: 'asc',
        }
      });

      return payment;
    }

    if(typeof arg1==='boolean'){
      const payment = await prisma.payments.findMany({
        where: {
          date: endAt,
        }
      });

      return payment;
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
