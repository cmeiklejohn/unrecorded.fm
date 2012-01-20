var express = require('express'),
    socket  = require('socket.io'),
    app     = express.createServer(express.logger()),
    io      = socket.listen(app),
    port    = process.env.PORT || 3000,
    token   = process.env.TOKEN || "GAlPGP7C_____3FneWY2eHBmd2g2aGo1NHdycjY4ZXptcWxvY2FsaG9zdLp8-2HO66N94gGPlVQ2gNI=";

app.configure(function() {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'hbs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function() {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function() {
  app.use(express.errorHandler()); 
});

app.get('/', function(req, res) {
  res.render('index', { layout: false });
});

app.get('/token.js', function(req, res) {
  res.render('token', { layout: false, token: token });
});

app.listen(port, function() { 
  console.log("Server listening on %d in %s mode", port, app.settings.env);
});

io.sockets.on('connection', function(socket) { 

});

