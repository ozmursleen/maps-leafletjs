/**
 * Created by oz on 9/18/2016.
 */

define(['app'], function (app) {

    app.directive("leafy", function () {
        return {
            scope: {
                coords: "@"
            },
            restrict: "A",
            link: function (scope, elem, attrs) {

                var coord = angular.fromJson(scope.coords);
                var map = L.map(attrs.id).setView(coord, 12);
                var mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
                var markers = new L.FeatureGroup();

                L.tileLayer(
                    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        attribution: '&copy; ' + mapLink + ' Contributors',
                        maxZoom: 18
                    }).addTo(map);

                var defaultLatLng = L.marker(coord).addTo(map);
                map.addLayer(defaultLatLng);

                scope.$on("updateMap", function(oldValue, newValue){
                    map.removeLayer(markers);
                    if(newValue){
                        var availableParkingLots = newValue.filter(function(obj){
                            return obj.properties.layers["parking.garage"].data.State === "ok";
                        }).map(function(obj){
                            return obj;
                        });
                        angular.forEach(availableParkingLots, function(obj){
                            markers.addLayer(L.marker(obj.geometry.coordinates.reverse()).bindPopup(obj.properties.title).addTo(map));
                        });

                        map.addLayer(markers);
                    }
                });
            }
        }
    });
});
