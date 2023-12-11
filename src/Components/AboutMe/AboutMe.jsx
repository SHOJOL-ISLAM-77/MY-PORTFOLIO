import { FaChartLine, FaCode, FaPollH } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div>
      <div>
        <h2 className="text-white py-4 text-2xl border-b font-bold px-4 border-gray-400">
          <span className="text-yellow-300">About</span> Me
        </h2>
        <div className="flex items-center">
          <div className="px-6 flex-1  font-medium">
            Hello! I am Shojol Islam <br /> developer from Bangladesh, Kurigram.{" "}
            <br /> I have no experience but I create web site <br /> , also I am
            good at React JS. <br /> I love to talk with you about our unique.
          </div>
          <div className="p-6 flex-1 border-l border-gray-500 text-gray-400">
            <div className="flex justify-between border-b-[0.1px] py-2 border-gray-500 font-medium">
              <span className="bg-yellow-300 text-black px-4 py-1 rounded-md ">
                AGE:
              </span>{" "}
              <span>18</span>
            </div>
            <div className="flex justify-between border-b-[0.1px] py-2 border-gray-500 font-medium">
              <span className="bg-yellow-300 text-black px-4 py-1 rounded-md ">
                RESIDENCE:
              </span>{" "}
              <span>Bangladesh</span>
            </div>
            <div className="flex justify-between border-b-[0.1px] py-2 border-gray-500 font-medium">
              <span className="bg-yellow-300 text-black px-4 py-1 rounded-md ">
                FREELANCE:
              </span>{" "}
              <span>UNAVAILABLE</span>
            </div>
            <div className="flex justify-between border-b-[0.1px] py-2 border-gray-500 font-medium">
              <span className="bg-yellow-300 text-black px-4 py-1 rounded-md ">
                ADDRESS:
              </span>{" "}
              <span>KURIGRAM, BANGLADESH</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-white py-4 text-2xl border-b font-bold px-4 border-gray-400">
          <span className="text-yellow-300">My</span> Service
        </h2>
        <div className="flex items-center justify-center h-96">
          <div className="px-6 font-medium border p-5 text-center">
            <p className="text-center flex justify-center text-3xl py-4 text-yellow-300">
              <FaCode className="text-3xl" />
            </p>
            <h3 className="text-center py-3 text-2xl">Web Development</h3>
            <div className="text-gray-400">
              I am a Front End Developer. I have been learning React JS for six
              months. <br />I know HTML, CSS, React JS, Tailwind CSS, Node JS,
              Express JS, and MongoDB. <br />I am interested in learning more
              technologies like Mongoose, Next JS, Redux etc.
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-white py-4 text-2xl border-b font-bold px-4 border-gray-400">
          <span className="text-yellow-300">Fun</span> Fact
        </h2>
        <div className="flex justify-center">
          <div className="flex items-center justify-center">
            <div className="px-6 font-medium border-x p-5 text-center">
              <FaPollH className="text-3xl inline-flex justify-center items-center text-yellow-300 my-2" />
              <p>7 Finished Projects</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="px-6 font-medium border-x p-5 text-center">
              <FaCode className="text-3xl inline-flex justify-center items-center text-yellow-300 my-2" />
              <p>48 hours of coding</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="px-6 font-medium border-x p-5 text-center">
              <FaChartLine className="text-3xl inline-flex justify-center items-center text-yellow-300 my-2" />
              <p>Finish a source</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
