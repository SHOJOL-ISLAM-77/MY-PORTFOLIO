import HomeSection from "../../Components/HomeSection/HomeSection";
import Profile from "../../Components/Profile/Profile";
import Sidebar from "../../Components/SideBar/Sidebar";

const Home = () => {
  return (
    <div className="font-Poppins h-screen w-full backdrop-blur-sm bg-[url('https://github.com/SHOJOL-ISLAM-77/MY-PORTFOLIO/blob/main/public/RySj_U.gif?raw=true')]">
      <div className="w-full h-screen backdrop-blur-sm bg-black/10 flex justify-center items-center">
        <div className="max-w-8xl mx-auto flex text-white flex-col lg:flex-row items-center">
            <div className="flex-grow "><Sidebar/></div>
            <Profile/>
            <div className="max-h-[800px]">
            <HomeSection/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
