import "../components/Projects.css"


export default function Projects() {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);
  return (
    <div id="projects" className="min-h-screen bg-slate-950 ">
      <div className="flex justify-center">
        <div className="m-20">
          <strong className="text-slate-100 text-8xl">
            My Projects<span className="text-red-500">*</span>
            <br />
            <span className="text-xl justify-center flex text-slate-500 mt-3 blur-sm transition delay-100 duration-300 hover:blur-none hover:cursor-pointer">
              <span className="text-red-500">*</span>currently unavailable
            </span>
          </strong>
        </div>
      </div>
      <div className="grid grid-cols-12 grid-rows-3 ">
        <section className="col-start-2 col-end-12 row-span-1 flex justify-between items-center ">
          <div className="basis-5/12 bg-gradient-to-l from-cyan-950 to-emerald-950  rounded-2xl mr-6 size-48 blur-2xl reveal fade-bottom">
            <div className="flex justify-start flex-wrap animate-pulse">
              <p className="m-4 text-sm text-zinc-50 font-light leading-7 opacity-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
          <div className="basis-7/12 bg-gradient-to-r from-emerald-950 to-cyan-950 rounded-2xl ml-6 size-96 flex flex-wrap justify-start blur-2xl reveal fade-bottom">
            <div className="w-48 h-14 bg-slate-700 m-4 rounded-xl animate-pulse opacity-50"></div>
            <div className="w-48 h-14 bg-slate-700 m-4 rounded-xl animate-pulse opacity-50"></div>
            <div className="w-36 h-14 bg-slate-700 m-4 rounded-xl animate-pulse opacity-50"></div>
            <div className="w-36 h-24 bg-slate-700 m-4 rounded-3xl animate-pulse opacity-50"></div>
            <div className="w-96 h-24 bg-slate-700 m-4 rounded-3xl animate-pulse opacity-50"></div>
            <div className="w-96 h-12 bg-slate-700 m-4 rounded-xl animate-pulse opacity-50"></div>
            <div className="w-36 h-12 bg-slate-700 m-4 rounded-xl animate-pulse opacity-50"></div>
          </div>
        </section>
        <section className="col-start-2 col-end-12 row-span-2 flex justify-between items-center">
          <div className="basis-5/12 bg-gradient-to-l from-cyan-950 to-emerald-950 rounded-2xl mr-6 size-48 blur-2xl reveal fade-bottom">
            <div className="flex justify-start flex-wrap animate-pulse">
              <p className="m-4 text-sm text-zinc-50 font-light leading-7 opacity-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
          <div className="basis-7/12 bg-gradient-to-r from-emerald-950 to-cyan-950 rounded-2xl ml-6 size-96 flex flex-wrap justify-start blur-2xl reveal fade-bottom">
            <div className="w-48 h-14 bg-slate-700 m-4 rounded-xl animate-pulse opacity-50"></div>
            <div className="w-48 h-14 bg-slate-700 m-4 rounded-xl animate-pulse opacity-50"></div>
            <div className="w-36 h-14 bg-slate-700 m-4 rounded-xl animate-pulse opacity-50"></div>
            <div className="w-36 h-24 bg-slate-700 m-4 rounded-3xl animate-pulse opacity-50"></div>
            <div className="w-96 h-24 bg-slate-700 m-4 rounded-3xl animate-pulse opacity-50"></div>
            <div className="w-96 h-12 bg-slate-700 m-4 rounded-xl animate-pulse opacity-50"></div>
            <div className="w-36 h-12 bg-slate-700 m-4 rounded-xl animate-pulse opacity-50"></div>
          </div>
        </section>
        <section className="col-start-2 col-end-12 row-span-3 flex justify-between items-center mb-36">
          <div className="basis-5/12 bg-gradient-to-l from-cyan-950 to-emerald-950 rounded-2xl mr-6 size-48 blur-2xl reveal fade-bottom">
            <div className="flex justify-start flex-wrap animate-pulse ">
              <p className="m-4 text-sm text-zinc-50 font-light leading-7 opacity-50 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
          <div className="basis-7/12 bg-gradient-to-r from-emerald-950 to-cyan-950 rounded-2xl ml-6 size-96 flex flex-wrap justify-start blur-2xl reveal fade-bottom">
            <div className="w-48 h-14 bg-slate-700 m-4 rounded-xl animate-pulse opacity-50"></div>
            <div className="w-48 h-14 bg-slate-700 m-4 rounded-xl animate-pulse opacity-50"></div>
            <div className="w-36 h-14 bg-slate-700 m-4 rounded-xl animate-pulse opacity-50"></div>
            <div className="w-36 h-24 bg-slate-700 m-4 rounded-3xl animate-pulse opacity-50"></div>
            <div className="w-96 h-24 bg-slate-700 m-4 rounded-3xl animate-pulse opacity-50"></div>
            <div className="w-96 h-12 bg-slate-700 m-4 rounded-xl animate-pulse opacity-50"></div>
            <div className="w-36 h-12 bg-slate-700 m-4 rounded-xl animate-pulse opacity-50"></div>
          </div>
        </section>
      </div>
    </div>
  );
}
