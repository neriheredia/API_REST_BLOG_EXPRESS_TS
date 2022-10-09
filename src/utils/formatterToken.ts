export const formatterToken = (token: string) => {
  if (token === undefined) return '';

  return token.split(' ').pop();
};
