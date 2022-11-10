import ReactGA from "react-ga";
import Logo from "./Logo";

const CompaniesF22 = () => (
  <div className="flex flex-col items-center justify-center gap-2 md:gap-4 mt-auto mb-2">
    <div className="flex flex-row flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-2">
      <Logo
        src="/companies/ramp.svg"
        href="https://ramp.com/"
        alt="Ramp"
        size="56"
      />
      <Logo
        src="/companies/pixiebrix.svg"
        href="https://pixiebrix.com/"
        alt="Ramp"
        size="56"
      />
      <Logo
        href="https://actively.ai"
        src="/companies/actively.png"
        alt="Actively"
        size="40"
      />
      <Logo
        src="/companies/intros.png"
        href="https://intros.ai/"
        alt="Intros"
        size="56"
      />
      <Logo
        src="/companies/healpay.png"
        href="https://www.healpay.com/"
        alt="Healpay"
        size="30"
      />
      <Logo
        src="/companies/valon.svg"
        href="https://www.valon.com/"
        alt="Valon"
        size="40"
      />
      <Logo
        src="/companies/retool.png"
        href="https://retool.com/"
        alt="Retool"
        size="44"
      />
      <Logo
        src="/companies/chestr.svg"
        href="https://www.getchestr.com/"
        alt="Chestr"
        size="44"
      />
      <Logo
        src="/companies/chariot.svg"
        href="https://www.givechariot.com/"
        alt="Chariot"
        size="40"
      />
      <Logo
        src="/companies/preveil.svg"
        href="https://www.preveil.com/"
        alt="Preveil"
        size="32"
      />
      <Logo
        src="/companies/unipro.png"
        href="https://unipr0.com/arcade-home/"
        alt="unipro"
        size="20"
      />
       <Logo
        src="/companies/aipi.svg"
        href="https://aipisolutions.com/"
        alt="aipi"
        size="40"
      />
    </div>
    <p className="text-gray-300 text-xs md:text-sm italic font-bold mt-2 pb-2">
      ...more companies to be announced soon!
    </p>
  </div>
);

const Header = () => {
  return (
    <div className="h-max-screen-content px-8 py-6 bg-gray-800 border border-bottom bg-topography-white text-center flex justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="md:my-3">
          {/* <h2 className="md:text-4xl text-lg mt-1 tracking-tight text-yellow-400 syncopate">
          University of Michigan
        </h2> */}
          <h1 className="md:text-7xl text-3xl tracking-tight font-bold text-white leading-none syncopate">
            V1 STARTUP FAIR 🚀
          </h1>
          <h2 className="md:text-xl text-md mt-1 tracking-tight text-yellow-400 syncopate">
            November 16th, 2022
          </h2>
        </div>
        <div className="mt-4">
          <a
            href="#apply"
            className="text-xl md:text-2xl font-bold outline-none text-black py-3 px-6 rounded-md bg-yellow-400 hover:opacity-75"
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
          {/* <p className="text-gray-300 text-sm md:text-base italic font-bold mt-6 pb-2">
            Student applications close October 21st
          </p> */}
        </div>
        {/* <div className="my-6">
          <a
            className="text-xl md:text-2xl font-bold outline-none text-black py-2 px-4 rounded-md bg-yellow-400 hover:opacity-75 cursor-pointer"
            onClick={() => router.push("https://directory.v1michigan.com")}
          >
            Company Directory ›
          </a>
          <p className="text-gray-300 text-sm md:text-base italic font-bold mt-6 pb-2">
            Student applications are now closed — please check back in the fall
          </p>
        </div> */}
        <CompaniesF22 />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="#f3f3f3"
          className="animate-bounce cursor-pointer h-8 w-8 mt-6"
          onClick={() =>
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            })
          }
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};
export default Header;
