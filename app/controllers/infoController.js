myApp.controller('infoController', ['$scope', '$location', 'sharedData', 'checkoutData', 'getMenuList', 'getRandomColor', function($scope, $location, sharedData, checkoutData, getMenuList, getRandomColor) {
    var next = sharedData;
    var data = next.get();
    $scope.data = data;
    $scope.page = "menu";
    $scope.class= "active";
    $scope.review = [];
    $scope.subTotalAmount = 0;
    $scope.isDisabled = true;
    document.querySelector('.randomBox').style.backgroundColor = getRandomColor();
    var prevData = checkoutData.get();
    if(prevData.prev == true) {
        $scope.review = prevData.review;
        if(prevData.review.length == 0) {
          $scope.isDisabled = true;
        } else {
          $scope.isDisabled = false;
        }
        $scope.subTotalAmount = prevData.total;
    }
    var jsonRequest = getMenuList(data.id);
    jsonRequest.then(function(response) {
        $scope.menuList = response;
    });
    $scope.addItem = function(data, count) {
        var isDuplicate = false;
        $scope.isDisabled = false;
        for(var i = 0; i < $scope.review.length; i++) {
            if($scope.review[i].item == data.name) {
              $scope.review[i].count += count;
                $scope.review[i].total += count * data.price;
                isDuplicate = true;
                $scope.subTotalAmount += count * data.price;
            }
        }
        if(!isDuplicate) {
            $scope.review.push({
                item: data.name,
                count: count,
                pricePerItem: data.price,
                total: (count*data.price)
            });
            $scope.subTotalAmount += $scope.review[$scope.review.length-1].total;
        }
        if($scope.review.length == 1) {
            $scope.subTotalAmount = $scope.review[0].total;
        }
    };
    $scope.removeItem = function(index) {
        $scope.subTotalAmount -= $scope.review[index].total;
        $scope.review.splice(index,1);
        if($scope.review.length == 0) {
            $scope.isDisabled = true;
        }
    };

    $scope.proceedToCheckout = function() {
        checkoutData.set({
            data : $scope.data,
            review : $scope.review,
            total : $scope.subTotalAmount,
            prev: true
        });
        $location.path('/checkout');
    };
}]);
