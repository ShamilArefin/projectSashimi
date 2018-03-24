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

//Login elements
var userName = document.getElementById("someUsername");
var userPassword = document.getElementById("somePassword");
var btnLogin = document.getElementById("someLogin");
var btnSignup = document.getElementById("someSignup");
var btnSignout = document.getElementById("someSignout");

//Login event listener
btnLogin.addEventListener('click', e => {
//Collect login info
    var email = userName.value;
    var pass = userPassword.value;
    var auth = firebase.auth();

//Log in
    var promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console(e.message));
});

//Sign up event listener
btnSignup.addEventListener('click', e => {
//Collect login info
    var email = userName.value;
    var pass = userPassword.value;
    var auth = firebase.auth();

//Sign up
    var promise = auth.createUserWithEmailAndPassword(email, pass);
    promise
        .catch(e => console(e.message));
});

//Add listener 
firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
        console.log(firebaseUser);
    } else {
        console.log("not logged in");
    }

var provider = new firebase.auth.GoogleAuthProvider();
var provider = new firebase.auth.FacebookAuthProvider();
var provider = new firebase.auth.TwitterAuthProvider();
var provider = new firebase.auth.GithubAuthProvider();

auth.currentUser.linkWithPopup(provider).then(function (result) {
    // Accounts successfully linked.
    var credential = result.credential;
    var user = result.user;
    // ...
}).catch(function (error) {
    // Handle Errors here.
    // ...
});