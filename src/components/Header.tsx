import React, { useState } from "react";
import {HiMenuAlt3} from 'react-icons/hi'
import {SiPlanetscale} from 'react-icons/si'

function Header(){
    const [header, setHeader] = useState(false)

    return(
        <div className='absolute w-full flex justify-between p-4 items-center'>
            <div className='w-full flex justify-start items-center p-4 gap-1'>
                <SiPlanetscale className='z-20 text-white' size={25} />
                <h1 className='text-white font-bold text-2xl z-20 cursor-default'>Travelindo</h1>
            </div>
            <HiMenuAlt3 onClick={ () => setHeader(!header)} className='z-20 text-white cursor-pointer' size={25} />
            <div className={
                header 
                ? 'ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10' 
                : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'
                }
            >
                <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
                    <li className='font-bold text-3xl p-8 cursor-pointer'>Home</li>
                    <li className='font-bold text-3xl p-8 cursor-pointer'>About</li>
                    <li className='font-bold text-3xl p-8 cursor-pointer'>Packages</li>
                    <li className='font-bold text-3xl p-8 cursor-pointer'>Cooming Soon</li>
                    <li className='font-bold text-3xl p-8 cursor-pointer'>Testimonials</li>
                </ul>
            </div>    
        </div>
    );
};

export default Header;