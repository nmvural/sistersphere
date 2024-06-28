// Function to show the popup after a delay
function showPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
}

// Function to handle subscription
function subscribe() {
    var email = document.getElementById("email").value;

    // Check if email is empty
    if (email.trim() === "") {
        alert("Please enter your email.");
        document.getElementById("email").focus(); // Set focus back to email input
        return; // Stop further execution
    }

    // Close the popup after subscription
    closePopup();
}

// Function to close the popup
function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

// Show the popup after a delay (in milliseconds)
setTimeout(showPopup, 15000); // Adjust the delay as needed
