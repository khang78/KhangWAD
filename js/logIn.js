const admina ={
    username: "admin",
    passwort: "passwort",
    role: "admin"
};

const initScreensAddEventHandlers = function () {
    if (userIsLoggedIn === false) {
        showLoginAndHideMap();
    } else {
        hideLoginAndShowMap();
    }
// What event are we interested in?: submit
// What is the event target?: form
// What is the event handler?: checkLogin
document.getElementById("loginForm").onsubmit = checkLogin;
}
function checkLogin(e) { 
    // e - the event obj
    // Why e.preventDefault()? 
    // What is the default behavior for a "submit": 
    // send request to server and get html back
    e.preventDefault();

    // get the values of the input fields
    const loginEntered = document.getElementById("username").value;
    const passwordEntered = document.getElementById("password").value;

    // check, if they are correct
    if (admina.username === loginEntered &&
        admina.password === passwordEntered) {
        // correct:
        userIsLoggedIn = true;
        hideLoginAndShowMap()
    } else {
        // incorrect:
        alert("Incorrect username or password!");
        userIsLoggedIn = false;
    }    
}
function showLoginAndHideMap () {
    document.getElementById("loginScreen").style.display = "block";
    document.getElementById("mapScreen").style.display = "none";
}
function hideLoginAndShowMap() {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("mapScreen").style.display = "block";

}
// What event are we interested in?: load
// What is the event target?: window
// What is the event handler?: initScreensAddEventHandlers
window.onload = initScreensAddEventHandlers;