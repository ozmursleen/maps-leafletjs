/**
 * Created by oz on 9/18/2016.
 */

define(['app'], function (app) {

    app.controller("parkingLotController", ["$scope", "$http", '$uibModal', function ($scope, $http, $uibModal) {

        $scope.ctrlConstants = {
            parkingLotList: [],
            apiUrl: "http://api.citysdk.waag.org/layers/parking.garage/objects?per_page=25"
        };
        
        $scope.onApiUrlChange = function(){
            $scope.getParkingLotInfo($scope.ctrlConstants.apiUrl);
        };

        $scope.getParkingLotInfo = function (url) {
            var request = $http.get(url);
            request.success(function (response) {
                if (response) {
                    $scope.ctrlConstants.parkingLotList = response.features;
                }
            }).error(function (errResponse) {
                console.error(errResponse);
            });
        };

        $scope.viewParkingLotMap = function(parking){
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'modalMapTemplate.html',
                size: "lg",
                controller: "mapModalController",
                resolve: {
                    parkingObj: function () {
                        return parking;
                    }
                }
            });
        };

        $scope.getParkingLotInfo($scope.ctrlConstants.apiUrl);
    }]);
});