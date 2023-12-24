import React from 'react'
import { career } from './data/career'
import Render from './Render'

const Career = () => {
  return (
    <>
      <div className='section'>
        {
          career.map((element) => (
            <Render {...element} />
          ))
        }
      </div>
    </>
  )
}

export default Career