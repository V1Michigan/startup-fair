import { useState, useEffect, useRef } from "react";
import Recap from "./Recap";
import CompaniesW22 from "./CompaniesW22";
import CompaniesF22 from "./CompaniesF22";
import CompaniesF23 from "./CompaniesF23";
import TitleSlide from "./TitleSlide";

import styles from '../styles/Slideshow.module.css';

const recaps = [
  {
    isTitle: true, // Identify as title slide
  },
  {
    Header: "Last Year's Recap",
    Date: "October 12th, 2023",
    Startups: CompaniesF23,
    numStartups: 17,
    numStudents: 400,
    numOffers: 20 // idk if this is true
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
];

export default function Slideshow() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % recaps.length);
    }, 5000); // Change slide every 5 seconds

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="relative">
      {recaps[index].isTitle ? (
        // Special Title slide rendering
        <TitleSlide />
      ) : (
        // Normal slide rendering
        <Recap
          Header={recaps[index].Header}
          Date={recaps[index].Date}
          Startups={recaps[index].Startups}
          numStartups={recaps[index].numStartups}
          numStudents={recaps[index].numStudents}
          numOffers={recaps[index].numOffers}
        />
      )}
      <div className="absolute flex gap-4 bottom-2 left-1/2 transform -translate-x-1/2">
        {recaps.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`cursor-pointer rounded-full border-white border-2 w-4 h-4 ${
              index === i ? "bg-white" : "bg-transparent"
            }`}
          ></div>
        ))}
      </div>
      <div
        onClick={() => setIndex((prev) => (prev - 1 + recaps.length) % recaps.length)}
        className="hover:opacity-70 transition cursor-pointer text-white absolute left-5 top-1/2 transform translate-y-1/2 text-5xl"
      >
        &larr;
      </div>
      <div
        onClick={() => setIndex((prev) => (prev + 1) % recaps.length)}
        className="hover:opacity-70 transition cursor-pointer text-white absolute right-5 top-1/2 transform translate-y-1/2 text-5xl"
      >
        &rarr;
      </div>
    </div>
  );
}
