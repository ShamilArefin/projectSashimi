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
// Authentication //
/////////////////////////////////////////

// var database = firebase.database();

// var userName="";
// var userPassword="";

// $("#someLogin").on("click", function() {
//     event.preventDefault();

// userName = $("#someUsername").val().trim();
//userPassword = $("#somePassword").val().trim();

// console.log(userName);
// console.log(userPassword);

// database.ref().set({
//     userName: userName,
//     usePassword: userPassword,

// });
// });

var userName = document.getElementById("someUserName");
var userPassword=document.getElementById("somePassword");
var btnLogin = document.getElementById("someLogin");
var btnSignup = document.getElementById("someSignup");
var btnSignout = document.getElementById("someSignout");



//Login event listener


/////////////////////////////////////////////
btnLogin.addEventListener('click', e => {
//Collect login info
    var email = userName.value;
    var pass = userPassword.value;
    var auth = firebase.auth();

    console.log(email);
    console.log(pass);
    console.log(auth);

//Log in
    var promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console(e.message));


//Sign up event listener
btnSignup.addEventListener('click', e => {
//Collect login info
    var email = userName.value;
    var pass = userPassword.value;
    var auth = firebase.auth();
    console.log(email);
    console.log(pass);
    console.log(auth);

//Sign up
    var promise = auth.createUserWithEmailAndPassword(email, pass);
    promise
        .catch(e => console(e.message));
});

btnSignOut.addeventlistener('click', e=> {
    firebase.auth().signOut();
});
//Add listener 
firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
        console.log(firebaseUser);
        btnSignOut.classList.remove('hide');
    } else {
        console.log("not logged in");
        btnSignOut.classList.add('hide');
    }
});
});

// var provider = new firebase.auth.GoogleAuthProvider();
// var provider = new firebase.auth.FacebookAuthProvider();
// var provider = new firebase.auth.TwitterAuthProvider();
// var provider = new firebase.auth.GithubAuthProvider();

    // Accounts successfully linked.
//  var credential = result.credential;
//     var user = result.user;   
    // ...
// }).catch(function (error) {
    // Handle Errors here.
    // ...
//});




///////////////////////////////////////

// var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
// 

//////////////////

// String uid = "some-uid";

// String customToken = FirebaseAuth.getInstance().createCustomTokenAsync(uid).get();
// Send token back to client