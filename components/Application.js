import { useState } from 'react';
import { sendEmail } from "../components/functions";

export default function Application() {
  const [email, setEmail] = useState("");

  const submitEmail = () => {
    if (sendEmail(email)) {
      ReactGA.event({
        category: "Button",
        action: "Apply",
        // label: "Submit email",
        label: "Submit email to register interest"
      });
    //   router.push("https://wbkw5amrmmr.typeform.com/v1startupfair");
    } else {
    //   alert("Please enter a valid @umich.edu email address");
        alert("Please enter a valid email address");
    }
  };

  return (<>
    {/* <div id="apply" className="bg-gray-800 py-4 bg-topography-white">
      <section className="max-w-6xl mx-auto my-24 "> */}
        <div className="m-2">
          {/* <h1 className="text-white text-4xl text-center font-bold tracking-tight my-4">
                Interested? Apply here! ⚡
              </h1> */}
          <p className="text-white text-lg text-center max-w-3xl mx-auto font-medium">
            Details for V1 Startup Fair will be announced soon — sign up to be
            the first to know.
            {/* Find your next career-defining role at a high-growth startup.{" "} */}
            {/* <br /> <i className="text-sm">Limited spots available.</i> */}
          </p>
        </div>

        <div className="max-w-md mx-auto m-2 text-center">
          {/* <label className="mb-1 text-gray-200 font-bold text-xl block text-center">
            Email
          </label> */}
          <div className="flex flex-row">
            <input
              className="text-white text-base outline-none bg-transparent border-2 border-yellow-400 py-3 rounded-md shadow-sm px-3 leading-tight focus:outline-none /*opacity-50 cursor-not-allowed*/"
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
            &nbsp;
            <button
              className="text-base md:text-l font-bold outline-none text-black py-2 px-5 rounded-md bg-yellow-400 hover:opacity-75 /*opacity-50 cursor-not-allowed*/"
              onClick={submitEmail}
            >
              Let's do this ›
            </button>
          </div>

          <p className="italic text-white mt-2 text-sm">
            You'll be the first to know when applications open.
            {/* Apps are now closed. */}
          </p>
        </div>
      {/* </section>
    </div> */}
    </>
  );
}
