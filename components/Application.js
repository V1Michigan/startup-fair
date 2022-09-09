import { useState } from "react";
import { pushToSheets } from "../components/functions";
import ReactGA from "react-ga";

export default function Application() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submitEmail = () => {
    if (pushToSheets(email)) {
      ReactGA.event({
        category: "Button",
        action: "Apply",
        // label: "Submit email",
        label: "Submit email to register interest",
      });
      //   router.push("https://wbkw5amrmmr.typeform.com/v1startupfair");
      setSubmitted(true);
      setEmail("");
    } else {
      //   alert("Please enter a valid @umich.edu email address");
      alert("Please enter a valid email address");
    }
  };

  return (
    <section className="max-w-6xl mx-auto my-8 mt-auto">
      <div className="m-2">
        {/* <h1 className="text-white text-4xl text-center font-bold tracking-tight my-4">
                Interested? Apply here! ⚡
              </h1> */}
        <p className="text-white text-lg md:text-xl font-bold">
          Details for V1 Startup Fair will be announced soon — sign up to be the
          first to know.
          {/* Find your next career-defining role at a high-growth startup.{" "} */}
          {/* <br /> <i className="text-sm">Limited spots available.</i> */}
        </p>
      </div>

      <div className="max-w-xl mx-auto my-8 text-center">
        {/* <label className="mb-1 text-gray-200 font-bold text-xl block text-center">
            Email
          </label> */}
        <div className="flex flex-row flex-wrap gap-2 justify-center md:flex-no-wrap px-10">
          <input
            className={`text-white text-lg outline-none bg-transparent border-2 border-yellow-400 py-3 rounded-md shadow-sm px-3 leading-tight focus:outline-none ${submitted && "opacity-50 cursor-not-allowed"}`}
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
            disabled={submitted}
          />
          <button
            className={`text-base md:text-lg font-bold outline-none text-black py-2 px-5 rounded-md bg-yellow-400 ${submitted ? "opacity-50 cursor-not-allowed" : "hover:opacity-75"} `}
            onClick={submitEmail}
            disabled={submitted}
          >
             {submitted ? "Submitted! ✅" : "Let's do this ›"}
          </button>
        </div>

        <p className="italic text-white mt-4 text-md">
          You'll be the first to know when applications open.
          {/* Apps are now closed. */}
        </p>
      </div>
    </section>
  );
}
