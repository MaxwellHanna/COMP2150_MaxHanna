var http = require('http')
var fs = require('fs')
var fileToServe = 'carList.json'
var server = http.createServer((req, res) => {
    var srcStream = fs.createReadStream(fileToServe)
    srcStream.pipe(res)
    res.writeHead(200, {'Content-Type' : 'application/json'})

})
server.listen(8000)
