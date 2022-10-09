import UserModel from '../models/nosql/User';

export const allUserService = async () => {
  try {
    const users = await UserModel.find({});

    return users;
  } catch (error) {
    return error;
  }
};

export const updateUserService = async (id:string, body: Request) => {
  try {
    const user = await UserModel.findByIdAndUpdate(
      { _id: id },
      {
        $set: body
      },
      { new: true }
    );

    return user;
  } catch (error) {
    return error;
  }
};

export const deleteUserService = async (id:string) => {
  try {
    const user = await UserModel.findByIdAndDelete(id);

    return user;
  } catch (error) {
    return error;
  }
};

export const deleteAllUserService = async () => {
  try {
    const users = await UserModel.deleteMany();

    return users;
  } catch (error) {
    return error;
  }
};
