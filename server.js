var express = require('express')
var http = require('http')
var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var port = process.env.PORT || 8080
var request = require('superagent') // added

var app = express()
var server = http.createServer(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))


app.get('/hunting', function(req, res){
    request.get('http://food2fork.com/api/search?key=560e662350153b23128934e8e921a54a&q=bang')
     .end((err, response) =>{
      res.send(response.text)
     })

  })


// app.get('/hunting', function(req, res){
//   res.json(['Bananas', 'Apples', 'Mangos','Cherries'])
// })


if (require.main === module) {
  server.listen(port, function () {
    console.log('http server listening on port: ', port)
  })
}


