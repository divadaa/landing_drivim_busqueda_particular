import React, { useState } from "react";
import "./index.css";
import emailjs from '@emailjs/browser'

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event) => {
      event.preventDefault();
      emailjs.sendForm('service_1jeksid','template_6070n9t',event.target,'Os969OmHcyezVQnJx')
      .then(response => console.log(response))
      .catch(error => console.log(error))

    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

//   const sendEmail = (event) => {
//     event.preventDefault();

//     emailjs.sendForm('service_1jeksid','template_6070n9t',event.target,'Os969OmHcyezVQnJx')
//     .then(response => console.log(response))
//     .catch(error => console.log(error))
//   }

  if (submitted) {
    return (
      <>
        <h2>Gracias</h2>
        <div>En breve contactaremos contigo</div>
      </>
    );
  }

//   <form className='form-mail' onSubmit={sendEmail}></form>

  return (
    <form 
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
        <div className="body"> 
      <div> ✏️ 

        <input type="text" class="feedback-input" placeholder="Nombre" name="name" required />
      </div>
    
      <div> 📬 <br></br>

        <input type="email" class="feedback-input" placeholder="Email" name="email" required />
      </div>
      <div> 📞 

        <input type="teléfono" class="feedback-input" placeholder="Teléfono" name="teléfono" required />
      </div>
      <div> ­­

        <textarea class="feedback-input" placeholder="Cuéntanos qué necesitas" name="message" required />
      </div>
      <div>
        <button type="submit"> 🚀 Enviar </button>
      </div>
      </div>
    </form>
  );



};

export default ContactForm;


