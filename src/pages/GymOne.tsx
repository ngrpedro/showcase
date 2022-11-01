import { GithubLogo, LinkedinLogo } from "phosphor-react";
import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/">Logo</Link>
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
                            transition-colors ease-in-out delay-150"
          >
            Start Now
          </button>
        </div>
      </header>

      <section className="p-6 md:p-28 grid grid-cols-1 md:grid-cols-2  md:gap-10">
        <div className="relative">
          <img
            src={img01}
            alt=""
            className="rounded-xl lg:max-w-[34rem] 
             max-h-[42rem] object-cover"
          />

          <img
            src={img02}
            alt=""
            className="rounded-xl border-2 border-[#f9f9f9] 
            absolute top-10 right-2 md:right-0 w-64"
          />

          <img
            src={img03}
            alt=""
            className="rounded-xl border-2 border-[#f9f9f9] 
            absolute top-64 right-2 md:right-0 w-64"
          />
        </div>
        <div className="flex flex-col items-center justify-between">
          <div className="space-y-10">
            <div className="relative space-y-5">
              <div className="w-12 h-12 bg-yellow-300 rounded-full absolute top-[-6px] left-[-8px] -z-10"></div>
              <h2 className="font-bold text-2xl">Adnulla sint id qui nulla.</h2>
              <p className="font-normal text-sm">
                Aliqua fugiat pariatur reprehenderit nostrud cupidatat ut
                commodo in reprehenderit exercitation sint mollit aliqua aliqua.
                Quis eiusmod ipsum dolor exercitation. Ea nostrud labore aliquip
                amet.
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col items-center justify-center gap-2 group">
              <p className="group-hover:text-yellow-600 ease-in-out delay-150">
                Mollit ut ut ipsum cupid.
              </p>
              <img
                src={img05}
                alt=""
                className="rounded-xl border-4 cursor-pointer transition-all 
                    group-hover:border-yellow-500 ease-in-out delay-150"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-2 group">
              <p className="group-hover:text-yellow-600 ease-in-out delay-150">
                Non dolor esse ipsum.
              </p>
              <img
                src={img04}
                alt=""
                className="rounded-xl border-4 cursor-pointer transition-all 
                    group-hover:border-yellow-500 ease-in-out delay-150"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="p-6 md:p-28 bg-gray-900 text-white flex flex-col md:flex-row items-center justify-center gap-10">
        <section className="cursor-pointer mb-4 w-72 border-t-8 px-2 py-10 bg-white dark:bg-gray-800 rounded border-yellow-600 border-2">
          <section className="w-full">
            <header className="text-3xl text-center md:mt-5 text-black">
              Medium
            </header>
            <header className="w-full md:flex justify-center text-center mb-2">
              <span className="text-6xl text-yellow-600">35</span>
              <span className="text-2xl text-black ml-5">$</span>
              <span className="line-through text-2xl text-black">100</span>
            </header>
            <ul className="mt-5 p-1 text-md text-gray-600 dark:text-gray-200">
              <li className="flex mb-1 py-1">
                <svg
                  className="h-6 w-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  stroke="currentColor"
                  fill="#ffc41e"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                </svg>
                Laboris minim culpa ex nisi.
              </li>
              <li className="flex mb-1 py-1">
                <svg
                  className="h-6 w-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  stroke="currentColor"
                  fill="#ffc41e"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                </svg>
                Labore quis exercitation.
              </li>
              <li className="flex mb-1 py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  className="h-6 w-6 mr-2"
                  fill="black"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                </svg>
                Veniam consec adipisicin.
              </li>
              <li className="flex mb-1 py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  className="h-6 w-6 mr-2"
                  fill="black"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                </svg>
                Eu aute labore.
              </li>
            </ul>
          </section>
        </section>

        <section className="cursor-pointer mb-4 w-72 border-t-8 px-2 py-10 bg-white dark:bg-gray-800 rounded border-yellow-400 border-2">
          <section className="w-full">
            <header className="text-3xl text-center md:mt-5 text-black">
              Pro
            </header>
            <header className="w-full md:flex justify-center text-center mb-2">
              <span className="text-6xl text-yellow-400">50</span>
              <span className="text-2xl text-black ml-5">$</span>
              <span className="line-through text-2xl text-black">150</span>
            </header>
            <ul className="mt-5 p-1 text-md text-gray-600 dark:text-gray-200">
              <li className="flex mb-1 py-1">
                <svg
                  className="h-6 w-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  stroke="currentColor"
                  fill="#ffc41e"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                </svg>
                Duis esse quis amet elit in.
              </li>
              <li className="flex mb-1 py-1">
                <svg
                  className="h-6 w-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  stroke="currentColor"
                  fill="#ffc41e"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                </svg>
                Minim id laborum tempor id.
              </li>
              <li className="flex mb-1 py-1">
                <svg
                  className="h-6 w-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  stroke="currentColor"
                  fill="#ffc41e"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                </svg>
                Eu est proident elit.
              </li>
              <li className="flex mb-1 py-1">
                <svg
                  className="h-6 w-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  stroke="currentColor"
                  fill="#ffc41e"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                </svg>
                Mollit dolor esse ex eu.
              </li>
            </ul>
          </section>
        </section>

        <section className="cursor-pointer mb-4 w-72 border-t-8 px-2 py-10 bg-white dark:bg-gray-800 rounded border-yellow-600 border-2">
          <section className="w-full">
            <header className="text-3xl text-center md:mt-5 text-black">
              Kids
            </header>
            <header className="w-full md:flex justify-center text-center mb-2">
              <span className="text-6xl text-yellow-600">15</span>
              <span className="text-2xl text-black ml-5">$</span>
              <span className="line-through text-2xl text-black">80</span>
            </header>
            <ul className="mt-5 p-1 text-md text-gray-600 dark:text-gray-200">
              <li className="flex mb-1 py-1">
                <svg
                  className="h-6 w-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  stroke="currentColor"
                  fill="#ffc41e"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                </svg>
                Non adipisicing sint officia.
              </li>
              <li className="flex mb-1 py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  className="h-6 w-6 mr-2"
                  fill="black"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                </svg>
                Veniam elit ad ipsum in.
              </li>
              <li className="flex mb-1 py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  className="h-6 w-6 mr-2"
                  fill="black"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                </svg>
                Quis ut occaecat elit ut est.
              </li>
              <li className="flex mb-1 py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  className="h-6 w-6 mr-2"
                  fill="black"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                </svg>
                Consequat exercitation.
              </li>
            </ul>
          </section>
        </section>
      </section>

      <section className="py-6 md:py-28">
        <div className="grid grid-cols-5 items-center justify-between gap-10">
          <img
            src={img03}
            alt=""
            className="h-[10rem] object-cover w-full rounded-lg 
                     hover:scale-[1.15] transition-all ease-in-out delay-150 
          "
          />
          <img
            src={img02}
            alt=""
            className="h-[15rem] object-cover w-full rounded-lg 
                     hover:scale-[1.15] transition-all ease-in-out delay-150 
          "
          />
          <img
            src={img01}
            alt=""
            className="h-[20rem] object-cover w-full rounded-lg 
                     hover:scale-[1.15] transition-all ease-in-out delay-150 
          "
          />
          <img
            src={img04}
            alt=""
            className="h-[15rem] object-cover w-full rounded-lg 
                     hover:scale-[1.15] transition-all ease-in-out delay-150 
          "
          />
          <img
            src={img05}
            alt=""
            className="h-[10rem] object-cover w-full rounded-lg 
                     hover:scale-[1.15] transition-all ease-in-out delay-150 
          "
          />
        </div>
      </section>

      <footer
        className="py-6 md:py-16 bg-gray-900 text-white flex 
              flex-col items-center justify-center gap-4"
      >
        <p className="text-[14px]">Powered by:: Pedro Soares</p>
        <div className="flex items-center justify-center gap-5">
          <Link to="https://www.linkedin.com/in/pedro-nogueira399/">
            <LinkedinLogo size={28} />
          </Link>
          <Link to="https://github.com/ngrpedro">
            <GithubLogo size={28} />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default GymOne;
