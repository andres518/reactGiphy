import React, { useEffect,useState } from 'react'


export const DarkMode = () => {
    let body=document.body
        const [modeDark,setModeDark]= useState(false);
   
    const handleOn=()=>{
      setModeDark(!modeDark);

    };

    useEffect(() => {
        if(modeDark){
            body.classList.add('color');
           
        }else{
            body.classList.remove('color');
          

        }
    },[modeDark]);

    
  return (
    <div>
        <input onClick={handleOn} type="checkbox" id="switch1"></input>
        <label for="switch1" class="lbl1"></label>
    </div>
  )
}
