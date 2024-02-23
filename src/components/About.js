import arrow from "/Users/viktorkorshunov/Desktop/my-portfolio/src/assets/icon-right-arrow.png";
import left from "/Users/viktorkorshunov/Desktop/my-portfolio/src/assets/left_pic.jpg";
import right from "/Users/viktorkorshunov/Desktop/my-portfolio/src/assets/right_pic.jpg";
import "/Users/viktorkorshunov/Desktop/my-portfolio/src/components/about.css";

export default function About() {
  return (
    <div
      id="about"
      className="min-h-screen grid grid-cols-12 bg-gradient-to-t from-slate-950 w-auto"
    >
      <article className="flex flex-wrap h-min justify-center text-slate-200 text-xl col-start-7 col-end-12 font-medium justify-between text-pretty mb-12">
        <p className="my-3">
          Before I delved into the world of web development, I worked in the
          theater field. This experience gave me a great understanding of
          working in a large team, where each person is responsible for their
          part of the process, and everyone together creates a great result.
          This taught me to better understand people and see the world in all
          its manifestations.
        </p>
        <p className="my-3">
          Since childhood, I have also been interested in gadgets and
          technology, reading a huge number of magazines about the latest
          technological innovations and spending a lot of time on the computer,
          exploring its capabilities. When I first tried HTML, it was like
          attraction at first sight. CSS has finally won me over :) The ability
          to instantly see the result of your work opens up the potential for
          limitless creativity and imagination.
        </p>
        <p className="mt-3">
          Outside work, I enjoy walking near my new home by the sea, listening
          to music, exploring the world with my wife, and dreaming about our
          pets.
        </p>
      </article>

      <article className="flex justify-center content-center col-start-2 col-end-12 mb-12">
        <figure className="aboutContainer basis-3/4 bg-grey-100 pr-6">
          <img
            className="h-fit rounded-2xl shadow-xl shadow-teal-950/40 border border-teal-950/40"
            src={right}
            alt="first travel card"
          />
          <figcaption className="rounded-2xl text-slate-100 font-semibold text-lg flex justify-end flex-col place-items-center">
            <p>San Paolo, Brazil</p>
          </figcaption>
        </figure>
        <figure className="aboutContainer basis-1/4 bg-grey-400">
          <img
            className="h-fit w-fit rounded-xl shadow-xl shadow-red-950/40 border border-red-950/40"
            src={left}
            alt="second travel card"
          />
          <figcaption className="rounded-2xl text-slate-100 font-semibold text-lg flex justify-end flex-col">
            <p>Tetuan, Morocco</p>
          </figcaption>
        </figure>
      </article>
    </div>
  );
}
