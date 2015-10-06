angular.module('quran', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/surah/1/1');

    
    $stateProvider
        
        .state('quran', {
            url: '/surah',
            views: {
                '': {
                    templateUrl: 'appdata/states/quran.html',
                    controller: 'quran',
                    
                },
                'header@quran': {
                    templateUrl: 'appdata/states/header@quran.html',
                    controller: function() {
                        console.warn('fail')
                    }
                },
                'footer@quran': {
                    templateUrl: 'appdata/states/footer@quran.html'
                }
            }
        })
        .state('quran.content', {
            url: '/:surah/:ayah',
            templateUrl: 'appdata/states/quran.content.html',
            controller: 'quran.content'
        })
});