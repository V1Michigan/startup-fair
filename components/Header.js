import styled from "styled-components";

const Header = () => (
  <div className="flex bg-gray-800 justify-center items-center px-12 py-24 border border-bottom bg-topography-white">
    <div className="max-w-screen-2xl">
      <div className="flex items-center justify-center text-center ">
        <div className="flex-1 flex my-2 items-center">
          <div className="">
            <h2 className="md:text-2xl text-xl mt-1 tracking-tight text-yellow-400 syncopate">
              University of Michigan
            </h2>
            <h1 className="md:text-6xl text-5xl tracking-tight font-bold text-white leading-none syncopate">
              V1 STARTUP FAIR 🚀
            </h1>
            <h2 className="text-xl mt-1 tracking-tight text-yellow-400 syncopate">
              FEBRUARY 4th, 2022
            </h2>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center">
        <a
          href="#apply"
          className="text-base md:text-xl font-bold outline-none text-black py-3 px-6 rounded-md bg-white hover:opacity-75"
        >
          Apply Now ›
        </a>

        <p className="text-gray-300 text-sm italic font-bold mt-6 pb-2">
          Applications close Jan 22nd
        </p>
      </div>
    </div>
  </div>
);

export default Header;
