// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$timeout', function ($scope, $timeout) {
    $scope.name = 'Hiren';
    
    $timeout(function() {
        $scope.name = 'Everybody';
    }, 3000);
}]);


