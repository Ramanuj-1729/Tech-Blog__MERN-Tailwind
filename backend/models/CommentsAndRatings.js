const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentsAndRatingsSchema = new Schema({
    postId: { type: String, required: true },
    rating: { type: Number, required: true, default: 0 },
    userName: { type: String, required: true },
    email: { type: String, required: true },
    comment: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('comment', commentsAndRatingsSchema, 'comments');
