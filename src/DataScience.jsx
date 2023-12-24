import React from 'react'
import { datascience } from './data/datascience'
import Render from './Render'

const DataScience = () => {
  return (
    <>
      <div className='section'>
      {
        datascience.map((element) => (
            <Render {...element}/>
        ))
      }
      </div>
    </>
  )
}

export default DataScience