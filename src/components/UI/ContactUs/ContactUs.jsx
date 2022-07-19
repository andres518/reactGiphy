import EmailJS from '@emailjs/browser'
import React from 'react'
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI'
import { Input } from '../../UI/Input/Input'
// import Swal from "sweetalert2";

export const ContactUs = () => {

  const sendEmail = (event) => {

    let e;
    event.preventDefault();
    EmailJS.sendForm('service_z4vj053','template_jpc5bqj',event.target,'s03d9NuuOvQG74Qr_')
    .then(response => e = response.status,console.log(e))
    .catch(error => console.log(error));
  }

  return (
    <div className='section4'>
        <h1>Contactenos</h1>
        <br />
        <form className='formContactUs' onSubmit={sendEmail}>
          <h3 className='hForm'>Name: </h3>
          <Input tp="text" style="inputForm" textInput="Enter Your Name.." nameI="user_name" valid="true"></Input>
          <h3 className='hForm'>Email: </h3>
          <Input tp="text" style="inputForm" textInput="Enter Your Email.." nameI="user_email" valid="true"></Input>
          <br />
          <hr className='hr'/>
          <h3 className='hForm'>Message:</h3>
          <textarea name="user_message" className='textForm' cols="60" rows="10"></textarea>
          <ButtonUI style="btn" texts="Send"></ButtonUI>
        </form>
    </div>
  )
}
