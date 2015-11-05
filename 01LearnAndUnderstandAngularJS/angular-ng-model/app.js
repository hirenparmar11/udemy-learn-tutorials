// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$filter', function ($scope, $filter) {
    $scope.handle = '';
    
    $scope.lowerHandle = function() {
        return $filter('lowercase')($scope.handle);
    };
    
    $scope.lowerLimit = 5;
    $scope.upperLimit = 12;
    
    $scope.rules = [
        {ruleContent : 'should have more than 5 characters'},
        {ruleContent : 'should be less than 12 characters'},
        {ruleContent : 'should not be repeated'}
    ];
}]);


