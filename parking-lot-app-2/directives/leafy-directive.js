/**
 * Created by oz on 9/18/2016.
 */

define(['app'], function (app) {

    app.directive("leafy", function ($timeout) {
        return {
            scope: {
                coords: "@"
            },
            restrict: "A",
            link: function (scope, elem, attrs) {

                var coord = angular.fromJson(scope.coords).reverse();
                var map = L.map(attrs.id).setView(coord, 14);
                var mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
                var markers = new L.FeatureGroup();

                L.tileLayer(
                    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        attribution: '&copy; ' + mapLink + ' Contributors',
                        maxZoom: 18
                    }).addTo(map);

                var defaultLatLng = new L.marker(coord).addTo(map);
                map.removeLayer(markers);
                map.addLayer(defaultLatLng);

                scope.$watch("coords", function(){
                    $timeout(function(){
                        map.invalidateSize();
                    });
                });
            }
        }
    });
});
