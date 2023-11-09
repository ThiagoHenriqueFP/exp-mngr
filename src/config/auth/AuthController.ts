import {sign} from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { UserRepository } from '../../modules/user/repository/implementations/UserRepository';
import config from '../envVariables';

export class AuthController {
  static login = async (req: Request, res: Response, next: NextFunction) => {
    const {username, password} = req.body;
    const userRepository = new UserRepository();

    if(!(username && password)) {
      res.status(400).json('username and password are required');
    }

    const user = await userRepository.getByEmail(username);

    if(!user) {
      res.status(404).json('user not found');
    };

    const token = sign({userId: user.id, username: user.email, role: 'any'}, config.jwt.secret, {
      expiresIn: '1h',
      notBefore: '0',
      algorithm: 'HS256',
      audience: config.jwt.audience,
      issuer: config.jwt.issuer
    });

    res.status(200).json({token: token});
  }
}
