import React from 'react';
import Button from '../Button';
import { usePackagesPrices } from './hooks';

const PackagesPriceArticle = () => {
  const { showPackagesPrices, setShowPackagesPrices, fictivePackages } = usePackagesPrices();

  return (
    <div className={`mt-[100px] ${showPackagesPrices ? 'bg-white}' : 'bg-white'}`}>
      <div className='flex items-center justify-center'>
            <span onClick={() => setShowPackagesPrices(!showPackagesPrices)} className='text-5xl md:text-6xl font-bold z-50'>Packages</span>
            <img className='absolute h-[80px] w-[350px] mt-20' src='https://www.onlygfx.com/wp-content/uploads/2019/03/8-light-turquoise-watercolor-brush-stroke-2.png' alt="/" />
      </div>
      <div className='grid grid-cols-1 mt-[80px] md:grid-cols-2 lg:grid-cols-3 gap-3 px-4'>
      {fictivePackages.map((fictivePackages) => (
        <div key={fictivePackages.id} className='bg-white shadow-lg rounded-lg overflow-hidden'>
          <img
            src={fictivePackages.image}
            alt={fictivePackages.title}
            className='transition-all duration-500 hover:scale-110 w-full h-[170px] object-cover'
          />
          <div className='p-4'>
            <h2 className='text-2xl font-semibold text-gray-800'>{fictivePackages.title}</h2>
            <p className='text-gray-600 mt-2'>{fictivePackages.description}</p>
            <div className='mt-4'>
              <p className='text-3xl font-bold bg-black]'>${fictivePackages.price}</p>
              <p className='text-gray-500 text-sm'>per person</p>
            </div>
            <Button type="secondary" title="Book Now"></Button>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default PackagesPriceArticle;