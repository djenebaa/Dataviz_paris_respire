import React, { useEffect } from "react";
import './Header.css';
import Clock from '../Clock/Clock';


 function Header(){


return (
  <> <section className='Header'>

  <div className='Titre'>
    <p> Paris<br/>
        Respire</p>

        <img src="https://i.postimg.cc/8zBgBpYm/Logo.png" alt="Logo" className='logo' /> 


  </div>

  <div className = "Clock">
   <p> <Clock> </Clock> </p>
  </div>

  </section>
  </>
)
 }

 export default Header