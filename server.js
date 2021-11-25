const express = require('express');

const app = express();
app.use( express.urlencoded({extended:true}) );
const {MongoosesRouter} = require( './server/routes/mongoosesRouter.js' );
app.set('views engine', 'ejs' );
app.set('views',__dirname + '/client/views');

require( './server/config/database.js' );

app.use('/',MongoosesRouter);





app.listen(8080, function (){//este es el cierre

	console.log("the user server is running in port 8080");
});