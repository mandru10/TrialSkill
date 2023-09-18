import React from 'react';
import { BsFillChatQuoteFill } from 'react-icons/bs'
import { useTestimonials } from './hooks';

 
const TestimonialsArticle = () => {
    const { showTestimonials, setShowTestimonials, testimonials } = useTestimonials();
    
  return (
    <div className={`py-16 px-4 ${showTestimonials ? 'bg-white' : 'bg-white'}`}>
        <div className='flex items-center justify-center'>
            <span className='text-5xl md:text-6xl font-bold mb-[30px]'>Testimonials</span>
            <BsFillChatQuoteFill 
            className='text-[#30D5C8] relative text-5xl md:text-6xl font-bold ml-5 mb-28'
            onClick={() => setShowTestimonials(!showTestimonials)}
            />
        </div>
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {testimonials.map((testimonials) => (
                <div
                key={testimonials.id}
                className='bg-[#eafef5] p-6 rounded-lg shadow-lg flex flex-col items-center transform hover:scale-y-105 transition-transform duration-300 ease-in-out'
                >
                <img
                    src={testimonials.image}
                    alt={testimonials.name}
                    className='w-[250px] h-[200x] rounded-full mb-4'
                />
                <div className='text-center'>
                    <p className='text-gray-800 font-semibold text-lg'>{testimonials.name}</p>
                    <p className='text-gray-600 text-sm'>{testimonials.position}</p>
                    <p className='text-gray-600 text-lg mt-4 font-semibold'>{testimonials.content}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
  )
}

export default TestimonialsArticle;