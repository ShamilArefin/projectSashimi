var movies = ["Zoom"];
function displayMovieInfo() {
    var apiKey = "b5a04afb";
    debugger;
    var movie = $("#inputLocation").val().trim(); 
    // $(this).attr("data-name").val().trim();
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=full&apikey=" + apiKey;
    console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var movieDiv = $("<div class='movie'>");
            var image = $("<img>").attr("src", imgURL);
            movieDiv.append(image);
            var rating = response.Rated;
            var pOne = $("<p>").text("Rating: " + rating);
            movieDiv.append(pOne);
            var released = response.Released;
            var pTwo = $("<p>").text("Released: " + released);
            movieDiv.append(pTwo);
            var plot = response.Plot;
            var pThree = $("<p>").text("Plot: " + plot);
            movieDiv.append(pThree);
            var ratings = response.imdbRating;
            var pFour = $("<p>").text("IMDB Rating: " + ratings);
            movieDiv.append(pFour);
            var imgURL = response.Poster;
            
            $("#movies-view").append(movieDiv);
    });
}

function renderButtons() {
        $("#buttons-view").empty();
        for (var i = 0; i < movies.length; i++) {
            var a = $("<button>");
            a.addClass("movie-btn");
            a.attr("data-name", movies[i]);
            a.text(movies[i]);
            $("#buttons-view").append(a);
        }
}
var test = $("#submit-movie");
test.click( function (event) {
        event.preventDefault();
       // var movie = $("#input-location").val().trim();
        //movies.push(movie);
        displayMovieInfo();
        renderButtons();
    });
$(document).on("click", ".movie-btn", displayMovieInfo);
renderButtons();
    