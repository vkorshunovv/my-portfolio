import html5 from "../assets/html5.png";
import css3 from "../assets/css-3.png";
import js from "../assets/js.png";
import reactLogo from "../assets/react.png";
import git from "../assets/git.png";
import github from "../assets/github-light.png";
import figma from "../assets/figma.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap-5.png";

export default function Education() {
  return (
    <div id="education" className="min-h-screen bg-slate-950 ">
      <section className="flex justify-center">
        <div className="m-20">
          <strong className="text-slate-100 text-8xl ">
            Languages I speak<span className="text-teal-600 ">...</span>
          </strong>
        </div>
      </section>
      <section className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-8 mt-10 items-center w-2/4">
          <img src={html5} className="size-24 " alt="Html" />
          <img src={css3} className="size-24 " alt="Css" />
          <img src={js} className="size-24 " alt="JavaScript" />
          <img src={reactLogo} className="size-24 " alt="React" />
          <img src={bootstrap} className="size-24 " alt="Bootstrap" />
          <img src={tailwind} className="size-24 " alt="Taiwind" />
          <img src={git} className="size-24 " alt="Git" />
          <img src={github} className="size-24 " alt="GitHub" />
          <img src={figma} className="size-24 " alt="Figma" />
        </div>
      </section>
      <section className="flex justify-end w-11/12 items-end mt-52">
        <div className="animate-bounce">
          <em className="text-xl text-slate-100">
            <span className="text-teal-600">...</span>and there will be more!
          </em>
        </div>
      </section>
      <section className="mt-28">
        <div className="flex justify-start">
          <div className="bg-gradient-to-l from-indigo-800 to-slate-950 hover:from-indigo-950 rounded-2xl m-9 w-2/6 ">
            <div className="m-6">
              Lead Engineer at Upstatement I build pixel-perfect, accessible
              products for the web and beyond. Lead Engineer at Upstatement Is
              build pixel-perfect, accessible products for the web and beyond.
              Lead Engineer at Upstatement I build pixel-perfect, accessible
              products for the web and beyond. Lead Engineer at Upstatement I
              build pixel-perfect, accessible products for the web and beyond.
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-indigo-800 to-slate-950 via-indigo-950 to-indigo-800 hover:from-indigo-950 rounded-2xl m-9 w-2/6 ">
            <div className="m-6">
              Lead Engineer at Upstatement I build pixel-perfect, accessible
              products for the web and beyond. Lead Engineer at Upstatement I
              build pixel-perfect, accessible products for the web and beyond.
              Lead Engineer at Upstatement I build pixel-perfect, accessible
              products for the web and beyond. Lead Engineer at Upstatement I
              build pixel-perfect, accessible products for the web and beyond.
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-gradient-to-r from-indigo-800 to-slate-950 hover:from-indigo-950 rounded-2xl m-9 w-2/6 ">
            <div className="m-6">
              Lead Engineer at Upstatement I build pixel-perfect, accessible
              products for the web and beyond. Lead Engineer at Upstatement I
              build pixel-perfect, accessible products for the web and beyond.
              Lead Engineer at Upstatement I build pixel-perfect, accessible
              products for the web and beyond. Lead Engineer at Upstatement I
              build pixel-perfect, accessible products for the web and beyond.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
