export default function Contacts() {
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
            <form className="flex flex-wrap text-slate-100 justify-end mb-24">
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="w-full m-1 p-3 rounded-lg bg-violet-800 shadow-2xl "
              ></input>
              <br />
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full m-1 p-3 rounded-lg bg-violet-900 shadow-2xl "
              ></input>
              <br />
              <textarea
                type="textarea"
                id="message"
                placeholder="Message"
                rows="4"
                cols="5"
                className="w-full m-1 size-48 p-3 rounded-lg bg-violet-950 shadow-2xl resize-none"
              ></textarea>
              <div className="flex justify-center w-full">
                <input
                  type="submit"
                  id="submit"
                  value="Boom!"
                  className="m-9 p-2 w-48 h-12 rounded-lg text-2xl bg-gradient-to-r from-zinc-800 to-gray-800 "
                ></input>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
