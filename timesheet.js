// Initialize Firebase
var config = {
    apiKey: "AIzaSyB4a5waGPXg2EE5HqP_usiTHFj1dFDMPn8",
    authDomain: "terminalproject-1b555.firebaseapp.com",
    databaseURL: "https://terminalproject-1b555.firebaseio.com",
    projectId: "terminalproject-1b555",
    storageBucket: "",
    messagingSenderId: "1094378745619"
};
firebase.initializeApp(config);

// Declare variables
var empName = "";
var role = "";
var startDate = "";
var monthsWorked = 0;
var monthlyRate = 0;
var totalBilled = 0;
var dateAdded = 0;
var database = firebase.database();

//event listener after submitting
$("#submit").on("click", function (event) {
    event.preventDefault();

    empName = $("#employee-name").val().trim();
    role = $("#role").val().trim();
    startDate = $("#start-date").val().trim();
    monthlyRate = $("#pay-rate").val().trim();

    database.ref().push({
        empName: empName,
        role: role,
        startDate: startDate,
        monthlyRate: monthlyRate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
});

database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function (snapshot) {
    // storing the snapshot.val() in a variable for convenience
    var storeVal = snapshot.val();

    // Console.loging the last user's data
    console.log(storeVal.empName);
    console.log(storeVal.role);
    console.log(storeVal.startDate);
    console.log(storeVal.monthlyRate);

    // Change the HTML to reflect
    $("#employee-table").append("<th><td>" + storeVal.empName + "</td>" + 
    "<td>" + storeVal.role + "</td>" + "<td>" + storeVal.startDate + "</td>" + "<td>" + storeVal.monthsWorked + "</td>" + "<td>" + storeVal.monthlyRate + "</td></th>" + "<td>" + storeVal.totalBilled + "</td>");

}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});