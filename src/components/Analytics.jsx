import React from 'react'
import Laptop from '../assests/laptop.png'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[300px] mx-auto my-4' src={Laptop} alt="laptop" />
            <div className='flex flex-col justify-center' >
                <p className='text-[#FFCB74]  font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p>It is a long established fact that 
                    a reader will be distracted by the 
                    readable content of a page when looking at its layout. 
                    The point of using Lorem Ipsum is that it has a 
                    more-or-less normal distribution of letters, as opposed 
                    to using 'Content here, content here'.
                </p>
                <button className='bg-[black] text-[#FFCB74] w-[200px] rounded-md font-medium my-6 md:mx-0 mx-auto py-3'>Get Started</button>

            </div>
        </div>
    </div>
  )
}

export default Analytics