import React from 'react'
import Topbar from '../../Components/Navbar';
import Forminput from './Forminput';
import '../Product/Product.css'
import SubmitButton from './SubmitButton';


function Product() {
  return (
    <div className='container-fluid'  >
        <Topbar/>
        <div className="centered-div">
        <form className='detail_product  col-lg-6 col-md-8 col-sm-12'>
            <span className='header'>Product</span>
          <Forminput P_detail='Product ID'/>
          <Forminput P_detail='Product Name'/>
          <Forminput P_detail="Price"/>
          <Forminput P_detail='Qty'/>
          <SubmitButton b_name='Save'/>
          <SubmitButton b_name='Upload'/>
          <SubmitButton b_name='Clear'/>

        </form>
        </div>
    </div>
  )
}
export default Product;