import { useState } from "react"
import Recap from "./Recap"
import CompaniesW22 from "./CompaniesW22"
import CompaniesF22 from "./CompaniesF22"
import TitleSlide from "./TitleSlide"
import CompaniesF23 from "./CompaniesF23"

const recaps = [
  {
    isTitle: true, // Identify as title slide
  },
  {
    Header: "F23 Recap",
    Date: "October 12th, 2023",
    Startups: CompaniesF23,
    numStartups: 17,
    numStudents: 220,
    numOffers: 30
  },
  {
    Header: "F22 Recap",
    Date: "November 15th, 2022",
    Startups: CompaniesF22,
    numStartups: 14,
    numStudents: 200,
    numOffers: 20
  },
  {
    Header: "W22 Recap",
    Date: "February 4th, 2022",
    Startups: CompaniesW22,
    numStartups: 17,
    numStudents: 200,
    numOffers: 20
  }
]
export default function Slideshow() {
  
  const [ index, setIndex ] = useState(0)
  
  return (
    
    <div className="relative">
      {
        recaps[index].isTitle ?
          // Special Title slide rendering
          <TitleSlide />
          :
          // Normal slide rendering
          <Recap Header={recaps[index].Header} Date={recaps[index].Date} Startups={recaps[index].Startups} numStartups={recaps[index].numStartups} numStudents={recaps[index].numStudents} numOffers={recaps[index].numOffers} />
      }
      <div className="absolute flex gap-4 bottom-2 left-1/2 transform -translate-x-1/2">
        {recaps.map((_, i) => (
          <div onClick={() => setIndex(i)} className={`cursor-pointer rounded-full border-white border-2 w-4 h-4 ${index === i ? "bg-white" : "bg-transparent"}`}></div>
        ))}
      </div>
      <div onClick={() => setIndex(prev => (prev - 1 + recaps.length) % recaps.length)} className="hover:opacity-70 transition cursor-pointer text-white absolute left-5 top-1/2 transform translate-y-1/2 text-5xl">
        &larr;
      </div>
      <div onClick={() => setIndex(prev => (prev + 1) % recaps.length)} className="hover:opacity-70 transition cursor-pointer text-white absolute right-5 top-1/2 transform translate-y-1/2 text-5xl">
        &rarr;
      </div>
    </div>
  )
}