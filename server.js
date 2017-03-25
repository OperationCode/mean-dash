var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.send('root')
})

var server = http.listen(process.env.PORT || 5000, function () {
  console.log('Server running at http://0.0.0.0:' + server.address().port)
})
