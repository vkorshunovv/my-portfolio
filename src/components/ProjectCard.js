export default function ProjectCard({ isDarkMode, main }) {
  return (
    <>
      <section className="col-start-1 lg:col-start-2 col-end-5 lg:col-end-12 row-span-1 block lg:flex justify-between items-center pt-20 m-4 lg:m-0 lg:pt-0 space-y-5 lg:space-y-0 ">
        <div
          className={`w-full lg:basis-5/12 bg-gradient-to-l rounded-2xl lg:mr-6 size-24 lg:size-56 reveal fade-bottom ${
            isDarkMode
              ? "from-cyan-950 to-emerald-950"
              : "from-red-300 to-rose-200"
          }`}
        >
          <div className="h-full p-4 flex flex-col justify-between">
            <span
              className={`${
                isDarkMode ? "text-teal-300" : "text-red-900"
              } text-xl font-medium `}
            >
              {main.title}
            </span>
            <p
              className={`text-pretty font-normal text-sm leading-normal ${
                isDarkMode ? "text-slate-400" : "text-slate-800"
              }`}
            >
              {main.description}
            </p>
            <div className="flex flex-row space-x-3">
              <div
                className={` rounded-full ${
                  isDarkMode ? "bg-teal-400/10" : "bg-red-600/10"
                } `}
              >
                <p
                  className={`px-2 py-1 text-xs font-medium ${
                    isDarkMode ? "text-teal-300" : "text-red-800"
                  }`}
                >
                  {main.assets && main.assets.length && main.assets[0]}
                </p>
              </div>
              <div
                className={` rounded-full ${
                  isDarkMode ? "bg-teal-400/10" : "bg-red-600/10"
                } `}
              >
                <p
                  className={`px-2 py-1 text-xs font-medium ${
                    isDarkMode ? "text-teal-300" : "text-red-800"
                  }`}
                >
                  {main.assets && main.assets.length && main.assets[1]}
                </p>
              </div>
              <div
                className={` rounded-full ${
                  isDarkMode ? "bg-teal-400/10" : "bg-red-600/10"
                } `}
              >
                <p
                  className={`px-2 py-1 text-xs font-medium ${
                    isDarkMode ? "text-teal-300" : "text-red-800"
                  }`}
                >
                  {main.assets && main.assets.length && main.assets[2]}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:basis-7/12 lg:ml-6 size-48 lg:size-96 reveal fade-bottom rounded-2xl ">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="size-full"
          >
            <img
              src={isDarkMode ? main.img_dark : main.img_light}
              alt={main.title}
              className="rounded-2xl hover:scale-105 ease duration-300 w-full h-full grayscale hover:grayscale-0 hover:shadow-2xl"
            />
          </a>
        </div>
      </section>
    </>
  );
}
