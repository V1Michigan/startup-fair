import { useState, useEffect } from "react";

export default function Schedule() {
  const [seconds, setSeconds] = useState(0);
  const [min, setMin] = useState(0);
  const [hrs, setHrs] = useState(0);
  const [days, setDays] = useState(0);
  const startDate = new Date("11/18/2022 13:00:00");

  useEffect(() => {
    const intervalId = setInterval(() => {
      let time = Math.max(startDate.getTime() - Date.now(), 0);
      time = Math.floor(time / 1000);
      setSeconds(time % 60);
      time = Math.floor(time / 60);
      setMin(time % 60);
      time = Math.floor(time / 60);
      setHrs(time % 24);
      time = Math.floor(time / 24);
      setDays(time);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-white-100 max-w-6xl mx-auto text-center">
      {/*<h2 className="text-4xl md:text-5xl tracking-tight text-gray-800 my-4 font-bold">
          Schedule
        </h2>
        <p className="text-xl tracking-tight font-bold text-gray-800">
          November 16th @ 1 PM ET
        </p>
         <table
          className="text-lg text-left text-gray-800 border-separate m-auto"
          style={{ borderSpacing: "1em" }}
        >
          <tbody>
            <tr>
              <td className="font-bold">1:00 PM</td>
              <td>Kickoff &amp; keynote</td>
            </tr>
            <tr>
              <td className="font-bold">1:45 PM</td>
              <td>Networking event for students</td>
            </tr>
            <tr>
              <td className="font-bold">2:45 PM</td>
              <td>Virtual booths &amp; tech talks</td>
            </tr>
            <tr>
              <td className="font-bold">After event</td>
              <td>1:1 meetings with companies</td>
            </tr>
          </tbody>
        </table> */}
      <div className="countdown-timer p-12 grid grid-cols-4 divide-x-4 border-b text-3xl sync mx-32">
        <div>
          {days}&nbsp;
          <label className="text-sm">{days === 1 ? "DAY" : "DAYS"}</label>
        </div>
        <div>
          {hrs}&nbsp;
          <label className="text-sm">{hrs === 1 ? "HR" : "HRS"}</label>
        </div>
        <div>
          {min}&nbsp;<label className="text-sm">MIN</label>
        </div>
        <div>
          {seconds}&nbsp;<label className="text-sm">SEC</label>
        </div>
      </div>

      {/* <div className="animate-bounce text-center font-bold text-3xl text-gray-700">
        &darr;
      </div> */}
    </div>
  );
}
