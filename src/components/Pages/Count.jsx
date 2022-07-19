import React from 'react'
import { HeaderHome } from '../Layouts/HeaderHome/HeaderHome'
import {Contador} from '../UI/contador/Contador'

export const Count = () => {
  return (
      <div>
    <div className="menu">
    <HeaderHome/>
  </div>
     <Contador/>
  </div>
  )
}
