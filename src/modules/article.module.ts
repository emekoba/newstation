import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ENTITIES } from 'src/constants';
import { configService } from 'src/services/config.service';
import { ArticleController } from '../controllers/article.controller';
import { ArticleService } from '../services/article.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig(ENTITIES)),
    TypeOrmModule.forFeature(ENTITIES),
  ],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
