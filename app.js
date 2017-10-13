var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate']);


myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'app/partials/search.html',
    controller: 'searchController'
  }).
  when('/about', {
    templateUrl: 'app/partials/about.html',
    controller: 'aboutController'
  }).
  when('/search/:query', {
    templateUrl: 'app/partials/home.html',
    controller: 'homeController'
  }).
  when('/result', {
    templateUrl: 'app/partials/result.html',
    controller: 'infoController'
  }).
  when('/checkout', {
    templateUrl: 'app/partials/checkout.html',
    controller: 'checkoutController'
  }).
  when('/success', {
    templateUrl: 'app/partials/success.html',
    controller: 'successController'
  }).
  otherwise({
    redirectTo: '/'
  })
  $locationProvider.html5Mode(true);
}]);
