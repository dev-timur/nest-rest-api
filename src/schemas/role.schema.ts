import { Schema } from 'mongoose';


const RoleSchema = new Schema({
    name: String,

}, { collection: 'roles' });

export default RoleSchema;
