import React, { useRef } from 'react';
import emailjs from 'emailjs';
const styles = {
  formContainer:{
    display: "flex",
    flexDirection:"column",
    alignItems:"center",
    maxHeight: "2ev",
    maxWidth:"96%"
  }}
export const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} style={styles.formContainer}>
      <label>Your Name</label>
      <input type="text" name="user_name" />
      <label>Your Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Email