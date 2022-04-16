import { Schema } from 'mongoose';

const ChatSchema = new Schema({
  name: String,
  messages: [{ type: Schema.Types.ObjectId, ref: 'Message', default: [] }],
  users: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }],
}, { collection: 'chat' });

export default ChatSchema;
