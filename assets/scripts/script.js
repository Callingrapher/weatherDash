

var cities = [];
var APIkey = "633201ba31240b0caf7b4be97fac60a3";
var lat;
var long;
var forecastIndex = 0;

function weatherInfo(city){
    clearField();

    //Queries the weather site with the user input
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?id=524901&appid=" + city + APIKey;

    $.ajax({
        url: queryURL,
        method: "Get"
    }).then(function (response, lat, long)
        var lat = response.coord.lat;
        var long = response.coord.lon;
        // console.log(city + long + " and " + lat)
        var cityTemp = Math.round(response.main.temp);
        var cityTempIcon = response.weather[0].icon;
        var cityTempIconURL = "http://openweathermap.org/img/w/" + cityTempIcon + ".png";
        var cityHumidity = response.main.humidity;
        var cityWindSpeed = response.wind.speed;
        var CityLat = lat;
        var CityLong = long;

        // API call for Longitude and latitude for UV Index Info 
        var queryURL = "https://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + CityLat + "&lon=" + CityLong;
       

    $.ajax({
        url: queryURL,
        method: "Get"
    })

    $('#current')
    .append($("<aside>")).html(city + " (" + today + ")" + ""
}



//Next function causes the saved cities tabs to appear

function renderButtons(city){
    var citySearch = city.charAt(0).toUpperCase() + city.substring(1);

    f (cities.indexOf(city) === -1) {

        $("#search-history").append($("<button>").addClass("past-city").attr("city-name", citySearch).text(citySearch))
        cities.push(citySearch);
    } 

    $(".past-city").unbind().on("click", function (e) { 
        e.preventDefault();
        clearField();
        displayWeatherInfo($(this).attr("city-name"));
    })

}

function clearField(){
    $("#current").empty();

}