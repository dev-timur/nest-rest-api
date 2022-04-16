import { Schema } from 'mongoose';

const ColumnSchema = new Schema({
  name: String,
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Task', default: [] }],
  dateCreated: Date,
  desk_id: { type: Schema.Types.ObjectId, ref: 'Desk' },

}, { collection: 'columns' });

export default ColumnSchema;
