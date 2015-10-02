angular.module('quran')
.filter('alpha_arabic', ['transliter', function(transliter) {
    return function(text) {
        console.log(text)
        return transliter.alpha_arabic(text)
    }
}])