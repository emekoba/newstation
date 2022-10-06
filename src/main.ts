import { NestFactory } from '@nestjs/core';
import { config } from 'dotenv';
import { ArticleModule } from './modules/article.module';

config();
const { APP_PORT } = process.env;

async function bootstrap() {
  const app = await NestFactory.create(ArticleModule);
  (global as typeof global & { app: any }).app = app;

  app.enableCors({ credentials: true });
  await app.listen(APP_PORT);
}
bootstrap();
