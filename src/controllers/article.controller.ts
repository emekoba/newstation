import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { fetchArticleReq, fetchArticleRes } from 'src/dto/article.dto';
import { ArticleService } from '../services/article.service';
import { Response, Request } from 'express';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get('fetch')
  async fetchArticleCtlr(
    @Query() query: fetchArticleReq,
    @Res({ passthrough: true }) resp: Response,
  ) {
    const res = await this.articleService.fetchArticle(query.num);

    resp.json({
      res,
    });
  }
}
