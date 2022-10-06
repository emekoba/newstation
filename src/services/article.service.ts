import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';
import { InjectRepository } from '@nestjs/typeorm';
import { getArticleDetailsRes } from 'src/dto/article.dto';

const { NEWS_TOKEN } = process.env;

@Injectable()
export class ArticleService {
  constructor() {}

  async fetchArticle(num: string): Promise<getArticleDetailsRes> {
    return axios
      .get(`https://gnews.io/api/v4/search?q=example&token=${NEWS_TOKEN}`)
      .then(
        (response) => {
          console.log(response.data);
          // const data = response.data[0];
          // const fullCountryName = data.name.official;
          // const continent = data.continents.reduce(
          //   (all: string, single: string) => all + ` ${single}`,
          // );
          // const currencies = Object.keys(data.currencies).reduce(
          //   (all: string, key: string) => all + ` ${key} (),`,
          // );
          // const languages = Object.values(data.languages).reduce(
          //   (all: string, single: string) => all + ` ${single},`,
          // );
          // const timezones = data.timezones.reduce(
          //   (all: string, single: string) => all + ` ${single},`,
          // );
          // return {
          //   fullCountryName,
          //   continent,
          //   currencies,
          //   languages,
          //   timezones,
          // };
        },
        (error) => error.response.data,
      );
  }
}
