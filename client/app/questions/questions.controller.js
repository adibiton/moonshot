'use strict';

angular.module('moonshotApp') 
  .controller('QuestionsCtrl', function ($scope, $http) {
    $scope.formdata = {};
    
    $http.get('/api/questions').success(function(questions){
      $scope.questions = questions;
    });
    $scope.clearAllQuestions = function(){
      $http.delete('/api/questions');
    }   
    $scope.addNewQuestion = function(){
      $http.post('/api/questions', {title: $scope.formdata.questionTitle, description:""})
        .success( function(data){
          $scope.questions.push(data);
        });
      $scope.formdata.tablename = '';
    }
  });

