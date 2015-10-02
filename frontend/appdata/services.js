angular.module('quran')
.factory('_', [function () {
	var task = {
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
	
	return task
}])
.factory('api', ['$http', '_', function ($http, _) {
	var task = function (url, par1) {
		var baseParams = {
			'url': document.location.origin + url
		}
		$http(_.join(baseParams, par1))
		.success(this.success)
		.error(this.error)
	}
	return task
}])