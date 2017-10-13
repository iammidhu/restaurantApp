myApp.factory('searchQuery', ['$http', function($http) {
    var search = function(data) {
        var config = {
            url: 'assets/json/list.json',
            method: 'GET'
        };

        var list,
            searchResult = [];

        return $http(config).then(function(response) {
            list = response.data;
            for (i = 0; i < list.length; i++) {
                if (list[i].title.toLowerCase().indexOf(data.toLowerCase()) > -1 || list[i].location.toLowerCase().indexOf(data.toLowerCase()) > -1) {
                    searchResult.push(list[i]);
                }
            }
            return searchResult;
        }, function() {
            console.log('Error occured when getting list json file');
        });
    };

    return search;
}]);
