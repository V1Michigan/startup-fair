import CompaniesF24 from "./CompaniesF24";
import Statistic from "./Statistic";

export default function TitleSlide() {
  return (
    <div>
      <div className="h-full w-full bg-landing bg-cover bg-center bg-no-repeat">
        <div className="h-full w-full bg-shade py-4">
          <section className="max-w-6xl mx-auto my-4">
            <h1 className="text-5xl text-white text-center tracking-tight font-bold">
              <span className="text-yellow-500">V1</span> Startup Fair
            </h1>
            <p className="mt-4 mb-8 text-lg text-gray-400 text-center tracking-tight font-bold">
              October 11th, 2024
            </p>
            <div className="flex flex-row flex-wrap justify-center gap-16 my-16">
              <Statistic value={12} label="high-growth startups" />
              <Statistic value={`${250}+`} label="top students" />
            </div>
            <CompaniesF24 />
          </section>
        </div>
      </div>
    </div>
  );
}