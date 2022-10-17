import expeditious from 'express-expeditious';

const cacheOptions: expeditious.ExpeditiousOptions = {
  namespace: 'expresscache',
  defaultTtl: '4 minute'
};

export const cacheInit = expeditious(cacheOptions);
