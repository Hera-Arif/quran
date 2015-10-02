angular.module('quran')
.controller('quranSurah', ['$scope', 'api', '_', function ($scope, api, _) {
	api('quran', {
		'method': 'GET',
		'data': {
			'in.surah': 1
		}
	}).success(function (data) {
		$scope.quran = data;
		console.log(data)
	})
}])