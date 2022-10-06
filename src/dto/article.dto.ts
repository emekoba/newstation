export class fetchArticleReq {
  num: string;
}

export class fetchArticleRes {
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
