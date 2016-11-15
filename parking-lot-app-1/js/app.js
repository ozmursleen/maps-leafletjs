define(['angular'], function (angular) {
  var app = angular.module('AmsterdamParkingLotApp', []);

  app.init = function () {
    angular.bootstrap(document, ['AmsterdamParkingLotApp']);
  };

  return app;
});