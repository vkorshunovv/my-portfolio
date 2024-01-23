import arrow from "/Users/viktorkorshunov/Desktop/my-portfolio/src/assets/icon-right-arrow.png";
import left from "/Users/viktorkorshunov/Desktop/my-portfolio/src/assets/left_pic.jpg";
import right from "/Users/viktorkorshunov/Desktop/my-portfolio/src/assets/right_pic.jpg";

export default function About() {
  return (
    <div className="min-h-screen grid grid-cols-12 grid-rows-2 bg-gradient-to-t from-slate-950 w-auto ">
      <div className="size-60 col-start-3 ">
        <img src={arrow} alt="arrow" />
      </div>
      <article className="flex flex-wrap justify-center text-slate-200 text-xl col-start-6 col-end-11 font-medium justify-between h-3/6 text-pretty mt-10 pt-10 ">
        <div className="my-3">
          Before I stepped into the world of product design, I was a web
          developer. One of my earliest jobs involved writing HTML emails, in a
          time before email linters. Lots of wishing, hoping, and finger
          crossing that your email arrived in a recipient's inbox in one piece.
        </div>
        <div className="my-3">
          Coding emails forced me to understand how HTML and CSS play together,
          a skill set I've carried and kept fresh in the years since. My side
          project work is just an excuse to satisfy my curiosity about new
          technologies and understand how the web is moving forward.
        </div>
        <div className="my-3">
          Outside work, I enjoy good coffee near my home by the sea, listening
          to and playing music, exploring the world with my partner, and playing
          with my Labrottie pup, Louie.
        </div>
      </article>

      <article className="flex justify-center content-center row-start-2 col-start-2 col-end-12">
        <figure className="basis-3/4 bg-grey-100 pr-5 ">
          <img
            className="h-fit rounded-2xl"
            src={right}
            alt="Picture from my travel"
          />
        </figure>
        <figure className="basis-1/4  bg-grey-400">
          <img
            className="h-fit rounded-2xl"
            src={left}
            alt="Picture from my travel"
          />
        </figure>
      </article>
    </div>
  );
}
