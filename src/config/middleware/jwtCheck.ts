import { verify } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import config from '../envVariables';

export interface CustomRequest extends Request {
  token: JwtPayload
}

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization'];
  let jwt;

  try {
    jwt = <any>verify(token.split(' ')[1], config.jwt.secret, {
            complete: true,
            audience: config.jwt.audience,
            issuer: config.jwt.issuer,
            algorithms: ['HS256'],
            clockTolerance: 0,
            ignoreExpiration: false,
            ignoreNotBefore: false
    });

    (req as CustomRequest).token = jwt;
  } catch (error){
    res.status(401)
        .type('json')
        .send(JSON.stringify({ message: 'Missing or invalid token' }));

    return;
  }

  next();
}
