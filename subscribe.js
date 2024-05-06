
    // JavaScript code
    document.getElementById('subscribeForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Get the email value
        var email = document.getElementById('email').value;

        // Check if email is not empty
        if (email.trim() !== '') {
            alert('Thank you for subscribing!'); // Show alert
            document.getElementById('subscribeForm').reset(); // Reset the form
        } else {
            alert('Please enter a valid email.'); // Show alert if email is empty
        }
    });






