import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#FFCB74]'>REACT.</h1>
            <p className='py-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <div className='flex md:w-[75%] justify-between my-6'>
                <FaDribbbleSquare size={30}/>
                <FaFacebookSquare size={30}/>
                <FaGithubSquare size={30}/>
                <FaInstagram size={30}/>
                <FaTwitterSquare size={30}/>
            </div>
        </div>
        <div className='lg:col-span-2 mt-6 flex justify-between'>
            <div>
                <h6 className='font-medium text-gray-400'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Analytics</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Shop</h6>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Analytics</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Company</h6>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Analytics</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Documentation</h6>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Analytics</li>
                </ul>
            </div>
        </div>
        <p className='text-center justify-center ml-4 text-gray-100'>Copyright  ©, Made by edeh johnpaul</p>

    </div>
  )
}

export default Footer