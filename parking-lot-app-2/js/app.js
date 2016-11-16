define(['angular', 'angular-ui-bootstrap'], function (angular) {
  var app = angular.module('ParkingLotApp', ["ui.bootstrap"]);

  app.init = function () {
    angular.bootstrap(document, ['ParkingLotApp']);
  };

  return app;
});
