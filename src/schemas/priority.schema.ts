import { Schema } from 'mongoose';

const PrioritySchema = new Schema({
  name: String,
  color: String

}, { collection: 'priorities' });

export default PrioritySchema;
