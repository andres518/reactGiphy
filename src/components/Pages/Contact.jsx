import React from 'react'
import { HeaderHome } from '../Layouts/HeaderHome/HeaderHome'
import { ContactUs } from '../UI/ContactUs/ContactUs'


export const Contact = () => {
  return (
    <div>
         <div className="menu">
            <HeaderHome/>
        </div>
        <ContactUs/>
    </div>
  )
}
