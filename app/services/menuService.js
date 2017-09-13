restaurantApp.factory('getMenuList',['$http', function($http) {

    var config = {
        url: 'assets/json/menu.json',
        method: 'GET'
    };

    var list,
        searchResult = [];
    var getMenuList = function(id) {
        return $http(config).then(function(response) {
            list = response.data;
            for (i = 0; i < list.length; i++) {
                if (list[i].id == id) {
                    searchResult = list[i].menu;
                    break;
                }
            }
            return searchResult;
        }, function() {
            console.log('Error occured when getting menu json file');
        });
    };

    return getMenuList;
}]);
