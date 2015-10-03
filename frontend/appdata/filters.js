angular.module('quran')
.filter('alpha_arabic', ['transliter', function(transliter) {
    return function(text) {
        return transliter.alpha_arabic(text)
    }
}])