import { useState } from "react";

export default function Contacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  }
  return (
    <div id="contacts" className="min-h-screen bg-slate-950 ">
      <section className="min-h-screen">
        <div className="">
          <div className="flex flex-wrap w-5/12 mb-24">
            <strong className="text-slate-100 text-9xl m-5 w-11/12  mb-12">
              Lets talk<span className="text-teal-500">.</span>
            </strong>
            <strong className="text-slate-100 text-8xl m-5 ">
              I'm waiting for your thoughts, questions, or just a friendly hello
              <span className="text-rose-500">.</span>
            </strong>
          </div>
        </div>
      </section>
      <section className="h-fit grid grid-cols-12">
        <div className="col-start-5 col-end-9">
          <div className="w-full">
            <form
              className="flex flex-wrap text-slate-100 justify-end mb-24"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                id="name"
                placeholder="Name"
                required
                className="w-full m-1 p-3 rounded-lg bg-violet-800 shadow-2xl focus:border focus:border-zink-700 focus:ring-0 focus:outline-none"
                onChange={(e) => setName(e.target.value)}
                value={name}
              ></input>
              <br />
              <input
                type="email"
                id="email"
                placeholder="Email"
                required
                className="w-full m-1 p-3 rounded-lg bg-violet-900 shadow-2xl focus:border focus:border-zink-700 focus:ring-1 focus:outline-none"
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
                className="w-full m-1 size-48 p-3 rounded-lg bg-violet-950 shadow-2xl resize-none focus:border focus:border-zink-700 focus:ring-1 focus:outline-none "
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <div className="flex justify-center w-full">
                <input
                  type="submit"
                  id="submit"
                  value="Boom!"
                  className="m-9 p-2 w-48 h-12 rounded-lg text-2xl bg-gradient-to-r from-zinc-800 to-gray-700 text-slate-400 duration-100 hover:text-rose-200 hover:from-rose-950 hover:to-rose-900 hover:scale-105 hover:shadow-2xl hover:shadow-pink-900"
                ></input>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
