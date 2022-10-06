export class SortNewsFormReq {
  form: string;
}

export class SortNewsFormRes {
  success: boolean;
  sortedForm: any;
}

export class getNewsDetailsRes {
  fullNewsName: string;
  continent: string;
  currencies: string;
  languages: string;
  timezones: string;
}

export class findNewsCacheRes {
  success: boolean;
}
