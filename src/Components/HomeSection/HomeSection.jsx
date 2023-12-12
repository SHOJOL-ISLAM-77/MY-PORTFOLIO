import { Outlet } from "react-router-dom";

const HomeSection = () => {
  
  return (
  
      <div
       className="my-1 lg:my-0 w-[350px] lg:w-[900px] max-h-[500px] lg:min-h-[810px] lg:max-h-[810px]  rounded-2xl overflow-y-auto scrollbar-thin scrollbar-rounded-lg scrollbar-thumb-gray-400 scrollbar-track-[#191919] bg-[#191919] ">
        <Outlet />
      </div>
  );
};

export default HomeSection;

// scrollbar-thin scrollbar-rounded-lg scrollbar-thumb-gray-400 scrollbar-track-[#191919]
