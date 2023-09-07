const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 object-cover w-full h-screen"
        src="https://images.unsplash.com/photo-1541417904950-b855846fe074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2041&q=80"
        alt="/"
      />
      <div className="absolute top-0 left-0 w-full h-screen bg-black/20" />
      <div className="absolute top-0 flex flex-col justify-center w-full h-full text-white ">
        <div className="md:left-[10%] max-w-[1100px] m--auto absolute p-4">
          <p>All Inclusive</p>
          <h1 className="text-5xl dont-bold md:text-7xl drop-shadow-2xl">
            Scheduled Trips & Gateways
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
            We believe adventure takes all the fears away, brings down the walls
            that limit your moves; let your dreams go bigger. Live now, do not
            regret. Adventure yourself into a new world, into the adventure
            travel world!
          </p>
          <button className="px-4 py-2 font-bold text-white bg-transparent border-2 border-solid rounded-full hover:opacity-60">
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
