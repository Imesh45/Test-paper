import React, { useState } from 'react'
import {nanoid}  from 'nanoid'
import data from './data.json'
import '../Invoice/Invoice.css'
import 'react-datepicker/dist/react-datepicker.css';
import ReactDatePicker from 'react-datepicker';


export default function In_input() {
  const [startDate, setStartDate] = useState(new Date());
    const [contacts,setContacts]=useState(data);
     
    
    const [addFormdData,setAddFormData]=useState({
      item_id:'',
      description:'',
      qty:'',
      price:'',

    });
    
     const handleAddFormChange=(event)=>{
       event.preventDefault();

       const fieldName = event.target.getAttribute("name");
       const fieldValue = event.target.value;

       const newFormData ={ ...addFormdData};
       newFormData[fieldName] = fieldValue;

       setAddFormData(newFormData);
     };

       const handleAddFormSubmit =(event) =>{
        event.preventDefault();

        
        const newContact = {
          item_id:addFormdData.item_id,
          description:addFormdData.description,
          qty:addFormdData.qty,
          price:addFormdData.price,
         };
         const newContacts =[...contacts,newContact]
         setContacts(newContacts);
       };
       
      
     
     
  return (
    <div className='invoice_ container-fluid '>
       
            <div>
            <p> Date: </p>
       <ReactDatePicker className='date' selected={startDate} onChange={(date) => setStartDate(date)}/>
            </div>
    
            <div  className='formdetail'>
       <form onSubmit={handleAddFormSubmit} >
        
          <input type='text' className='I_input' name='item_id'placeholder='Enter Item ID'onChange={handleAddFormChange}/>
          <input type='text' className='I_input' name='description' placeholder='Enter Description'onChange={handleAddFormChange}/>
          <input type='text' className='I_input' name='qty' placeholder='Enter Qty' onChange={handleAddFormChange}/>
          <input type='text' className='I_input' name='price' placeholder='Enter Price' onChange={handleAddFormChange}/>
          <button type='submit' className='submitbutton'>Process</button>
         </form>
         </div> 

         <div  className='table_detail'>
      <table>
      <thead>
        <tr>
         
          <th>Item id</th>
          <th>Description</th>
          <th>Qty</th>
          <th>Price</th>
          
        </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr>
            
            <td>{contact.item_id}</td>
            <td>{contact.description}</td>
            <td>{contact.qty}</td>
            <td>{contact.price}</td>
          </tr>
          ))}
       
        </tbody>
      </table>
      </div>
    </div>
  )
}
