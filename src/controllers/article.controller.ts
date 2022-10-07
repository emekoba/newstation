import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import {
  fetchArticlesReq,
  fetchArticleRes,
  findArticleReq,
} from 'src/dto/article.dto';
import { ArticleService } from '../services/article.service';
import { Response, Request } from 'express';
import { newsErrors } from 'src/constants';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get('fetch')
  async fetchArticlesCtlr(
    @Query() query: fetchArticlesReq,
    @Res({ passthrough: true }) resp: Response,
  ) {
    if (parseInt(query.num) > 10) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: newsErrors.invalidMax,
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const articles = await this.articleService.fetchArticles(query.num);

    resp.json({
      articles,
    });
  }

  @Get('find')
  async findArticlesCtlr(
    @Query() query: findArticleReq,
    @Res({ passthrough: true }) resp: Response,
  ) {
    const { title, author } = query;

    if (!title && !author) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: newsErrors.invalidquery,
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const foundArticle = await this.articleService.findArticle(query);

    resp.json({
      foundArticle,
    });
  }
}
