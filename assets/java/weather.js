function displayWeather(){
$("#submit-location").on("click", function(){
    var apiKey = "c8db54c823c2bfec89a9f0724d34413f";
    var location = $("#inputLocation");
    var queryURL = "api.openweathermap.org/data/2.5/forecast?zip=" + location + "&appid=" + apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          var results = response.data;
          console.log(results);
      })
});
}