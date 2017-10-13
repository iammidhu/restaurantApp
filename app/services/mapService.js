myApp.factory('createMarker', function() {
    var createMarker = function(info, scope) {

        var marker = new google.maps.Marker({
            map: scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.title
        });
        var content = '<div class="info"><div class="contentHeading">' +info.title +'</div><hr><div class="infoWindowContent">'+ info.desc + '</div></div>';
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        marker.addListener('click', function() {
            infoWindow.open(scope.map, marker);
        });
        scope.markers.push(marker);

    };

    return createMarker;
});
