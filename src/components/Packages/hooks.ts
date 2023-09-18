import { useState } from "react";
import { IPackagesPrice } from "./types";

export const usePackagesPrices = () => { 

const [showPackagesPrices, setShowPackagesPrices] = useState(false);  

const fictivePackages: IPackagesPrice[] = [
  {
    id: 1,
    title: 'Thailand',
    description: 'Cross the hot beaches with blue water of Thailand.',
    price: 799,
    image: 'https://images.unsplash.com/photo-1519915247718-1703f9c6bb15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1934&q=80',
  },
  {
    id: 2,
    title: 'Sydney',
    description: 'The land of snakes has never been more welcoming.',
    price: 1099,
    image: 'https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3lkbmV5fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 3,
    title: 'Rome',
    description: 'The remains of an empire that still endures.',
    price: 355,
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 4,
    title: 'Paris',
    description: 'The city of lights, city of fashion or the city of love?',
    price: 600,
    image: 'https://plus.unsplash.com/premium_photo-1661914178431-fc899737a386?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 5,
    title: 'New York',
    description: 'Discover the iron that scrapes the clouds.',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9ya3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 6,
    title: 'Kenya',
    description: 'If wild animals are your passion, this is your place.',
    price: 2050,
    image: 'https://images.unsplash.com/photo-1577971132997-c10be9372519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
];

return {
    showPackagesPrices,
    setShowPackagesPrices,
    fictivePackages
  };
};