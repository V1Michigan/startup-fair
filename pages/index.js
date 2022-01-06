import StockTicker from "../components/StockTicker";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { pushToSheets } from "../components/functions";
import SEO from "../components/SEO";
import Header from "../components/Header";
import Value from "../components/Value";
import Projects from "../components/Projects";
import Logos from "../components/Logos";
import FAQ from "../components/FAQ";
import Typist from "react-typist";
import { sendEmail } from "../components/functions";
//The program runs from Late October 2021 to August 8th, 2021.
export default function IndexPage() {
  const [email, setEmail] = useState("");
  const [seconds, setSeconds] = useState(0)
  const [min, setMin] = useState(0)
  const [hrs, setHrs] = useState(0)
  const [days, setDays] = useState(0)
  const router = useRouter();
  const [people, setPeople] = useState([
    "Engineers",
    "Designers",
    "Growth Hackers",
    "Creatives",
    "Builders",
  ]);

  const onTypingDone = () => {
    setPeople([
      "Engineers",
      "Designers",
      "Growth Hackers",
      "Creatives",
      "Builders",
    ]);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(Date.now())
      var time = 1644001200000 - Date.now();
      time = Math.floor(time / 1000)
      setSeconds(time % 60)
      time = Math.floor(time / 60)
      setMin(time % 60)
      time = Math.floor(time / 60)
      setHrs(time % 24)
      time = Math.floor(time / 24)
      setDays(time)
    }, 1000)

    return () => clearInterval(intervalId);
  }, [])

  return (
    <>
      <main>
        <SEO />

        <Header />

        <Projects />

        <div className="bg-white-100 pb-8">
          <div className="p-8 max-w-6xl mx-auto text-center">
            {/* <div className="max-w-xl flex justify-center align-items mx-auto">
              <div className="text-gray-700 rounded-full border-8 animate-trippy-slow border-black h-16 w-16"></div>
              <div className="text-gray-700 rounded-full border-8 animate-trippy2-slow border-black h-16 w-16"></div>
              <div className="text-gray-700 rounded-full border-8 animate-trippy3-slow border-black h-16 w-16"></div>
            </div> */}
            {/* <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-gray-900 mt-8">
              A one-of-a-kind product studio.
            </h1> */}
            <h2 className="text-4xl md:text-4xl tracking-tight text-gray-800 my-4">
              February 4th @ 1pm
            </h2>
            <table
              className="text-lg text-left text-gray-800 border-separate m-auto"
              style={{ borderSpacing: "1em" }}
            >
              <tbody>
                <tr>
                  <td className="font-bold">1:00pm</td>
                  <td>Kickoff + Keynote</td>
                </tr>
                <tr>
                  <td className="font-bold">1:45pm</td>
                  <td>Networking event for students</td>
                </tr>
                <tr>
                  <td className="font-bold">2:45pm</td>
                  <td>Virtual Booths + Tech Talks</td>
                </tr>
                <tr>
                  <td className="font-bold">After the event</td>
                  <td>1:1 meetings with companies</td>
                </tr>
              </tbody>
            </table>
            <div className="countdown-timer grid grid-cols-4 divide-x-4 border-b text-3xl sync my-8 mx-32">
              <div>
                {days}&nbsp;<label className="text-sm">DAYS</label>
              </div>
              <div>
                {hrs}&nbsp;<label className="text-sm">HRS</label>
              </div>
              <div>
                {min}&nbsp;<label className="text-sm">MIN</label>
              </div>
              <div>
                {seconds}&nbsp;<label className="text-sm">SEC</label>
              </div>
            </div>
          </div>

          <div className="animate-bounce text-center font-bold text-3xl text-gray-700">
            &darr;
          </div>
        </div>

        <div id="apply" className="bg-gray-800 py-4 bg-topography-white">
          <section className="max-w-6xl mx-auto my-24 ">
            <div className="m-8">
              <h1 className="text-white text-4xl text-center font-bold tracking-tight my-4">
                Interested? Apply here! ⚡
              </h1>
              <p className="text-white text-xl text-center my-2 max-w-3xl mx-auto">
                Find your next career-defining role at a high-growth startup{" "}
                <br /> <i className="text-sm">Limited spots available.</i>
              </p>
            </div>

            <div className="max-w-md mx-auto m-3 text-center">
              <label className="mb-1 text-gray-200 font-bold text-xl block text-center">
                Email
              </label>
              <input
                className="text-white mt-2 w-3/4 text-base outline-none bg-transparent border-2 border-yellow-400 py-3 rounded-md shadow-sm px-3 leading-tight focus:outline-none"
                type="text"
                placeholder="billymagic@umich.edu"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="text-center">
              <button
                className="text-base md:text-xl m-2 font-bold outline-none text-black py-2 px-4 rounded-md bg-yellow-400 hover:opacity-75"
                onClick={() => {
                  console.log(email);
                  if (sendEmail(email)) {
                    alert(
                      "Thanks for submitting, you should receive an email shortly"
                    );
                  } else {
                    alert("Please enter a valid @umich.edu email address");
                  }
                }}
              >
                Let's do this ›
              </button>
              <p className="italic text-white mt-2 text-sm">
                You will receive an email with the next steps to apply
              </p>
            </div>
          </section>
        </div>
        <FAQ
          subtitleBold="Questions? We got you"
          color="gray"
          listOfQA={[
            {
              question: "When and where is this?",
              answer:
                "February 4th at 1pm ET. It will be a hybrid event held in the Ross School of Business and virtually.",
            },
            {
              question: "What is V1?",
              answer:
                "V1 is the community for ambitious student builders at the University of Michigan. Check out more on the website ",
              link: "https://v1michigan.com",
              textAfterLink: "here.",
            },
            {
              question: "How do I apply to match with companies 1:1?",
              answer:
                "Top candidates can fill out an optional section of the application to apply for 1:1s. We will collect which companies you'd like to meet with to match you with companies who are just as excited about you.",
            },
            {
              question: "How do I prepare?",
              answer:
                "Come prepared with your resume, an elevator pitch for recruiters, and some business casual clothes.",
            },
            {
              question: "What should I wear?",
              answer: "Business casual (or your V1 Startup Fair swag!)",
            },
            {
              question: "Is this free?",
              answer:
                "Yes. This is completely free for University of Michigan students to attend.",
            },
            {
              question: "Got another question?",
              answer: (
                <>
                  Email us at{" "}
                  <a
                    className="underline"
                    href="mailto:v1startupfair@umich.edu"
                  >
                    v1startupfair@umich.edu
                  </a>
                </>
              ),
            },
          ]}
        />
        <div className="background">
          <p className="footer text-gray-200 text-center py-8 m-0">
            &copy;{" "}
            <b>
              2021 V1 |{" "}
              <a className="underline" href="mailto:v1startupfair@umich.edu">
                v1startupfair@umich.edu
              </a>
            </b>
          </p>
        </div>
      </main>
    </>
  );
}
