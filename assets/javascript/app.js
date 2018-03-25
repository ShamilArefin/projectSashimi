// // Initialize Firebase
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
