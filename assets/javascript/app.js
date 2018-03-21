// $("#submit-search").on("click", function(event) {
      
    function youtubeApiCall(){
        $.ajax({
            cache: false,
            data: $.extend({
                key: 'AIzaSyCHsBUGQ7lbsRWdGaaZKb3Mj6F-Ej1y2D8',
                q: $('#input-location').val(),
                part: 'snippet'
            }, {maxResults:20,pageToken:$("#pageToken").val()}),
            dataType: 'json',
            type: 'GET',
            timeout: 5000,
            url: 'https://www.googleapis.com/youtube/v3/search'
        })
       .done(function(data) {

       }
// });
