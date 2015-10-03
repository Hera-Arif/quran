var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'frontend'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'frontend', 'favicon.png')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'frontend', 'appdata', 'styles')));
app.use(express.static(path.join(__dirname, 'frontend')));
app.get('/quran.manifest',function(req,res){
    res.setHeader('content-type','text/cache-manifest');
    res.end(
      [
        'CACHE MANIFEST',
        '#v6',
        'CACHE:',
        '/favicon.ico',
        '/components/bower/angular/angular.min.js',
        '/components/bower/angular-ui-router/release/angular-ui-router.min.js',
        'NETWORK:',
        '/',
        '*'
      ]
    .join("\n"));
});

app.use('/', require('./backend/routers/main'));
app.use('/api', require('./backend/routers/api'));
app.use('/quran', require('./backend/routers/quran'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;