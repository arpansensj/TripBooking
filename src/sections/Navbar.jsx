/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../components/Button";
import { CiMap } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = ({ handleOpen }) => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const loadScript = (src) => {
    return new Promise((resovle) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resovle(true);
      };

      script.onerror = () => {
        resovle(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {

    try {
      await loadScript("https://checkout.razorpay.com/v1/checkout.js");

      const options = {
        key: "rzp_test_0202rN36C3r3rq",
        currency: "INR",
        amount: 100 * 100,
        name: "Trip Booking",
        description: "Thanks for purchasing",

        handler: async function (response) {
          await response.razorpay_payment_id;
          setPaymentSuccess(true);
        },
        prefill: {
          name: "Trip Booking",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.log(error);
    }
  };
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
          onClick = {displayRazorpay}
          label="Book Now"
          icon={<CiMap className="bg-transparent" />}
        ></Button>
      </div>
    </div>
  );
};

export default Navbar;
