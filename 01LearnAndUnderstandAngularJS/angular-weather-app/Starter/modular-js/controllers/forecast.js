weatherApp.controller('forecastController', ['$scope', '$routeParams', '$city', '$weather', function ($scope, $routeParams, $city, $weather) {
    
    $scope.city = $city.city;
    $scope.days = $routeParams.days || '2';
    
    console.info("Reached here in Controller " + $city + " - " + $scope.days);
    console.log($city);
    
    $scope.weatherReport = $weather.getWeatherResult($scope.city, $scope.days);
    
    $scope.kToC = function (tempK) {
        return Math.round(tempK - 273.15);
    };
    
    $scope.kToF = function (tempK) {
        return Math.round(((tempK * 1.8) - 459.67));
    };

    $scope.readableDate = function (machineDate) {
        return new Date(machineDate * 1000);
    };
    
    $scope.$watch('city', function () {
        $city.city = $scope.city;
    });
}]);