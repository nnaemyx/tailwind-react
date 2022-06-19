import React from 'react'
import Single from '../assests/single.png'
import Double from '../assests/double.png'
import Triple from '../assests/triple.png'
const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img src={Single} alt="/" className='w-20  mx-auto mt-[-3rem] bg-white' />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$140</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 Gb Storage</p>
                    <p className='py-2 border-b mx-8'>I Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2GB</p>
                </div>
                <button className='bg-[#FFCB74] w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Start</button>
            </div>
            <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4  md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                <img src={Double} alt="/" className='w-20 bg-transparent mx-auto mt-[-3rem] bg-white' />
                <h2 className='text-2xl font-bold text-center py-8'>Double User</h2>
                <p className='text-center text-4xl font-bold'>$140</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 Gb Storage</p>
                    <p className='py-2 border-b mx-8'>I Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2GB</p>
                </div>
                <button className='bg-[black] w-[200px]  text-[#FFCB74] rounded-md font-medium my-6 mx-auto py-3'>Start</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img src={Triple} alt="/" className='w-20  mx-auto mt-[-3rem] bg-white' />
                <h2 className='text-2xl font-bold text-center py-8'>Triple User</h2>
                <p className='text-center text-4xl font-bold'>$140</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 Gb Storage</p>
                    <p className='py-2 border-b mx-8'>I Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2GB</p>
                </div>
                <button className='bg-[#FFCB74] w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Start</button>
            </div>
        </div>
    </div>
  )
}

export default Cards