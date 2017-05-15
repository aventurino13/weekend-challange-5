var myApp = angular.module('myApp',  ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider){
  $routeProvider.when('/', {
    template:'<div> THis is the devault</div>',
    controller:'DefaultController as defCtrl'
  }).when('/search', {
    templateUrl : 'views/search.html',
    controller :'SearchMov as Ctrl'
  }).when('/favorites', {
    templateUrl : 'views/favorites.html',
    controller:'FavMov as fav',
  }).otherwise('/');

  $locationProvider.html5Mode(true);

});

myApp.controller('DefaultController', function() {
  console.log('DefaultController loaded');
});

myApp.controller('SearchMov', function ($http, GetMov ){
  console.log('NG');

  var vm = this;

  vm.submit = function(x) {
    GetMov.getMov(x).then(function(data){
      console.log('in .then return: ', data);
      vm.result = data;
    });//end .then funct
  };//end submit funciton



  vm.addFav = function (y) {
    console.log(y);
    var movObj = {
      title: y.Title,
      year: y.Year,
      poster: y.Poster,
      imdbID: y.imdbID
    };
    $http({
      method: 'POST',
      url: '/favorites',
      data: movObj
    }).then( function ( response ) {
      console.log( response );
    });//end success
  };//end addFave

});//end controller

myApp.controller('FavMov', function ( $http ){
  console.log('NG');

  var vm = this;

  vm.getFav = function (id){
  $http({
    method: 'GET',
    url: '/favorites/' + id,
  }).then( function success( response ) {
    console.log(response);
    console.log(response.data);
    vm.favMovie = response.data;
  });
};




});
