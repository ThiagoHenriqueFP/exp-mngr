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
  async delete(id: number) {
    const debt = await prisma.debt.delete({
      where: { id: id }
    });

    return debt;
  }

}
