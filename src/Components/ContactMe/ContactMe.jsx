import { useRef } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";

const ContactMe = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s4sxxex", // Your EmailJS service ID
        "template_ugtwf58", // Your EmailJS template ID
        form.current,
        "39NPcXqH3t7f1WnaU" // Your EmailJS user ID
      )
      .then(
        (result) => {
          if (result) {
            toast.success("Success!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send email. Please try again later.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );
    e.target.reset();
  };

  return (
    <div className="py-8 p-4 min-h-[810px]">
      <Helmet>
        <title>Contact Me || Shojol Islam</title>
      </Helmet>
      <h2 className="text-2xl font-semibold border-b border-gray-600 pl-6 px-3 pb-3">
        Get In Touch
      </h2>
      <div className="flex flex-col py-6">
        <div className="lg:p-6  flex-1 text-gray-400">
          <div className="flex justify-between border-b-[0.1px] py-2 border-gray-500 font-medium">
            <span className="bg-yellow-300 text-black px-4 py-1 rounded-md ">
              Address:
            </span>
            <span>Kurigram, Bangladesh</span>
          </div>
          <br />
          <div className="flex justify-between border-b-[0.1px] py-2 border-gray-500 font-medium">
            <span className="bg-yellow-300 text-black px-4 py-1 rounded-md ">
              Phone:
            </span>
            <span>+880 1532316559</span>
          </div>
        </div>
        <div className="lg:p-6 flex-1 text-gray-400">
          <div className="flex justify-between border-b-[0.1px] py-2 border-gray-500 font-medium">
            <span className="bg-yellow-300 text-black px-4 py-1 rounded-md ">
              Email:
            </span>
            <span>mdshojolislamshojib@gmail.com</span>
          </div>
          <br />
          <div className="flex justify-between border-b-[0.1px] py-2 border-gray-500 font-medium">
            <span className="bg-yellow-300 text-black px-4 py-1 rounded-md ">
              Freelance:
            </span>
            <span>Unavailable</span>
          </div>
        </div>
      </div>
      <br />
      <br />
      <h2 className="text-2xl font-semibold border-b border-gray-600 px-3 pl-6 pb-3">
        Send massages
      </h2>
      <div>
        <form ref={form} onSubmit={sendEmail} className="p-6">
          <div className="flex flex-col lg:flex-row gap-6">
            <input
              className="flex-grow outline-yellow-300 focus:border-0 border-2 h-12 bg-transparent border-gray-600 p-2"
              placeholder="Type Your Name"
              type="text"
              name="user_name"
              required
            />
            <input
              className="flex-grow outline-yellow-300 focus:border-0 border-2 h-12 bg-transparent border-gray-600 p-2"
              placeholder="Type Your Email"
              type="email"
              name="user_email"
              required
            />
          </div>
          <br />
          <textarea
            required
            name="message"
            id=""
            rows="5"
            placeholder="Type Your Message"
            className="border-gray-600 p-3 w-full bg-transparent border-2 outline-yellow-300 focus:border-0"
          ></textarea>
          <div className="flex justify-center items-center py-5 hover:text-yellow-300 cursor-pointer gap-2 text-lg">
            <button type="submit">Send Massage</button>
            <FaTelegramPlane className="text-xl" />
          </div>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
