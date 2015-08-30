'use strict';

angular.module('moonshotApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/questions');

    // $stateProvider
    //   .state('question', {
    //     url: '/question/:id',
    //     templateUrl: 'qustion/question.html'
    //   })
    //   .state('questionsList', {
    //     url: '/questions',
    //     templateUrl: 'questions/questions.html'
    //   });
        //templateUrl:'question/question.html',
        //controller:'question/QuestionCtrl'
      //})
      

    $locationProvider.html5Mode(true);
  });
