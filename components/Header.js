import ReactGA from "react-ga";
import { useRouter } from "next/router";

const Logo = ({ src, href, alt, size }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <img
      // Yep, this size calculation for smaller screens is hacky
      className={`w-${Math.max(
        size - 24,
        24
      )} md:w-${size} hover:opacity-75 md:mx-3 md:my-1`}
      src={src}
      alt={alt}
    />
  </a>
);

const Companies = () => (
  <div className="flex flex-col items-center justify-center gap-2 md:gap-4 mt-auto mb-2">
    <div className="flex flex-row flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-2">
      {/* Title sponsor */}
      <Logo
        src="/companies/ramp.svg"
        href="https://ramp.com/"
        alt="Ramp"
        size="56"
      />
      {/* Growth */}
    </div>
    {/* Iteration */}
    <div className="flex flex-row flex-wrap items-center justify-center gap-x-6 gap-y-2">
      <Logo
        src="/companies/neon.png"
        href="https://neonapp.com/"
        alt="Neon"
        size="52"
      />
      <Logo
        src="/companies/trm.svg"
        href="https://trmlabs.com/"
        alt="TRM Labs"
        size="40"
      />
      <Logo
        href="https://mage.ai"
        src="/companies/mage.svg"
        alt="Mage"
        size="44"
      />
    </div>
    {/* Launch */}
    <div className="flex flex-row flex-wrap items-center justify-center gap-x-6 gap-y-2 2xl:mx-32">
      <Logo
        href="https://siteline.com"
        src="/companies/siteline.png"
        alt="Siteline"
        size="52"
      />
      <Logo
        href="https://ridewithloop.com"
        src="/companies/loop.svg"
        alt="Loop"
        size="32"
      />
      <Logo
        href="https://bubble.com"
        src="/companies/bubble.svg"
        alt="Bubble"
        size="36"
      />
      <Logo
        href="https://intros.ai"
        src="/companies/intros.png"
        alt="Intros"
        size="36"
      />
      <Logo
        href="https://actively.ai"
        src="/companies/actively.png"
        alt="Actively"
        size="36"
      />
      <Logo
        src="/companies/truera.svg"
        href="https://truera.com/"
        alt="TruEra"
        size="32"
      />
      <Logo
        src="/companies/pinwheel.svg"
        href="https://pinwheelapi.com/"
        alt="Pinwheel"
        size="44"
      />
      <Logo
        href="https://merge.dev"
        src="/companies/merge.svg"
        alt="Merge"
        size="36"
      />
      {/* Maybe should just make OpenStore white, not dark purple? */}
      <Logo
        href="https://open.store"
        src="/companies/openstore.svg"
        alt="OpenStore"
        size="36"
      />
      <Logo
        href="https://cent.co"
        src="/companies/cent.png"
        alt="Cent"
        size="24"
      />
      <Logo
        href="https://appliedintuition.com"
        src="/companies/appliedintuition.svg"
        alt="Applied Intuition"
        size="56"
      />
      <Logo
        href="https://collabai.co"
        src="/companies/collabai.svg"
        alt="Collab AI"
        size="32"
      />
      <Logo
        href="https://un1feed.com"
        src="/companies/un1feed.png"
        alt="Un1feed"
        size="32"
      />
    </div>
    {/* Partners */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mt-2">
      <p className="text-gray-300 text-sm md:text-base italic font-bold">
        In partnership with
      </p>
      <div className="flex flex-row items-center justify-start gap-2">
        <Logo
          href="https://contrarycap.com"
          src="/partners/contrary.svg"
          alt="Contrary Capital"
          size="44"
        />
        {/* <Logo
          href="https://a16z.com/"
          src="/partners/a16z.png"
          alt="Andreessen Horowitz"
          size="24"
        /> */}
      </div>
    </div>
  </div>
);

const Header = () => {
  const router = useRouter();
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
            FEBRUARY 4th, 2022
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
        <div className="my-6">
          <a
            className="text-xl md:text-2xl font-bold outline-none text-black py-2 px-4 rounded-md bg-yellow-400 hover:opacity-75 cursor-pointer"
            onClick={() => router.push("https://directory.v1michigan.com")}
          >
            Company Directory ›
          </a>
          <p className="text-gray-300 text-sm md:text-base italic font-bold mt-6 pb-2">
            Student applications are now closed — please check back in the fall
          </p>
        </div>
        <Companies />
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
