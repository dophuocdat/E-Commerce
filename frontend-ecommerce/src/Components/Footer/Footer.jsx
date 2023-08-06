import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="w-full relative -top-32 ">
      <div className="bg-slate-700 h-12 flex items-center justify-center text-white">
        <p className="cursor-pointer" onClick={scrollToTop}>
          Back to top
        </p>
      </div>
      <div className="bg-slate-800 flex justify-center flex-col items-center gap-10 ">
        <div className="grid grid-cols-4 grid-rows-1  place-items-center w-1/2 place-content-center ">
          <div>
            <h1 className="text-white text-lg font-semibold">Get to Know Us</h1>
            <div className="flex flex-col gap-2 pt-5">
              <p className="text-white cursor-pointer text-sm font-thin">
                Careers
              </p>
              <p className="text-white cursor-pointer text-sm font-thin">
                Blog
              </p>
              <p className="text-white cursor-pointer text-sm font-thin">
                About Amazon
              </p>
              <p className="text-white cursor-pointer text-sm font-thin">
                Investor Relations
              </p>
              <p className="text-white cursor-pointer text-sm font-thin">
                Amazon Devices
              </p>
              <p className="text-white cursor-pointer text-sm font-thin">
                Amazon Science
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-white text-lg font-semibold">
              Make Money with Us
            </h1>
            <div className="flex flex-col gap-2 pt-5">
              <p className="text-white cursor-pointer text-sm font-thin">
                Sell products on Amazon
              </p>
              <p className="text-white cursor-pointer text-sm font-thin">
                Sell on Amazon Business
              </p>
              <p className="text-white cursor-pointer text-sm font-thin">
                Sell apps on Amazon
              </p>
              <p className="text-white cursor-pointer text-sm font-thin">
                Become an Affiliate
              </p>
              <p className="text-white cursor-pointer text-sm font-thin">
                Advertise Your Products
              </p>
              <p className="text-white cursor-pointer text-sm font-thin">
                Self-Publish with Us
              </p>
              <p className="text-white cursor-pointer text-sm font-thin">
                Host an Amazon Hub
              </p>
              <p className="text-white cursor-pointer text-sm font-thin">
                See More Make Money with Us
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-white text-lg font-semibold">
              Amazon Payment Products
            </h1>
            <div className="flex flex-col gap-2 pt-5">
              <p className="text-white cursor-pointer  text-sm font-thin">
                Amazon Business Card
              </p>
              <p className="text-white cursor-pointer  text-sm font-thin">
                Shop with Points
              </p>
              <p className="text-white cursor-pointer  text-sm font-thin">
                Reload Your Balance
              </p>
              <p className="text-white cursor-pointer  text-sm font-thin">
                Amazon Currency Converter
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-white text-lg font-semibold">
              Let Us Help You
            </h1>
            <div className="flex flex-col gap-2 pt-5">
              <p className="text-white cursor-pointer  text-sm font-thin">
                Amazon and COVID-19
              </p>
              <p className="text-white cursor-pointer  text-sm font-thin">
                Your Account
              </p>
              <p className="text-white cursor-pointer  text-sm font-thin">
                Your Orders
              </p>
              <p className="text-white cursor-pointer  text-sm font-thin">
                Shipping Rates & Policies
              </p>
              <p className="text-white cursor-pointer  text-sm font-thin">
                Returns & Replacements
              </p>
              <p className="text-white cursor-pointer  text-sm font-thin">
                Manage Your Content and Devices
              </p>
              <p className="text-white cursor-pointer  text-sm font-thin">
                Amazon Assistant
              </p>
              <p className="text-white cursor-pointer  text-sm font-thin">
                Help
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://th.bing.com/th/id/R.ca4da319ab763c8d996fff8ecaacc6ef?rik=xyZWahtpQkPunQ&riu=http%3a%2f%2fwww.adventureswithadifference.com%2fresources%2fAvailable-at-Amazon-logo-transparent-460x280.png&ehk=eUHJEueVu7znNS7T9blT1YjDdqvrTnrqhgoz7oBbeIw%3d&risl=&pid=ImgRaw&r=0"
            alt=""
            className="w-32 h-full object-cover scale-150"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
