import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';
import {
  findCountryCacheRes,
  getCountryDetailsRes,
  SortNewsFormReq,
  SortNewsFormRes,
} from 'src/dto/news.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class NewsService {
  constructor() {}
}
