import ReactGA from "react-ga";

const Logo = ({ src, href, alt, size }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <img className={`w-${size} hover:opacity-75`} src={src} alt={alt} />
  </a>
);

const Companies = () => (
  <>
    <div className="flex flex-col items-center justify-center gap-1 mt-4">
      <div className="flex flex-row items-center justify-start gap-8 py-1">
        {/* Title sponsor */}
        <Logo
          src="/companies/ramp.svg"
          href="https://ramp.com/"
          alt="Ramp"
          size="48"
        />
        {/* Growth */}
        {/* <Logo
          src="/companies/neon.png"
          href="https://neonapp.com/"
          alt="Neon"
          size="48"
        /> */}
      </div>
      {/* Iteration */}
      <div className="flex flex-row items-center justify-start gap-6 py-1">
        <Logo
          src="/companies/trm.svg"
          href="https://trmlabs.com/"
          alt="TRM Labs"
          size="32"
        />
        {/* <Logo
          src="/companies/treehouse.svg"
          href="https://treehouse.finance/"
          alt="Treehouse Finance"
          size="32"
        /> */}
        {/* <Logo
          src="/companies/truera.svg"
          href="https://truera.com/"
          alt="TruEra"
          size="28"
        /> */}
        {/* TODO: Move Siteline down, it's actually Launch */}
        <Logo
          href="https://siteline.com"
          src="/companies/siteline.png"
          alt="Siteline"
          size="36"
        />
      </div>
      {/* Launch */}
      {/* <div className="flex flex-row items-center justify-start gap-6 py-1"> */}
      {/* <Logo
          href="https://bubble.com"
          src="/companies/bubble.svg"
          alt="Bubble"
          size="28"
        /> */}
      {/* <Logo
          href="https://merge.dev"
          src="/companies/merge.svg"
          alt="Merge"
          size="28"
        /> */}
      {/* <Logo
          href="https://intros.ai"
          src="/companies/intros.png"
          alt="Intros"
          size="28"
        /> */}
      {/* </div> */}
    </div>
    {/* Partners */}
    <div className="flex flex-col items-center justify-center py-1 gap-0 md:gap-4 md:flex-row my-2">
      <p className="text-gray-300 text-sm italic font-bold">
        In partnership with
      </p>
      <div className="flex flex-row items-center justify-start gap-2 py-1">
        <Logo
          href="https://contrarycap.com"
          src="/partners/contrary.svg"
          alt="Contrary Capital"
          size="36"
        />
        {/* <Logo
          href="https://a16z.com/"
          src="/partners/a16z.png"
          alt="Andreessen Horowitz"
          size="16"
        /> */}
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
        Student applications close Jan 22nd
      </p>
    </div>
    <Companies />
  </div>
);

export default Header;
