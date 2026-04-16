import React from 'react'

const CountCard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 my-6
        
    '>

      <div className='p-8 flex flex-col items-center text-center gap-6 bg-white rounded-2xl shadow-2xl hover:-translate-y-5 hover:scale-105 duration-200 ease-out cursor-pointer'>
        <h2 className='text-3xl font-semibold'>10</h2>
        <p className='text-lg text-[#64748B]'>Total Friends</p>
      </div>

      <div className='p-8 flex flex-col items-center text-center gap-6 bg-white rounded-2xl shadow-2xl hover:-translate-y-5 hover:scale-105 duration-200 ease-out cursor-pointer'>
        <h2 className='text-3xl font-semibold'>3</h2>
        <p className='text-lg text-[#64748B]'>On Track</p>
      </div>

      <div className='p-8 flex flex-col items-center text-center gap-6 bg-white rounded-2xl shadow-2xl hover:-translate-y-5 hover:scale-105 duration-200 ease-out cursor-pointer'>
        <h2 className='text-3xl font-semibold'>6</h2>
        <p className='text-lg text-[#64748B]'>Need Attention</p>
      </div>

      <div className='p-8 flex flex-col items-center text-center gap-6 bg-white rounded-2xl shadow-2xl hover:-translate-y-5 hover:scale-105 duration-200 ease-out cursor-pointer'>
        <h2 className='text-3xl font-semibold'>12</h2>
        <p className='text-lg text-[#64748B]'>Interactions This Month</p>
      </div>
    </div>
  )
}

export default CountCard
