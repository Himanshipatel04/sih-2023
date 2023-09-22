import React from 'react'
import i1 from '../assets/learnify-low-resolution-logo-black-on-transparent-background.png'
import {Search} from 'lucide-react'


const Header = () => {
  return (
    <div className=' h-24 w-full bg-[#17798a] flex justify-between items-center p-8'>
        <img className=' h-20' src={i1} alt="" />
        <ul className='flex justify-center items-center gap-8 uppercase cursor-pointer font-semibold'>
            <li className=' hover:text-white duration-150'>Home</li>
            <li className=' hover:text-white duration-150'>News</li>
            <li className=' hover:text-white duration-150'>Theme</li>
            <li className=' hover:text-white duration-150'>Contact Us</li>
            <li className=' hover:text-white duration-150'>About Us</li>
            <li className=' flex gap-2 hover:text-white'><Search/><p>search</p></li>
        </ul>
        <button className=' h-12 w-40 rounded-lg bg-white hover:bg-green-400 duration-200 uppercase font-semibold'>Login / Register</button>
    </div>
  )
}

export default Header