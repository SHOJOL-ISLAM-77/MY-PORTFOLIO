import HomeSection from "../../Components/HomeSection/HomeSection";
import Profile from "../../Components/Profile/Profile";
import Sidebar from "../../Components/SideBar/Sidebar";

const Home = () => {
  return (
    <div className="font-Poppins lg:min-h-[850px] bg-cover bg-fixed lg:h-screen w-full bg-[url('https://github.com/SHOJOL-ISLAM-77/MY-PORTFOLIO/blob/main/public/RySj_U.gif?raw=true')]">
      <div className="w-full lg:min-h-[850px] lg:h-screen backdrop-blur-sm bg-black/10 flex justify-center items-center">
        <div className="flex text-white flex-col lg:flex-row items-center justify-center">
          <div className="flex-grow lg:order-1 order-2">
            <Sidebar />
          </div>
          <div className="lg:min-h-[800px] max-h-[800px] lg:order-2 order-1">
          <Profile />
          </div>
          <div className="lg:min-h-[810px] max-h-[810px] order-3 mt-8">
            <HomeSection />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
