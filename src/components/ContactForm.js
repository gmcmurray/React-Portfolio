import React, {   useState }  from 'react';
import { validEmail, minMaxLength } from '../utils/helpers';
 
const styles = {
  formContainer:{
    display: "flex",
    flexDirection:"column",
    alignItems:"center",
    maxHeight: "2ev",
    maxWidth:"96%"
  }}



export const ContactForm = () => {
  const [user, setUser] = useState({});
  // const [formErrors, setFormErrors] = useState({});
 const handleSubmit = (e)=>{
   e.preventDefault();
   console.log('form submitted')
   return (alert('your message has been submitted'))
  }

  function handleChange(e){
    e.preventDefault();
    e.stopPropagation();
    const {name, value} = e.target;
    console.log(name,value)
    if(minMaxLength(value,1,250)){
        if(name ==="name"){
            setUser({...user,name: value})
        }
        if(name ==="email"){
          if(validEmail(value)){
          setUser({...user,email: value})}
          else{ alert("your email format is incorrect")}
      }
      if(name ==="address"){
        setUser({...user,address: value})
    }
    if(name ==="message"){
      if(name){
      setUser({...user,message: value})}
    } }
    else{ alert("you need to enter a value in each field") }
  }

  return (
    <div>
    <form style={styles.formContainer} onSubmit={handleSubmit}>
      <label>Your Name</label>
      <input type="text" 
      value={user.name} 
      onChange={handleChange}
      required/>
      
      <label>Your Email</label>
      <input type="email" 
      value={user.email} 
      name="user_email" 
      onChange={handleChange}
      required/>
      
      <label>Your Adress</label>
      <textarea type="address" 
      value={user.address} 
      name="user_address" 
      onChange={handleChange}
      required/>
      
      <label>Message</label>
      <textarea name="message" 
      value={user.message} 
      onChange={handleChange}
      required />
      
      <input type="submit" value="Save" />
    </form>
 
    </div>
     
  );
};

export default ContactForm