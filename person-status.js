var port = process.env.PORT||8080;
var http = require('http');
var url  = require('url');
var fs = require('fs');
var _ = require('underscore')
var getParameterByName = function (name,body) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(body);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
http.createServer(function (req, res) {
  if (req.method == 'POST') {
    console.log( "POST" );
    var body = '';
    req.on('data', function (data) { body += data; });
    req.on('end', function () {
      console.log("Body: " + body);
      var file = fs.readFileSync('data.json');
      var data = JSON.parse(file);
      data.push({ 
        name: getParameterByName( 'name', '?'+body ),
        status: getParameterByName( 'status', body )
      });
      sorted_data = _.sortBy(data,function(o){return o.name.toLowerCase()});
      fs.writeFile( 'data.json', JSON.stringify(sorted_data,null,2), function (err) {
          console.log('Person record added to data.json');
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.end(fs.readFileSync('index.html'));
        }
      );
    });
  }
  else
  {
    console.log( "GET", req.url );
    if( req.url == '/data.json' ) {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(fs.readFileSync('data.json'));
    }
    else
    {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(fs.readFileSync('index.html'))
    }
  }
}).listen(port, '127.0.0.1');
console.log('Server running at http://127.0.0.1:'+port+'/');
