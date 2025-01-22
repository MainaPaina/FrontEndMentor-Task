// addEventListener submitting form #newsletterSignup
document.getElementById("newsletterSignup").addEventListener("submit", function(event) {
    // stop default submit handling - dont send form to action
    event.preventDefault();

    // fetch DOM for subscribe email
    let inputEmail = document.getElementById("subscribeEmail");
    if (inputEmail == undefined)
    {
        console.log("input with id subscribe email does not exist");   
        alert("Missing input box for email");
    }
    else
    {
        // assign value of input#subscrieEmail to new variable
        let email = inputEmail.value;
        // simple checks for valid input
        // min characters for any valid email = 1@3.5
        // check if @ is in email and not first character - doubles as to check if @ exists
        if (email.length >= 5 && email.indexOf("@") > 1) {
            document.getElementById("newsletterSignup").style.display = "none";
            document.getElementById("thankYouMessage").style.display = "block";
            document.getElementById("outSubscribeEmail").innerText = email;
        }
        else{
            alert("Input entered as email cannot be valid email");
        }
    }
});

// addEventlistener for dismissing thank you message
document.getElementById("thankYouMessage").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("newsletterSignup").style.display = "grid";
    document.getElementById("thankYouMessage").style.display = "none";
});