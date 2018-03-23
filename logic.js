

  var config = {
    apiKey: "AIzaSyB4a5waGPXg2EE5HqP_usiTHFj1dFDMPn8",
    authDomain: "terminalproject-1b555.firebaseapp.com",
    databaseURL: "https://terminalproject-1b555.firebaseio.com",
    projectId: "terminalproject-1b555",
    storageBucket: "terminalproject-1b555.appspot.com",
    messagingSenderId: "1094378745619"
  };
  firebase.initializeApp(config);


    //var dataRef = firebase.database();

    // Initial Values
    //var user = "";
    //var pass = "";
   

    // Capture Button Click
    //$("#login").on("click", function(event) {
      //event.preventDefault();

     
      /* var user= $("#user").val().trim();
      var pass = $("#pass").val().trim();
   

      dataRef.ref().push({

        user: user,
        pass: pass,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });
    }); */

    // Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
    //dataRef.ref().on("child_added", function(childSnapshot) {

      // Log everything that's coming out of snapshot
      //console.log(childSnapshot.val().user);
      //console.log(childSnapshot.val().pass);
     
    // Handle the errors
    //}, function(errorObject) {
      //console.log("Errors handled: " + errorObject.code);
   // });

    


    $("#submitButton").on("click", function() {
      // Don't refresh the page!
      event.preventDefault();

      // YOUR TASK!!!
      // Code in the logic for storing and retrieving the most recent user.
      // Don't forget to provide initial data to your Firebase database.
      var genre = $("#genre").val().trim();   
      var fromYear = $("#inputFromYear").val().trim();
      var toYear = $("#inputToYear").val().trim();
      var imdbRating = $("#starRating").val().trim();
      var movieRating = $("rating").val().trim();

      console.log(genre);
      console.log(fromYear);
      console.log(toYear);
      console.log(imdbRating);
      console.log(movieRating);

      });


      var queryURL = "https://www.omdbapi.com/?t=" + TheStand + "&y=&plot=short&apikey=trilogy";                                      


      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response)
    

      // Log everything that's coming out of snapshot
     

      // Change the HTML to reflect
      /* $("#name-display").text(snapshot.val().name);
      $("#email-display").text(snapshot.val().email);
      $("#age-display").text(snapshot.val().age);
      $("#comment-display").text(snapshot.val().comment); */

      // Handle the errors
    // }, function(errorObject) {
    //   console.log("Errors handled: " + errorObject.code);
    // });
