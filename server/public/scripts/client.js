var myApp = angular.module('myApp',  ['ngRoute']);

myApp.config(function($routeProvider){
  
})

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
