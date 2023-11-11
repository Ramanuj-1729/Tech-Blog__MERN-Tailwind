const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postsSchema = new Schema({
    userName: { type: String, required: true },
    title: { type: String, required: true },
    body: { type: String, required: true },
    thumbnail: { type: String, required: true },
    category: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('post', postsSchema, 'posts');
