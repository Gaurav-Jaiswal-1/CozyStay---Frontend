document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Fetch form values
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // Basic validation
    if (password !== confirmPassword) {
        showMessage("Passwords do not match");
        return;
    }

    // You can add further validation and processing here, like sending data to server

    // Example: Simulating form submission
    showMessage(`Signup successful for ${username} with email ${email}`);
});

function showMessage(message) {
    let messageElement = document.getElementById("message");
    messageElement.textContent = message;
}
