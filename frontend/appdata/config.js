angular.module('quran', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/surah/1/1');
    
    $stateProvider
        .state('surah', {
            url: '/surah/:surah/:ayah',
            templateUrl: 'appdata/states/quran.html',
            controller: 'quranSurah'
        })
});