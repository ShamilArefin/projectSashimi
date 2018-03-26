<<<<<<< HEAD
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
=======
// Initialize Firebase
var config = {
    apiKey: "AIzaSyB4a5waGPXg2EE5HqP_usiTHFj1dFDMPn8",
    authDomain: "terminalproject-1b555.firebaseapp.com",
    databaseURL: "https://terminalproject-1b555.firebaseio.com",
    projectId: "terminalproject-1b555",
    storageBucket: "terminalproject-1b555.appspot.com",
    messagingSenderId: "1094378745619"
};
firebase.initializeApp(config);

//////////////////////////////////////////
// Store referred friends //
/////////////////////////////////////////

// Initial Values
var name = "";
var email = "";

$("#add-user").on("click", function (event) {
    event.preventDefault();

    // Grabbed values from text boxes
    name = $("#name-input").val().trim();
    email = $("#email-input").val().trim();

    // Code for handling the push
    database.ref().push({
        name: name,
        email: email,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

});


database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function (snapshot) {
    // storing the snapshot.val() in a variable for convenience
    var sv = snapshot.val();

    // Console.loging the last user's data
    console.log(sv.name);

    // Change the HTML to reflect
    $("#name-display").text(sv.name);

    // Handle the errors
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});
>>>>>>> f544678b87b72f8755b183bb12249c331e790911
