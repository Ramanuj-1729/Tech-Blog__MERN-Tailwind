import mongoose from "mongoose";
const Schema = mongoose.Schema;

const querySchema = new Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, require: true }
}, { timestamps: true });

export default mongoose.model('query', querySchema, 'queries');
