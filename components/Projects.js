const Projects = () => {
  return (
    <section className="text-gray-700 body-font pb-16 pt-8">
      <div className="container px-5 py-2 mx-auto">
        <div className="text-center">
          <br />
          <h1 className="text-4xl md:text-5xl font-bold title-font tracking-tight text-gray-800 mb-4">
            What's in it for you?
          </h1>
          <p className="md:text-2xl text-xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-600 tracking-tight">
            Curated startups matched to you
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-gray-300 inline-flex"></div>
          </div>
        </div>
      </div>

      <section className="text-gray-600 body-font px-5">
        <div className="flex flex-wrap">
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-200 text-blue-600 mb-5 flex-shrink-0 text-3xl">
              🚀
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-800 text-2xl title-font font-bold tracking-tight mb-3">
                1:1 RECRUITER CHATS
              </h2>
              <p className="leading-relaxed text-base text-gray-600">
                Get matched with startups you want to work at through our unique
                matching process, and get 1:1 face time with a recruiter to show
                them what you're made of.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-200 text-blue-500 mb-5 flex-shrink-0 text-3xl">
              💼
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-800 text-2xl title-font font-bold tracking-tight mb-3">
                TECH TALKS
              </h2>
              <p className="leading-relaxed text-base text-gray-600">
                Learn from the best, get a founders view on when is the right
                time to start a company, understand what it took to find product
                market fit, learn about the best architecture for fast
                iteration, and more.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-200 text-blue-500 mb-5 flex-shrink-0 text-3xl">
              🤝
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-800 text-2xl title-font font-bold tracking-tight mb-3">
                PERSONALIZATION
              </h2>
              <p className="leading-relaxed text-base text-gray-600">
                Every 1:1 match is made taking into consideration the top choices of
                students and of companies. They are all optimized for success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Projects;

