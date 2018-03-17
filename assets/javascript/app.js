$("#submit-search").on("click", function(event) {
    var URL = "https://www.eventbriteapi.com/v3/events/search/?token=" 
    var token = 'I4UF4V6CO33XTMTZNW';
    var location = "&q=location.address="
    var $events = $("#input-location").val().trim() + "&page=1";
    var queryURL = URL + token + location + $events;
    
    $.ajax({
        method: "GET",
        url: queryURL,
        }).done(function(res) {
        console.log(res);
        });
    
});

// $(document).ready(function() {
        
//     var token = 'GGAQ2BUKIRGJMZMU55YZ';
//     var $events = $("#events");
    
//     $.get('https://www.eventbriteapi.com/v3/events/search/?token='+token+'&organizer.id=8231868522&expand=venue', function(res) {
//         if(res.events.length) {
//             var s = "<ul class='eventList'>";
//             for(var i=0;i<res.events.length;i++) {
//                 var event = res.events[i];
//                 console.log(event);
//                 s += "<li><a href='" + event.url + "'>" + event.name.text + "</a> - " + event.description.text + "</li>";
//             }
//             s += "</ul>";
//             $events.html(s);
//         } else {
//             $events.html("<p>Sorry, there are no upcoming events.</p>");
//         }
//     });
    
    
// });