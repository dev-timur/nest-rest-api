import { Schema } from 'mongoose';

const DeskSchema = new Schema({
  name: String,
  columns: [{ type: Schema.Types.ObjectId, ref: 'Column'}],
  dateCreated: Date,

}, { collection: 'desks' });

export default DeskSchema;
