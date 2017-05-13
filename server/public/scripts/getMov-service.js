myApp.service('GetMov', function($http){

  this.getMov = function(x){
    console.log('in getMov');

    return $http({
      method: 'GET',
      url: 'http://www.omdbapi.com/?s=' + x
    }).then( function success( response ) {
      console.log( 'resp:', response );
      console.log( 'resp:', response.data );
      var results = response.data;
      console.log( 'results:', results.Search );
      return results.Search;
    });

  };//end getMov function
});//end service
