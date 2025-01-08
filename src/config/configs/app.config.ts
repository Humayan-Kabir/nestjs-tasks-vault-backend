import { registerAs } from '@nestjs/config';
import { AppConfig } from '../interfaces/app.config.interface';

export default registerAs(
  'app',
  (): AppConfig => ({
    nodeEnv: process.env.NODE_ENV,
    port: parseInt(process.env.PORT, 10),
    name: process.env.APP_NAME,
    apiPrefix: process.env.API_PREFIX,
  }),
);
