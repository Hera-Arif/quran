angular.module('quran')
.controller('quranSurah', ['$scope', 'api', 'transliter', '_', function ($scope, api, transliter, _) {
	api('quran', {
		'method': 'GET',
		'params': {
			q: {
				'in.surah': 1
			}
		}
	}, function (data) {
		$scope.quran = data;
		console.log(data)
	})
}])