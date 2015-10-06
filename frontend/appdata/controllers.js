angular.module('quran')
.controller('quran', ['$scope', '$stateParams', 'api', 'transliter', '_', function ($scope, $stateParams, api, transliter, _) {
	$scope.percobaan = $stateParams;
	console.log('quran')
}])
.controller('quran.content', ['$scope', '$stateParams', 'api', 'transliter', '_', function ($scope, $stateParams, api, transliter, _) {
	console.log($stateParams)
	api('quran', {
		'method': 'GET',
		'params': {
			q: {
				'in.surah': +$stateParams.surah,
				'in.ayah': { '$gt': +$stateParams.ayah-1, '$lt' : +$stateParams.ayah + 10 }
			}
		}
	}, function (data) {
		$scope.quran = data;
		console.log(data)
	})
}])