import Logo from "./Logo";

export default function TitleSlide() {
  return (
    <div style={{ height: 'calc(100vh - 108px)' }}>
      <div className="h-full w-full bg-landing bg-cover bg-center bg-no-repeat">
        <div className="h-full w-full bg-shade relative flex items-center justify-center">
          <section className="max-w-6xl mx-auto my-4 text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight font-bold">
              <span className="text-yellow-500">V1</span> Startup Fair
            </h1>
            <p className="mt-4 mb-6 text-xl md:text-3xl lg:text-4xl text-gray-400 tracking-tight font-bold"> 
              October 12th, 2023
            </p>
          </section>

          {/* Absolute positioning to place this section at the bottom */}
          <div className="absolute bottom-5 left-0 right-0 flex flex-wrap gap-x-1 items-center justify-center mt-4 p-4"> 
            <p className="text-gray-300 text-xs md:text-base font-bold italic" style={{marginRight: '1.0rem'}}>
              In partnership with 
            </p>
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
    </div>
  );
}
