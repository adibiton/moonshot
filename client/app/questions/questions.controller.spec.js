'use strict';

describe('Controller: QuestionsCtrl', function () {

  // load the controller's module
  beforeEach(module('moonshotApp'));

  var $controller;
  //var TablesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$controller_, $rootScope) {
    //var scope = $rootScope.$new();
    $controller = _$controller_;
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
