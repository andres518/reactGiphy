import React from 'react'

export const CardsTenor = ({arr}) => {
  return (
    <>
        {
          arr.map((item) =>(
            <div id='cardTenor'>
              <img src={item.media[0].mediumgif.url} className="imgCardTenor"/>
            </div>
          ))
        }
    </>
  )
}
