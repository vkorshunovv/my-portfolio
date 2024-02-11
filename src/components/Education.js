import html5 from "../assets/html5.png";
import css3 from "../assets/css-3.png";
import js from "../assets/js.png";
import reactLogo from "../assets/react.png";
import git from "../assets/git.png";
import github from "../assets/github-light.png";
import figma from "../assets/figma.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap-5.png";
import markdown from "../assets/markdown.png";
import knutkit from "../assets/Knutkit.jpeg";
import michigan from "../assets/michigan.png";
import meta from "../assets/meta.jpeg";

export default function Education() {
  return (
    <div id="education" className="min-h-screen bg-slate-950 ">
      <section className="flex justify-center">
        <div className="m-20">
          <strong className="text-slate-100 text-8xl ">
            Languages I speak<span className="text-teal-600 ml-2">...</span>
          </strong>
        </div>
      </section>
      <section className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-8 mt-10 items-center w-8/12">
          <img src={html5} className="size-32 " alt="Html" />
          <img src={css3} className="size-32 " alt="Css" />
          <img src={js} className="size-32 " alt="JavaScript" />
          <img src={reactLogo} className="size-32 " alt="React" />
          <img src={bootstrap} className="size-32 " alt="Bootstrap" />
          <img src={tailwind} className="size-32 " alt="Taiwind" />
          <img src={git} className="size-32 " alt="Git" />
          <img src={github} className="size-32 " alt="GitHub" />
          <img src={figma} className="size-32 " alt="Figma" />
          <img src={markdown} className="size-32 " alt="Markdown" />
        </div>
      </section>
      <section className="flex justify-end w-11/12 items-end mt-52">
        <div className="animate-bounce">
          <em className="text-xl text-slate-100">
            <span className="text-teal-600">...</span>and there will be more!
          </em>
        </div>
      </section>
      <section className="mt-28 ">
        <div className="flex justify-start m-1">
          <div className="bg-gradient-to-l from-emerald-900 to-slate-950 rounded-2xl ml-44 w-4/12 h-64 ">
            <div className="w-full m-6 px-5 flex flex-col ">
              <div className="px-5">
                <img
                  src={knutkit}
                  className="size-16 rounded-xl float-right"
                  alt="Knutkit"
                />
              </div>
              <div className="pl-5 text-balance">
                <div className="w-full">
                  <p className="font-normal mb-4">Aug 2011 - Jun 2016</p>
                  <p className="font-semibold mb-1">
                    Kyiv National I. K. Karpenko-Karyi University of Theatre,
                    Cinema and Television
                  </p>
                  <p className="font-medium text-slate-500 ">
                    Theatre and film actor
                  </p>
                  <p className="font-medium text-zinc-500 ">
                    Specialist degree
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center m-1">
          <div className="bg-gradient-to-l from-teal-900 to-slate-950 rounded-2xl w-4/12 h-64 ">
            <div className="w-full m-6 px-5 flex flex-col ">
              <div className="px-5">
                <img
                  src={michigan}
                  className="size-16 rounded-xl float-right"
                  alt="University of Michigan"
                />
              </div>
              <div className="pl-5 text-balance ">
                <p className="font-normal mb-4">Jul 2023 - Sep 2023</p>
                <p className="font-semibold mb-1">University of Michigan</p>
                <p className="font-medium text-slate-500 ">
                  Web Design for Everybody: Basics of Web Development & Coding
                </p>
                <p className="font-medium text-zinc-500">
                  Coursera Specialization
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-1">
          <div className="bg-gradient-to-l from-cyan-900 to-slate-950 rounded-2xl mr-44 w-4/12 h-64">
            <div className="w-full m-6 px-5 flex flex-col ">
              <div className="px-5 ">
                <img
                  src={meta}
                  className="size-16 rounded-xl float-right "
                  alt="Meta"
                />
              </div>
              <div className="pl-5 text-balance">
                <p className="font-normal mb-4">Sep 2023 - Dec 2023</p>
                <p className="font-semibold mb-1">Meta</p>
                <p className="font-medium text-slate-500 ">
                  Meta Front-End Developer Specialization
                </p>
                <p className="font-medium text-zinc-500">
                  Coursera Specialization
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
