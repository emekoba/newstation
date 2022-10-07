import { ArticleCache } from './entities/articleCache.entity';

export const ENTITIES = [ArticleCache];

export const newsErrors = {
  invalidMax:
    'Value exceeds maximum allowed. You fetch no more than 10 articles at a time',
  invalidquery:
    'you must provide a title or author or keyword eg.(breaking-news, world, nation, business, technology, entertainment, sports, science, health) in the query',
};
