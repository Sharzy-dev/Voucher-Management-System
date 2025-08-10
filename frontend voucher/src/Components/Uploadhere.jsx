import React from 'react'
import Uploadherebox from './Uploadherebox'

function Uploadhere() {
  return (
     <div className=' flex flex-col bg-gray-400 min-h-screen'>

    <div className='max-w-md flex flex-col w-136.5 h-134.5 ml-69 mt-26.75  gap-5  p-10  bg-white  rounded-lg  '>
<h1 className='w-95.75 h-6 font-sans font-semibold text-2xl text-[rgba(26,26,26,1)]'>upload here </h1>
<p className='w-95.75 h-5.5 font-sans font-[400px] text-[16px] '>File supported: pdf, jpg, and png.</p>
<Uploadherebox/>






</div>

</div>
  )
}

export default Uploadhere