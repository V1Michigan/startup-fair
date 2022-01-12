import ReactGA from "react-ga";

const Companies = () => (
  <>
    {/* TODO: Make images from lower packages smaller, make break into a second row as we get more companies */}
    <div className="flex flex-row items-center justify-center gap-8 mt-8">
      {/* Growth */}
      <div className="flex flex-row items-center justify-start py-1">
        <a href="https://ramp.com" target="_blank" rel="noopener noreferrer">
          <img
            className="w-48 hover:opacity-75"
            src="/companies/ramp.svg"
            alt="Ramp"
          />
        </a>
      </div>
      {/* Iteration */}
      <div className="flex flex-row items-center justify-start py-1">
        <a href="https://trmlabs.com" target="_blank" rel="noopener noreferrer">
          <img
            className="w-36 hover:opacity-75"
            src="/companies/trm.svg"
            alt="TRM Labs"
          />
        </a>
      </div>
    </div>
    {/* Partners */}
    <div className="flex flex-col items-center justify-center py-1 gap-0 md:gap-4 md:flex-row my-2">
      <p className="text-gray-300 text-sm italic font-bold">
        In partnership with
      </p>
      <div className="flex flex-row items-center justify-start py-1">
        <a
          href="https://contrarycap.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-36 hover:opacity-75"
            src="/partners/contrary.svg"
            alt="Contrary Capital"
          />
        </a>
      </div>
    </div>
  </>
);

const Header = () => (
  <div className="p-12 bg-gray-800 border border-bottom bg-topography-white">
    <div className="flex items-center justify-center text-center ">
      <div className="my-2">
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
    <div className="mt-6 text-center">
      <a
        href="#apply"
        className="text-base md:text-xl font-bold outline-none text-black py-3 px-6 rounded-md bg-white hover:opacity-75"
        onClick={() =>
          ReactGA.event({
            category: "Button",
            action: "Apply",
            label: "Apply Now (intra-page link)",
          })
        }
      >
        Apply Now ›
      </a>
      <p className="text-gray-300 text-sm italic font-bold mt-6 pb-2">
        Applications close Jan 22nd
      </p>
    </div>
    <Companies />
  </div>
);

export default Header;
