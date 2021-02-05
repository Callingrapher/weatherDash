var cities = [];
var APIKey = "633201ba31240b0caf7b4be97fac60a3";
var lat;
var long;
var forecastIndex = 0;

function weatherInfo(city) {
    clearField();
    
    //Queries the weather site with the user input
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var lat = response.coord.lat;
        console.log(response)
        var long = response.coord.lon;
        console.log(city + long + " and " + lat)
        var cityTemp = Math.round(response.main.temp);
        var cityTempIcon = response.weather[0].icon;
        var cityTempIconURL = "http://openweathermap.org/img/w/" + cityTempIcon + ".png";
        var cityHumidity = response.main.humidity;
        var cityWindSpeed = response.wind.speed;
        var CityLat = lat;
        var CityLong = long;

        // API call for Longitude and latitude for UV Index Info 
        var queryURL = "https://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + CityLat + "&lon=" + CityLong;
        getForecastInfo(city);

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response.value)
            $('#current')
                .append($("<aside>")).html(city + " (" + today + ")" + "");
        })
    })
}

//Next function causes the saved cities tabs to appear

function renderButtons(city) {
            var citySearch = city.charAt(0).toUpperCase() + city.substring(1);

            if (cities.indexOf(city) === -1) {

                $("#search-history").append($("<button>").addClass("past-city").attr("city-name", citySearch).text(citySearch))
                cities.push(citySearch);
            }

            $(".past-city").unbind().on("click", function (e) {
                e.preventDefault();
                clearField();
                displayWeatherInfo($(this).attr("city-name"));
            })

        }

function clearField() {
            $("#current").empty();
            $(".five-day").empty();
            $(".forecast-head").empty();
        }

$("#add-city").on("click", function (e) {
            e.preventDefault();
            var city = $("#city-input").val().trim();
            // displayWeatherInfo(city);
            weatherInfo(city);
            renderButtons(city);
            document.GetElementById("city-input").value = "";
        });

function getForecastInfo(searchValue) {
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&appid=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        for (var i =0; i < response.list.length; i +=8){
            //dynamic card to append the five day forecast
            
        }
            // console.log(response)
    })
}



for (var i =0; i < response.list.length; i +=8){

}