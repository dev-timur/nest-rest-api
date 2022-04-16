import { Schema } from 'mongoose';

const ProjectSchema = new Schema({
  name: String,
  desks: [{ type: Schema.Types.ObjectId, ref: 'Desk', default: null }],
  team: [{ type: Schema.Types.ObjectId, ref: 'User', default: null }],
  userCreated: { type: Schema.Types.ObjectId, ref: 'User', default: null },
  responsible: { type: Schema.Types.ObjectId, ref: 'User', default: null },
  status: Boolean,
  dateCreated: Date,
  stages: [{ type: Schema.Types.ObjectId, ref: 'Stages', default: [] }],
  currentStage: { type: Schema.Types.ObjectId, ref: 'Stages', default: null },

}, { collection: 'projects' });

export default ProjectSchema;
