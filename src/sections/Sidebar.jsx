import Button from "../components/Button";
import { CiMap } from "react-icons/ci";
import Card from "../components/Card"
const Sidebar = () => {
  return (
    <div className="bg-white w-[400px] h-full rounded-r-3xl rounded-b-3xl pl-7 fixed top-0 left-0 z-20">
      <img src="/assets/pngwing.png" alt="" className="w-[100px] h-[80px] pl-4 pt- pb-2"/>
      <div className="animate-fade-up animate-duration-1000 animate-ease-in"><h1 className="font-bold text-6xl pl-4 pt-[80px] pb-[60px] ">Embark on your dream vacation</h1></div>
      <div className="pl-4"><hr className=" bg-red-500 h-[3px] w-[130px] "/></div>
      <p className="p-6 animate-fade-right animate-duration-[1500ms] animate-ease-out animate-delay-100">From the sun-kissed beaches of the Carribean to the ancient streets of Rome, we bring the world to your doorstep.</p>
      <div className="flex justify-start items-center gap-4 pl-4 pt-4 pb-6 animate-jump-in animate-duration-[2000ms] animate-delay-200 animate-ease-out">
        <Button label="See Destinations "></Button>
        <Button label="Book Now" icon={<CiMap className="bg-transparent"/>}></Button>
        
        
      </div>
      <div className="flex items-center gap-5 p-6 animate-fade animate-duration-[2000ms] animate-delay-200 animate-ease-out ">
      <Card imgURL="/assets/desert.jpg" />
      <Card imgURL= "/assets/road.jpg"/>
      </div>
    </div>
  )
}

export default Sidebar