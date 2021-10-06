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
  const [user, setUser] = useState({
    uname:'', email:'',address:'',message:''
  });
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
    console.log(name, value, user)
    if(value.trim() !== (null || '')){
        if(name ==="uname"){
            setUser({...user,uname: value})
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

      setUser({...user,message: value})}
   }
    else { 
      alert("you need to enter a value in each field") }
  }

  return (
    <div>
    <form style={styles.formContainer} onSubmit={handleSubmit}>
      <label>Your Name</label>
      <input type="text"
      name='uname'
      value={user.uname} 
      onChange={handleChange}
      required
      defaultValue=''/>
      
      <label>Your Email</label>
      <input type="email" 
      value={user.email} 
      name="email" 
      onChange={handleChange}
      required
      defaultValue=''/>
      
      <label>Your Adress</label>
      <textarea type="address" 
      value={user.address} 
      name="address" 
      onChange={handleChange}
      required
      defaultValue=''/>
      
      <label>Message</label>
      <textarea name="message" 
      value={user.message} 
      onChange={handleChange}
      required
      defaultValue='' />
      
      <input type="submit" value="Save" />
    </form>
 
    </div>
     
  );
};

export default ContactForm