var movies = [""];
function displayMovieInfo() {
    var apiKey = "b5a04afb";
    var movie = $("#inputName").val().trim(); 
    var year = $("#inputYear").val().trim();
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=" + year + "&plot=full&apikey=" + apiKey;
    console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var movieDiv = $("<div class='movie'>");
            var imgURL = response.Poster;
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
            
            
            $("#movies-view").append(movieDiv);
    });
}

var test = $("#submit-movie");
test.click( function (event) {
        event.preventDefault();
        displayMovieInfo();
    });
$(document).on("click", ".movie-btn", displayMovieInfo);

    