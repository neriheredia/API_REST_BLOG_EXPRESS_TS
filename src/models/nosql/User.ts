import { model, Schema } from 'mongoose'

const UserSchema = new Schema({
  avatar: {
    type: String
  },
  email: {
    type: String,
    // eslint-disable-next-line no-useless-escape
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    required: true,
    unique: true
  },
  firsName: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  lastName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 20
  },
  profilePic: {
    type: String
  }
})

const UserModel = model('User', UserSchema)

export default UserModel
