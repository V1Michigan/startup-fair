export default function TitleSlide() {
  return (
    <div style={{ height: 'calc(100vh - 108px)' }}>
      <div className="h-full w-full bg-landing bg-cover bg-center bg-no-repeat">
        <div className="h-full w-full bg-shade flex items-center justify-center">
          <section className="max-w-6xl mx-auto my-4 text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight font-bold">
              <span className="text-yellow-500">V1</span> Startup Fair
            </h1>
            <p className="mt-4 mb-6 text-xl md:text-3xl lg:text-4xl text-gray-400 tracking-tight font-bold"> {/* Adjusted sizes and added mt-4 and mb-6 for spacing */}
              October 12th, 2023
            </p>
            <a href="https://www.typeform.com/" target="_blank">
              <div className="tooltip">
                <button className="bg-gray-400 cursor-not-allowed text-white py-3 px-6 rounded text-med font-bold" disabled>
                  {/* Made the button larger by increasing the padding and font-size */}
                  Apply Now &rsaquo;
                </button>
                <span className="tooltiptext-title">Coming soon!</span>
              </div>
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
