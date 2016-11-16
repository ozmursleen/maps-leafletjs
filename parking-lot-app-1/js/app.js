define(['angular'], function (angular) {
  var app = angular.module('ParkingLotApp', []);

  app.init = function () {
    angular.bootstrap(document, ['ParkingLotApp']);
  };

  return app;
});
