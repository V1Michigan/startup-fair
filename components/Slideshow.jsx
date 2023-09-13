import { useState, useEffect } from "react";
import Recap from "./Recap";
import CompaniesW22 from "./CompaniesW22";
import CompaniesF22 from "./CompaniesF22";
import TitleSlide from "./TitleSlide";
import styles from '../styles/Slideshow.module.css';

const recaps = [
  {
    isSpecial: true,
  },
  {
    Header: "Last Year's Recap",
    Date: "November 15th, 2022",
    Startups: CompaniesF22,
    numStartups: 14,
    numStudents: 200,
    numOffers: 20,
  },
  {
    Header: "W22 Recap",
    Date: "February 4th, 2022",
    Startups: CompaniesW22,
    numStartups: 17,
    numStudents: 200,
    numOffers: 20,
  },
];

export default function Slideshow() {
  const [index, setIndex] = useState(0);
  const [slideStatus, setSlideStatus] = useState("slide-entered");

  useEffect(() => {
    setSlideStatus("slide-entering");

    const timeoutId = setTimeout(() => {
      setSlideStatus("slide-entered");
    }, 10);

    return () => clearTimeout(timeoutId);
  }, [index]);

  return (
    <div className="relative">
      <div className={`relative ${styles[slideStatus]}`}>
        {recaps[index].isSpecial ? (
          <TitleSlide />
        ) : (
          <Recap
            Header={recaps[index].Header}
            Date={recaps[index].Date}
            Startups={recaps[index].Startups}
            numStartups={recaps[index].numStartups}
            numStudents={recaps[index].numStudents}
            numOffers={recaps[index].numOffers}
          />
        )}
      </div>

      <div className="absolute flex gap-4 bottom-2 left-1/2 transform -translate-x-1/2 z-10">
        {recaps.map((_, i) => (
          <div onClick={() => setIndex(i)} className={`cursor-pointer rounded-full border-white border-2 w-5 h-5 ${index === i ? "bg-white" : "bg-transparent"}`}></div>
        ))}
      </div>

      <div onClick={() => setIndex(prev => (prev - 1 + recaps.length) % recaps.length)} className="hover:opacity-70 transition cursor-pointer text-white absolute left-5 top-1/2 transform translate-y-1/2 text-5xl z-10">
        &larr;
      </div>

      <div onClick={() => setIndex(prev => (prev + 1) % recaps.length)} className="hover:opacity-70 transition cursor-pointer text-white absolute right-5 top-1/2 transform translate-y-1/2 text-5xl z-10">
        &rarr;
      </div>
    </div>
  );
}
