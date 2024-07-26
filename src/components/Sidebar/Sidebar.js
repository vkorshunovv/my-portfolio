import { slide as Menu } from "react-burger-menu";
import "./sidebar.css";
import { useState } from "react";
import { header } from "../../constants";

export default function Sidebar({ isDarkMode }) {
  const [open, setOpen] = useState();
  function closeMenu() {
    setOpen(false);
  }

  return (
    <div className="lg:hidden">
      <Menu
        right
        width={"100%"}
        isOpen={open}
        onStateChange={({ isOpen }) => setOpen(isOpen)}
      >
        {header.map((link) => (
          <a
            href={link.path}
            className="menu-item p-6 text-6xl font-black sidebar-links"
            onClick={closeMenu}
            key={link.id}
          >
            {link.name}
          </a>
        ))}
      </Menu>
    </div>
  );
}
