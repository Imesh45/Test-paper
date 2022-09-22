
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Topbar from './Components/Navbar';
import Product from './Pages/Product/Product';
import Invoice from './Pages/Invoice/Invoice';
import Report from './Pages/Report/Report';


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path ='/'element={<Invoice/>}/>
        <Route path ='/Product'element={<Product/>}/>
        <Route path ='/Report'element={<Report/>}/>
 
      </Routes>
      </BrowserRouter>
  );
}

export default App;
