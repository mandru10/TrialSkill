import React from 'react';
import { BsFillChatQuoteFill } from 'react-icons/bs'
 
function TestimonialsArticle(){
    const testimonials = [
    {
      id: 1,
      name: 'Amelia Tohn',
      position: 'Ingineer',
      content:
        'We enjoyed our Jerusalem trip immensely. The hotels were wonderful…we really enjoyed Meir, our tour guide. He was so knowledgeable. His experience as a soldier and commander in the ‘67 war and the Western Wall made us feel like we were seeing the country through the eyes of a person that was instrumental in its formation and growth. The staff at Berjaya Resort is way too polite and very friendly. They also offered great room service.',
      image: 'https://img.freepik.com/free-photo/portrait-dark-skinned-cheerful-woman-with-curly-hair-touches-chin-gently-laughs-happily-enjoys-day-off-feels-happy-enthusiastic-hears-something-positive-wears-casual-blue-turtleneck_273609-43443.jpg',
    },
    {
      id: 2,
      name: 'John Smith',
      position: 'Dentist',
      content:
        'I wanted to send a quick note thanking you and your staff for the extra help I needed prior to the Morocco trip. I also want to mention what a great job your on site team (Sharon) did throughout the trip. Overall we would like to say that you arranged for a memorable holiday for us. Further to the charges of the trip in which you arranged for us was also very cheap and reasonable.',
      image: 'https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      position: 'Banker',
      content:
        'I would like to thank Harsha & Paresh for designing such a wonderful trip to Coorg. It was a great and well-arranged trip. I shall surely consider my future trips through Travelguru. The best part of the tour was stay at Club Mahindra, Madikeri. This resort is definitely far better and beautiful than other stay arrangements at Coorg. The concept of rainforest, excellent restaurants and large variety of dishes.',
      image: 'https://img.freepik.com/premium-photo/young-caucasian-man-isolated-blue-background-who-feels-confident-crossing-arms-with-determination_1187-197159.jpg',
    },
  ];

  return (
    <div className='py-16 px-4'>
        <div className='flex items-center justify-center'>
            <span className='text-5xl md:text-6xl font-bold mb-[30px]'>Testimonials</span>
            <BsFillChatQuoteFill className='text-[#30D5C8] relative text-5xl md:text-6xl font-bold ml-5 mb-28'/>
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