import banner from "../assets/banner/banner.jpg";
import cssIcon from "../assets/logo/icons8-css-24.png";
import cssIcon2 from "../assets/logo/icons8-css-64.png";
import htmlIcon from "../assets/logo/icons8-html-48.png";
import htmlIcon2 from "../assets/logo/icons8-html-50.png";
import jsIcon from "../assets/logo/icons8-javascript-48.png";

const Banner = () => {
  return (
    <div className="relative ">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-100 via-purple-50 to-white"></div>

      {/* Left side icons*/}
      <div className="absolute left-16 md:left-16 top-1/4 animate-pulse ">
        <img className="w-12 h-12 opacity-80" src={htmlIcon2} alt="" />
      </div>
      <div className="absolute left-8 md:left-24 top-1/2 animate-bounce">
        <img className="w-12 h-12 opacity-80" src={htmlIcon} alt="" />
      </div>
      <div className="absolute left-2 md:left-12 bottom-1/4 animate-pulse">
        <img className="w-12 h-12 opacity-80" src={cssIcon} alt="" />
      </div>

      {/* Right side icons*/}
      <div className="absolute right-4 md:right-16 top-1/3 animate-pulse">
        <img className="w-12 h-12 opacity-80" src={jsIcon} alt="" />
      </div>
      <div className="absolute right-8 md:right-24 bottom-1/3 animate-bounce">
        <img className="w-12 h-12 opacity-80" src={cssIcon2} alt="" />
      </div>
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center  text-center">
          <h1 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[rgba(232,85,222,1)] to-[rgba(84,0,238,1)] text-transparent bg-clip-text">
              ওয়েব ডেভেলপমেন্ট
            </span>{" "}
            <span className="text-gray-800">
              শুরু করুন ১৪ দিনের ফ্রি বুটক্যাম্পে 🚀
            </span>
          </h1>

          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 text-white font-medium hover:opacity-90 transition-opacity">
            এখনই জয়েন করো
          </button>

          {/* banner image */}
          <div className="mt-12 relative bg-white rounded-lg p-4 shadow-lg max-w-3xl mx-auto">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm flex items-center space-x-1"></div>

            <img src={banner} className="rounded-lg w-full h-[400px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
