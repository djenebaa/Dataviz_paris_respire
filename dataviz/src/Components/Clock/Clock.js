
import React, { useState, useEffect } from 'react';
import './Clock.css';

const formatDate = () =>{
    const months = {
      0: 'Janvier',
      1: 'Fevrier',
      2: 'Mars',
      3: 'Avril',
      4: 'Mai',
      5: 'Juin',
      6: 'Juillet',
      7: 'Aout',
      8: 'Septembre',
      9: 'Octobre',
      10: 'Novembre',
      11: 'Decembre',
    }
    const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
    const d = new Date ()
    const year = d.getFullYear()
    const date = d.getDate()
    const monthIndex = d.getMonth()
    const monthName = months[monthIndex]
    const dayName = days[d.getDay()] // Thu
    const formatted = `${dayName}, ${date} ${monthName} ${year}`
    return formatted.toString()
  }

const Clock = () => {
    // const jour =  new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time);
    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time) ;
    }

    useEffect(()=> {
        setInterval(updateTime, 1000);
    })
    formatDate()
    // console.log(time);
    
    return (
        <div class="Heure"> 
            
            <h1>{formatDate()}</h1>
            <h2>Il est {currentTime}</h2>

        </div>
    )
}

export default Clock;