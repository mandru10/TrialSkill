import React from "react";

function Hero(){
    return(
        <div className='w-full h-screen'>
            <img className='top-0 left-0 w-full h-screen object-cover' src="https://images.unsplash.com/photo-1541417904950-b855846fe074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2041&q=80" alt="/"></img>
            <div className='bg-black/20 absolute top-0 left-0 w-full h-screen'/>
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white '>
                <div className='md:left-[10%] max-w-[1100px] m--auto absolute p-4'>
                    <p>All Inclusive</p>
                    <h1 className='dont-bold text-5xl md:text-7xl drop-shadow-2xl'>Scheduled Trips & Gateways</h1>
                    <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>We believe adventure takes all the fears away, brings down the walls that limit 
                    your moves; let your dreams go bigger. Live now, do not regret. Adventure yourself into a new world, into the adventure travel world!
                    </p>
                    <button className='bg-transparent hover:opacity-60 border-solid border-2 py-2 px-4 font-bold rounded-full text-white'>Reserve Now</button>
                </div>
            </div>
        </div>
    )
}

export default Hero;