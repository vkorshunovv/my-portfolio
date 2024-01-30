export default function Contacts() {
  return (
    <div id="contacts" className="min-h-screen bg-slate-950 ">
      <section className="min-h-screen">
        <div>
          <div className="flex flex-wrap w-5/12">
            <strong className="text-slate-100 text-9xl m-5 w-11/12">
              Let's talk<span className="text-teal-500">.</span>
            </strong>
            <strong className="text-slate-100 text-8xl m-5 ">
              Feel free to text me and I'll response as soon as possible
              <span className="text-rose-500">!</span>
            </strong>
          </div>
        </div>
      </section>
      <section className="h-fit grid grid-cols-12">
        <div className="col-start-7 col-end-13">
          <div className="w-full">
            <form className="flex flex-wrap text-slate-100 justify-end mr-5">
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="w-full m-1 p-3 rounded-lg bg-indigo-800 shadow-2xl "
              ></input>
              <br />
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full m-1 p-3 rounded-lg bg-indigo-800 shadow-2xl "
              ></input>
              <br />
              <textarea
                type="textarea"
                id="message"
                placeholder="Message"
                rows="4"
                cols="5"
                className="w-full m-1 size-48 p-3 rounded-lg bg-indigo-800 shadow-2xl  resize-none"
              ></textarea>
              <div className="flex justify-center w-full">
                <input
                  type="submit"
                  id="submit"
                  value="Submit"
                  className="m-9 p-2 w-48 h-12 rounded-lg text-2xl bg-indigo-950 shadow-xl shadow-indigo-900"
                ></input>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
