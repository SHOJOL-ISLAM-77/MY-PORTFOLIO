import {
  FaBriefcase,
  FaEnvelopeSquare,
  FaFileAlt,
  FaPhoneAlt,
  FaUserAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./sidebar.css"

const Sidebar = () => {
  
  return (
    <div className=" bg-[#191919] my-32 mx-5 w-[70px] rounded-3xl flex flex-col space-y-4 justify-evenly text-xl max-h-[300px] items-center">
      <NavLink className="tooltip">
        <FaUserAlt className="min-w-full " />
        <span className="tooltip-text">About me</span>
      </NavLink>
      <NavLink className="tooltip">
        <FaFileAlt className="min-w-full" />
        <span className="tooltip-text">Resume</span>
      </NavLink>
      <NavLink className="tooltip">
        <FaBriefcase className="min-w-full" />
        <span className="tooltip-text">Projects</span>
      </NavLink>
      <NavLink className="tooltip">
        <FaEnvelopeSquare className="min-w-full" />
        <span className="tooltip-text">Contact me</span>
      </NavLink>
      <NavLink className="tooltip">
        <FaPhoneAlt className="min-w-full" />
        <span className="tooltip-text">Call me</span>
      </NavLink>
    </div>
  );
};

export default Sidebar;
