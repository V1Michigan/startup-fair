import { useState } from "react";
import StockTicker from "../components/StockTicker";
import { useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import ReactGA from "react-ga";
import SEO from "../components/SEO";
import ValueProp from "../components/ValueProp";
import FAQ from "../components/FAQ";
import Schedule from "../components/Schedule";
import NewsletterForm from "../components/NewsletterForm";
import Slideshow from "../components/Slideshow";
import Example from "../components/NavBar"
import { XMarkIcon } from '@heroicons/react/24/solid';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = require('@supabase/supabase-js').createClient(supabaseUrl, supabaseKey);

const Banner = ({ text, link, buttonText }) => {
  const [open, setOpen] = useState(true);
  if (!open) {
    return null;
  }
  return (
    <div className="bg-yellow-600 p-3">
      <div className="flex items-center justify-between flex-wrap">
        <div className="flex items-center">
          <span className="flex p-2 rounded-lg bg-yellow-800">
            {/* <SpeakerphoneIcon className="h-6 w-6 text-white" aria-hidden="true" /> */}
            <img className="h-6 w-6" src="/rocket_icon.png" alt="" />
          </span>
        </div>
        <p className="p-3 flex-1 flex-grow font-medium font-sans text-white">
          {text}
        </p>
        <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto z-50">
          <a
            href={link}
            className="font-sans flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-yellow-600 bg-white hover:bg-yellow-200 transition duration-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            {buttonText}
          </a>
        </div>
        <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
          <button
            type="button"
            className="-mr-1 flex p-2 rounded-md hover:bg-yellow-500 transition duration-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            onClick={() => setOpen(false)}
          >
            <span className="sr-only">Dismiss</span>
            <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};

function initGA() {
  if (process.env.NODE_ENV !== "development") {
    ReactGA.initialize("UA-216661415-1"); // "Startup Fair website" property
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
}

function IndexPage() {
  useEffect(initGA, []); // Only runs once

  const [banners, setBanners] = useState(null);
  const [error, setError] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const fetchBanners = async () => {      
      let { data: data1, error1 } = await supabase
      .from('bannerflags')
      .select('*')
      .eq('banner_id', '_v1Page');

      if (error1) {
        console.error('Error fetching banner flags:', error1);
        setError(true)
      } else {
        console.log('Data:', data1);
        let realQuery = data1[0].link;
        let { data: data2, error2 } = await supabase
        .from('bannerflags')
        .select('*')
        .eq('banner_id', `${realQuery}`);
        if (realQuery == "false") {
          setToggle(false);
        }
        if (error2) {
          console.error('Error fetching banner flags:', error2);
          setError(true);
        } else {
          setBanners(data2); 
          console.log('Data:', data2);
        }
      }
    };

    fetchBanners();
  }, []);

  useEffect(() => {
    const fetchBanners = async () => {      
      let { data: data1, error1 } = await supabase
      .from('bannerflags')
      .select('*')
      .eq('banner_id', '_v1Page');

      if (error1) {
        console.error('Error fetching banner flags:', error1);
        setError(true)
      } else {
        console.log('Data:', data1);
        let realQuery = data1[0].link;
        let { data: data2, error2 } = await supabase
        .from('bannerflags')
        .select('*')
        .eq('banner_id', `${realQuery}`);
        if (error2) {
          console.error('Error fetching banner flags:', error2);
          setError(true);
        } else {
          setBanners(data2 || []); 
          console.log('Data:', data2);
        }
      }
    };

    fetchBanners();
  }, []);

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
      {(error || banners?.length) == 0 && toggle ? (
          <Banner
          key={"error"} // Unique key for each banner
          text={
          <>
            {"Invalid banner ID. Please try again later."}
          </>
          }
          link={'#'} // Provide a default link if none exists
          buttonText={'Learn more'} // Provide a default button text if none exists
          open={true}
        />
      ) : (
      banners && banners.map((banner) =>
        banner.message?.length > 0 && (
        <Banner
          key={banner.id} // Unique key for each banner
          text={
          <>
            {banner.message}
          </>
          }
          link={banner.link || '#'} // Provide a default link if none exists
          buttonText={banner.buttonText || 'Learn more'} // Provide a default button text if none exists
          open={true}
        />
        )
      )
      )}
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
              "Not a problem at all, still apply! Companies are recruiting for Fall 2024, Winter 2025, Summer 2025.",
          },
          {
            question: "When and where is this?",
            answer:
              "V1 Startup Fair is October 11th (time TBD). It will be a hybrid event held in the Ross School of Business featuring a mix of startup booths, tech talks with founder, and opportunites to meet like minded students.",
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
            { name: "Anant", linkedin: "https://www.linkedin.com/in/anant-g/" },
            { name: "Lance", linkedin: "https://www.linkedin.com/in/lancefuchia/" },
            { name: "Shrey", linkedin: "https://www.linkedin.com/in/shreypandya/" },
            { name: "Mihir", linkedin: "https://www.linkedin.com/in/mihir-vador-166b3b173/" },
            { name: "Divya", linkedin: "https://www.linkedin.com/in/divyaponda/" },
            { name: "Anu", linkedin: "https://www.linkedin.com/in/anuhea-tao/" },
            { name: "Sanika", linkedin: "https://www.linkedin.com/in/sanika-kothari/"},
            { name: "Jonathan", linkedin: "https://www.linkedin.com/in/jonathan-jasica-a24865201/"},
            { name: "Roshni", linkedin: "https://www.linkedin.com/in/roshni-koduri/"},
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
            2024 V1 |{"  "}
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
