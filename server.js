var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'));

var server = app.listen(process.env.PORT || 5000, null, (err) => {
  if (err) {
    return console.error(err)
  }

  console.log('Server running at http://0.0.0.0:' + server.address().port)
})
