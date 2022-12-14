
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model('category', categorySchema, 'categories');
