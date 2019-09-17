var app = require('http').createServer(handler);
var url = require('url');
var fs = require('fs');
var io = require('socket.io')(app)


//This will open a server at localhost:5000. Navigate to this in your browser.
app.listen(8080);

// Http handler function
function handler (req, res) {

  // Using URL to parse the requested URL
  var path = url.parse(req.url).pathname;
  // Managing the root route
  if (path == '/') {
      index = fs.readFile(__dirname+'/public/index.html', 
          function(error,data) {
              if (error) {
                  res.writeHead(500);
                  return res.end("Error: unable to load index.html");
              }
              res.writeHead(200,{'Content-Type': 'text/html'});
              res.end(data);
          });
  // Managing the route for the javascript files
  } else if( /\.(js)$/.test(path) ) {
      index = fs.readFile(__dirname+'/public'+path, 
          function(error,data) {
              if (error) {
                  res.writeHead(500);
                  return res.end("Error: unable to load " + path);
              }
              res.writeHead(200,{'Content-Type': 'text/plain'});
              res.end(data);
          });
  // Managing the route for the css files            
  } else if( /\.(css)$/.test(path) ) {
    index = fs.readFile(__dirname+'/public'+path, 
        function(error,data) {
            if (error) {
                res.writeHead(500);
                return res.end("Error: unable to load " + path);
            }
            res.writeHead(200,{'Content-Type': 'text/css'});
            res.end(data);
        }); 

  } else {
          res.writeHead(404);
          res.end("Error: 404 - File not found.");
    }    

}

io.on('connection', function (socket) {
    io.emit('datetime', { datetime: new Date() } );
});
  



