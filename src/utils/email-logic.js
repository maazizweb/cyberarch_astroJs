  // Step 1: Add event listener to the form's submit event
  document.getElementById('contactForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // ✅ Prevent the default form submission (no page reload)

    // Step 2: Get reference to the form and extract the data
    const form = event.target; // ✅ 'event.target' is the form element
     const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries());

    // Debug log (optional)
    console.log('Data to send to EmailJS:', formObject);

    // Step 4: Initialize EmailJS with your **Public Key**
     emailjs.init('GC651imGW-EZCLx62'); // ✅ Your public key

    try {
      await emailjs.send('service_3emapbm', 'template_wyg4bop', formObject);
      console.log('✅ Email sent!');
    } catch (err) {
      console.error('❌ Error:', err);
    }
  });