import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';
import { InjectRepository } from '@nestjs/typeorm';
import { findArticleReq } from 'src/dto/article.dto';
import { ArticleCache } from 'src/entities/articleCache.entity';
import { Repository } from 'typeorm';

const { NEWS_TOKEN } = process.env;

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(ArticleCache)
    private articleCacheRepo: Repository<ArticleCache>,
  ) {}

  async cacheArticles(articles: any) {
    let cache: ArticleCache[];
    let articleEntries: ArticleCache[] = [];

    for (const artl in articles) {
      const dupe = await this.articleCacheRepo.findOne({
        where: { title: articles[artl].title },
      });

      if (!dupe) {
        articleEntries.push(
          this.articleCacheRepo.create({
            title: articles[artl].title,
            description: articles[artl].description,
            content: articles[artl].content,
            url: articles[artl].url,
            image: articles[artl].image,
            author: articles[artl].source.name,
            publishedAt: articles[artl].publishedAt,
          }),
        );
      }
    }

    try {
      cache = await this.articleCacheRepo.save(articleEntries);
    } catch (err) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_IMPLEMENTED,
          error: err,
        },
        HttpStatus.NOT_IMPLEMENTED,
      );
    }

    console.log('new cache 🆕🆕🆕', cache);
  }

  async externalAPI(num: string) {
    return axios
      .get(
        `https://gnews.io/api/v4/top-headlines?token=${NEWS_TOKEN}&max=${num}`,
      )
      .then(
        (response) => response.data.articles,
        (error) => error.response.data,
      );
  }

  async fetchArticles(num: string) {
    return this.externalAPI(num).then(async (articles) => {
      await this.cacheArticles(articles);
      return articles;
    });
  }

  async findArticles(query: findArticleReq) {
    const { title, author } = query;
    let foundArticles: ArticleCache[] = [];

    try {
      if (title) {
        foundArticles.push(
          await this.articleCacheRepo.findOne({
            where: { title },
          }),
        );
      }

      if (author) {
        foundArticles.push(
          await this.articleCacheRepo.findOne({
            where: { author },
          }),
        );
      }
    } catch (e) {
      console.log(e);

      throw new HttpException(
        {
          status: HttpStatus.NOT_IMPLEMENTED,
          error: e,
        },
        HttpStatus.NOT_IMPLEMENTED,
      );
    }

    return foundArticles;
  }
}
