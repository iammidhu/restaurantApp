restaurantApp.factory('getRandomColor', function() {
  var colorPicker = function() {
    var t = '0123456789ABCDEF'.split('');
    color = "#";
    for(var i = 0; i<6 ; i++) {
      color += t[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return colorPicker;
})
