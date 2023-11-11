const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const querySchema = new Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, require: true }
}, { timestamps: true });

module.exports = mongoose.model('query', querySchema, 'queries');
