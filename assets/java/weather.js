var movies = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];
function displayMovieInfo() {
    var apiKey = "b5a04afb";
    var movie = $(this).attr("data-name").val().trim();
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=" + apiKey;
    console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var movieDiv = $("<div class='movie'>");
            var rating = response.Rated;
            var pOne = $("<p>").text("Rating: " + rating);
            movieDiv.append(pOne);
            var released = response.Released;
            var pTwo = $("<p>").text("Released: " + released);
            movieDiv.append(pTwo);
            var plot = response.Plot;
            var pThree = $("<p>").text("Plot: " + plot);
            movieDiv.append(pThree);
            var imgURL = response.Poster;
            var image = $("<img>").attr("src", imgURL);
            movieDiv.append(image);
            $("#movies-view").prepend(movieDiv);
    });
    function renderButtons() {
            $("#buttons-view").empty();
            for (var i = 0; i < movies.length; i++) {
                var a = $("<button>");
                a.addClass("movie-btn");
                a.attr("data-name", movies[i]);
                a.text(movies[i]);
                $("#buttons-view").append(a);
            }
        };
    $("#add-movie").on("click", function (event) {
            event.preventDefault();
            var movie = $("#movie-input").val().trim();
            movies.push(movie);
            renderButtons();
        });
    $(document).on("click", ".movie-btn", displayMovieInfo);
    renderButtons();
    }