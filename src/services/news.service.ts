import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';
import {
  findNewsCacheRes,
  getNewsDetailsRes,
  SortNewsFormReq,
  SortNewsFormRes,
} from 'src/dto/news.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class NewsService {
  constructor() {}
}
