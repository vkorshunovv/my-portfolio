export default function Projects() {
  return (
    <div id="projects" className="min-h-screen bg-slate-950 ">
      <div className="flex justify-center">
        <div className="m-20">
          <strong className="text-slate-100 text-6xl">
            My Projects<span className="text-rose-500">*</span>
            <br />
            <span className="text-xl justify-center flex text-slate-700 mt-3 blur-sm transition delay-100 duration-300 hover:blur-none hover:cursor-pointer">
              <span className="text-rose-500">*</span>currently unavailable
            </span>
          </strong>
        </div>
      </div>
      <div className="grid grid-cols-12 grid-rows-3">
        <section className="col-start-2 col-end-12 row-span-1 flex justify-between items-center">
          <div className="basis-5/12 bg-rose-900 rounded-2xl m-6 size-48 animate-pulse blur-md">
            <div className="flex justify-start flex-wrap">
              <p className="m-4 text-sm text-zinc-50 font-light leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
          <div className="basis-7/12 bg-indigo-950 rounded-2xl m-6 size-96 animate-pulse flex flex-wrap justify-start blur-2xl">
            <div className="w-48 h-8 bg-slate-700 m-4 rounded"></div>
            <div className="w-48 h-8 bg-slate-700 m-4 rounded"></div>
            <div className="w-36 h-14 bg-slate-700 m-4 rounded"></div>
            <div className="w-36 h-24 bg-slate-700 m-4 rounded-3xl"></div>
            <div className="w-96 h-24 bg-slate-700 m-4 rounded-3xl"></div>
            <div className="w-96 h-12 bg-slate-700 m-4 rounded-xl"></div>
            <div className="w-36 h-12 bg-slate-700 m-4 rounded-xl"></div>
          </div>
        </section>
        <section className="col-start-2 col-end-12 row-span-2 flex justify-between items-center">
          <div className="basis-5/12 bg-rose-900 rounded-2xl m-6 size-48 animate-pulse blur-md">
            <div className="flex justify-start flex-wrap">
              <p className="m-4 text-sm text-zinc-50 font-light leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
          <div className="basis-7/12 bg-indigo-950 rounded-2xl m-6 size-96 animate-pulse flex flex-wrap justify-start blur-2xl ">
            <div className="w-48 h-8 bg-slate-400 m-4 rounded"></div>
            <div className="w-48 h-8 bg-slate-600 m-4 rounded"></div>
            <div className="w-36 h-14 bg-slate-600 m-4 rounded"></div>
            <div className="w-36 h-24 bg-slate-600 m-4 rounded-3xl"></div>
            <div className="w-96 h-24 bg-slate-600 m-4 rounded-3xl"></div>
            <div className="w-96 h-12 bg-slate-600 m-4 rounded-xl"></div>
            <div className="w-36 h-12 bg-slate-600 m-4 rounded-xl"></div>
          </div>
        </section>
        <section className="col-start-2 col-end-12 row-span-3 flex justify-between items-center mb-36">
          <div className="basis-5/12 bg-rose-900 rounded-2xl m-6 size-48 animate-pulse blur-md">
            <div className="flex justify-start flex-wrap">
              <p className="m-4 text-sm text-zinc-50 font-light leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
          <div className="basis-7/12 bg-indigo-950 rounded-2xl m-6 size-96 animate-pulse flex flex-wrap justify-start blur-2xl ">
            <div className="w-48 h-8 bg-slate-400 m-4 rounded"></div>
            <div className="w-48 h-8 bg-slate-600 m-4 rounded"></div>
            <div className="w-36 h-14 bg-slate-600 m-4 rounded"></div>
            <div className="w-36 h-24 bg-slate-600 m-4 rounded-3xl"></div>
            <div className="w-96 h-24 bg-slate-600 m-4 rounded-3xl"></div>
            <div className="w-96 h-12 bg-slate-600 m-4 rounded-xl"></div>
            <div className="w-36 h-12 bg-slate-600 m-4 rounded-xl"></div>
          </div>
        </section>
      </div>
    </div>
  );
}
