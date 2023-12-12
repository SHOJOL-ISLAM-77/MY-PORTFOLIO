import { Outlet } from "react-router-dom";

const HomeSection = () => {
  
  return (
  
      <div  className="hidden overflow-y-auto lg:block  scrollbar-thin scrollbar-rounded-lg scrollbar-thumb-gray-400 scrollbar-track-[#191919] bg-[#191919] w-[900px] max-h-[810px] ">
        <Outlet />
      </div>
  );
};

export default HomeSection;

// scrollbar-thin scrollbar-rounded-lg scrollbar-thumb-gray-400 scrollbar-track-[#191919]
