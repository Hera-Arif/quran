var express = require('express');
var router = express.Router();
var Nedb = require('nedb');

var quran = new Nedb({
   filename: 'backend/database/quran',
   autoload: true
});
var dict = new Nedb({
   filename: 'backend/database/hadits',
   autoload: true
});

function autoRouter(base, data) {
   for (var obj in data) {
      if (typeof data[obj] === 'function') {
         router[obj](base, data[obj]);
      }
      else {
         autoRouter(base + obj, data[obj]);
      }
   }
}

autoRouter('/quran/', {
   get: function(req, res) {
      if (typeof req.query.q === 'string') {
         req.query.q = JSON.parse(req.query.q)
      }
      
      quran.find(req.query.q).sort({ 'in.ayah': 1 }).exec(function(err, data) {
         if (err) {
            res.json({
               error: true,
               message: err,
               data: req.body.data
            });
         }
         res.json(data);
      });
   },
   ':surah/': {
      get: function(req, res) {
         quran
            .find({
               'in.surah': +req.params.surah
            })
            .exec(function(err, data) {
               if (err) {
                  res.json({
                     error: true,
                     message: err,
                     data: req.body.data
                  });
               }
               res.json(data)
            });
      },
      ':ayah': {
         get: function(req, res) {
            quran
               .find({
                  'in.surah': +req.params.surah,
                  'in.ayah': {
                     '$gt': +req.params.ayah,
                     '$lt': +req.params.ayah + 10
                  }
               })
               .exec(function(err, data) {
                  if (err) {
                     res.json({
                        error: true,
                        message: err,
                        data: req.body.data
                     });
                  }
                  res.json(data)
               });
         }
      }
   }
});

autoRouter('/dict/', {
   get: function(req, res) {
      dict.find(req.params.q || {}, function(err, data) {
         if (err) {
            res.json({
               error: true,
               message: err,
               data: req.body.data
            });
         }
         else {
            res.json(data);
         }
      });
   },
   post: function(req, res) {
      dict.insert(req.body.data, function(err, data) {
         if (err) {
            res.json({ body: req.body, params: req.params, query: req.query });
         }
         else {
            res.json(data);
         }
      })
   },
   put: function(req, res) {
      dict.update(req.params.q || {}, req.body.data, {
         multi: true
      }, function(err, data) {
         if (err) {
            res.json({
               error: true,
               message: err,
               data: req.body.data
            });
         }
         else {
            res.json(data);
         }
      })
   },
   delete: function(req, res) {
      dict.remove(req.params.q || {}, {
         multi: true
      }, function(err, data) {
         if (err) {
            res.json({
               error: true,
               message: err,
               data: req.body.data
            });
         }
         else {
            res.json(data);
         }
      })
   },
   ':surah/': {
      get: function(req, res) {
         dict.find({
            '$and': [{
               'in.surah': +req.params.surah
            }, req.params.q]
         }, function(err, data) {
            if (err) {
               res.json({
                  error: true,
                  message: err,
                  data: req.body.data
               });
            }
            else {
               res.json(data);
            }
         })
      },
      put: function(req, res) {
         dict.update({
            '$and': [{
               'in.surah': +req.params.surah
            }, req.params.q]
         }, req.body.data, {
            multi: true
         }, function(err, data) {
            if (err) {
               res.json({
                  error: true,
                  message: err,
                  data: req.body.data
               });
            }
            else {
               res.json(data);
            }
         });
      },
      delete: function(req, res) {
         dict.remove({
            '$and': [{
               'in.surah': +req.params.surah
            }, req.params.q]
         }, {
            multi: true
         }, function(err, data) {
            if (err) {
               res.json({
                  error: true,
                  message: err,
                  data: req.body.data
               });
            }
            else {
               res.json(data);
            }
         })
      },
      ':ayah': {
         get: function(req, res) {
            dict.find({
               '$and': [{
                  'in.surah': +req.params.surah,
                  'in.ayah': +req.params.ayah
               }, req.params.q]
            }, function(err, data) {
               if (err) {
                  res.json({
                     error: true,
                     message: err,
                     data: req.body.data
                  });
               }
               else {
                  res.json(data);
               }
            })
         },
         put: function(req, res) {
            dict.update({
               '$and': [{
                  'in.surah': +req.params.surah,
                  'in.ayah': +req.params.ayah
               }, req.params.q]
            }, req.body.data, {
               multi: true
            }, function(err, data) {
               if (err) {
                  res.json({
                     error: true,
                     message: err,
                     data: req.body.data
                  });
               }
               else {
                  res.json(data);
               }
            });
         },
         delete: function(req, res) {
            dict.remove({
               '$and': [{
                  'in.surah': +req.params.surah,
                  'in.ayah': +req.params.ayah
               }, req.params.q]
            }, {
               multi: true
            }, function(err, data) {
               if (err) {
                  res.json({
                     error: true,
                     message: err,
                     data: req.body.data
                  });
               }
               else {
                  res.json(data);
               }
            });
         }
      }
   }
});

module.exports = router