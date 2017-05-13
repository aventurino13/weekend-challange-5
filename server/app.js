//requires
var express = require ('express');
var app = express();
var bodyParser = require ('body-parser');
var mongoose = require ('mongoose');
var path = require('path');

// globals
var port = process.env.PORT || 3456;

//uses
app.use(express.static(path.resolve('./server/public')));
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );

app.get( '/', function( req, res ){
  res.sendFile( path.resolve( './server/public/views/index.html' ) );
});


app.listen( port, function() {
  console.log( 'server up on:', port );
});
