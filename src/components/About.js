import rightPic from "../assets/IMG_7623.png";
import leftPic from "../assets/IMG_4479.png";
import "../components/About.css";

export default function About() {
  window.addEventListener("scroll", reveal);

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
  }

  return (
    <div
      id="about"
      className="min-h-screen grid grid-cols-12 bg-gradient-to-t from-slate-950 w-auto "
    >
      <article className="flex flex-wrap h-min justify-center text-slate-100 text-xl col-start-7 col-end-12 font-medium justify-between text-pretty mb-12 bg-gradient-to-t from-green-900  rounded-br-2xl rounded-bl-2xl opacity-70 p-6 mt-4 reveal fade-bottom">
        <p className="mb-3 pt-4">
          Before I delved into the world of web development, I worked in the
          theater field. This experience gave me a great understanding of
          working in a large team, where each person is responsible for their
          part of the process, and everyone together creates a great result.
          This taught me to better understand people and see the world in all
          its manifestations.
        </p>
        <p className="my-3 ">
          Since childhood, I have also been interested in gadgets and
          technology, reading a huge number of magazines about the latest
          technological innovations and spending a lot of time on the computer,
          exploring its capabilities. When I first tried HTML, it was like love
          at first sight. CSS has finally won me over &#129512;. The ability to
          instantly see the result of your work opens up the potential for
          limitless creativity and imagination.
        </p>
        <p className="mt-3 ">
          Outside work, I enjoy walking near my home at the park, listening to
          music, exploring the world with my wife, and taking pictures with my
          phone &#8595;
        </p>
      </article>

      <article className="flex justify-center content-center col-start-2 col-end-12 mb-12">
        <figure className="aboutContainer basis-2/3 bg-grey-100 mr-6 flex items-stretch reveal fade-bottom">
          <img
            className="rounded-2xl border border-teal-950/40"
            src={leftPic}
            alt="first travel card"
          />
          <figcaption className="rounded-xl text-slate-100 font-medium text-md flex justify-end flex-col place-items-center">
            <p className="p-3">Bruges, Belgium</p>
          </figcaption>
        </figure>
        <figure className="aboutContainer basis-1/3 bg-grey-400 flex items-stretch reveal fade-bottom">
          <img
            className="rounded-xl border border-red-950/40"
            src={rightPic}
            alt="second travel card"
          />
          <figcaption className="rounded-xl text-slate-100 font-medium text-md flex justify-end flex-col place-items-center">
            <p className="p-3">Rabat, Morocco</p>
          </figcaption>
        </figure>
      </article>
    </div>
  );
}
