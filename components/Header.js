import ReactGA from "react-ga";
import { useRouter } from "next/router";
import Application from "../components/Application";
import Companies from "../components/Companies";
import DownArrow from "../components/DownArrow";

const Header = () => {
  const router = useRouter();
  return (
    <div className="h-max-screen-content px-8 py-6 bg-gray-800 border border-bottom bg-topography-white text-center flex justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="md:my-3 mb-4">
          {/* <h2 className="md:text-4xl text-lg mt-1 tracking-tight text-yellow-400 syncopate">
          University of Michigan
        </h2> */}
          <h1 className="md:text-7xl text-3xl tracking-tight font-bold text-white leading-none syncopate">
            V1 STARTUP FAIR 🚀
          </h1>
          <h2 className="md:text-xl text-md mt-1 tracking-tight text-yellow-400 syncopate">
            FALL 2022
          </h2>
        </div>

        {/* <div className="mt-4"> */}
        {/* <a
            href="#apply"
            className="text-xl md:text-2xl font-bold outline-none text-black py-3 px-6 rounded-md bg-white  /*hover:opacity-75 opacity-50 cursor-not-allowed"
            onClick={() =>
              ReactGA.event({
                category: "Button",
                action: "Apply",
                label: "Apply Now (intra-page link)",
              })
            }
          >
            Apply Now ›
          </a> */}
        {/* <p className="text-gray-300 text-sm md:text-base italic font-bold mt-6 pb-2">
            Student applications close January 22nd
          </p> */}
        {/* </div> */}

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

        <Application />

        {/* <Companies /> */}

        <DownArrow />
      </div>
    </div>
  );
};
export default Header;
