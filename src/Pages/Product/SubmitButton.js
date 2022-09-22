import React, { useState } from 'react'
import '../Product/Product.css'

 function SubmitButton(props) {
   
  //   const [isActive, setIsActive] = useState(false);

  // const handleClick = () => {
    
  //   setIsActive(!current);
  // }
  return (
    
    <>
    
      <button className='Button'>{props.b_name}</button>
    </>
    
  )
  }
  export default SubmitButton;