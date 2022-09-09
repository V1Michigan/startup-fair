export default function DownArrow({ children }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="#f3f3f3"
      className="animate-bounce cursor-pointer h-8 w-8 mt-6"
      onClick={() => (
        window.scrollTo({
          top: window.innerHeight,
          behavior: "smooth",
        })
      )}
    >
      <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
      clipRule="evenodd"
      />
    </svg>
  )
};
