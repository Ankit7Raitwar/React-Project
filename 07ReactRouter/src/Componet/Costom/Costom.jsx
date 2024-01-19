import React from 'react'
import { useParams } from 'react-router-dom'
// useParams : is use to accese dynamic data. matlab ki url me pass data ko acces karan

function Costom() {
  // it is hook like and name is same pass data "userid" 
  const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl p-4' >
        User : {userid}
    </div>
  )
}

export default Costom
