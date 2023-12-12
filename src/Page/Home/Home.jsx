import HomeSection from "../../Components/HomeSection/HomeSection";
import Profile from "../../Components/Profile/Profile";
import Sidebar from "../../Components/SideBar/Sidebar";

const Home = () => {
  return (
    <div className="font-Poppins min-h-[850px] h-screen w-full backdrop-blur-sm bg-[url('https://github.com/SHOJOL-ISLAM-77/MY-PORTFOLIO/blob/main/public/RySj_U.gif?raw=true')]">
      <div className="w-full min-h-[850px] h-screen backdrop-blur-sm bg-black/10 flex justify-center items-center">
        <div className="max-w-8xl mx-auto flex text-white flex-col lg:flex-row items-center">
          <div className="hidden lg:block flex-grow">
            <Sidebar />
          </div>
          <div className="min-h-[800px] max-h-[800px]">
          <Profile />
          </div>
          <div className="min-h-[800px] max-h-[800px]">
            <HomeSection />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
