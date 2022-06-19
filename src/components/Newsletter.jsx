import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-2xl text-2xl font-bold ml-4 py-2'> Want tips & tickets to</h1>
                <p className='ml-4'>Sign up to our newsletter and stay up to date</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input type='email' placeholder='Enter Email' className='p-3 flex w-full rounded-md  text-black'/>
                    <button className='bg-[black] text-[#FFCB74] w-[200px] rounded-md font-medium my-6  mx-auto py-3'>Notify me</button>
                </div>
                <p className='ml-4'>It is a long established fact that a reader will be that will be able to render.read our <span className='text-[#FFCB74]'>privacy policy</span></p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter