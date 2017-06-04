var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
  res.render('index', {basedir: __dirname});
});

app.get('/whoami/', function (req, res) {
  	
  	var os = req.header('user-agent').split(')')[0].split('(')[1];
  	var language = req.header('accept-language').split(',')[0];
  	var ip = req.header('x-forwarded-for');
  
	res.send({
		"ipaddress": ip,
	    "language": language,
	    "software": os
	});
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
