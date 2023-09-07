import React from "react";

// TODO Move into an folder, replace any type, pass it as props, export fictivePackages into hooks ts, defined IPackagePrice in types.ts, example given in Header
const PackagesPrice = (_package: any) => {
  const fictivePackages = [
    {
      title: "Thailand",
      description: "Cross the hot beaches with blue water of Thailand.",
      price: 799,
      image:
        "https://images.unsplash.com/photo-1519915247718-1703f9c6bb15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1934&q=80",
    },
    {
      title: "Sydney",
      description: "The land of snakes has never been more welcoming.",
      price: 1099,
      image:
        "https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3lkbmV5fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Rome",
      description: "The remains of an empire that still endures.",
      price: 355,
      image:
        "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Paris",
      description: "The city of lights, city of fashion or the city of love?",
      price: 600,
      image:
        "https://plus.unsplash.com/premium_photo-1661914178431-fc899737a386?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "New York",
      description: "Discover the iron that scrapes the clouds.",
      price: 1299,
      image:
        "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9ya3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Kenya",
      description: "If wild animals are your passion, this is your place.",
      price: 2050,
      image:
        "https://images.unsplash.com/photo-1577971132997-c10be9372519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ];
  return (
    <div className="mt-[100px]">
      <div className="flex items-center justify-center">
        <span className="z-50 text-5xl font-bold md:text-6xl">Packages</span>
        <img
          className="absolute h-[80px] w-[350px] mt-20"
          src="https://www.onlygfx.com/wp-content/uploads/2019/03/8-light-turquoise-watercolor-brush-stroke-2.png"
          alt="/"
        />
      </div>
      <div className="grid grid-cols-1 mt-[80px] md:grid-cols-2 lg:grid-cols-3 gap-3 px-4">
        {fictivePackages.map((packageItem, index) => (
          <div
            key={index}
            className="overflow-hidden bg-white rounded-lg shadow-lg"
          >
            <img
              src={packageItem.image}
              alt={packageItem.title}
              className="transition-all duration-500 hover:scale-110 w-full h-[170px] object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-gray-800">
                {packageItem.title}
              </h2>
              <p className="mt-2 text-gray-600">{packageItem.description}</p>
              <div className="mt-4">
                <p className="text-3xl font-bold bg-black]">
                  ${packageItem.price}
                </p>
                <p className="text-sm text-gray-500">per person</p>
              </div>
              <button className="mt-4 bg-black font-bold hover:bg-[#30D5C8] text-white py-2 px-4 rounded-full">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackagesPrice;
