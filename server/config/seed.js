/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

// var Thing = require('../api/thing/thing.model');
var Question = require('../api/questions/questions.model.js');

 Question.find({}).remove(function() {
  Question.create({
    title : 'What is your expirence?',
    description : '..'
  }, {
    title : 'How many birds are there?',
    description : '..'
  }, {
    title : 'Who is the president of china?',
    description : '..'
  },  {
    title : 'What is the second name of Obama?',
    description : '..'
  },  {
    title : 'Which country has border with Argentina?',
    description : '..'
  });
});