var Nedb = require("nedb")
var transliter = require("./backend/modules/transliteration")
var q = new Nedb({
   filename: 'backend/database/quran',
   autoload: true
});
var qn = new Nedb({
   filename: 'backend/database/quran_new',
   autoload: true
});

var _ = {
		'join': function (par1, par2) {
			var result
			if (par1[0]) {
				result = par1[0]
				var xLength = par1.length
				for (var x = 1; xLength > x; x++) {
					for (var key in par1[x]) {
						result[key] = result[key] || par1[x][key]
					}
				}
			} else {
				result = par1
				for (var key in par2) {
					if (!result[key]) {
						result[key] = result[key] || par2[key]
					}
				}
			}
			return result
		}
	}

qn.find({'in.surah': 1}, function(err, data) {
   console.log(err || data)
})

// q.find({}).sort({
//       'in.surah': 1,
//       'in.ayah': 1
//    }).exec(function (err, data) {
//       var result = [],
//       xLength = data.length
//       for(var x = 0; xLength > x; x++) {
//          result[x] = {}
//          result[x].ibarah = []
//          var yLength = data[x].ibarah.length
//          for (var y = 0; yLength > y; y++) {
//             result[x].ibarah[y] = []
//             var zLength = data[x].ibarah[y]? data[x].ibarah[y].length : 0;
//             for (var z = 0; zLength > z; z++) {
//                result[x].ibarah[y][z] = data[x].ibarah[y][z]? _.join(data[x].ibarah[y][z], { arabic: transliter(data[x].ibarah[y][z].word) }) : data[x].ibarah[y][z]
//             }
//          }
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