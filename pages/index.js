import StockTicker from "../components/StockTicker";
import { useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import ReactGA from "react-ga";
import SEO from "../components/SEO";
import Header from "../components/Header";
import ValueProp from "../components/ValueProp";
import FAQ from "../components/FAQ";
import CompaniesW22 from "../components/CompaniesW22";
import Schedule from "../components/Schedule";
import Application from "../components/Application";
import NewsletterForm from "../components/NewsletterForm";
import Slideshow from "../components/Slideshow";
import Example from "../components/NavBar"
function initGA() {
  if (process.env.NODE_ENV !== "development") {
    ReactGA.initialize("UA-216661415-1"); // "Startup Fair website" property
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
}


function IndexPage() {
  useEffect(initGA, []); // Only runs once

  return (
    <main>
      <SEO />

      <Example />

      {/* <div className="bg-gray-800 md:flex text-center p-2 tracking-widest">
        <p className="text-white uppercase flex-1 p-2">SEED 🌱</p>
        <p className="text-white uppercase flex-1 p-2">Series A</p>
        <p className="text-white uppercase flex-1 p-2">Series B</p>
        <p className="text-white uppercase flex-1 p-2">Series C</p>
        <p className="text-white uppercase flex-1 p-2">Series D</p>
        <p className="text-white uppercase flex-1 p-2">Series E</p>
        <p className="text-white uppercase flex-1 p-2">IPO 🚀</p>
      </div> */}

      {/* <Header /> */}
      <Slideshow />

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

      <NewsletterForm />

      <Schedule />

      {/* <Slideshow /> */}

      <FAQ
        subtitleBold="Questions? We got you."
        color="gray"
        listOfQA={[
          {
            question: "What if I already have a job for the summer?",
            answer:
              "Not a problem at all, still apply! Companies are recruiting for Winter 2024, Summer 2024, and Fall 2024.",
          },
          {
            question: "When and where is this?",
            answer:
              "V1 Startup Fair is October 12th (time TBD). It will be a hybrid event held in the Ross School of Business featuring a mix of startup booths, tech talks with founder, and opportunites to meet like minded students.",
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
            question: "How do I prepare?",
            answer:
              "Come prepared with your resume, an elevator pitch for recruiters, and some business casual clothes.",
          },
          {
            question: "Can my company recruit at Startup Fair?",
            answer: (
              <>
                We'd love to chat about whether your company would be a fit for
                Startup Fair — please drop us an email at{" "}
                <a className="underline" href="mailto:v1startupfair@umich.edu">
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
                <a className="underline" href="mailto:v1startupfair@umich.edu">
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
            { name: "Hari", linkedin: "https://www.linkedin.com/in/hariharan-chidambaram/" },
            { name: "Pranay", linkedin: "https://www.linkedin.com/in/pranay-gupta1/" },
            { name: "Deric", linkedin: "https://www.linkedin.com/in/dericdinudaniel/" },
            { name: "Dev", linkedin: "https://www.linkedin.com/in/dev-kunjadia/" },
            { name: "Lucas", linkedin: "https://www.linkedin.com/in/lbiondos/" },
            { name: "Daphne", linkedin: "https://www.linkedin.com/in/dvtsai/" },
            { name: "Akira", linkedin: "https://www.linkedin.com/in/liyile/"},
            { name: "Tyrus", linkedin: "https://www.linkedin.com/in/tyrus-yeo/"},
            { name: "Amy", linkedin: "https://www.linkedin.com/in/amyjun26/"},
            { name: "Adviti", linkedin: "https://www.linkedin.com/in/advitimishra/"},
            { name: "Spencer", linkedin: "https://www.linkedin.com/in/spencer-goodwin/"},
            { name: "Kevin", linkedin: "https://www.linkedin.com/in/kevin1015wang/"},
            { name: "Navya", linkedin: "https://www.linkedin.com/in/navyakumar0752/"},
            { name: "Vijaya", linkedin: "https://www.linkedin.com/in/vijaya-kukutla-a86495192/"},
            { name: "Cole", linkedin: "https://www.linkedin.com/in/cole-morehouse-b685b5220/"},
            { name: "Raghav", linkedin: "https://www.linkedin.com/in/raghav-bhat-02/"},
            { name: "Sohavni", linkedin: "https://www.linkedin.com/in/sohavni-singh/"},
            { name: "Brian", linkedin: "https://www.linkedin.com/in/brian-z-travis/"},
            { name: "Angela", linkedin: "https://www.linkedin.com/in/angela-yuan1/"},
            { name: "Alex", linkedin: "https://www.linkedin.com/in/alexandru-beloiu/"},
            { name: "Daniel", linkedin: "https://www.linkedin.com/in/danielmalis/"},
            { name: "Advait", linkedin: "https://www.linkedin.com/in/advaitiyer/"},
          ].map((member) => (
            <div className="tooltip relative inline-block z-10" key={member.name}>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <img
                  className="object-cover w-12 h-12 border-2 border-white rounded-full"
                  src={`/team/${member.name}.jpg`}
                  alt={`Profile image of ${member.name}`}
                />
              </a>
              <span className="tooltiptext">{member.name}</span>
            </div>
          ))}

          <p className="text-center text-white mt-2 tracking-tight font-bold">
            V1 Michigan Startup Fair Team
          </p>
        </div>
        <p className="footer text-gray-200 text-center py-8 px-4 m-0">
          &copy;{"  "}
          <b>
            2023 V1 |{"  "}
            <a
              className="underline hover:opacity-90"
              href="mailto:v1startupfair@umich.edu"
            >
              v1startupfair@umich.edu
            </a>
          </b>
        </p>
      </div>
    </main>
  );
}




const withParallax = (Component) => (props) =>
(
  <ParallaxProvider>
    <Component {...props} />
  </ParallaxProvider>
);

export default withParallax(IndexPage);
