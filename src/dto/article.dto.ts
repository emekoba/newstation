export class fetchArticlesReq {
  num: string;
}

export class fetchArticleRes {
  success: boolean;
  fetchedForm: any;
}

export class findArticleReq {
  num: string;
}

export class findArticleRes {
  success: boolean;
  fetchedForm: any;
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
