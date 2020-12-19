import BadRequest from '@/common/error/bad-request';
import { Context, Next } from 'koa';
import { notNull, isNumber } from '@/lib/validator/core';

const MIN_YEAR = 1900;
const MAX_YEAR = 3000;

const validate = async (ctx: Context, next: Next): Promise<void> => {
  const { query } = ctx;
  const { year, month } = query;

  if (!notNull(year) || !notNull(month)) {
    throw new BadRequest('Invalid query parameter');
  }

  if (!isNumber(year) || !isNumber(month)) {
    throw new BadRequest('Invalid query parameter');
  }

  const numYear = Number(year);
  const numMonth = Number(month);

  if (numYear < MIN_YEAR || numYear > MAX_YEAR || numMonth < 1 || numMonth > 12) {
    throw new BadRequest('Invalid query parameter');
  }

  await next();
};

export default validate;
