import { Schema } from 'mongoose';
import IUser from 'src/interfaces/user.interface';

const CommentSchema = new Schema({
  text: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateCreated: Date,
  task_id: { type: Schema.Types.ObjectId, ref: 'Task' },

}, { collection: 'comments' });

export default CommentSchema;
