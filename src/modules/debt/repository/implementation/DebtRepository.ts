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
          endAt
        }
      });

      const sumValue = await prisma.debt.aggregate({
        where: {
          endAt
        },
        _sum: {
          value: true,
        }
      });
      // This approach is necessary to ensure and garantee that a repository only access
      // its own tables
      const userWage = await prisma.debt.findFirst({
        where: {
          userId: arg0
        },
        select: {
          user: {
            select: {
              wage: true,
            }
          }
        }
      });

      const wage = userWage.user.wage.toNumber();
      const debt = sumValue._sum.value.toNumber();
      const remaining = wage - debt;
      const percentage = (remaining * 100) / wage;
      const metrics = {
        wage,
        debt,
        remaining,
        percentage,
      }

      const obj = {
        debts,
        metrics
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
