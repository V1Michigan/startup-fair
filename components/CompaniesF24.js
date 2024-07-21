import Logo from "./Logo";

const CompaniesF24 = () => (
  <div className="flex flex-col items-center justify-center gap-2 md:gap-4 mt-auto mb-2">
    {/* Launch */}
    <div className="flex flex-row flex-wrap items-center justify-center gap-x-6 gap-y-4 md:gap-y-2 2xl:mx-32">
      <Logo
        src="/companies/ramp.svg"
        href="https://www.ramp.com/"
        alt="Ramp"
        size="40"
      />
    </div>
    
    <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mt-2">
      <p className="text-gray-300 text-sm md:text-base italic font-bold mb-6">
        and many more to come
      </p>
    </div>
  </div>
  
);

export default CompaniesF24;