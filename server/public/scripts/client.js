var myApp = angular.module('myApp', []);

myApp.controller('SearchMov', function ($http, GetMov ){
  console.log('NG');

  var vm = this;

  vm.submit = function(x) {
    GetMov.getMov(x).then(function(data){
      console.log('in .then return: ', data);
      vm.result = data;
    });//end .then funct
  };
//end submit funciton

});//end controller
