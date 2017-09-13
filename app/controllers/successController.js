restaurantApp.controller('successController', ['$scope', '$location', 'finalData', function($scope, $location, finalData) {

  var next = finalData;
  var orderData = next.get();

  $scope.total = orderData.data.total;
  $scope.payment_types = ['pay now', 'Cash on delivery'];
  $scope.delivery_type = orderData.delivery.name;
  $scope.showVariable = true;
  $scope.activeItem = "";
  $scope.payment = function(item) {
    $scope.activeItem = item;
  };
  if ($scope.delivery_type == 'pickup') {
    $scope.showVariable = false;
  } else {
    $scope.showVariable = true;
  }
}]);
