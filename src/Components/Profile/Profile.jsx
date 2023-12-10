import {
    FaDownload,
  FaEnvelopeSquare,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
const Profile = () => {
  return (
    <div className=" bg-[#191919] flex flex-col items-center rounded-2xl">
      <div className="max-h-[500px]">
        <img
          className="object-cover h-[450px]  lg:min-w-[450px] w-[320px] rounded-2xl"
          src="https://github.com/SHOJOL-ISLAM-77/MY-PORTFOLIO/blob/main/public/Profile%20photo.jpg?raw=true"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-between items-center">
        <h1 className="text-4xl font-bold my-4">MD. Shojol Islam</h1>
        <h3></h3>
        <div className="flex gap-2">
          <a className="text-2xl" href="mailto:mdshojolislamshojib@gamil.com" target="blank">
            <FaEnvelopeSquare />
          </a>
          <a className="text-2xl"
            href="https://www.linkedin.com/in/shojol-shojib-ss"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a className="text-2xl"
            href="https://github.com/SHOJOL-ISLAM-77"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a className="text-2xl"
            href="https://www.facebook.com/ShojolIslamShojib"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
      <div className="h-40">

      </div>
      <div className="p-5 border-t w-full text-center hover:text-yellow-300">
        <a href="">Download Resume <span className="px-2"><FaDownload className="inline" /></span></a>
      </div>
    </div>
  );
};

export default Profile;
