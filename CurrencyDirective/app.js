// Code goes here

var app = angular.module('app', []);

app.controller('aController', ['$scope', function (scope) {
    scope.amount = 0;
}]).directive('srCurrency', ['$filter', function ($filter) {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, el, attrs, ngModel) {
            function onChangeCurrency () {
                var curr =$filter('currency')(ngModel.$viewValue, 'USD$');
                ngModel.$setViewValue($filter('currency')(ngModel.$viewValue, 'USD$'));
                ngModel.$render();
            }

            el.on('blur', function (e) {
                scope.$apply(onChangeCurrency);
            });
        }
    }
}]);