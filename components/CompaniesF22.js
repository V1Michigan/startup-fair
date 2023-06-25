import Logo from "./Logo";

const CompaniesF22 = () => (
  <div className="flex flex-col items-center justify-center gap-2 md:gap-4 mt-auto mb-2">
    <div className="flex flex-row flex-wrap items-center justify-center gap-x-6 gap-y-4 md:gap-y-2 mt-2">
      {/* Title sponsor */}
      <Logo
        src="/companies/retool.png"
        href="https://retool.com/"
        alt="Retool"
        size="44"
      />
      {/* Growth */}
    </div>
    {/* Iteration */}
    <div className="flex flex-row flex-wrap items-center justify-center gap-x-6 gap-y-4 md:gap-y-2">
    <Logo
        src="/companies/warp.svg"
        href="https://www.warp.dev/"
        alt="Warp"
        size="16"
      />
      <Logo
        src="/companies/valon.svg"
        href="https://www.valon.com/"
        alt="Valon"
        size="40"
      />
      <Logo
        src="/companies/ramp.svg"
        href="https://ramp.com/"
        alt="Ramp"
        size="56"
      />
    </div>
    {/* Launch */}
    <div className="flex flex-row flex-wrap items-center justify-center gap-x-6 gap-y-4 md:gap-y-2 2xl:mx-32">
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
        src="/companies/lumos.svg"
        href="https://www.lumos.com/"
        alt="Lumos"
        size="44"
      />
      <Logo
        src="/companies/chariot.svg"
        href="https://www.givechariot.com/"
        alt="Chariot"
        size="40"
      />
      <Logo
        src="/companies/chestr.svg"
        href="https://www.getchestr.com/"
        alt="Chestr"
        size="44"
      />
      <Logo
        src="/companies/healpay.png"
        href="https://www.healpay.com/"
        alt="Healpay"
        size="30"
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
        src="/companies/launchparty.svg"
        href="https://www.launchparty.vc/"
        alt="Launchparty"
        size="60"
      />
      <Logo
        src="/companies/aipi.svg"
        href="https://aipisolutions.com/"
        alt="aipi"
        size="48"
      />
    </div>
    {/* Partners */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mt-2">
      <p className="text-gray-300 text-sm md:text-base italic font-bold">
        In partnership with
      </p>
      <div className="flex flex-row items-center justify-start gap-2">
        <Logo
          src="/companies/undergroundprinting.png"
          href="https://undergroundshirts.com"
          alt="Underground Printing"
          size="24"
        />
        <Logo
          src="/companies/upround.png"
          href="https://upround.vc"
          alt="Upround Ventures"
          size="48"
        />
      </div>
    </div> 
  </div>
);

export default CompaniesF22;