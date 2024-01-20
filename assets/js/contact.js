/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'); 
const contactMessage = document.getElementById('contact-message'); 

const sendEmail = (e) => {
  e.preventDefault() 

  // serviceID - templateID - #form - publicKey
  emailjs.sendForm('service_trxiy7x', 'template_a21e6hm', '#contact-form', 'fhi4kt8ov3qAs7C_4') 
    .then(() => {
    // Show sent message 
    contactMessage.textContent = 'Message sent successfully ✅'
    // Remove message after five seconds
    setTimeout(() => {
      contactMessage.textContent = ''
    }, 3000) 
     // Clear input fields
     contactForm.reset()
  }, 
   // Show error message
  () => {
    contactMessage.textContent = 'Message not sent (service error) ❌'
  })
}


contactForm.addEventListener('submit', sendEmail); 