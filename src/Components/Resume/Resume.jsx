import {
  FaBriefcase,
  FaCode,
  FaGraduationCap,
  FaLanguage,
} from "react-icons/fa";
import ProgressBar from "../ProgressBar/ProgressBar";

const Resume = () => {
   
  return (
    <div  className=" pt-6 p-4">
      <h2 className="border-b pl-8 border-gray-600 py-2 text-3xl font-bold">
        MY RESUME
      </h2>
      <div className="flex py-4">
        <div className="flex-1 px-5">
          <h3 className="border-b border-gray-600 text-2xl font-semibold pb-3">
            <FaBriefcase className="inline mr-1 text-yellow-300" /> Skills
          </h3>
          <br />
          <div>
            <ul className="list-inside text-gray-400 list-image-[url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNCAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjMzhiZGY4Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy42ODUuMTUzYS43NTIuNzUyIDAgMCAxIC4xNDMgMS4wNTJsLTggMTAuNWEuNzUuNzUgMCAwIDEtMS4xMjcuMDc1bC00LjUtNC41YS43NS43NSAwIDAgMSAxLjA2LTEuMDZsMy44OTQgMy44OTMgNy40OC05LjgxN2EuNzUuNzUgMCAwIDEgMS4wNS0uMTQzWiIgLz48L3N2Zz4=)]">
              <li>
                <span className="font-bold text-yellow-300">Languages:</span>{" "}
                HTML, CSS, JavaScript
              </li>
              <br />
              <li>
                <span className="font-bold text-yellow-300">Front-end:</span>{" "}
                React
              </li>
              <br />
              <li>
                <span className="font-bold text-yellow-300">Back-end:</span>{" "}
                Node.js, Express
              </li>
              <br />
              <li>
                <span className="font-bold text-yellow-300">Database:</span>{" "}
                MongoDB
              </li>
              <br />
              <li>
                <span className="font-bold text-yellow-300">
                  Frameworks/Libraries:
                </span>{" "}
                Tailwind CSS
              </li>
              <br />
              <li>
                <span className="font-bold text-yellow-300">
                  Authentication:
                </span>{" "}
                Firebase
              </li>
              <br />
            </ul>
          </div>

          <h3 className="border-b border-gray-600 text-2xl font-semibold  pb-3">
            Soft Skills
          </h3>
          <br />
          <div>
            <ul className="list-inside text-gray-400 list-image-[url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNCAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjMzhiZGY4Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy42ODUuMTUzYS43NTIuNzUyIDAgMCAxIC4xNDMgMS4wNTJsLTggMTAuNWEuNzUuNzUgMCAwIDEtMS4xMjcuMDc1bC00LjUtNC41YS43NS43NSAwIDAgMSAxLjA2LTEuMDZsMy44OTQgMy44OTMgNy40OC05LjgxN2EuNzUuNzUgMCAwIDEgMS4wNS0uMTQzWiIgLz48L3N2Zz4=)]">
              <li>Hard Working</li>
              <br />
              <li>Responsibility</li>
              <br />
              <li>Flexibility</li>
              <br />
            </ul>
          </div>
         
          <h3 className="border-b border-gray-600 text-2xl font-semibold pb-3">
            <FaCode className="inline mr-1 text-yellow-300" /> Coding:
          </h3>
          <br />
          <div>
            <h2>React JS:</h2>            
            <ProgressBar color="yellow" progress="90"/>
          </div>
          <br />
          <div>
          <h2>Javascript:</h2>            
            <ProgressBar color="yellow" progress="70"/>
          </div>
          <br />
          <div>
          <h2>Node JS:</h2>            
            <ProgressBar color="yellow" progress="70"/>
          </div>
          <br />
        </div>
        <div className="flex-1 border-l border-gray-600 px-5">
          <h3 className="border-b border-gray-600 text-2xl font-semibold pb-3">
            <FaGraduationCap className="inline mr-1 text-yellow-300" />{" "}
            Education
          </h3>
          <br />

          <div>
            <p className="border border-yellow-300 text-yellow-300 inline p-1">
              2023 Jun - present
            </p>

            <p className="text-xl py-4">
              {" "}
              HSC —Rajibpur Technical & B.M. College
            </p>
            <p className="text-gray-600">At Rajibpur, Kurigram</p>
            <br />
            <p className="text-gray-600">
              I am studying digital technology in business here.
            </p>
          </div>
          <br />
          <div>
            <p className="border border-yellow-300 text-yellow-300 inline p-1">
              2023 - present
            </p>
            <p className="text-xl py-4">Web Development Course</p>
            <p className="text-gray-600">At Programming Hero</p> <br />
            <p className="text-gray-600">
              I learn HTML, CSS, Javascript, Tailwind CSS, Bootstrap, React JS,
              Node JS, Express JS, and MongoDB from Programming Hero
            </p>
          </div>
          <br />
          <h3 className="border-b border-gray-600 text-2xl font-semibold pb-3">
            <FaLanguage className="inline mr-1 text-yellow-300" /> Language
          </h3>
          <br />
          <div>
            <h2>Bangla (native)</h2>            
            <ProgressBar color="yellow" progress="100"/>
          </div>
          <br />
          <div>
          <h2>Hindi</h2>            
            <ProgressBar color="yellow" progress="70"/>
          </div>
          <br />
          <div>
          <h2>English:</h2>            
            <ProgressBar color="yellow" progress="50"/>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Resume;
