export default function Projects() {
  return (
    <div id="projects" className="min-h-screen bg-slate-950 ">
      <div className="flex justify-center">
        <div className="m-20">
          <strong className="text-slate-100 text-6xl">Selected Works</strong>
        </div>
      </div>
      <div className="grid grid-cols-12 grid-rows-3 gap-y-8">
        <section className="col-start-2 col-end-12 row-start-1 row-end-1 flex justify-between items-center">
          <div className="basis-5/12 bg-rose-900 rounded-2xl m-6 size-48">
            <div className=""></div>
          </div>
          <div className="basis-7/12 bg-indigo-950 rounded-2xl m-6 size-96 animate-pulse flex justify-center  ">
            <div className="m-auto text-4xl">SOON</div>
          </div>
        </section>
        <section className="col-start-2 col-end-12 row-start-2 row-end-2 flex justify-between items-center">
          <div className="basis-5/12 bg-rose-900 rounded-2xl m-6 size-48">
            <div></div>
          </div>
          <div className="basis-7/12 bg-indigo-950 rounded-2xl m-6 size-96 animate-pulse flex justify-center">
            <div className="m-auto text-4xl">SOON</div>
          </div>
        </section>
        <section className="col-start-2 col-end-12 row-start-3 row-end-3 flex justify-between items-center">
          <div className="basis-5/12 bg-rose-900 rounded-2xl m-6 size-48">
            <div></div>
          </div>
          <div className="basis-7/12 bg-indigo-950 rounded-2xl m-6 size-96 animate-pulse flex justify-center">
            <div className="m-auto text-4xl">SOON</div>
          </div>
        </section>
      </div>
    </div>
  );
}
