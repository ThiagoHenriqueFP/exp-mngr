import { PrismaClient } from '@prisma/client';
import { comparePassword } from '../../../../utils/bcrypt';
import { ILogin, IRepository } from '../IRepository';



export class LoginRepository implements IRepository {
  prisma = new PrismaClient();

  async login({password, username}: ILogin) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: username
      }
    });

    const match = await comparePassword(password, user.password);

    if(user && match){
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        wage: user.wage,
        createdAt: user.createdAt
      }
    }

    throw Error("Some credentials are incorrect");
  }

}
