myApp.controller('homeController', ['$scope', '$location', 'searchQuery', 'createMarker', 'sharedData', function($scope, $location, searchQuery, createMarker, sharedData) {

    var mapOptions = {
        zoom: 17,
        center: new google.maps.LatLng(25, 80),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };
    $scope.markers = [];
    $resultList = [];
    $scope.submit = function(data) {
        dataPromise = searchQuery(data);
        $scope.markers = [];
        dataPromise.then(function(result) {
            $scope.map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
            $scope.resultList = result;
            var bounds = new google.maps.LatLngBounds();
            for (i = 0; i < $scope.resultList.length; i++) {
                createMarker($scope.resultList[i], $scope);
                bounds.extend($scope.markers[i].getPosition());
            }
            if($scope.resultList.length > 0) {
                $scope.map.fitBounds(bounds);
                document.getElementById('map_canvas').style.display = "block";
                document.querySelector('.error').style.display = "none";
                if($scope.resultList.length == 1) {
                    $scope.map.setZoom(17);
                }
                if($scope.resultList.length > 3) {
                    document.querySelector('.search-result-list ul').style.overflowY = "scroll";
                } else {
                    document.querySelector('.search-result-list ul').style.overflowY = "visible";
                }
            } else {
                $scope.errorMsg = "Nothing found";
                document.getElementById('map_canvas').style.display = "none";
                document.querySelector('.error').style.display = "block";
            }
        });
    };

    $scope.nextScreen = function(data) {
        var next = sharedData;
        next.set(data);
        $location.path('/result');
    }
}]);

myApp.controller('resultController', ['$scope', 'sharedData', 'getMenuList', function($scope, sharedData, getMenuList) {
    var next = sharedData;
    var data = next.get();
    console.log(data);
    $scope.data=data;
    $scope.page = "menu";
    //get menu json via http passing the id.
    var jsonRequest = getMenuList(data.id);
    jsonRequest.then(function(response) {
        $scope.menuList = response;
        console.log($scope.menuList);
    });
    //two tabs: info tab and the menu tab.
    //info tab displays all the info about the restaurant.
    //the menu tab lists the menu items with a checkbox.
    //when checked, the checkout box on the right is dynamically updated.
    //when checkout is clicked, user is redirected to the checkout page.
}]);

myApp.controller('checkoutController', ['$scope', function($scope) {
    //Here the summary of the order is displayed along with a select payment option.
}]);
