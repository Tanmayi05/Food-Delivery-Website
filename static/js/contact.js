document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create a contact object
    const contactInfo = {
        name: name,
        email: email,
        message: message
    };

    // Store the contact info in local storage
    localStorage.setItem('contactInfo', JSON.stringify(contactInfo));

    // Display a response message
    document.getElementById('responseMessage').innerText = 'Thank you for contacting us! We will get back to you soon.';

    // Clear the form
    document.getElementById('contactForm').reset();
});