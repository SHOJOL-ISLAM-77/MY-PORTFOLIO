import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FaCode, FaEye, FaServer } from "react-icons/fa";

import Blood1 from "../../assets/on blood for all/on-blood-for-all (1).png";
import Blood2 from "../../assets/on blood for all/on-blood-for-all (2).png";
import Blood3 from "../../assets/on blood for all/on-blood-for-all (3).png";
import Blood4 from "../../assets/on blood for all/on-blood-for-all (4).png";
import Blood5 from "../../assets/on blood for all/on-blood-for-all (5).png";

import service1 from "../../assets/Service swap hub/Service (1).png";
import service2 from "../../assets/Service swap hub/Service (2).png";
import service3 from "../../assets/Service swap hub/Service (3).png";
import service4 from "../../assets/Service swap hub/Service (4).png";
import service5 from "../../assets/Service swap hub/Service (5).png";
import service6 from "../../assets/Service swap hub/Service (6).png";
import service7 from "../../assets/Service swap hub/Service (7).png";

import mysoft1 from "../../assets/My soft/mysoft (1).png";
import mysoft2 from "../../assets/My soft/mysoft (2).png";
import mysoft3 from "../../assets/My soft/mysoft (3).png";
import mysoft4 from "../../assets/My soft/mysoft (4).png";
import mysoft5 from "../../assets/My soft/mysoft (5).png";
import mysoft6 from "../../assets/My soft/mysoft (6).png";
import { Helmet } from "react-helmet-async";

const Projects = () => {
  return (
    <div className="lg:min-h-[810px] p-4">
      <Helmet>
        <title>Project || Shojol Islam</title>
      </Helmet>
      <h2 className="text-white py-4 text-2xl border-b font-bold px-4 border-gray-400 pl-8">
        <span className="text-yellow-300">Recent</span> Projects
      </h2>
      <br />
      <br />
      <div>
        <h3 className="text-xl font-bold py-8">1. On Blood For All</h3>
        <div className="w-full min-h-[350px]">
          <Carousel autoPlay={true} infiniteLoop={true}>
            <div>
              <img src={Blood1} />
            </div>
            <div>
              <img src={Blood2} />
            </div>
            <div>
              <img src={Blood3} />
            </div>
            <div>
              <img src={Blood4} />
            </div>
            <div>
              <img src={Blood5} />
            </div>
          </Carousel>
          <div className="flex items-center gap-4 text-xl text-yellow-400">
            <a
              className="tooltip hover:text-yellow-300"
              target="blank"
              href="https://one-blood-for-all.web.app/"
            >
              <FaEye />
              <span className="tooltip-text">Live Demo</span>
            </a>
            <a
              className="tooltip hover:text-yellow-300"
              target="blank"
              href="https://github.com/SHOJOL-ISLAM-77/On-Blood-For-All"
            >
              <FaCode />
              <span className="tooltip-text">Client code</span>
            </a>
            <a
              className="tooltip hover:text-yellow-300"
              target="blank"
              href="https://github.com/SHOJOL-ISLAM-77/On-Blood-For-All-Server"
            >
              <FaServer />
              <span className="tooltip-text">Server code</span>
            </a>
          </div>
          <br />
          <p className="text-gray-500">
            This application built to connect blood donors with recipients,
            facilitating a seamless donation process. The project utilizes the
            MERN stack (MongoDB, Express.js, React, Node.js) and offers
            role-based access control.
          </p>
        </div>
      </div>
      <br />
      <div>
        <h3 className="text-xl font-bold py-8">2. Service Swap Hub</h3>
        <div className="w-full ">
          <Carousel autoPlay={true} infiniteLoop={true}>
            <div>
              <img  src={service1} />
            </div>
            <div>
              <img src={service2} />
            </div>
            <div>
              <img src={service3} />
            </div>
            <div>
              <img src={service4} />
            </div>
            <div>
              <img src={service5} />
            </div>
            <div>
              <img src={service6} />
            </div>
            <div>
              <img src={service7} />
            </div>
          </Carousel>
          <div className="flex items-center gap-4 text-xl text-yellow-400">
            <a
              className="tooltip hover:text-yellow-300"
              target="blank"
              href="https://serviceswaphub.web.app/"
            >
              <FaEye />
              <span className="tooltip-text">Live Demo</span>
            </a>
            <a
              className="tooltip hover:text-yellow-300"
              target="blank"
              href="https://github.com/SHOJOL-ISLAM-77/Service-Swap-Hub"
            >
              <FaCode />
              <span className="tooltip-text">Client code</span>
            </a>
            <a
              className="tooltip hover:text-yellow-300"
              target="blank"
              href="https://github.com/SHOJOL-ISLAM-77/serviceswaphub"
            >
              <FaServer />
              <span className="tooltip-text">Server code</span>
            </a>
          </div>
          <br />
          <p className="text-gray-500">
            Welcome to our Offline Service Sharing Web Application! This
            platform is designed to connect service providers and users,
            facilitating service discovery, booking, and management.
          </p>
        </div>
      </div>
      <br />
      <div>
        <h3 className="text-xl font-bold py-8">3. My Soft</h3>
        <div className="w-full min-h-[350px]">
          <Carousel autoPlay={true} infiniteLoop={true}>
            <div>
              <img src={mysoft1} />
            </div>
            <div>
              <img src={mysoft2} />
            </div>
            <div>
              <img src={mysoft3} />
            </div>
            <div>
              <img src={mysoft4} />
            </div>
            <div>
              <img src={mysoft5} />
            </div>
            <div>
              <img src={mysoft6} />
            </div>
          </Carousel>
          <div className="flex items-center gap-4 text-xl text-yellow-400">
            <a
              className="tooltip hover:text-yellow-300"
              target="blank"
              href="https://mysoft-8e086.firebaseapp.com/"
            >
              <FaEye />
              <span className="tooltip-text">Live Demo</span>
            </a>
            <a
              className="tooltip hover:text-yellow-300"
              target="blank"
              href="https://github.com/SHOJOL-ISLAM-77/My-Soft-"
            >
              <FaCode />
              <span className="tooltip-text">Client code</span>
            </a>
            <a
              className="tooltip hover:text-yellow-300"
              target="blank"
              href="https://github.com/SHOJOL-ISLAM-77/MY-SOFT-SERVER"
            >
              <FaServer />
              <span className="tooltip-text">Server code</span>
            </a>
          </div>
          <br />
          <p className="text-gray-500">
            This project involves the creation of a unique and user-friendly
            e-commerce website with a variety of features. It provides a
            seamless shopping experience for users, allowing them to browse
            products, add items to their cart, and make purchases.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
