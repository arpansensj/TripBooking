/* eslint-disable react/prop-types */
import Button from "../components/Button";
import { CiMap } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = ({ handleOpen }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="pl-10">
        <GiHamburgerMenu
          onClick={handleOpen}
          className="cursor-pointer text-red-500 w-8 h-8 hover:w-10 hover:h-10 max-md:hidden"
        />
      </div>
      <div className="flex gap-5 justify-end items-center text-white pt-4 pr-6 animate-fade-left animate-duration-[2000ms] animate-delay-200 animate-ease-out">
        <p>Home</p>
        <p>Destinations</p>
        <Button
          label="Book Now"
          icon={<CiMap className="bg-transparent" />}
        ></Button>
      </div>
    </div>
  );
};

export default Navbar;
