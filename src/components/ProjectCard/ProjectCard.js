export default function ProjectCard({ darkMode, main }) {
  return (
    <>
      <section className="col-start-1 lg:col-start-2 col-end-5 lg:col-end-12 row-span-1 block lg:flex justify-between items-center  m-4 lg:m-0 lg:pt-0 space-y-5 lg:space-y-0 pt-16 lg:pt-0">
        <div
          className={`w-full flex items-center lg:basis-5/12 bg-gradient-to-l rounded-2xl lg:mr-6 size-64 lg:size-56 reveal fade-bottom ${
            darkMode
              ? "from-cyan-950 to-emerald-950"
              : "from-red-300 to-rose-200"
          }`}
        >
          <div className="h-fit gap-y-3 p-3 lg:p-4 flex flex-col justify-between">
            <span
              className={`${
                darkMode ? "text-teal-300" : "text-red-900"
              } text-xl font-medium `}
            >
              {main.title}
            </span>
            <p
              className={`text-pretty lg:text-balance font-normal text-sm leading-normal ${
                darkMode ? "text-slate-400" : "text-slate-800"
              }`}
            >
              {main.description}
            </p>
            <div className="flex flex-row space-x-3">
              {main.assets.map((asset, index) => (
                <div
                  key={index}
                  className={` rounded-full flex ${
                    darkMode ? "bg-teal-400/10" : "bg-red-600/10"
                  } `}
                >
                  {asset.title ? (
                    <a
                      href={asset.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-2 py-1 text-[.7rem] font-medium ${
                        darkMode ? "text-teal-300" : "text-red-800"
                      }`}
                    >
                      {asset.title}
                    </a>
                  ) : (
                    <p
                      className={`px-2 py-1 text-[.7rem] font-medium ${
                        darkMode ? "text-teal-300" : "text-red-800"
                      }`}
                    >
                      {asset}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:basis-7/12 lg:ml-6 w-full h-full lg:size-96 reveal fade-bottom rounded-2xl ">
          <a
            href={main.path}
            target="_blank"
            rel="noopener noreferrer"
            className="size-full rounded-2xl flex items-center"
          >
            <img
              src={darkMode ? main.img_dark : main.img_light}
              alt={main.title}
              className="object-contain rounded-2xl hover:scale-105 ease duration-300 grayscale hover:grayscale-0 hover:shadow-2xl "
            />
          </a>
        </div>
      </section>
    </>
  );
}
