import { Schema } from 'mongoose';

const MessageSchema = new Schema({
  text: String,
  dateCreated: Date,
  user: [{ type: Schema.Types.ObjectId, ref: 'User'}],
  chat_id: [{ type: Schema.Types.ObjectId, ref: 'Chat'}],



}, { collection: 'messages' });

export default MessageSchema;
