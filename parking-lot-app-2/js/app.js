define(['angular', 'angular-ui-bootstrap'], function (angular) {
  var app = angular.module('AmsterdamParkingLotApp', ["ui.bootstrap"]);

  app.init = function () {
    angular.bootstrap(document, ['AmsterdamParkingLotApp']);
  };

  return app;
});