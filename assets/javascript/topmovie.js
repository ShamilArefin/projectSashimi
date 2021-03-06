var didSearch = false;

$("#search-me").on("click", function () {
    var movieQuery = $("#search_item").val().trim();
    var apiKey = "&api_key=f8e8f558517f0a86c0fb65b50d7ca5ff";
    var pageParam = "&page=1&language=en-US";
    var queryURL = "https://api.themoviedb.org/3/search/movie?&query=" + movieQuery + pageParam + apiKey;
    didSearch = true;
    //Calls our TMDB API to figure the movie API
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var data = response.results;
        console.log(data);
        var movie = data[0];
        console.log(movie);
        var movieID = movie.id;
        console.log(movieID);

        var trailerURL = "https://api.themoviedb.org/3/movie/" + movieID + "?language=en-US" + apiKey + "&append_to_response=videos";

        $.ajax({
            url: trailerURL,
            method: "GET"
        }).then(function (callback) {
            var trailerData = callback;
            console.log(trailerData);
            var videos = trailerData.videos.results[0].key;
            console.log(videos);
            $("#youtube-here").attr("src", "https://www.youtube.com/embed/" + videos);
            $("#youtube-here").attr("style", "display: visible");
            $("#search_item").val("");
            $("#year").val("");
        });
    });
    // $("#search_item").keyup( function (){
    //     didSearch = false;
    // });
    function ifSearched() {
        if (didSearch === true) {
            $("#show-container").attr("class", "container");
        }

        else if (didSearch === false) {
            $("#show-container").attr("class", "container-fluid");
        }
    };

    ifSearched();
    return;
});



