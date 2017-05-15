//requires
var express = require ('express');
var app = express();
var bodyParser = require ('body-parser');
var mongoose = require ('mongoose');
var path = require('path');

// globals
var port = process.env.PORT || 3456;

//create mongodb
mongoose.connect( 'localhost:27017/WkndChal5' );

//create mongoose Schema
var movieSchema = mongoose.Schema({
  title: String,
  year: Number,
  poster: String,
  imdbID: String
}); // end movieSchema

var movies = mongoose.model( 'movies', movieSchema );

//uses
app.use(express.static(path.resolve('./server/public')));
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );

app.get( '/', function( req, res ){
  res.sendFile( path.resolve( './server/public/views/index.html' ) );
});//end base url


app.post('/favorites', function ( req, res ){
  console.log(req.body);
  var addMov = movies(req.body);
  addMov.save().then(function(){
    res.sendStatus( 200 );
  });//end save
});// end post


app.get('/favorites', function ( req, res ){
  console.log('in get favorites GET route');
    movies.find().then(function( data ) {
      console.log( data );
      res.send( data );
    }); // end find all
}); // favorites GET

app.get( '/*', function( req, res ){
  res.sendFile( path.resolve( './server/public/views/index.html' ) );
});


app.listen( port, function() {
  console.log( 'server up on:', port );
});
