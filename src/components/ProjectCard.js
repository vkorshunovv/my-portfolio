

export default function ProjectCard({isDarkMode, img_dark, img_light}) {
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
                Frontend Developer Portfolio
              </span>
              <p
                className={`text-pretty font-normal text-sm leading-normal ${
                  isDarkMode ? "text-slate-400" : "text-slate-800"
                }`}
              >
                My portfolio website is more than just a digital resume — it's a
                dynamic platform where I showcase my creativity, skills, and
                projects in web development. With a modern, interactive and
                responsive design, website is accessible across devices and
                ensures a seamless user experience for anyone interested in
                exploring my work and connecting with me.
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
                    React
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
                    Tailwind
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
                    Netlify
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
                src={isDarkMode ? img_dark : img_light}
                alt="Portfolio Web Site"
                className={`rounded-2xl hover:scale-105 ease duration-300 w-full h-full grayscale hover:grayscale-0 hover:shadow-2xl border ${
                  isDarkMode
                    ? "hover:shadow-teal-950 border-teal-500/30 "
                    : "border-teal-100/60 "
                }`}
              />
            </a>
          </div>
        </section>
        </>
    )
}