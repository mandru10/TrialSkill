import React from "react";

function AboutArticle() {
  return (
    <div className="max-w-[1400px] mt-[50px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          // styles that are repeatable, you can move it in index.css (important global css that is used everywhere) and create a custom css name and apply tailwind styling
          className="row-span-3 article-image"
          src="https://images.unsplash.com/photo-1517627043994-b991abb62fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2N1YmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt="/"
        />
        <img
          className="row-span-2 article-image"
          src="https://images.unsplash.com/photo-1535191059345-c16453b851b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80"
          alt="/"
        />
        <img
          className="row-span-2 article-image"
          src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="/"
        />
        <img
          className="row-span-3 article-image"
          src="https://images.unsplash.com/photo-1682685797769-481b48222adf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="/"
        />
        <img
          className="row-span-2 article-image"
          src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1368&q=80"
          alt="/"
        />
      </div>
      <div className="flex flex-col justify-center h-full pl-7">
        {/* h1, h2, h3, p - can be exportet as Typography component or something similar and there you can set if is title (h1), paragraph the default value for (p), and for others if you are using */}
        <h3 className="text-5xl font-bold md:text-6xl">
          Plan Your <span className="text-[#30D5C8]">Next Trip</span>
        </h3>
        <p className="py-6 text-2xl">
          Save 20% or more on hundreds of hotels when you book by Oct 24.
        </p>
        <p className="pb-6">
          Are you looking for a package at an unbelievably low price? Since
          2021, Travalindo has helped more than 800 travelers save millions of
          dollars on discount cruises! Choosing the right vacation package has
          never been easier or more affordable.
        </p>
        <div>
          {/* This would be recomended to have it extracted into a Button Component, update the styling only for 2-3 types, example for primary, secondary */}
          <button className="px-4 py-1 mr-4 font-bold border-2 border-black border-solid rounded-full hover:shadow-xl">
            Learn More
          </button>
          <button className="bg-[black] text-white border-black border-solid border-2 py-1 hover:shadow-xl px-4 font-bold rounded-full">
            Book Your Trip
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutArticle;
