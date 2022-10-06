import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ENTITIES } from 'src/constants';
import { configService } from 'src/services/config.service';
import { NewsController } from '../controllers/news.controller';
import { NewsService } from '../services/news.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig(ENTITIES)),
    TypeOrmModule.forFeature(ENTITIES),
  ],
  controllers: [NewsController],
  providers: [NewsService],
})
export class NewsModule {}
