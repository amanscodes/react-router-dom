import React from 'react'

function Render({img,title,link}) {
  return (
    <>
        <div className='box'>

            <div>
              <img src={img} alt={title} className='img'/>
            </div>

            <div className='head'>
              <a href={link} target='_blank' rel="noreferrer" className='headStyle'>{title}</a>
            </div>

        </div>
    </>
  )
}

export default Render