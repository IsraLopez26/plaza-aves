import React from 'react'
import emailjs from 'emailjs-com'

import { FormContent, Form, FormH1, FormLabel, FormInput, FormButton, FormInputTextArea } from './FormElements'


const EmailForm = () => {

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_6ks44uh', 'template_3v5lrvl', e.target, 'user_JzuiIzrmFxWbNKkV5qrtH')
      .then((result) => {
        console.log(result.text);
        alert('Email enviado correctamente!')
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()

  }

  return (
    <>
      <FormContent>
        <Form onSubmit={sendEmail}>
          <FormH1>Mándanos un email!</FormH1>
          <FormLabel htmlFor='email'>Email:</FormLabel>
          <FormInput id='email' type='email' required maxLength='40' placeholder='ejemplo@ejemplo.com' name='name' />
          <FormLabel htmlFor='subject'>Asunto:</FormLabel>
          <FormInput id='subject' type='text' required maxLength='50' placeholder='Asunto de tu mensaje...' name='subject' />
          <FormLabel htmlFor='msj'>Mensaje:</FormLabel>
          <FormInputTextArea id='msj' type='text' required rows='5' maxLength='400' name='mensaje' />
          <FormButton type='submit'>Enviar</FormButton>
        </Form>
      </FormContent>
    </>
  )
}

export default EmailForm
