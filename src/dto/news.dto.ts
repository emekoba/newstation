export class SortNewsFormReq {
  form: string;
}

export class SortNewsFormRes {
  success: boolean;
  sortedForm: any;
}

export class getCountryDetailsRes {
  fullCountryName: string;
  continent: string;
  currencies: string;
  languages: string;
  timezones: string;
}

export class findCountryCacheRes {
  success: boolean;
}
