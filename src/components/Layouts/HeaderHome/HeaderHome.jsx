import React from 'react'
import {Logo} from '../../UI/Logo/Logo'
import {NavHome} from '../../UI/NavHome/NavHome'
import {DarkMode} from '../../UI/DarkMode/DarkMode';
import logoTipo from '../../../Images/logo3.png';

export const HeaderHome = () => {
  return (
      <div className="baner">
         <Logo log={logoTipo} style="logoImg"/>
         <h1 className="react">React Activity</h1>
         <NavHome/>
         <DarkMode/>  
      </div>
       
  )
}
