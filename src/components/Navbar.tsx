import { Link } from "react-router";
import logo from "../assets/logo/PH-Logo-Dark.png";

const Navbar = () => {
  return (
    <div className="px-6 md:px-12 py-4 sticky top-0 z-50">
      <nav className="flex items-center justify-between">
        <div>
          <Link to="/">
            <img className="w-[100px] md:w-[207px]" src={logo} alt="" />
          </Link>
        </div>
        <div className="flex gap-6 items-center">
          <Link
            className="text-[#262C33] text-[16px] font-medium"
            to="/bootcamp"
          >
            বুটক্যাম্প ক্লাস
          </Link>
          <a href="https://web.programming-hero.com/home">
            <li className="list-none text-[#262C33] text-[16px] font-medium">
              কোর্স{" "}
            </li>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
