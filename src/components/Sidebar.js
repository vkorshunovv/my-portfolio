import { slide as Menu } from "react-burger-menu";
import "./sidebar.css";
import { useState } from "react";

export default function Sidebar({ isDarkMode }) {
  const [open, setOpen] = useState();
  function closeMenu() {
    setOpen(false);
  }

  return (
    <div className="lg:hidden">
      <Menu right width={"100%"} isOpen={open}
    onStateChange={({ isOpen }) => setOpen(isOpen)}>
        <a
          href="#header"
          className={`menu-item p-3 pt-20 text-6xl font-black ${
            isDarkMode ? "text-slate-100" : ""
          }`}
          onClick={closeMenu}
        >
          Home
        </a>

        <a
          href="#about"
          className={`menu-item p-3 text-6xl font-extrabold ${
            isDarkMode ? "text-slate-100" : ""
          }`}
          onClick={closeMenu}
        >
          About
        </a>

        <a
          href="#education"
          className={`menu-item p-3 text-6xl font-bold ${
            isDarkMode ? "text-slate-100" : ""
          }`}
          onClick={closeMenu}
        >
          Education
        </a>

        <a
          href="#projects"
          className={`menu-item p-3 text-6xl font-semibold ${
            isDarkMode ? "text-slate-100" : ""
          }`}
          onClick={closeMenu}
        >
          Projects
        </a>

        <a
          href="#contacts"
          className={`menu-item p-3 text-6xl font-medium ${
            isDarkMode ? "text-slate-100" : ""
          }`}
          onClick={closeMenu}
        >
          Contacts
        </a>
      </Menu>
    </div>
  );
}
