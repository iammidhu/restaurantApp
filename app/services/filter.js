restaurantApp.filter('cuisineFilter', function() {
  return function(input, filterData) {
    var output = [];
    if (filterData.length == 0) {
      return input;
    } else {
      angular.forEach(filterData, function(filter) {
        angular.forEach(input, function(item) {
          if (item.Cuisines.indexOf(filter) > -1) {
            if (output.indexOf(item) == -1) {
              output.push(item);
            }
          }
        });
      });
      return output;
    }
  }
});
