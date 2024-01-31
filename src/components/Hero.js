export default function Hero() {
  return (
    <div className="min-h-screen grid grid-cols-12">
      <div className="col-start-1 col-end-5 space-y-20">
        <h1 className="text-slate-100 text-9xl mt-24 ml-5 font-extrabold">Greetings<span className="text-red-500 ">.</span></h1>
        <h2 className="text-slate-100 text-8xl ml-5">
          I'm a <span className="font-extrabold">FRONT-END DEVELOPER<span className="text-teal-500">.</span></span>
        </h2>
      </div>
    </div>
  );
}
