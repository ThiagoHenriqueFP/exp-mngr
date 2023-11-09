import * as dotenv from 'dotenv'

dotenv.config();

const config = {
  jwt: {
    secret: process.env.JWT_SECRET,
    issuer: process.env.JWT_ISSUER,
    audience: process.env.JWT_AUDIENCE,
  },
  port: process.env.PORT,
}

export default config;
