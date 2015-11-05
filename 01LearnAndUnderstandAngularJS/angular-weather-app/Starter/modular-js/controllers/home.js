weatherApp.controller('homeController', ['$scope', '$city', function ($scope, $city) {
    
    $scope.city = $city.city;
    console.info('city from homeController - ' + $city.city);
    
    $scope.$watch('city', function () {
        $city.city = $scope.city;
        console.info('city from watch - ' + $scope.city);
    });
}]);