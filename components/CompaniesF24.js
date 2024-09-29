import Logo from "./Logo";

const CompaniesF23 = () => (
  <div className="flex flex-col items-center justify-center gap-2 md:gap-4 mt-auto mb-2">
    <div className="flex flex-row flex-wrap items-center justify-center gap-x-6 gap-y-4 md:gap-y-2 mt-2">
      {/* Title sponsor */}
      <Logo
        src="/companies/ramp.svg"
        href="https://www.ramp.com/"
        alt="Ramp"
        size="40"
      />
      {/* Growth */}
    </div>
    <div className="flex flex-row flex-wrap items-center justify-center gap-x-8 gap-y-6 md:gap-y-4">
      <Logo
        src="/companies/watershed.png"
        href="https://watershed.com/"
        alt="Watershed"
        size="40"
      />
      <Logo
        src="/companies/courierhealth.png"
        href="https://www.courierhealth.com/"
        alt="Courier Health"
        size="40"
      />
      <Logo
        src="/companies/appliedintuition.svg"
        href="https://www.appliedintuition.com/"
        alt="Applied Intuition"
        size="40"
      />
    </div>
    <div className="flex flex-row flex-wrap items-center justify-center gap-x-8 gap-y-6 md:gap-y-4 2xl:mx-32">
      <Logo
        href="https://authenticinsurance.com/"
        src="/companies/authenticinsurance.png"
        alt="Authentic Insurance"
        size="40"
      />
      <Logo
        src="/companies/pylon.png"
        href="https://usepylon.com/"
        alt="Pylon"
        size="40"
      />
      <Logo
        src="/companies/codeium.png"
        href="https://codeium.com"
        alt="Codeium"
        size="40"
      />
      <Logo
        src="/companies/lumos.svg"
        href="https://lumos.com/"
        alt="Lumos"
        size="40"
      />
      <Logo
        src="/companies/thatch.svg"
        href="https://thatch.ai/"
        alt="Thatch"
        size="15"
      />
    </div>
    <div className="flex flex-row flex-wrap items-center justify-center gap-x-8 gap-y-6 md:gap-y-4 2xl:mx-32">
      <Logo
        src="/companies/annarborspark.png"
        href="https://annarborusa.org/"
        alt="Ann Arbor Spark"
        size="40"
      />
      <Logo
        src="/companies/waverf.png"
        href="https://wave-rf.com/"
        alt="Wave RF"
        size="35"
      />
      <Logo
        src="/companies/meetyourclass.png"
        href="https://www.meetyourclass.com/"
        alt="Meet Your Class"
        size="20"
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
        {/* <Logo
          src="/companies/ZLIwhite.png"
          href="https://zli.umich.edu/"
          alt="Zell Lurie Institute"
          size="48"
        /> */}
      </div>
    </div>
  </div>
);

export default CompaniesF23;