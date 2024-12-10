// Contact Form Validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  // Basic Validation
  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
    return;
  }

  // Simulate form submission
  alert("Thank you for your message! We'll get back to you soon.");
  document.getElementById('contact-form').reset();
});
