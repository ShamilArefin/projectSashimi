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