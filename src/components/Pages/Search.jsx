import React from 'react'
import { HeaderHome } from '../Layouts/HeaderHome/HeaderHome'
import { Searche } from '../UI/Searche/Searche'


export const Search = () => {
  return (
    <div>
        <div className="menu">
            <HeaderHome/>
        </div>
        
        <Searche/>
    </div>
  )
}
