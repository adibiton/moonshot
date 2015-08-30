'use strict';

var _ = require('lodash');
var Questions = require('./questions.model');

// Get list of questions
exports.index = function(req, res) {
  Questions.find(function (err, questions) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(questions);
  });
};

// Get a single questions
exports.show = function(req, res) {
  Questions.findById(req.params.id, function (err, questions) {
    if(err) { return handleError(res, err); }
    if(!questions) { return res.status(404).send('Not Found'); }
    return res.json(questions);
  });
};

// Creates a new questions in the DB.
exports.create = function(req, res) {
  Questions.create(req.body, function(err, questions) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(questions);
  });
};

// Updates an existing questions in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Questions.findById(req.params.id, function (err, questions) {
    if (err) { return handleError(res, err); }
    if(!questions) { return res.status(404).send('Not Found'); }
    var updated = _.merge(questions, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(questions);
    });
  });
};

// Deletes a questions from the DB.
exports.destroy = function(req, res) {
  Questions.findById(req.params.id, function (err, questions) {
    if(err) { return handleError(res, err); }
    if(!questions) { return res.status(404).send('Not Found'); }
    questions.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

// Deletes all questions from the DB.
exports.detroyAll = function(req, res) {
  Questions.find(function (err, questions) {
    if(err) { return handleError(res, err); }
    if(!questions) { return res.status(404).send('Not Found'); }
    questions.forEach(function(question){
      question.remove();
    });
  })
};

function handleError(res, err) {
  return res.status(500).send(err);
}