import { AES, enc } from 'crypto-js';

export const encryptPassword = (password:string) => {
  const hash = <string>process.env.HASH_SECRET_KEY;
  return AES.encrypt(password, hash).toString();
};

export const decryptPassword = (password:string) => {
  const hash = <string>process.env.HASH_SECRET_KEY;
  const decode = AES.decrypt(password, hash);
  return decode.toString(enc.Utf8);
};
