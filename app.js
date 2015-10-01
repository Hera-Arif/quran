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
app.use(favicon(path.join(__dirname, 'frontend', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(require('less-middleware').path.join(__dirname, 'frontend', 'appdata', 'styles', 'default.less'));
app.use(express.static(path.join(__dirname, 'frontend')));

app.get('/quran.manifest',function(req,res){
    res.setHeader('content-type','text/cache-manifest');
    res.end(
      [
        'CACHE MANIFEST',
        '#v4',
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

app.use('/', require('./backend/router/main'));
app.use('/api', require('./backend/router/api'));
app.use('/quran', require('./backend/router/quran'));

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

// ===== Uncomment to Backup =====

// var Nedb = require('nedb')

// var quran = new Nedb({ filename: 'database/quran' });
// quran.loadDatabase(function (err) {
//    console.log(err)
// })

// var data = new Nedb({ filename: 'database/data' });
// data.loadDatabase(function (err) {
//    console.log(err)
// })

// data.find({}, function (err, docs) {
//    var result = []
//    docs[0].data.forEach(function(x, xindex) {
//       var holder = {}
//       var dum = {}
//       dum.dataLength = docs[0].data.length
      
//       // Word
//       holder.word = x[1]
      
//       // In
//       dum.in = x[0].split(":")
//       holder.in = {
//          surah: +dum.in[0].replace('(', ''),
//          ayah: +dum.in[1],
//          ibarah: +dum.in[2],
//          kalimah: +dum.in[3].replace(')', '')
//       }
      
//       // Prop
//       dum.properties = x[3].split('|')
//       dum.prop = {}
//       dum.opt = []
//       dum.properties.forEach(function(y) {
//          dum.dd = y.split(':')
//          if (dum.dd[1]) {
//             dum.prop[dum.dd[0]] = dum.dd[1]
//          } else {
//             dum.opt.push(dum.dd[0])
//          }
//       })
//       dum.prop.POS = x[2]
//       holder.prop = dum.prop
//       holder.prop.addits = dum.opt
      
//       // ===== Push to Result =====
//       result.push(holder)
//       console.log(xindex + " : " + holder.word)
//    })
   
//    // ===== DONE =====
//    console.log(result)
//    console.log('Saving...')
   
//    quran.insert(result, function(err) {
//       if (!err) {
//          console.log('=========== SUCCESS ===========')
//       }
//    });
   
// })

// ===== Backup =====

module.exports = app;