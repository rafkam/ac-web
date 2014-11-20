var cache = require('./cache');

var getForecast = function(region, source, success, error) {
    console.log("avalx cache getForecast");
    //! async
    var updateCache = function(){
        avalx.fetchCaamlForecast(req.region, date, function (caamlForecast) {

            forecast = { region: region, caaml: caamlForecast};

            avalx.parseCaamlForecast(forecast, source, function (jsonForecast) {
                    cache.save(region, caamlForecast, jsonForecast);
            }, function () {
                    error('error parsing %s caaml forecast.', regionId);
            });

        });
    }

    //! blocking
    //! waits for a response from the caaml server before calling the success function
    var seedCache = function() {
        avalx.fetchCaamlForecast(req.region, date, function (caamlForecast) {

            forecast = {region: region, caaml: caamlForecast};

            avalx.parseCaamlForecast(forecast, source, function (jsonForecast) {
                    cache.save(region, caamlForecast, jsonForecast);
                    success(caamlForecast, jsonForecast);
            }, function () {
                    error('error parsing %s caaml forecast.', regionId);
            });

        });
    };

    var compareTime = function(cacheResult){
        var now = Date.now();
        // \todo compare times and add logging
    }

    var forecast = cache.get(region);
    if (forecast){ //! cache hit
        console.log("cache hit");
        updateCache();
        compareTime(forecast);
        success(forecast['caaml'], forecast['json']);
    }
    else{ //! cache miss. get the xml first then respond
        console.log("cache miss");
        seedCache();
    }
};


