import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import '../Report/report.css'


export default function Report_input() {
    const [startDate, setStartDate] = useState(new Date());
  return (
    <div className='report container-fluid  '>
             
            <p> Date from: </p>
       <ReactDatePicker className='date1' selected={startDate} onChange={(date) => setStartDate(date)}/>
        
       <p> Date to:</p>
       <ReactDatePicker className='date2' selected={startDate} onChange={(date) => setStartDate(date)}/>
         
       <table className='Report_table'>
      <thead>
        <tr>
         
          <th>Invoice no</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Customer</th>
          
        </tr>
        </thead>
        <tbody>
        
            <tr>
            
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        
    
        </tbody>
      </table>
       <button className='button1'>Print</button>
       
       <button className='button2'>Clear</button>
       
    </div>
  )
}
