import Logo from "./Logo";

const CompaniesF23 = () => (
  <div className="flex flex-col items-center justify-center gap-2 md:gap-4 mt-auto mb-2">
    <div className="flex flex-row flex-wrap items-center justify-center gap-x-6 gap-y-4 md:gap-y-2 mt-2">
      {/* Title sponsor */}
      <Logo
        href="https://bubble.io/"
        src="/companies/bubble.svg"
        alt="Bubble"
        size="40"
      />
      {/* Growth */}
    </div>
    {/* Iteration */}
    <div className="flex flex-row flex-wrap items-center justify-center gap-x-6 gap-y-4 md:gap-y-2">
      
      <Logo
        src="/companies/retool.png"
        href="https://retool.com/"
        alt="Retool"
        size="40"
      />
      
      <Logo
        src="/companies/ramp.svg"
        href="https://www.ramp.com/"
        alt="Ramp"
        size="40"
      />
      <Logo
        src="/companies/wisprai.png"
        href="https://www.wispr.ai/"
        alt="Wispr AI"
        size="40"
      />
    </div>
    {/* Launch */}
    <div className="flex flex-row flex-wrap items-center justify-center gap-x-6 gap-y-4 md:gap-y-2 2xl:mx-32">
    <Logo
        src="/companies/caldera.png"
        href="https://caldera.xyz/"
        alt="Caldera"
        size="40"
      />
      <Logo
        src="/companies/loop.png"
        href="https://loop.com/"
        alt="Loop"
        size="40"
      />
      <Logo
        src="/companies/MayMobility.png"
        href="https://maymobility.com/"
        alt="May Mobility "
        size="40"
      />
      <Logo
        src="/companies/shade.png"
        href="https://www.shade.inc/"
        alt="Shade"
        size="40"
      />
      <Logo
        href="https://www.m7health.com/"
        src="/companies/m7.png"
        alt="M7 Health"
        size="40"
      />
      <Logo
        src="/companies/lasso.png"
        href="https://www.joinlasso.com/"
        alt="Lasso"
        size="40"
      />
      <Logo
        src="/companies/preveil.svg"
        href="https://www.preveil.com/"
        alt="Preveil"
        size="32"
      />
      <Logo
        src="/companies/lumos.svg"
        href="https://lumos.com/"
        alt="Lumos"
        size="40"
      />
      <Logo
        href="https://www.getmagical.com/"
        src="/companies/magical.png"
        alt="Magical"
        size="40"
      />
      <Logo
        src="/companies/kefrobotics.png"
        href="https://www.kefrobotics.com/"
        alt="KEF Robotics"
        size="40"
      />
      <Logo
        src="/companies/doorlist.png"
        href="https://doorlist.app/"
        alt="Doorlist"
        size="40"
      />
      <Logo
        src="/companies/courierhealth.png"
        href="https://www.courierhealth.com/"
        alt="Courier Health"
        size="40"
      />
      
      <Logo
        src="/companies/playhaus.png"
        href="https://playhaus.agency/"
        alt="playhaus Agency"
        size="40"
      />
      
      
      
    </div>
    {/* Partners */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mt-2">
      <p className="text-gray-300 text-sm md:text-base italic font-bold">
        In partnership with
      </p>
      <div className="flex flex-row items-center justify-start gap-2">
        <Logo
          src="/companies/BusinessTechRoss.png"
          href="https://businesstech.bus.umich.edu/"
          alt="Michigan Ross Business + Tech"
          size="35"
        />
        <Logo
          src="/companies/ZLIwhite.png"
          href="https://zli.umich.edu/"
          alt="Zell Lurie Institute"
          size="48"
        />
      </div>
    </div>
  </div>
);

export default CompaniesF23;