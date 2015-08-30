'use strict';

angular.module('moonshotApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('question', {
        url: '/question/:id',
        templateUrl: 'app/question/question.html',
        controller: 'QuestionCtrl'
      });
  });