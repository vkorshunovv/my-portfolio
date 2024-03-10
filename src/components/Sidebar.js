import { slide as Menu } from "react-burger-menu";
import "./sidebar.css";

export default function Sidebar({ isDarkMode }) {
  return (
    <div className={` lg:hidden`}>
      <Menu
        right
        width={"100%"}
        isOpen={false}
        className={`${isDarkMode ? "bm-burger-bars" : "" }`}
      >
        <a href="#header" className={`menu-item p-3 pt-20 text-6xl font-black ${isDarkMode ? "text-slate-100" : ""}`}>
          Home
        </a>

        <a href="#about" className={`menu-item p-3 text-6xl font-extrabold ${isDarkMode ? "text-slate-100" : ""}`}>
          About
        </a>

        <a href="#education" className={`menu-item p-3 text-6xl font-bold ${isDarkMode ? "text-slate-100" : ""}`}>
          Education
        </a>

        <a href="#projects" className={`menu-item p-3 text-6xl font-semibold ${isDarkMode ? "text-slate-100" : ""}`}>
          Projects
        </a>

        <a href="#contacts" className={`menu-item p-3 text-6xl font-medium ${isDarkMode ? "text-slate-100" : ""}`}>
          Contacts
        </a>
      </Menu>
    </div>
  );
}
