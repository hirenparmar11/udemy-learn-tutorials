weatherApp.service('$weather', ['$resource', function ($resource) {
    
    this.getWeatherResult = function (city, days) {
        console.info("Reached here" + city + " - " + days);
        
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});
    
        return weatherAPI.get({q: city, cnt: days, appid: "bd82977b86bf27fb59a04b61b657fb6f"});
    };
}]);