const ValueProp = () => {
  return (
    <>
      <div className="justify-center pt-12 pb-8 max-w-2xl mx-auto">
        <h1 className="text-5xl text-gray-800 text-center tracking-tight font-bold">
          Meet the fastest-growing startups at V1 Startup Fair.
        </h1>
        <p className="mt-4 text-2xl text-gray-600 text-center tracking-tight font-bold p-2">
          Startups are changing the world — make an impact by working at one.
        </p>
      </div>

      <div className="bg-gray-800 md:flex text-center p-4 tracking-widest">
        <p className="text-white uppercase flex-1 p-2">SEED 🌱</p>
        <p className="text-white uppercase flex-1 p-2">Series A</p>
        <p className="text-white uppercase flex-1 p-2">Series B</p>
        <p className="text-white uppercase flex-1 p-2">Series C</p>
        <p className="text-white uppercase flex-1 p-2">Series D</p>
        <p className="text-white uppercase flex-1 p-2">Series E</p>
        <p className="text-white uppercase flex-1 p-2">IPO 🚀</p>
      </div>
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
