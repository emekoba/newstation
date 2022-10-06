import { ArticleCache } from './entities/articleCache.entity';

export const ENTITIES = [ArticleCache];

export const newsErrors = {
  invalidMax:
    'Value exceeds maximum allowed. You fetch no more than 10 articles at a time',
};
