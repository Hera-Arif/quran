var Nedb = require("nedb")
var q = new Nedb({
   filename: 'backend/database/quran',
   autoload: true
});
var qn = new Nedb({
   filename: 'backend/database/quran_new',
   autoload: true
});

qn.find({ 'in.surah': 1, 'in.ayah': 1 }).exec(function(err, data) {
   console.log(data)
})

// q
//    .find({})
//    .sort({
//       'in.ayah': 1,
//       'in.ibarah': 1,
//       'in.kalimah': 1
//    })
//    .exec(function(err, data) {
//       var result = []
//       var xLength = data.length
//       var x
//       for (x = 1; xLength > x; x++) {
//          if (!result[data[x].in.surah]) result[data[x].in.surah] = []
//          if (!result[data[x].in.surah][data[x].in.ayah]) result[data[x].in.surah][data[x].in.ayah] = {
//             in: {
//                surah: data[x].in.surah,
//                ayah: data[x].in.ayah
//             },
//             ibarah: []
//          }
//          if (!result[data[x].in.surah][data[x].in.ayah].ibarah[data[x].in.ibarah]) result[data[x].in.surah][data[x].in.ayah].ibarah[data[x].in.ibarah] = []
//          if (!result[data[x].in.surah][data[x].in.ayah].ibarah[data[x].in.ibarah][data[x].in.kalimah]) result[data[x].in.surah][data[x].in.ayah].ibarah[data[x].in.ibarah][data[x].in.kalimah] = data[x]
//       }
      
//       xLength = result.length
//       for (x = 1; xLength > x; x++) {
//          qn.insert(result[x], function(err, data) {
//             if (!err) {
//                console.log('ayah : ' + x + '. success')
//             } else {
//                console.log('Surah : ' + x + '. err : ' + err)
//             }
//          })
//       }
//    })