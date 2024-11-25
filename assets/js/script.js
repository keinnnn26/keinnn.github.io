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


function downloadCV() {
    
    const cvPath = 'assets/documents/AtezaCV.pdf';
    

    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'AtezaCV.pdf'; 
    link.click();
}

AOS.init({
    duration: 1000, 
    offset: 200, 
    easing: 'ease-in-out',
    once: true 
});


function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;


    const namePattern = /^[A-Za-z\s]+$/;
    if (!name.match(namePattern)) {
        alert("Please enter a valid name (only letters and spaces).");
        return false;
    }


    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
    }


    if (message.trim() === "") {
        alert("Please enter a message.");
        return false;
    }

    return true;  
}


(function () {
    emailjs.init('gurangoateza@gmail.com'); 
})();

function sendEmail(event) {
    event.preventDefault(); 

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
            document.getElementById('contact-form').reset(); 
        }, function(error) {
            console.log('Error sending email:', error);
            alert("There was an error sending your message. Please try again.");
        });
}