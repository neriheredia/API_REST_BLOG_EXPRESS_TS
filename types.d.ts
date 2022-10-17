// eslint-disable-next-line no-unused-vars
declare namespace Express {
  export interface Request {
    userId: string | undefined;
    cat: string | undefined;
    limit: string | undefined;
    page: string | undefined;
  }
}
