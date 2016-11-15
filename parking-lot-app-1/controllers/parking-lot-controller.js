/**
 * Created by oz on 9/18/2016.
 */

define(['app'], function (app) {

    app.controller("parkingLotController", ["$scope", "$http", function ($scope, $http) {

        $scope.apiUrl = "http://api.citysdk.waag.org/layers/parking.garage/objects?per_page=25";

        $scope.onApiUrlChange = function(){
            $scope.getParkingLotInfo($scope.apiUrl);
        };

        $scope.getParkingLotInfo = function (url) {
            var request = $http.get(url);
            request.success(function (response) {
                if (response) {
                    $scope.$broadcast("updateMap", response.features);
                }
            }).error(function (errResponse) {
                console.error(errResponse);
            });
        };

        $scope.getParkingLotInfo($scope.apiUrl);
    }]);
});