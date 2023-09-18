import React, { useEffect, useCallback, useState, FC } from "react";
import { BsCaretLeft, BsCaretRight } from 'react-icons/bs'; 
import { ISlide } from "./types";

const Slide: FC<ISlide> = ({ url, title }) => {

    const slides = [
  {
    url: "https://images.unsplash.com/photo-1523478482487-1eed2b3d9939?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Egypt"
  },
  {
    url: "https://images.unsplash.com/photo-1502352483654-33ffd4275714?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Jerusalem"
  },
  {
    url: "https://images.unsplash.com/photo-1456425712190-0dd8c2b00156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Grand Canyon"
  },
  {
    url: "https://images.unsplash.com/photo-1526251641086-8047e534f6bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Machu Picchu"
  },
  {
    url: "https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1868&q=80",
    title: "Laponia"
  },
  {
    url: "https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    title: "Tokyo"
  },
  {
    url: "https://images.unsplash.com/photo-1575231902142-29aaec0bd547?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    title: "Bora Bora"
  }
];

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = useCallback(() => {
    const firstSlide = currentIndex === 0;
    const newIndex = firstSlide ? slides?.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

    const nextSlide = useCallback(() => {
    const lastSlide = currentIndex === slides.length - 1;
    const newIndex = lastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const goToSlide = useCallback((i: React.SetStateAction<number>) => {
    setCurrentIndex(i);
  }, [setCurrentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2500);

    return () => {
      clearInterval(interval);
    };
  }, [nextSlide]);

    return(
        <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative'>
            <div className='flex items-center justify-center '>
                <h1 className='text-5xl md:text-6xl font-bold mb-20 justify-center z-50'>Cooming Soon</h1>
                <img className='absolute h-[80px] w-[450px]' src='https://www.onlygfx.com/wp-content/uploads/2019/03/8-light-turquoise-watercolor-brush-stroke-2.png' alt="/"/>
            </div>
            <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-[550px] rounded-2xl bg-center bg-cover items-center duration-1000'>
                <span className='w-full h-full flex items-center justify-center font-black text-5xl text-white'>{slides[currentIndex].title}</span>
            </div>   
        <div className='absolute top-[61.5%] -translate-x-0 translate-y-[-50%] left-7 text-2xl rounded-full p-2 text-white cursor-pointer'>
            <BsCaretLeft onClick={prevSlide} size={40}/> 
        </div>
        <div className='absolute top-[61.5%] -translate-x-0 translate-y-[-50%] right-7 text-2xl rounded-full p-2 text-white cursor-pointer'>
            <BsCaretRight onClick={nextSlide} size={40}/> 
        </div>
        <div className='flex -mt-10 justify-center gap-3'>
            {slides.map((slide, i) => (              
                <div key={i} onClick={ () => goToSlide(i)} className={`text-white text-2xl cursor-pointer transition-all w-3 h-3 bg-white rounded-full ${currentIndex === i ? 'p-2' : 'bg-opacity-50'}`}/>
            ))}
        </div>
        </div>
    )
}

export default Slide