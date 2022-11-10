import { useState } from "react";
import { sendEmail } from "../components/functions";
import { useRouter } from "next/router";
import ReactGA from "react-ga";

export default function Application() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const submitEmail = () => {
    if (sendEmail(email)) {
      ReactGA.event({
        category: "Button",
        action: "Apply",
        label: "Submit email",
      });
      router.push("https://v1michigan.typeform.com/apply");
    } else {
      alert("Please enter a valid @umich.edu email address");
    }
  };

  return (
    <section className="max-w-screen mt-auto py-12 px-4 bg-gray-800 bg-topography-white">
      <div id="apply">
        <h1 className="text-white text-4xl text-center font-bold tracking-tight my-4">
          Interested? Apply here! ⚡
        </h1>
        <p className="text-white text-xl text-center my-2 max-w-3xl mx-auto">
          Find your next career-defining role at a high-growth startup. <br />{" "}
          <i className="text-sm">Limited spots available.</i>
        </p>
      </div>

      <div className="max-w-md mx-auto m-3 text-center">
        <label className="mb-1 text-gray-200 font-bold text-xl block text-center">
          Email
        </label>
        <input
          className="text-white mt-2 w-3/4 text-base outline-none bg-transparent border-2 border-yellow-400 py-3 rounded-md shadow-sm px-3 leading-tight focus:outline-none opacity-50 cursor-not-allowed"
          type="text"
          placeholder="billymagic@umich.edu"
          value={email}
          disabled
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
          className="text-base md:text-xl m-2 font-bold outline-none text-black py-2 px-4 rounded-md bg-yellow-400 /*hover:opacity-75*/ opacity-50 cursor-not-allowed"
          // onClick={submitEmail}
          disabled
        >
          Let's do this ›
        </button>
        <p className="italic text-white mt-2 text-sm">
          {/* You will receive an email with the next steps to apply. */}
          Student applications are now closed.
        </p>
      </div>
    </section>
  );
}
