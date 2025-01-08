import { Injectable } from '@nestjs/common';
import { Configuration } from './interfaces/configuration.interface';
import { ConfigService } from '@nestjs/config';
import { AppConfig } from './interfaces/app.config.interface';
import { DatabaseConfig } from './interfaces/database.config.interface';

@Injectable()
export class ConfigurationService {
  constructor(private readonly configService: ConfigService<Configuration>) {}

  get<K extends keyof Configuration>(key: K): Configuration[K] {
    return this.configService.get<Configuration[K]>(key);
  }

  get appConfig(): AppConfig {
    return this.get('app');
  }

  get databaseConfig(): DatabaseConfig {
    return this.get('database');
  }

  get isDevelopment(): boolean {
    return this.appConfig.nodeEnv === 'development';
  }

  get isProduction(): boolean {
    return this.appConfig.nodeEnv === 'production';
  }

  get isTest(): boolean {
    return this.appConfig.nodeEnv === 'test';
  }
}
