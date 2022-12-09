import { ICreate, IRepository, IUpdate } from '../IRepository';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class DebtRepository implements IRepository {
  async create({ value, startAt, userId, endAt, parts }: ICreate) {
    const debt = await prisma.debt.create({
      data: {
        value: value,
        startAt: startAt,
        userId: userId,
        endAt: endAt,
        parts: parts
      }
    });

    return debt;
  }

  async put({ id, startAt, userId, value, endAt, parts }: IUpdate) {
    const debt = await prisma.debt.update({
      where: {
        id: id,
      },
      data: {
        value: value,
        startAt: startAt,
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
    if (arg1) {
      const parsedDate = new Date(arg1 as Date);

      let month = parsedDate.getMonth() + 1;
      let year = parsedDate.getFullYear();

      if (month > 12) {
        month -= 11;
        year += 1;
      }

      const debts = await prisma.debt.findMany({
        where: {
          userId: arg0,
          endAt: {
            lte: new Date(`${month}-01-${year}`),
            gte: new Date(`${month - 1}-01-${year}`),
          }
        }
      });

      const sumValue = await prisma.debt.aggregate({
        where: {
          endAt: {
            lte: new Date(`${month}-01-${year}`),
            gte: new Date(`${month - 1}-01-${year}`),
          }
        },
        _sum: {
          value: true,
        }
      });

      const obj = {
        ...debts,
        ...sumValue,
      }

      return obj;
    } else {
      const debts = await prisma.debt.findMany({
        where: {
          userId: arg0
        }
      });

      const sumValue = await prisma.debt.aggregate({
        _sum: {
          value: true,
        }
      });

      const obj = {
        ...debts,
        ...sumValue,
      }

      return obj;
    }
  }

  async delete(id: number) {
    const debt = await prisma.debt.delete({
      where: { id: id }
    });

    return debt;
  }

}
