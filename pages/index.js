import StockTicker from "../components/StockTicker";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ParallaxProvider } from "react-scroll-parallax";
import ReactGA from "react-ga";
import SEO from "../components/SEO";
import Header from "../components/Header";
import ValueProp from "../components/ValueProp";
import Logos from "../components/Logos";
import FAQ from "../components/FAQ";
import { sendEmail } from "../components/functions";

function initGA() {
  if (process.env.NODE_ENV !== "development") {
    ReactGA.initialize("UA-216661415-1"); // "Startup Fair website" property
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
}

function IndexPage() {
  const [email, setEmail] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [min, setMin] = useState(0);
  const [hrs, setHrs] = useState(0);
  const [days, setDays] = useState(0);
  const router = useRouter();

  const submitEmail = () => {
    if (sendEmail(email)) {
      ReactGA.event({
        category: "Button",
        action: "Apply",
        label: "Submit email",
      });
      router.push("https://wbkw5amrmmr.typeform.com/v1startupfair");
    } else {
      alert("Please enter a valid @umich.edu email address");
    }
  };

  useEffect(initGA, []); // Only runs once

  useEffect(() => {
    const intervalId = setInterval(() => {
      var time = 1643997600000 - Date.now();
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
    <>
      <main>
        <SEO />

        {/* <div className="bg-gray-800 md:flex text-center p-2 tracking-widest">
        <p className="text-white uppercase flex-1 p-2">SEED 🌱</p>
        <p className="text-white uppercase flex-1 p-2">Series A</p>
        <p className="text-white uppercase flex-1 p-2">Series B</p>
        <p className="text-white uppercase flex-1 p-2">Series C</p>
        <p className="text-white uppercase flex-1 p-2">Series D</p>
        <p className="text-white uppercase flex-1 p-2">Series E</p>
        <p className="text-white uppercase flex-1 p-2">IPO 🚀</p>
      </div> */}

        <Header />

        <StockTicker
          text={[
            "Product Manager",
            "Backend Engineer",
            "UX Designer",
            "Growth Marketer",
            "Data Scientist",
            "Security Engineer",
            "Mobile Engineer",
            "Graphic Designer",
            "Frontend Engineer",
            "Machine Learning Engineer",
            "Software Engineer",
          ]}
        />

        <ValueProp />

        <div className="bg-white-100 pb-8">
          <div className="p-8 max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl tracking-tight text-gray-800 my-4 font-bold">
              Schedule
            </h2>
            <p className="text-xl tracking-tight font-bold text-gray-800">
              February 4th @ 1 PM ET
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
                Find your next career-defining role at a high-growth startup.{" "}
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
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    submitEmail();
                  }
                }}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="text-center">
              <button
                className="text-base md:text-xl m-2 font-bold outline-none text-black py-2 px-4 rounded-md bg-yellow-400 hover:opacity-75"
                onClick={submitEmail}
              >
                Let's do this ›
              </button>
              <p className="italic text-white mt-2 text-sm">
                You will receive an email with the next steps to apply.
              </p>
            </div>
          </section>
        </div>
        <FAQ
          subtitleBold="Questions? We got you."
          color="gray"
          listOfQA={[
            {
              question: "What if I already have a job for the summer?",
              answer:
                "Not a problem at all, still apply! Companies are recruiting for Summer 2022, Fall 2022, and Winter 2023.",
            },
            {
              question: "When and where is this?",
              answer:
                "V1 Startup Fair is February 4th at 1 PM ET. It will be a hybrid event held in the Ross School of Business featuring a mix of 1:1 meetings, startup booths, and founder speakers.",
            },
            {
              question: "Who is this designed for?",
              answer:
                "This is designed for undergrad and new grad engineers, designers, and product people who are actively searching for their next roles at hyper-growth startups. We welcome and encourage applicants from all backgrounds to apply.",
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
              question: "Can my company recruit at Startup Fair?",
              answer: (
                <>
                  We'd love to chat about whether your company would be a fit
                  for Startup Fair — please drop us an email at{" "}
                  <a
                    className="underline"
                    href="mailto:v1startupfair@umich.edu"
                  >
                    v1startupfair@umich.edu
                  </a>{" "}
                  and we'll get in touch!
                </>
              ),
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
          <br />
          <br />
          <div className="text-center mx-auto -space-x-4 mb-4">
            {[
              "varun",
              "samay",
              "megan",
              "reese",
              "divya",
              "drew",
              "alaa",
              "elliot",
              "emir",
              "leon",
            ].map((member) => (
              <img
                className="relative z-10 inline object-cover w-12 h-12 border-2 border-white rounded-full"
                src={`/team/${member}.jpg`}
                alt={`Profile image of ${member}`}
                key={member}
              />
            ))}
            <p className="text-center text-white mt-2 tracking-tight font-bold">
              V1 Michigan Startup Fair Team
            </p>
          </div>
          <p className="footer text-gray-200 text-center py-8 m-0">
            &copy;{" "}
            <b>
              2022 V1 |{" "}
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

const withParallax = (Component) => (props) =>
  (
    <ParallaxProvider>
      <Component {...props} />
    </ParallaxProvider>
  );

export default withParallax(IndexPage);
