
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

export default Companies