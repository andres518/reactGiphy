import React,{ useState,useEffect } from 'react'
import { ButtonUI } from '../ButtonUI/ButtonUI'
import imga from "../../../Images/logo12.png";
import { Logo } from '../Logo/Logo';


 export const Contador = () => {

        const [counter, setCounter] = useState(0)


        useEffect(() => {
          
          let imag=document.querySelector('.imgen')

          if(counter>=100){
            imag.classList.add('imgC')
            
          }else{
            imag.classList.remove('imgC')
          }

      },[counter])
     

  return (
      <div className="contador">
          <h3 className="Count">{counter}</h3>      
        <Logo log={imga} style="imgen"/>

        
        <div className="buttons">
        <ButtonUI style="btnMas btn" event={()=> setCounter(counter+10)} texts=" + mas" />
        <ButtonUI style="btnReset btn" event={()=> setCounter(0)} texts=" reset" />
        <ButtonUI style="btnMenos btn" event={()=> setCounter(counter-10)} texts="- menos" />
        
        

       </div>
      </div>
        
  )
}

