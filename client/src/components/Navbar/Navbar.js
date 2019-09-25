import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
   const style = {
      'width': '100%',
      'height': '60px',
      'display': 'flex',
      'justifyContent': 'space-around',
      'alignItems': 'center',
      'borderBottom': '1px solid red',
      'backgroundColor': '#178245',
   }

   const font = {
      'color': 'white',
      'textDecoration': 'none'
   }

   return (  
      <nav style={style}>
         <Link style={font} to='/agencies'>Show Agencies</Link>
         <Link style={font} to='/agencies/add'>Add Agency</Link>
         <Link style={font} to='/agencies/edit'>Edit Agency</Link>
         <Link style={font} to='/travels'>Show Travels</Link>
         <Link style={font} to='/travels/add'>Add Travel</Link>
      </nav>
   );
}
 
export default Navbar;