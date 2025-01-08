import { registerAs } from '@nestjs/config';
import { DatabaseConfig } from '../interfaces/database.config.interface';

export default registerAs(
  'database',
  (): DatabaseConfig => ({
    type: process.env.DATABASE_TYPE,
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    name: process.env.DATABASE_NAME,
  }),
);
