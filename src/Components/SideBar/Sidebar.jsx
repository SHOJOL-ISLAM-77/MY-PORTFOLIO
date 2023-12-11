import {
  FaBriefcase,
  FaEnvelopeSquare,
  FaFileAlt,
  FaPhoneAlt,
  FaUserAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className=" bg-[#191919] my-32 mx-5 w-[70px] rounded-3xl flex flex-col space-y-4 justify-evenly text-xl h-[300px] items-center">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "tooltip"
            : isActive
            ? "tooltip text-yellow-300"
            : "tooltip"
        }
      >
        <FaUserAlt className="min-w-full " />
        <span className="tooltip-text">About me</span>
      </NavLink>
      <NavLink
        to="/resume"
        className={({ isActive, isPending }) =>
          isPending
            ? "tooltip"
            : isActive
            ? "tooltip text-yellow-300"
            : "tooltip"
        }
      >
        <FaFileAlt className="min-w-full" />
        <span className="tooltip-text">Resume</span>
      </NavLink>
      <NavLink
        to="/project"
        className={({ isActive, isPending }) =>
          isPending
            ? "tooltip"
            : isActive
            ? "tooltip text-yellow-300"
            : "tooltip"
        }
      >
        <FaBriefcase className="min-w-full" />
        <span className="tooltip-text">Projects</span>
      </NavLink>
      <NavLink
        to="/contact-me"
        className={({ isActive, isPending }) =>
          isPending
            ? "tooltip"
            : isActive
            ? "tooltip text-yellow-300"
            : "tooltip"
        }
      >
        <FaEnvelopeSquare className="min-w-full" />
        <span className="tooltip-text">Contact me</span>
      </NavLink>

      <a href="tel:+8801532316559" className="tooltip hover:text-yellow-300">
        <FaPhoneAlt className="min-w-full" />
        <span className="tooltip-text">Call me</span>
      </a>
    </div>
  );
};

export default Sidebar;
