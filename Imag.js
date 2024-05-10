// import React from 'react'
// import './App.css';

// const Imag = () => { 
  
//   return (
    
//     <div >

      
// <img    style={{width: "99%", height:"400px"}} src={"https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"} alt=""/>


//     </div>
//   )
// }

// export default Imag     
import React from 'react'
import './Navbar.css';

const  Imag = () => {
  
  return (
    
    <div     style={{ 
    
      backgroundImage: `url("https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png ")`,
      width:"99%", height:"400px"
    }} >
      
 <div className='main-nav' >
  <ul>
    <li> Home </li>
    <li> Add Restorant </li>
    <li> Sign up </li>
    <li>  Login </li>
    </ul> 

 </div>
    </div>
  )
}

export default Imag