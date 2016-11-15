/**
 * Created by oz on 9/18/2016.
 */

define(['app'], function (app) {

    app.controller("mapModalController", ["$scope", '$uibModalInstance', 'parkingObj', function ($scope, $uibModalInstance, parkingObj) {

        $scope.parkingObj = parkingObj;

        $scope.close = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }]);
});