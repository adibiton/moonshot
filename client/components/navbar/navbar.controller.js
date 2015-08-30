'use strict';

angular.module('moonshotApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    // $scope.menu = [{
    //   'title': 'Home',
    //   'link': '/'
    // },
    // {
    //     'title': 'Question Details',
    //     'link': '/questiondfjsoajdio'
    // }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });