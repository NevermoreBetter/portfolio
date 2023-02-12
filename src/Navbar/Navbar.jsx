import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineBook,
  AiFillMessage,
} from "react-icons/ai";
import { GiFullFolder } from "react-icons/gi";
import { useState } from "react";

const Navbar = ({ props }) => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav className="flex gap-4 fixed top-4 bg-[#474646] py-2 px-4 rounded-full z-10 ">
      <a
        className={`nav__btn ${activeNav === "#" ? "active" : ""}`}
        href="#"
        onClick={() => setActiveNav("#")}
      >
        <AiOutlineHome />
      </a>
      <a
        className={`nav__btn ${activeNav === "#about" ? "active" : ""}`}
        href="#about"
        onClick={() => setActiveNav("#about")}
      >
        <AiOutlineUser />
      </a>
      <a
        className={`nav__btn ${activeNav === "#experience" ? "active" : ""}`}
        href="#experience"
        onClick={() => setActiveNav("#experience")}
      >
        <AiOutlineBook />
      </a>
      <a
        className={`nav__btn ${activeNav === "#portfolio" ? "active" : ""}`}
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
      >
        <GiFullFolder />
      </a>
      <a
        className={`nav__btn ${activeNav === "#contact" ? "active" : ""}`}
        href="#contact"
        onClick={() => setActiveNav("#contact")}
      >
        <AiFillMessage />
      </a>
    </nav>
  );
};

export default Navbar;
