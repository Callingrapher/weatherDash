

var cities = [];
// var current = moment().format('MM/DD/YYYY');

var APIkey = "633201ba31240b0caf7b4be97fac60a3";


function weatherInfo(city){
    clearField();

    //Queries the weather site with the user input
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?id=524901&appid=" + city + APIKey;

    $.ajax({
        url: queryURL,
        method: "Get"
    })

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


}

function clearField(){
    $("#current").empty();

}