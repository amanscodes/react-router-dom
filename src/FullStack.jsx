import React from 'react'
import { fullstack } from './data/fullstack'
import Render from './Render'

const FullStack = () => {
  return (
    <>
      <div className='section'>
      {
        fullstack.map((element) => (
            <Render {...element}/>
        ))
      }
      </div>
    </>
  )
}

export default FullStack