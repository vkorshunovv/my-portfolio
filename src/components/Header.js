import "./header.css";

export default function Header() {
  return (
    <div id="header" className="flex flex-row-reverse ">
      <div className="text-slate-300 text-4xl mr-9 pt-5">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Education</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="/footer">Contacts</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
