'use strict';

describe('Controller: QuestionCtrl', function () {

  // load the controller's module
  beforeEach(module('moonshotApp'));

  //var QuestionCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    var scope = $rootScope.$new();
    var QuestionCtrl = $controller('QuestionCtrl', {
      $scope: scope
    });
  }));

  it('should test', function () {
    expect(1).toEqual(1);
  });
});
