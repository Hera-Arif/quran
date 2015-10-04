angular.module('quran')
.controller('quranSurah', ['$scope', '$stateParams', 'api', 'transliter', '_', function ($scope, $stateParams, api, transliter, _) {
	console.log($stateParams)
	api('quran', {
		'method': 'GET',
		'params': {
			q: {
				'in.surah': +$stateParams.surah,
			}
		}
	}, function (data) {
		$scope.quran = data;
		console.log(data)
	})
}])