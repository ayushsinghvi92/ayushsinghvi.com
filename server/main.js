const express = require('express');
const app = express();
const morgan = require('morgan')
const https = require ('https')
const port = process.env.PORT || 8000;
app.use(morgan('dev'))
app.use(require('./middleware'))
app.use('/',require('./routes'))

app.listen(port, function () {
	console.log("Magic Happens on Port:", port )
})

module.exports = app;

