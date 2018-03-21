

 var config = {
    apiKey: "AIzaSyB4a5waGPXg2EE5HqP_usiTHFj1dFDMPn8",
    authDomain: "terminalproject-1b555.firebaseapp.com",
    databaseURL: "https://terminalproject-1b555.firebaseio.com",
    projectId: "terminalproject-1b555",
    storageBucket: "terminalproject-1b555.appspot.com",
    messagingSenderId: "1094378745619"
  };
  firebase.initializeApp(config);


    var dataRef = firebase.database();

    // Initial Values
    var user = "";
    var pass = "";
   

    // Capture Button Click
    $("#login").on("click", function(event) {
      event.preventDefault();

     
      user= $("#user").val().trim();
      pass = $("#pass").val().trim();
   

      dataRef.ref().push({

        user: user,
        pass: pass,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });
    });

    // Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
    dataRef.ref().on("child_added", function(childSnapshot) {

      // Log everything that's coming out of snapshot
      console.log(childSnapshot.val().user);
      console.log(childSnapshot.val().pass);
     
    // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });