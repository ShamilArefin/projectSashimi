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

  var database=firebase.database();

  var loginEmail = "";
  var loginPassword = "";

  $("#loginSubmitButton").on("click", function(){
      loginEmail = $("#exampleInputEmail2").val().trim();
      loginPassword = $("#exampleInputPassword2").val().trim();

      database.ref().set({
      loginEmail = loginEmail,
      loginPassword = loginPassword,

    });
  });

  database.ref().on("value", function(snapshot) {

    console.log(snapshot.val());
    console.log(snapshot.val().loginEmail);
    console.log(snapshot.val().loginPassword);

  });

 //function(errorObject) {
    //console.log("Errors handled: " + errorObject.code);
  //}
