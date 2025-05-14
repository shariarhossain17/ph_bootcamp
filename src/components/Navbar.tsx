import { Link } from "react-router";
import logo from "../assets/logo/PH-Logo-Dark.png";

const Navbar = () => {
  return (
    <div className="px-12 py-4">
      <nav className="flex items-center justify-between">
        <div>
          <img className="w-[207px]" src={logo} alt="" />
        </div>
        <div className="flex gap-6 items-center">
          <Link
            className="text-[#262C33] text-[16px] font-medium"
            to="/bootcamp"
          >
            বুটক্যাম্প ক্লাস
          </Link>
          <li className="list-none text-[#262C33] text-[16px] font-medium">
            কোর্স{" "}
          </li>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
