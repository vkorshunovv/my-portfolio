import "./projects.css";

export default function Projects({ isDarkMode }) {
  return (
    <div
      id="projects"
      className={`min-h-screen ${
        isDarkMode ? "bg-slate-950 text-slate-100" : "text-slate-800"
      }`}
    >
      <div className="flex justify-center">
        <div className="m-20">
          <strong className=" text-8xl">
            My Projects
            <span
              className={`${isDarkMode ? "text-red-500" : "text-red-400"} `}
            >
              *
            </span>
            <br />
            <span className="text-xl justify-center flex text-slate-400 mt-3 blur-sm transition delay-100 duration-300 hover:blur-none hover:cursor-pointer">
              <span
                className={`${isDarkMode ? "text-red-500" : "text-red-400"} `}
              >
                *
              </span>
              currently unavailable
            </span>
          </strong>
        </div>
      </div>
      <div className="grid grid-cols-12 grid-rows-3 ">
        <section className="col-start-2 col-end-12 row-span-1 flex justify-between items-center ">
          <div
            className={`basis-5/12 bg-gradient-to-l rounded-2xl mr-6 size-48 blur-2xl reveal fade-bottom ${
              isDarkMode
                ? "from-cyan-950 to-emerald-950"
                : "from-red-300 to-rose-200"
            }`}
          >
            <div className="flex justify-start flex-wrap animate-pulse"></div>
          </div>
          <div
            className={`basis-7/12 bg-gradient-to-r rounded-2xl ml-6 size-96 flex flex-wrap justify-start blur-2xl reveal fade-bottom ${
              isDarkMode
                ? "from-emerald-950 to-cyan-950"
                : "from-rose-200 to-red-300"
            }`}
          ></div>
        </section>
        <section className="col-start-2 col-end-12 row-span-2 flex justify-between items-center">
          <div
            className={`basis-5/12 bg-gradient-to-l rounded-2xl mr-6 size-48 blur-2xl reveal fade-bottom ${
              isDarkMode
                ? "from-cyan-950 to-emerald-950"
                : "from-red-300 to-rose-200"
            }`}
          >
            <div className="flex justify-start flex-wrap animate-pulse"></div>
          </div>
          <div
            className={`basis-7/12 bg-gradient-to-r rounded-2xl ml-6 size-96 flex flex-wrap justify-start blur-2xl reveal fade-bottom ${
              isDarkMode
                ? "from-emerald-950 to-cyan-950"
                : "from-rose-200 to-red-300"
            }`}
          ></div>
        </section>
        <section className="col-start-2 col-end-12 row-span-3 flex justify-between items-center mb-36">
          <div
            className={`basis-5/12 bg-gradient-to-l rounded-2xl mr-6 size-48 blur-2xl reveal fade-bottom ${
              isDarkMode
                ? "from-cyan-950 to-emerald-950"
                : "from-red-300 to-rose-200"
            }`}
          >
            <div className="flex justify-start flex-wrap animate-pulse "></div>
          </div>
          <div
            className={`basis-7/12 bg-gradient-to-r rounded-2xl ml-6 size-96 flex flex-wrap justify-start blur-2xl reveal fade-bottom ${
              isDarkMode
                ? "from-emerald-950 to-cyan-950"
                : "from-rose-200 to-red-300"
            }`}
          ></div>
        </section>
      </div>
    </div>
  );
}
