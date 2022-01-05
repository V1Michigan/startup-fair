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
        {/* <StockTicker text="IT'S TIME TO BUILD™"></StockTicker> */}

        <Header />

        <div className="bg-gray-100 pb-8">
          <div className="p-8 max-w-6xl mx-auto text-center">
            {/* <div className="max-w-xl flex justify-center align-items mx-auto">
              <div className="text-gray-700 rounded-full border-8 animate-trippy-slow border-black h-16 w-16"></div>
              <div className="text-gray-700 rounded-full border-8 animate-trippy2-slow border-black h-16 w-16"></div>
              <div className="text-gray-700 rounded-full border-8 animate-trippy3-slow border-black h-16 w-16"></div>
            </div> */}
            {/* <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-gray-900 mt-8">
              A one-of-a-kind product studio.
            </h1> */}
            <h2 className="text-2xl md:text-3xl tracking-tight text-gray-800 my-4">
              We can't wait to show you
            </h2>
            <h2 className="text-2xl md:text-xl tracking-tight text-gray-600 my-4">
              February 4th @ 2 pm
            </h2>
            <div class="grid grid-cols-4 divide-x-4 border-b text-5xl sync mt-16 mb-8">
              <div>{days}&nbsp;<label className="text-sm">days</label></div>
              <div>{hrs}&nbsp;<label className="text-sm">hrs</label></div>
              <div>{min}&nbsp;<label className="text-sm">min</label></div>
              <div>{seconds}&nbsp;<label className="text-sm">sec</label></div>
            </div>
          </div>

          <div className="animate-bounce text-center font-bold text-3xl text-gray-700">
            &darr;
          </div>
        </div>

        {/* <Value /> */}
        <Projects />
        {/* <Logos /> */}

        <div id="apply" className="bg-gray-800 py-4 bg-topography-white">
          <section className="max-w-6xl mx-auto my-24 ">
            <div className="m-8">
              <h1 className="text-white text-4xl text-center font-bold tracking-tight my-4">
                Interested? Apply here! ⚡
              </h1>
              <p className="text-white text-xl text-center my-2 max-w-3xl mx-auto">
                Join the fastest growing Unicorns <br/> <i className="text-sm">Limited spots available</i>
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
                className="text-base md:text-xl m-2 font-bold outline-none text-black py-2 px-4 rounded-md bg-white hover:opacity-75"
                onClick={() => {
                  console.log(email);
                  if (sendEmail(email)) {
                    alert("Thanks for submitting, you should receive an email shortly")
                  } else {
                    alert("Please enter a valid email address");
                  }
                }}
              >
                Let's do this ›
              </button>
              <p className="italic text-white mt-2 text-sm">You will receive an email</p>
            </div>
          </section>
        </div>
        <FAQ
          titleUppercase="Questions? We got you"
          color="gray"
          subtitleBold="Frequently Asked Questions"
          listOfQA={[
            {
              question: "When and where is this?",
              answer:
                "On Feburary 4th at 2 pm, it will be held in Ross",
            },
            {
              question: "What is V1?",
              answer:
                "V1 is the community for ambitious student builders at the University of Michigan. Check out more on the website ",
              link: "https://v1michigan.com",
              textAfterLink: "here.",
            },
            {
              question: "How do I get a 1:1 chat with a recruiter?",
              answer:
                "The application will have an optional section. If accepted, you will be matched with companies you are interested in, as well as companies which are interested in you.",
            },
            {
              question: "How do I prepare?",
              answer:
                "You will need a resume, a pitch about yourself, and some business casual clothes.",
            },
            {
              question: "What should I wear?",
              answer:
                "Business casual",
            },
            {
              question: "Is this free?",
              answer:
                "Yes. This is completely free for students to attend. We are affiliated with the University of Michigan",
            },
            {
              question: "Got another question?",
              answer: "Email us at v1startupfair@umich.edu",
            },
          ]}
        />
        <div className="background">
          <p className="footer text-gray-200 text-center py-8 m-0">
            &copy; <b>2021 V1 | v1startupfair@umich.edu</b>
          </p>
        </div>
      </main>
    </>
  );
}
