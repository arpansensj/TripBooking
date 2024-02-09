/* eslint-disable react/prop-types */
import Button from "../components/Button";
import { CiMap } from "react-icons/ci";
import Card from "../components/Card";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
const Sidebar = ({ handleVisible }) => {
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
    <div className="bg-white md:w-[400px] w-full h-full md:rounded-r-3xl md:rounded-b-3xl pl-7 md:fixed md:top-0 md:left-0 md:z-20 max-md:mt-4">
      <div className="flex justify-between items-start">
        <div>
          <img
            src="/assets/pngwing.png"
            alt=""
            className="w-[150px] h-[120px] pl-4 md:pb-2"
          />
        </div>
        <div className="p-4">
          <RxCross2
            onClick={handleVisible}
            className="cursor-pointer text-red-500 w-8 h-8 hover:w-10 hover:h-10 max-md:hidden"
          />
        </div>
      </div>
      <div className="animate-fade-up animate-duration-1000 animate-ease-in">
        <h1 className="font-bold md:text-6xl text-4xl pl-4 md:pb-[60px] mt-4">
          Embark on your dream vacation
        </h1>
      </div>
      <div className="pl-4">
        <hr className=" bg-red-500 h-[3px] w-[130px] " />
      </div>
      <p className="p-6 animate-fade-right animate-duration-[1500ms] animate-ease-out animate-delay-100">
        From the sun-kissed beaches of the Carribean to the ancient streets of
        Rome, we bring the world to your doorstep.
      </p>
      <div className="flex justify-start items-center gap-4 pl-4 pt-4 pb-6 animate-jump-in animate-duration-[2000ms] animate-delay-200 animate-ease-out">
        <Button label="See Destinations "></Button>
        <Button
          onClick={displayRazorpay}
          label="Book Now"
          icon={<CiMap className="bg-transparent" />}
        ></Button>
      </div>
      <div className="flex items-center gap-5 p-6 animate-fade animate-duration-[2000ms] animate-delay-200 animate-ease-out ">
        <Card imgURL="/assets/desert.jpg" />
        <Card imgURL="/assets/road.jpg" />
      </div>
    </div>
  );
};

export default Sidebar;
