import { useState } from "react";
import "./contacts.css";
import React from "react";

export default function Contacts({ theme }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState("Boom!");
  const myButtonElement = document.getElementById("submit");
  const darkMode = theme === 'dark';

  function handleSubmit(event) {
    event.preventDefault();
    setName("");
    setEmail("");
    setMessage("");

    setTimeout(() => {
      myButtonElement.classList.replace("text-slate-400", "text-emerald-200");
      myButtonElement.classList.replace("from-zinc-800", "from-teal-800");
      myButtonElement.classList.replace("to-gray-700", "to-emerald-900");
      myButtonElement.classList.replace(
        "hover:text-rose-200",
        "hover:text-emerald-200"
      );
      myButtonElement.classList.replace(
        "hover:from-rose-950",
        "hover:from-teal-800"
      );
      myButtonElement.classList.replace(
        "hover:to-rose-900",
        "hover:to-emerald-900"
      );
      myButtonElement.classList.replace(
        "hover:shadow-pink-900",
        "hover:shadow-teal-900"
      );
      setButtonText(`Submited ${String.fromCharCode(9825)}`);
    }, 1000);

    setTimeout(() => {
      setButtonText("Boom!");
      myButtonElement.classList.replace("text-emerald-200", "text-slate-400");
      myButtonElement.classList.replace("from-teal-800", "from-zinc-800");
      myButtonElement.classList.replace("to-emerald-900", "to-gray-700");
      myButtonElement.classList.replace(
        "hover:text-emerald-200",
        "hover:text-rose-200"
      );
      myButtonElement.classList.replace(
        "hover:from-teal-800",
        "hover:from-rose-950"
      );
      myButtonElement.classList.replace(
        "hover:to-emerald-900",
        "hover:to-rose-900"
      );
      myButtonElement.classList.replace(
        "hover:shadow-teal-900",
        "hover:shadow-pink-900"
      );
    }, 3000);
  }

  return (
    <div
      id="contacts"
      className={`min-h-screen ${
        darkMode ? "bg-slate-950" : ""
      } grid grid-cols-4 lg:grid-cols-12 items-center`}
    >
      <section className="col-start-1 lg:col-start-2 col-end-5 lg:col-end-8 revealing-image mx-5 lg:mx-0">
        <div className="flex flex-wrap ">
          <strong
            className={`${
              darkMode ? "text-slate-100" : "text-slate-800"
            } text-7xl lg:text-9xl mb-12`}
          >
            Lets talk
            <span
              className={`${darkMode ? "text-teal-500" : "text-teal-400"}`}
            >
              .
            </span>
          </strong>
          <strong
            className={`${
              darkMode ? "text-slate-100" : "text-slate-800"
            } text-6xl lg:text-8xl`}
          >
            I'm waiting for your thoughts, questions, or just a friendly hello
            <span
              className={`${
                darkMode ? "text-red-500" : "text-red-400"
              } text-6xl lg:text-9xl`}
            >
              .
            </span>
          </strong>
        </div>
      </section>
      <section className="col-start-1 lg:col-start-8 col-end-5 lg:col-end-12 content-center reveal fade-right px-5 lg:px-0 pt-10 lg:pt-0">
        <div className="w-full">
          <form
            className={`flex flex-wrap justify-end ${
              darkMode ? "text-slate-100" : "text-slate-800"
            }`}
            onSubmit={handleSubmit}
            autoComplete="on"
          >
            <input
              type="text"
              id="name"
              placeholder="Name"
              required
              className={`w-full m-1 p-3 rounded-lg  shadow-2xl ${
                darkMode
                  ? "bg-teal-800 focus:bg-slate-950"
                  : "bg-red-100 focus:bg-red-100"
              } `}
              onChange={(e) => setName(e.target.value)}
              value={name}
              autoComplete="on"
            ></input>
            <br />
            <input
              type="email"
              id="email"
              placeholder="Email"
              required
              className={`w-full m-1 p-3 rounded-lg  shadow-2xl ${
                darkMode
                  ? "bg-teal-900 focus:bg-slate-950"
                  : "bg-red-200 focus:bg-red-100"
              } `}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              autoComplete="on"
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
              autoComplete="off"
              className={`w-full m-1 p-3 rounded-lg size-48 resize-none shadow-2xl ${
                darkMode
                  ? "bg-teal-950 focus:bg-slate-950"
                  : "bg-red-300 focus:bg-red-100"
              } `}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div className="flex justify-center w-full">
              <input
                type="submit"
                id="submit"
                value={buttonText}
                className={`m-9 p-2 w-48 h-12 rounded-md text-2xl bg-gradient-to-r duration-100 ${
                  darkMode
                    ? "from-zinc-800 to-gray-700 text-slate-400 hover:text-rose-200 hover:from-rose-950 hover:to-rose-900 hover:shadow-pink-900"
                    : "from-zinc-400 to-stone-400 text-slate-800 hover:text-teal-700 hover:from-teal-200 hover:to-teal-100 hover:shadow-teal-300"
                }  focus:scale-105 hover:scale-105 hover:shadow-2xl  active:scale-95`}
              ></input>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
