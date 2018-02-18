var http = require('http')
var fs = require('fs')
var fileToServe = 'carList.json'
// Create a server using http methods that you imported
// The server will listen on port 3000
var server = http.createServer((req,res) =>{
var srcStream = fs.createReadStream(fileToServe)
srcStream = pipe(res)
res.writeHead(200,{'Content-type' : 'application/json'})


}).listen(8000)