import { Outlet } from "react-router-dom";

const HomeSection = () => {
    return (
        <div className="rounded-2xl bg-[#191919] w-[900px] max-h-[800px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-[#191919]">
            <Outlet/>
        </div>
    );
};

export default HomeSection;