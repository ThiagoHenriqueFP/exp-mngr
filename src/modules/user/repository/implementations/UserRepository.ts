
import { ICreate, IRepository, IUpdate } from '../IRepository';
import { PrismaClient } from '@prisma/client';

export class UserRepository implements IRepository {
  prisma = new PrismaClient();

  async create({ name, email, wage }: ICreate) {
    const user = await this.prisma.user.create({
      data: {
        name, email, wage
      }
    });

    return user;
  }

  async remove(id: number) {
    const user = await this.prisma.user.delete({
      where: {
        id: id
      }
    });

    return user;
  }

  async put({ id, name, email, wage }: IUpdate) {
    const user = await this.prisma.user.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        email: email,
        wage: wage
      }
    });

    return user;
  }

  async getAll() {
    const users = await this.prisma.user.findMany();

    return users;
  }

  async getById(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: id
      },
      include: {
        debts: true,
      }
    });

    return user;
  }

  async getByEmail(email: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: email
      }
    });

    return user;
  }
}
