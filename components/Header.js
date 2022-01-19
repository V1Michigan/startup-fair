import ReactGA from "react-ga";

const Logo = ({ src, href, alt, size }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <img className={`w-${size} hover:opacity-75`} src={src} alt={alt} />
  </a>
);

const Companies = () => (
  <div className="flex flex-col items-center justify-center gap-4 mt-8 md:gap-8 md:mt-12">
    <div className="flex flex-row items-center justify-start gap-8">
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
      {/* TODO: Put TRM below, they're actually Iteration */}
      <Logo
        src="/companies/trm.svg"
        href="https://trmlabs.com/"
        alt="TRM Labs"
        size="32"
      />
    </div>
    {/* Iteration */}
    {/* <div className="flex flex-row items-center justify-start gap-6"> */}
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
    {/* </div> */}
    {/* Launch */}
    <div className="flex flex-row items-center justify-start gap-6">
      <Logo
        href="https://siteline.com"
        src="/companies/siteline.png"
        alt="Siteline"
        size="40"
      />
      <Logo
        href="https://ridewithloop.com"
        src="/companies/loop.svg"
        alt="Loop"
        size="28"
      />
      <Logo
        href="https://bubble.com"
        src="/companies/bubble.svg"
        alt="Bubble"
        size="32"
      />
      {/* <Logo
          href="https://merge.dev"
          src="/companies/merge.svg"
          alt="Merge"
          size="28"
        /> */}
      <Logo
        href="https://intros.ai"
        src="/companies/intros.png"
        alt="Intros"
        size="28"
      />
      {/* <Logo
        href="https://mage.ai"
        src="/companies/mage.svg"
        alt="Mage"
        size="28"
      /> */}
    </div>
    {/* Partners */}
    <div className="flex flex-col items-center justify-center gap-2 md:gap-4 md:flex-row">
      <p className="text-gray-300 text-sm italic font-bold">
        In partnership with
      </p>
      <div className="flex flex-row items-center justify-start gap-2">
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
  </div>
);

const Header = () => (
  <div className="h-screen p-6 md:p-12 bg-gray-800 border border-bottom bg-topography-white text-center">
    <div className="flex flex-col items-center justify-center">
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
      <div className="mt-6">
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
          Student applications close January 22nd
        </p>
      </div>
      <Companies />
    </div>
  </div>
);

export default Header;
