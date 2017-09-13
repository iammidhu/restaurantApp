restaurantApp.factory('sharedData', function() {
    var sharedData = {};
    var get = function() {
        return sharedData;
    };
    var set = function(data) {
        sharedData = data;
    };

    return {
        get : get,
        set : set
    }
});

restaurantApp.factory('checkoutData', function() {
    var sharedData = {};
    var get = function() {
        return sharedData;
    };
    var set = function(data) {
        sharedData = data;
    };

    return {
        get : get,
        set : set
    }
});
restaurantApp.factory('finalData', function() {
    var sharedData = {};
    var get = function() {
        return sharedData;
    };
    var set = function(data) {
        sharedData = data;
    };

    return {
        get : get,
        set : set
    }
});
