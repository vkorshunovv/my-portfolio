import { useState } from "react";
import "../components/Contacts.css";

export default function Contacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState("Boom!");
  const myButtonElement = document.getElementById("submit");

  function handleSubmit(event) {
    event.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
    myButtonElement.classList.add("active:scale-100");

    setTimeout(() => {
      myButtonElement.classList.replace("text-slate-400", "text-emerald-200");
      myButtonElement.classList.replace("from-zinc-800", "from-teal-800");
      myButtonElement.classList.replace("to-gray-700", "to-emerald-900");
      myButtonElement.classList.replace("hover:text-rose-200", "hover:text-emerald-200");
      myButtonElement.classList.replace("hover:from-rose-950", "hover:from-teal-800");
      myButtonElement.classList.replace("hover:to-rose-900", "hover:to-emerald-900");
      myButtonElement.classList.replace("hover:shadow-pink-900", "hover:shadow-teal-900");
      setButtonText("Submited!");
    }, 1000);

    

    setTimeout(() => {
      setButtonText("Boom!");
      myButtonElement.classList.replace("text-emerald-200", "text-slate-400");
      myButtonElement.classList.replace("from-teal-800", "from-zinc-800");
      myButtonElement.classList.replace("to-emerald-900", "to-gray-700");
      myButtonElement.classList.replace("hover:text-emerald-200", "hover:text-rose-200");
      myButtonElement.classList.replace("hover:from-teal-800", "hover:from-rose-950");
      myButtonElement.classList.replace("hover:to-emerald-900", "hover:to-rose-900");
      myButtonElement.classList.replace("hover:shadow-teal-900", "hover:shadow-pink-900");
    }, 6000);
  }

  return (
    <div
      id="contacts"
      className="min-h-screen bg-slate-950 grid grid-cols-12 items-center"
    >
      <section className=" col-start-2 col-end-8 revealing-image ">
        <div className="">
          <div className="flex flex-wrap ">
            <strong className="text-slate-100 text-9xl mb-12">
              Lets talk<span className="text-teal-500">.</span>
            </strong>
            <strong className="text-slate-100 text-8xl  ">
              I'm waiting for your thoughts, questions, or just a friendly hello
              <span className="text-rose-500">.</span>
            </strong>
          </div>
        </div>
      </section>
      <section className=" col-start-8 col-end-12 content-center reveal fade-right">
        <div className="">
          <div className="w-full">
            <form
              className="flex flex-wrap text-slate-100 justify-end "
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                id="name"
                placeholder="Name"
                required
                className="w-full m-1 p-3 rounded-lg bg-teal-800 shadow-2xl focus:bg-slate-950"
                onChange={(e) => setName(e.target.value)}
                value={name}
              ></input>
              <br />
              <input
                type="email"
                id="email"
                placeholder="Email"
                required
                className="w-full m-1 p-3 rounded-lg bg-teal-900 shadow-2xl focus:bg-slate-950"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              ></input>
              <br />
              <textarea
                type="textarea"
                id="message"
                placeholder="Message"
                value={message}
                rows="4"
                cols="5"
                required
                className="w-full m-1 size-48 p-3 rounded-lg bg-teal-950 shadow-2xl resize-none focus:bg-slate-950"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <div className="flex justify-center w-full">
                <input
                  type="submit"
                  id="submit"
                  value={buttonText}
                  className="m-9 p-2 w-48 h-12 rounded-md text-2xl bg-gradient-to-r from-zinc-800 to-gray-700 text-slate-400 duration-100 hover:text-rose-200 hover:from-rose-950 hover:to-rose-900 focus:scale-105 hover:scale-105 hover:shadow-2xl hover:shadow-pink-900"
                ></input>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}