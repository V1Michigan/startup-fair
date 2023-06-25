import Statistic from './Statistic'

export default function Recap({Header, Date, Startups, numStartups, numStudents, numOffers}) {
  return (
    <div>
        <div className="h-full w-full bg-landing bg-cover bg-center bg-no-repeat">
        <div className="h-full w-full bg-shade py-4">
          <section className="max-w-6xl mx-auto my-4">
            <h1 className="text-5xl text-white text-center tracking-tight font-bold">
              {Header}
            </h1>
            <p className="mt-4 text-lg text-gray-400 text-center tracking-tight font-bold">
              {Date}
            </p>
            <div className="flex flex-row flex-wrap justify-center gap-16 my-16">
              <Statistic value={numStartups} label="high-growth startups" />
              <Statistic value={`${numStudents}+`} label="top students" />
              <Statistic value={`${numOffers}+`} label="job offers" />
            </div>
            <Startups />
          </section>
        </div>
      </div>
    </div>
  )
}