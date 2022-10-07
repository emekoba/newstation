import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';
import { InjectRepository } from '@nestjs/typeorm';
import {
  findArticleReq,
  findArticleRes,
  getArticleDetailsRes,
} from 'src/dto/article.dto';
import { ArticleCache } from 'src/entities/articleCache.entity';
import { Repository } from 'typeorm';

const { NEWS_TOKEN } = process.env;

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(ArticleCache)
    private articleCacheRepo: Repository<ArticleCache>,
  ) {}

  async cacheArticles(articles: []) {
    let cache: ArticleCache[];
    let articleEntries: ArticleCache[] = [];

    articles.map((e: any) =>
      articleEntries.push(
        this.articleCacheRepo.create({
          title: e.title,
          description: e.description,
          content: e.content,
          url: e.url,
          image: e.image,
          author: e.source.name,
          publishedAt: e.publishedAt,
        }),
      ),
    );

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

  async externalAPI(num) {
    return axios
      .get(
        `https://gnews.io/api/v4/top-headlines?token=${NEWS_TOKEN}&max=${num}`,
      )
      .then(
        (response) => response.data.articles,
        (error) => error.response.data,
      );
  }

  async fetchArticles(num: string): Promise<getArticleDetailsRes> {
    return this.externalAPI({ num }).then(async (articles) => {
      await this.cacheArticles(articles);
      return articles;
    });
  }

  async fetchPreCache() {}

  async findArticle(query: findArticleReq): Promise<findArticleRes> {
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

    if (foundArticles) {
      return {
        success: true,
        foundArticles,
      };
    } else {
      return {
        success: false,
      };
    }
  }
}
