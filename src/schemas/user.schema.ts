import { Schema } from 'mongoose';


const UserSchema = new Schema({
  firstName: String,
  middleName: String,
  secondName: String,
  role: { type: Schema.Types.ObjectId, ref: 'Role'},
  birthDay: Date,
  active: Boolean,
  login: String,
  avatar_url: String,
  password: String,
  gender: String,
  friends:  [{ type: Schema.Types.ObjectId, ref: 'User'}],
  country: String,
  city: String,

}, { collection: 'users' });

export default UserSchema;
