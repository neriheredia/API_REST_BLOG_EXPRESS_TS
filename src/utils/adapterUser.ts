export const userAdapter = (others:any) => {
  const { password, ...data } = others._doc;

  return { ...data };
};
