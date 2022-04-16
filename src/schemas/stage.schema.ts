import { Schema } from 'mongoose';


const StageSchema = new Schema({
    name: String,
    dateCreated: Date,
    DateCompleted: Date,
    completed: Boolean,
    project_id: { type: Schema.Types.ObjectId, ref: 'Project'},

}, { collection: 'stages' });

export default StageSchema;
