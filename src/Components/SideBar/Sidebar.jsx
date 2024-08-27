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
    <div className=" bg-[#191919] lg:my-32 mx-5 lg:w-[70px] space-x-10 lg:space-x-0 px-3 w-[340px] justify-center rounded-2xl flex lg:flex-col lg:space-y-4 lg:justify-evenly text-xl h-[70px] lg:h-[300px] items-center">
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
        <span className="tooltip-text hidden lg:block">About me</span>
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
        <span className="tooltip-text hidden lg:block">Resume</span>
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
        <span className="tooltip-text hidden lg:block">Projects</span>
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
        <span className="tooltip-text hidden lg:block">Contact me</span>
      </NavLink>

      <a href="tel:+8801532316559" className="tooltip hover:text-yellow-300">
        <FaPhoneAlt className="min-w-full" />
        <span className="tooltip-text hidden lg:block">Call me</span>
      </a>
    </div>
  );
};

export default Sidebar;
