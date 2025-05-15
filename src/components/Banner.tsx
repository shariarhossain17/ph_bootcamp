import Marquee from "react-fast-marquee";
import { Link } from "react-router";
import banner from "../assets/banner/thumbnail.jpg";
import cssIcon from "../assets/logo/icons8-css-24.png";
import cssIcon2 from "../assets/logo/icons8-css-64.png";
import htmlIcon from "../assets/logo/icons8-html-48.png";
import htmlIcon2 from "../assets/logo/icons8-html-50.png";
import jsIcon from "../assets/logo/icons8-javascript-48.png";

const Banner = () => {
  return (
    <div className="relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-100 via-purple-50 to-white -z-10"></div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Heading */}
          <h1 className="text-4xl font-bold mb-6  ">
            <span className="bg-gradient-to-r from-[rgba(232,85,222,1)] to-[rgba(84,0,238,1)] text-transparent bg-clip-text">
              ওয়েব ডেভেলপমেন্ট
            </span>{" "}
            <span className="text-gray-800">
              শুরু করুন ১৪ দিনের ফ্রি বুটক্যাম্পে 🚀
            </span>
          </h1>

          <Marquee className="text-[#262C33]AdorNoirrit.ttfAdorNoirrit.ttf">
            প্রোগ্রামিং ওয়েব ডেভেলপমেন্ট বুটক্যাম্পর ১২ তম ব্যাচের ইনরোলমেন্ট
            শুরু ১০ই জুন থেকে এবং ইনরোলমেন্ট শেষ ২৪ ই জুন রাত ১১ টা ৫৯ মিনিটে
          </Marquee>

          {/* Join Button */}
          <Link
            to="/bootcamp"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 text-white font-medium hover:opacity-90 transition-opacity mt-5"
          >
            এখনই জয়েন করো
          </Link>

          <div className="mt-12 relative bg-white rounded-lg p-4 shadow-lg max-w-3xl mx-auto hidden md:block">
            {/* Left Side Icons with custom gaps */}
            <div className="absolute left-[-90px] top-0 animate-pulse">
              <img
                className="w-10 h-10 opacity-80"
                src={htmlIcon2}
                alt="HTML Icon"
              />
            </div>
            <div className="absolute left-[-70px] top-[50%] animate-bounce">
              <img
                className="w-10 h-10 opacity-80"
                src={htmlIcon}
                alt="HTML Icon"
              />
            </div>
            <div className="absolute left-[-80px] bottom-0 animate-pulse">
              <img
                className="w-10 h-10 opacity-80"
                src={cssIcon}
                alt="CSS Icon"
              />
            </div>

            {/* Right Side Icons */}
            <div className="absolute -right-20 top-1/3 animate-pulse">
              <img
                className="w-10 h-10 opacity-80"
                src={jsIcon}
                alt="JS Icon"
              />
            </div>
            <div className="absolute -right-16 bottom-1/3 animate-bounce">
              <img
                className="w-10 h-10 opacity-80"
                src={cssIcon2}
                alt="CSS Icon 2"
              />
            </div>

            {/* Banner Image */}
            <img src={banner} className="rounded-lg w-full" alt="Banner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
