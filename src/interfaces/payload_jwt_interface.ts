export interface PayloadJWT {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
  iat: number;
  exp: number;
};
