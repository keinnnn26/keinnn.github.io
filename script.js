document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.querySelector('.line1').classList.toggle('rotate1');
        burger.querySelector('.line3').classList.toggle('rotate2');
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


AOS.init({
    duration: 1000, // Animation duration in milliseconds
    offset: 200, // Offset from the top for triggering animation
    easing: 'ease-in-out', // Easing function for animations
    once: true // Whether animation should happen only once
});


function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate name (only allows letters and spaces)
    const namePattern = /^[A-Za-z\s]+$/;
    if (!name.match(namePattern)) {
        alert("Please enter a valid name (only letters and spaces).");
        return false;
    }

    // Validate email (basic email format check)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate message (make sure it's not empty)
    if (message.trim() === "") {
        alert("Please enter a message.");
        return false;
    }

    return true;  // If all validations pass
}


(function () {
    emailjs.init('gurangoateza@gmail.com'); // Initialize EmailJS with your User ID
})();

function sendEmail(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };

    // Send the email using EmailJS service
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            console.log('Email sent successfully:', response);
            alert("Your message has been sent successfully!");
            document.getElementById('contact-form').reset(); // Reset the form
        }, function(error) {
            console.log('Error sending email:', error);
            alert("There was an error sending your message. Please try again.");
        });
}