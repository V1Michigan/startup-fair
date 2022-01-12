import { Parallax } from "react-scroll-parallax";
import GrowthSvg from "./GrowthSvg";

const Growth = () => (
  <div className="relative pt-12 pb-6">
    {/* Not using top-0 so it clips to the bottom, since I can't figure out
        how to fit the SVG inside the container height */}
    <div
      className="absolute right-0 bottom-0 overflow-hidden z-0"
      style={{ left: "-25%" }}
    >
      <Parallax x={[7.5, 0]}>
        <GrowthSvg />
      </Parallax>
    </div>
    <div className="max-w-2xl mx-auto relative z-1 py-2 px-4">
      <h1 className="text-5xl text-gray-800 text-center tracking-tight font-bold">
        Meet the fastest-growing startups at V1 Startup Fair.
      </h1>
      <p className="mt-4 text-2xl text-gray-600 text-center tracking-tight font-bold">
        Startups are changing the world — make an impact by working at one.
      </p>
    </div>
  </div>
);

const ValueProp = () => {
  return (
    <>
      <Growth />
      <section className="text-gray-700 bg-gray-100 body-font py-8">
        <section className="text-gray-600 body-font px-5">
          <div className="flex flex-wrap">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-200 text-blue-500 mb-5 flex-shrink-0 text-3xl">
                ⚡
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-800 text-2xl title-font font-bold tracking-tight mb-3">
                  TECH TALKS
                </h2>
                <p className="leading-relaxed text-base text-gray-600">
                  Attend tech talks on engineering at a startup, founding a
                  company, career advice, and more.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-200 text-blue-600 mb-5 flex-shrink-0 text-3xl">
                💼
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-800 text-2xl title-font font-bold tracking-tight mb-3">
                  1:1 RECRUITER CHATS
                </h2>
                <p className="leading-relaxed text-base text-gray-600">
                  Get the opportunity to be matched with startups for 1:1 chats
                  with recruiters and hiring managers.
                </p>
              </div>
            </div>

            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-200 text-blue-500 mb-5 flex-shrink-0 text-3xl">
                🤝
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-800 text-2xl title-font font-bold tracking-tight mb-3">
                  COMPANY BOOTHS
                </h2>
                <p className="leading-relaxed text-base text-gray-600">
                  Learn more about companies you're excited about at their
                  virtual booths.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default ValueProp;
