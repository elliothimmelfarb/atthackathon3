const mongoose = require('mongoose');
const request = require('request');

const messageSchema = new mongoose.Schema({
  author: { type: String },
  body: { type: String },
  createdAt: { type: Date, default: Date.now },
});


messageSchema.pre('save', yoda);

function yoda(next) {
  console.log(this);
  next();
}


const message = mongoose.model('Message', messageSchema);

module.exports = message;
