window.addEventListener( "load", function () {
  
    function sendUserInfo(username, password) {
       // Replace 'YOUR_SERVER_ENDPOINT' with the actual endpoint URL
    const endpoint = 'http://localhost:8000/users';

    // Construct the request body
    const requestBody = JSON.stringify({ username, password });

    // Make a POST request to the server
    fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: requestBody,
    })
    .then(response => {
        if (response.ok) {
            // If the response status is 200, hide login page and show main
            hideLoginPage();
            showMainPage();
        } else if (response.status === 401) {
            // If the response status is 401, alert "wrong credentials" and show login page
            alert("Wrong credentials");
            showLoginPage();
        } else {
            // If there is an error, alert "something wrong" and show login page
            alert("Something went wrong");
            showLoginPage();
        }
    })
    .catch(error => {
        // If there is a network error, alert "something wrong" and show login page
        alert("Something went wrong");
        showLoginPage();
    });
}
    
    // Access the form element...
    const form = document.getElementById( "myForm" );
  
    // handle its submit event.
    form.addEventListener( "submit", function ( event ) {
          event.preventDefault();
          let username = "whoever";    // get the value of username field
          let password = "topsecret";  // get the value of password field
          sendUserInfo(username, password); 
        } 
    );
  });
  