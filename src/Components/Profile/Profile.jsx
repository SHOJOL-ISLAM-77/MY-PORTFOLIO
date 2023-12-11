import {
  FaDownload,
  FaEnvelopeSquare,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Profile = () => {
  const googleDrivePreviewUrl =
    "https://drive.google.com/file/d/1uA5EO7odXcJyddDt1aW7T6hijUtaWsp-/view?usp=sharing";
  const fileId = googleDrivePreviewUrl.split("/file/d/")[1].split("/view")[0];
  const modifiedDownloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  const handleDownload = () => {
    window.open(modifiedDownloadUrl, "_blank");
  };

  return (
    <div className=" bg-[#191919] flex flex-col items-center rounded-2xl shadow-xl shadow-black mx-1">
      <div className="max-h-[450px]">
        <img
          className="object-fill h-[450px]  lg:min-w-[450px] w-[320px] rounded-2xl"
          src="https://github.com/SHOJOL-ISLAM-77/MY-PORTFOLIO/blob/main/public/IMG_20231209_172316_124.jpg?raw=true"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-between items-center">
        <h1 className="lg:text-4xl text-2xl  font-bold mt-4">
          MD. Shojol Islam
        </h1>
        <h3 className="text-2xl text-center my-3 font-bold tracking-tight">
          <span style={{ color: "yellow", fontWeight: "bold" }}>
            <Typewriter
              words={["I am a Front-End Developer", "and I just love coding"]}
              loop={100}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={80}
              delaySpeed={1100}
            />
          </span>
        </h3>
        <div className="flex gap-2">
          <a
            className="text-2xl hover:text-yellow-300"
            href="mailto:mdshojolislamshojib@gamil.com"
            target="blank"
          >
            <FaEnvelopeSquare />
          </a>
          <a
            className="text-2xl hover:text-yellow-300"
            href="https://www.linkedin.com/in/shojol-shojib-ss"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="text-2xl hover:text-yellow-300"
            href="https://github.com/SHOJOL-ISLAM-77"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="text-2xl hover:text-yellow-300"
            href="https://www.facebook.com/ShojolIslamShojib"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
      <div className="h-40"></div>
      <div className="p-5 border-t w-full text-center ">
        <Link onClick={handleDownload} className="hover:text-yellow-300">
          Download Resume
          <span className="px-2">
            <FaDownload className="inline" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
