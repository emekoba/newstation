import { TypeOrmModuleOptions } from '@nestjs/typeorm';

require('dotenv').config();

class ConfigService {
  public getTypeOrmConfig(entities: any): TypeOrmModuleOptions {
    const {
      PORT: port,
      DB_USERNAME: username,
      DB_PASSWORD: password,
      DB_HOST: host,
      DB_NAME: database,
      USE_SSL,
      SSL_AUTHORIZE,
    } = process.env;

    // console.log(host, port, username, password, database);

    return {
      host,
      port: +port,
      username,
      password: password,
      database,
      type: 'postgres',
      entities,
      synchronize: true,
      extra:
        USE_SSL === 'true'
          ? {
              ssl: {
                rejectUnauthorized: SSL_AUTHORIZE === 'true' ? true : false,
              },
            }
          : {},
    };
  }
}

const configService = new ConfigService();

export { configService };
