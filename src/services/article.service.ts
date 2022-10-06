import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';
import { InjectRepository } from '@nestjs/typeorm';
import {
  findArticleReq,
  findArticleRes,
  getArticleDetailsRes,
} from 'src/dto/article.dto';

const { NEWS_TOKEN } = process.env;

@Injectable()
export class ArticleService {
  constructor() {}

  async fetchArticles(num: string): Promise<getArticleDetailsRes> {
    return axios
      .get(
        `https://gnews.io/api/v4/top-headlines?token=${NEWS_TOKEN}&max=${num}`,
      )
      .then(
        (response) => response.data.articles,
        (error) => error.response.data,
      );
  }

  //   async findArticle(filter:findArticleReq): Promise<findArticleRes> {

  //   //   return axios
  //   //     .get(
  //   //       `https://gnews.io/api/v4/top-headlines?token=${NEWS_TOKEN}&max=${num}`,
  //   //     )
  //   //     .then(
  //   //       (response) => response.data.articles,
  //   //       (error) => error.response.data,
  //   //     );
  //   // }

  //   return}
}
