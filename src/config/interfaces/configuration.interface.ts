import { AppConfig } from './app.config.interface';
import { DatabaseConfig } from './database.config.interface';

export interface Configuration {
  app: AppConfig;
  database: DatabaseConfig;
}
