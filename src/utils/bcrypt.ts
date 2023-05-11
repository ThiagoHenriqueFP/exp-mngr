import bcrypt from 'bcrypt';

const saltRounds = 10;

export function hashPaswword(password: string) {
  return bcrypt.hashSync(password, saltRounds);
}

export function comparePassword(password: string, hasedPassword: string){
  return bcrypt.compareSync(password, hasedPassword);
}
