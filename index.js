require('http').createServer((req, resp) => {

  resp.end('I hear you')

}).listen(process.env.PORT || 3000)