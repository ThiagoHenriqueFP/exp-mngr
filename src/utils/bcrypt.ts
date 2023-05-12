import bcrypt from 'bcrypt';

const saltRounds = 10;

export async function hashPaswword(password: string) {
  return await bcrypt.hash(password, saltRounds);
}

export async function comparePassword(password: string, hasedPassword: string){
  return await bcrypt.compare(password, hasedPassword);
}
