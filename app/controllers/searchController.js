restaurantApp.controller('searchController', ['$scope', '$location', 'sharedData', 'checkoutData', function($scope, $location, sharedData, checkoutData) {
  $scope.submitHome = function(data) {
    if(data) {

      // var next = sharedData;
      // next.set(data);
      $location.path('/search/'+data);
    } else {
      $scope.error="Please enter something";
    }
  };
    sharedData.set({});
    checkoutData.set({});
}]);
