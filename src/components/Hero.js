export default function Hero() {
  return (
    <div className="min-h-screen grid grid-cols-12">
      <div className="col-start-2 col-end-6 space-y-20">
        <h1 className="text-slate-100 text-9xl mt-24">Hello<span className="text-red-500 ">.</span></h1>
        <h2 className="text-slate-100 text-8xl ">
          I'm a <span className="font-extrabold">FRONT-END DEVELOPER<span className="text-teal-500">.</span></span>
        </h2>
      </div>
    </div>
  );
}
