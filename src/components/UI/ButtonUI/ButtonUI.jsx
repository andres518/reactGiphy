import React from 'react'

export const ButtonUI = ({style,event,texts}) => {
  return (
    <button onClick={event} className={style}>{texts}</button>
  )
}
