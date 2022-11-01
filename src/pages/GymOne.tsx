import React from "react";
import img01 from "../assets/gymone/img01.jpg";
import img02 from "../assets/gymone/img02.jpg";
import img03 from "../assets/gymone/img03.jpg";
import img04 from "../assets/gymone/img04.jpg";
import img05 from "../assets/gymone/img05.jpg";

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

      <section className="p-6 md:p-16 grid grid-cols-1 md:grid-cols-2  md:gap-10">
        <div className="relative">
          <img
            src={img01}
            alt=""
            className="rounded-xl max-w-[34rem] 
             m-auto max-h-[42rem] object-cover"
          />

          <img
            src={img02}
            alt=""
            className="rounded-xl border-2 border-[#f9f9f9] 
            absolute top-10 right-0 w-64"
          />

          <img
            src={img03}
            alt=""
            className="rounded-xl border-2 border-[#f9f9f9] 
            absolute top-64 right-0 w-64"
          />
        </div>
        <div className="space-y-8">
          <div className="relative space-y-5">
            <div className="w-12 h-12 bg-yellow-300 rounded-full absolute top-[-6px] left-[-8px] -z-10"></div>
            <h2 className="font-bold text-2xl">Adnulla sint id qui nulla.</h2>
            <p className="font-normal text-sm">
              Aliqua fugiat pariatur reprehenderit nostrud cupidatat ut commodo
              in reprehenderit exercitation sint mollit aliqua aliqua. Quis
              eiusmod ipsum dolor exercitation. Ea nostrud labore aliquip amet.
            </p>
          </div>

          <ul
            className="font-normal text-sm list-disc 
              marker:text-yellow-500 list-inside space-y-2"
          >
            <li>Irure magna amet aliqua.</li>
            <li>Cillum incididunt non mollit proident sit.</li>
            <li>Ieprehenderit deserunt excepteur do est nostrud.</li>
            <li>Sit sit cupidatat nostrud.</li>
            <li>Veniam cupidatat culpa mollit.</li>
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col items-center justify-center gap-2 group">
              <img
                src={img05}
                alt=""
                className="rounded-xl border-4 cursor-pointer transition-all 
                    group-hover:border-yellow-500"
              />
              <p className="group-hover:text-yellow-600">
                Mollit ut ut ipsum cupid.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 group">
              <img
                src={img04}
                alt=""
                className="rounded-xl border-4 cursor-pointer transition-all 
                    group-hover:border-yellow-500"
              />
              <p className="group-hover:text-yellow-600">
                Non dolor esse ipsum.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GymOne;
