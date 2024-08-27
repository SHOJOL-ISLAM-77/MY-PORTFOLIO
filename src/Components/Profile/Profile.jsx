import {
  FaDownload,
  FaEnvelopeSquare,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Profile = () => {
  return (
    <div className=" bg-[#191919] flex flex-col items-center rounded-2xl shadow-xl shadow-black mx-1  m-3">
      <div>
        <img
          className="object-fill lg:min-h-[450px] lg:h-[450px] lg:min-w-[450px] w-[350px] h-[360px] rounded-t-2xl"
          src="https://avatars.githubusercontent.com/u/138320818?s=400&u=bdcea28c82fc5a93e8009883235ffb7b5012534b&v=4"
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
      <div className="lg:h-40 h-20"></div>
      <div className="p-5 border-t w-full text-center ">
        <a
          className="hover:text-yellow-300"
          href="/src/assets/Resume.pdf"
          download
        >
          Download Resume{" "}
          <span className="px-2">
            <FaDownload className="inline" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Profile;
