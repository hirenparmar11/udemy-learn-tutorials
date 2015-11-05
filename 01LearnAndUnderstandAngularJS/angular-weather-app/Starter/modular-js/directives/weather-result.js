weatherApp.directive("weatherResult", function () {
    return {
        restrict: 'E',
        templateUrl: 'directives/weather-result.html',
        replace: true,
        scope: {
            weatherResultData: "=",
            convertTempStandard: "&",
            convertDateStandard: "&",
            dateFormat: "@"
        }
    };
});