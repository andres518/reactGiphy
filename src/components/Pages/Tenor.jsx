import React from 'react'
import { HeaderHome } from '../Layouts/HeaderHome/HeaderHome'
import { APITenor } from '../UI/ApiTenor/ApiTenor'

export const Tenor = () => {
  return (
    <div>
         <div className="menu">
            <HeaderHome/>
        </div>
        <APITenor/>
    </div>
  )
}




