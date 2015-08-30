'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var QuestionsSchema = new Schema({
  id: Schema.Types.ObjectId,
  title: String,
  description: String
});


module.exports = mongoose.model('Questions', QuestionsSchema);