var express = require('express')
var app = express()
require('source-map-support').install()

app.use(express.static(__dirname + '/public'))

app.get('*', function (req, res) {
  res.render('index')
})

var server = app.listen(process.env.PORT || 5000, function () {
  console.log('Server running at http://0.0.0.0:' + server.address().port)
})
