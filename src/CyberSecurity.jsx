import React from 'react'
import { cybers } from './data/cybers'
import Render from './Render'

const CyberSecurity = () => {
  return (
    <>
      <div className='section'>
      {
        cybers.map((element) => (
            <Render {...element}/>
        ))
      }
      </div>
    </>
  )
}

export default CyberSecurity