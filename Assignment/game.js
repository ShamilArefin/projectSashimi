var config = {
    apiKey: "AIzaSyB4a5waGPXg2EE5HqP_usiTHFj1dFDMPn8",
    authDomain: "terminalproject-1b555.firebaseapp.com",
    databaseURL: "https://terminalproject-1b555.firebaseio.com",
    projectId: "terminalproject-1b555",
    storageBucket: "",
    messagingSenderId: "1094378745619"
  };
  
  firebase.initializeApp(config);

  var database = firebase.database();

  var name;
  var role;
  var date;
  var rate;
 


  $("#submit").on(click, function(){
    name = $("#employee-name").val().trim();
    role = $("#role").val().trim();
    date = parseInt($("#start-date").val().trim());
    rate = parseInt($("#pay-rate").val().trim());

    console.log(name);
    console.log(role);
    console.log(date);
    console.log(rate);
  });