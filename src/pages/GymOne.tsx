import React from "react";

const GymOne = () => {
  return (
    <div>
      <nav
        className="bg-gradient-to-r from-black via-black to-gray-900 text-white 
                            flex items-center justify-between p-6 md:px-16"
      >
        <div className="text-yellow-500">
          {/* <img src={Muscle} alt="" className="w-10" />  */}
          Logo
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center gap-8 font-bold text-lg text-yellow-500">
            <li>Sport</li>
            <li>Space</li>
          </ul>
        </div>
        <div></div>
      </nav>

      <header
        className="bg-[url('./assets/gymone/mainbg.png')] bg-black bg-center 
                    h-[80vh] p-6 md:p-16 grid grid-cols-1 md:grid-cols-2 
                    items-center justify-center gap-10"
      >
        <div className="text-white space-y-6">
          <h1 className="text-4xl">Adipisicing consequat do anim voluptate.</h1>
          <p className="">
            Sunt ea aliquip reprehenderit esse non nisi consequat sunt aliquip
            culpa pariatur. Labore amet incididunt ex cillum consectetur anim ea
            reprehenderit amet excepteur ullamco consectetur enim incididunt.
          </p>
          <button
            className="border border-yellow-700 text-yellow-600
                            bg-black py-4 px-16 rounded-xl 
                            hover:text-black hover:bg-yellow-700 
                            transition-colors"
          >
            Start Now
          </button>
        </div>
      </header>
    </div>
  );
};

export default GymOne;
