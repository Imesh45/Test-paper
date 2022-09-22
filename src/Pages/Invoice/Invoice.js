import React, { useState } from 'react'
import Topbar from '../../Components/Navbar';
import 'react-datepicker/dist/react-datepicker.css';
import '../Invoice/Invoice.css'
import In_input from './In_input';



function Invoice() {


 
  return (
    <div>
     
      
      <Topbar/>  
      <In_input/>
      </div>
      
  )
}
export default Invoice;