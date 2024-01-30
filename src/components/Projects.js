export default function Projects() {
  return (
    <div id="projects" className="min-h-screen bg-slate-950 ">
      <div className="flex justify-center">
        <div className="m-20">
          <strong className="text-slate-100 text-6xl">
            Selected Works<span className="text-rose-500">*</span>
            <br />
            <span className="text-xl justify-center flex text-slate-700 mt-3 blur-sm transition delay-100 duration-300  hover:blur-none">
              <span className="text-rose-500">*</span>will unlock at level 99
            </span>
          </strong>
        </div>
      </div>
      <div className="grid grid-cols-12 grid-rows-3 gap-y-8">
        <section className="col-start-2 col-end-12 row-start-1 row-end-1 flex justify-between items-center">
          <div className="basis-5/12 bg-rose-900 rounded-2xl m-6 size-48 blur-2xl animate-pulse ">
            <div className=""></div>
          </div>
          <div className="basis-7/12 bg-indigo-950 rounded-2xl m-6 size-96 animate-pulse flex justify-center blur-2xl ">
            <div className="m-auto text-4xl">SOON</div>
          </div>
        </section>
        <section className="col-start-2 col-end-12 row-start-2 row-end-2 flex justify-between items-center">
          <div className="basis-5/12 bg-rose-900 rounded-2xl m-6 size-48 blur-2xl animate-pulse ">
            <div></div>
          </div>
          <div className="basis-7/12 bg-indigo-950 rounded-2xl m-6 size-96 animate-pulse flex justify-center blur-2xl ">
            <div className="m-auto text-4xl">SOON</div>
          </div>
        </section>
        <section className="col-start-2 col-end-12 row-start-3 row-end-3 flex justify-between items-center">
          <div className="basis-5/12 bg-rose-900 rounded-2xl m-6 size-48 blur-2xl animate-pulse ">
            <div></div>
          </div>
          <div className="basis-7/12 bg-indigo-950 rounded-2xl m-6 size-96 animate-pulse flex justify-center blur-2xl ">
            <div className="m-auto text-4xl blur-none">SOON</div>
          </div>
        </section>
      </div>
    </div>
  );
}
