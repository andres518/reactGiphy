import React from 'react'

export const Input = ({tp,textInput,style,event}) => {
  return (
   <input type={tp} placeholder={textInput} className={style} onKeyDown={event}></input>
  )
}
