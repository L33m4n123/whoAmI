var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.all("*", (req, res) => {
	console.log("res._headers >>>>>>>" + JSON.stringify(resp._headers));
	res.send("...");
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
