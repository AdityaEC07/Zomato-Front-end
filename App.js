import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Zomato from './component/Zomato';
import Search from './component/Search';
import {Route,Routes} from 'react-router-dom'
import Login from './component/Login';
import Signup from './component/Signup';
import Investor from './component/Investor';
import AddRestorent from './component/AddRestorent';
import Card from './component/Card';
import City from './component/City';
import Bottom from './Bottom';
function App() {
  return (

  
     
     
    
     <div className="App">
   
     <div className='zomato'>
     <Navbar/> 
     <Routes>
      <Route path='/login' element={<Login/> }/>
      <Route path='/signup' element={<Signup/> }/>
      <Route path='/investor' element={<Investor/> }/>
      <Route path='/addrestorent' element={<AddRestorent/> }/>
      <Route path='/Card' element={<Card/> }/>
      <Route path='/City' element={<City/> }/>
      <Route path='/Bottom' element={<Bottom/> }/>

     </Routes>
     <Zomato/>
     
     <Search/>
     <Card/>
     <City/>
     <Bottom/>
    
     
      </div> 
    

     
    </div>
    
   
 
  );
}

export default App;
