import { ArticleCache } from 'src/entities/articleCache.entity';

export class fetchArticlesReq {
  num: string;
}

export class fetchArticleRes {
  success: boolean;
  fetchedForm: any;
}

export class findArticleReq {
  title: string;
  author: string;
}

export class findArticleRes {
  success: boolean;
  foundArticles?: ArticleCache[];
}

export class getArticleDetailsRes {
  fullArticleName: string;
  continent: string;
  currencies: string;
  languages: string;
  timezones: string;
}

export class findArticleCacheRes {
  success: boolean;
}
