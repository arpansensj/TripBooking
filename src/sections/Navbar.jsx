import Button from "../components/Button";
import { CiMap } from "react-icons/ci";
const Navbar = () => {
  return <div className="flex gap-5 justify-end items-center text-white pt-4 pr-6 sticky bottom-0 fixed top-0 left-0 z-10 animate-fade-left animate-duration-[2000ms] animate-delay-200 animate-ease-out">
    <p>Home</p>
    <p>Destinations</p>
    <Button label="Book Now" icon={<CiMap className="bg-transparent"/>}></Button>
  </div>;
};

export default Navbar;
