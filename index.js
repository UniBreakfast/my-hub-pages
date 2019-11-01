require('http').createServer((req, resp) => {

  console.log(req.url)
  resp.end('I hear you')
  console.log('I heard him')

}).listen(process.env.PORT || 3000)