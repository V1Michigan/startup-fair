import { useState } from "react";
import { sendEmail } from "./functions";
import { useRouter } from "next/router";
import ReactGA from "react-ga";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const signUpForNewsletter = () => {
      router.push("https://v1michigan.com/join")
  };


  return (
    <section className="max-w-screen mt-auto py-12 px-4 bg-gray-800 bg-topography-white">
      <div id="apply">
        <h1 className="text-white text-4xl text-center font-bold tracking-tight my-4">
          Interested?
        </h1>
          <h1 className="text-white text-4xl text-center font-bold tracking-tight my-4">
          Sign up for V1 Platform
        </h1>
        <p className="text-white text-xl text-center my-2 max-w-3xl mx-auto">
          Find your next career-defining role at a high-growth startup. <br />{" "}
        </p>
      </div>

      <div className="max-w-md mx-auto m-3 text-center">
      </div>
      <div className="text-center">
        <button
          className="text-base md:text-xl m-2 font-bold outline-none text-black py-2 px-4 rounded-md bg-yellow-400 /*hover:opacity-75*/"
          onClick={signUpForNewsletter}

        >
          Sign Me Up! ›
        </button>
        <p className="italic text-white mt-2 text-sm">
        </p>
      </div>

      
    </section>
  );
}


