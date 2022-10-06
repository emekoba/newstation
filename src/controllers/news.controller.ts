import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { SortNewsFormReq, SortNewsFormRes } from 'src/dto/news.dto';
import { NewsService } from '../services/news.service';
import { Response, Request } from 'express';

@Controller('employee')
export class NewsController {
  constructor(private readonly employeeService: NewsService) {}
}
