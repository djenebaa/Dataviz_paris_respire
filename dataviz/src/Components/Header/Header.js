import React from "react";
import './Header.css';
import Clock from '../Clock/Clock';


 function Header(){


return (
  <> <section className='Header'>

  <div className='Titre'>
    <p> Paris<br/>
        Respire</p>
  </div>

  <div className = "Clock">
   <p> <Clock> </Clock> </p>
  </div>

  </section>
  </>
)
 }

 export default Header


