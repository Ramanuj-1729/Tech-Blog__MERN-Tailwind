import mongoose from "mongoose";
const Schema = mongoose.Schema;

const postsSchema = new Schema({
    userName: { type: String, required: true },
    title: { type: String, required: true },
    body: { type: String, required: true },
    thumbnail: { type: String, required: true },
    category: { type: String, required: true },
    rating: { type: Number, required: true, default: 0 }
}, { timestamps: true });

export default mongoose.model('post', postsSchema, 'posts');
