import {sign} from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { UserRepository } from '../../modules/user/repository/implementations/UserRepository';
import config from '../envVariables';

export class AuthController {
  private static userRepository = new UserRepository();

  static login = async (req: Request, res: Response, next: NextFunction) => {
    const {username, password} = req.body;

    if(!(username && password)) {
      res.status(400).json('username and password are required');
    }
    try{
      const user = await this.userRepository.getByEmail(username);
      if(!user) {
        res.status(404).json('user not found');
      };

      const body = {
        userId: user.id,
        username: user.email,
        name: user.name,
        wage: user.wage,
        role: "any",
      }

      const token = sign(body, config.jwt.secret, {
        expiresIn: '1h',
        algorithm: 'HS256',
        audience: config.jwt.audience,
        issuer: config.jwt.issuer
      });

      res.status(200).json({token: token});
    } catch (error) {
      console.log(error.message)
      res.send(400).json(error.message);
    }
  }
}
