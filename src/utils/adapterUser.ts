export const userAdapter = (others:any, accessToken:string) => {
  const { password, ...data } = others._doc;
  return { ...data, accessToken };
};
