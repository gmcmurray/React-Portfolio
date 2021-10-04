import React from 'react';
const styles = {
    sectionStyles: {
      display: "grid", 
      maxWidth:"80%",
      placeItems:"center"
    },
    sectionContainer:{
      border: "solid 5px black",
      borderRadius: " 10px",
      justifySelf : "center"
    },
    section:{
      border: "solid 5px green",
      borderRadius: " 5px",
      margin:"5px",
      padding:"10px"
    }
  };
 
function Home() {
    return (
<div   style={styles.sectionStyles}  className='resume-container'>
  <h2> Home </h2>
  <div>
      <p> Checkout my pages. </p>
       
  </div>
    
</div>
    )
}

export default Home;
