import { Schema } from 'mongoose';
import IColumn from 'src/interfaces/column.interface';
import IPriority from 'src/interfaces/priority.interface';

const TaskSchema = new Schema({
  name: String,
  description: String,
  column_id: { type: Schema.Types.ObjectId, ref: 'Column'},
  responsible: { type: Schema.Types.ObjectId, ref: 'User'},
  status: String,
  dateCreated: Date,
  priority: { type: Schema.Types.ObjectId, ref: 'Priority', default: null},

}, { collection: 'tasks' });

export default TaskSchema;
