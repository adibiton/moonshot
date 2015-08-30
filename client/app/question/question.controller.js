'use strict';

angular.module('moonshotApp')
  .controller('QuestionCtrl', function ($scope, $state, $stateParams, $http) {
  	
	var id = $stateParams.id;
  	
  	$scope.formdata = {};
  	$scope.state = $state.current;
    $scope.params = $stateParams;

    $http.get('/api/questions/' + id).success(function(question){
      $scope.formdata.question = question;
    }); 

    $scope.save = function(){
    	$http.put('/api/questions/' + id ,{title: $scope.formdata.question.title, 
    										description:$scope.formdata.question.description})
        .success( function(data){
        	$state.go("questions");
        });
    };

    $scope.delete = function(){
    	$http.delete('/api/questions/' + id)
    	.success( function(data){
    		$state.go("questions");
    	});
    };
});
