const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_4pwvlmz';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar Mensaje';
      alert('Your message has been sent successfully!');
            document.getElementById("name").value = "";
            document.getElementById("mail").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("message").value = "";
            document.getElementById("acepto").checked = false;
    }, (err) => {
      btn.value = 'Enviar Mensaje';
      alert(JSON.stringify(err));
    });
});