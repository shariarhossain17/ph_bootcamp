import { Menu, X } from "lucide-react"; // Make sure you have lucide-react installed
import { useState } from "react";
import { Link } from "react-router";
import logo from "../assets/logo/PH-Logo-Dark.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = (
    <>
      <Link
        className="text-[#262C33] text-[16px] font-medium"
        to="/bootcamp"
        onClick={() => setIsMenuOpen(false)}
      >
        বুটক্যাম্প ক্লাস
      </Link>
      <a
        className="text-[#262C33] text-[16px] font-medium"
        href="https://web.programming-hero.com/home"
        onClick={() => setIsMenuOpen(false)}
      >
        কোর্স
      </a>
      <a
        className="text-[#262C33] text-[16px] font-medium"
        href="https://learn.programming-hero.com/blog/"
        onClick={() => setIsMenuOpen(false)}
      >
        ব্লগ
      </a>
      <a
        className="text-[#262C33] text-[16px] font-medium"
        href="https://web.programming-hero.com/home/ph-books"
        onClick={() => setIsMenuOpen(false)}
      >
        বই
      </a>
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-white shadow">
      <div className="px-6 md:px-12 lg:px-16 py-4  custom-ador-font max-w-[1600px] mx-auto">
        <nav className="flex items-center justify-between ">
          <div>
            <Link to="/">
              <img
                className="w-[100px] md:w-[207px]"
                src={logo}
                alt="PH Logo"
              />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6 items-center">{navLinks}</div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 bg-white shadow p-4 rounded">
            {navLinks}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
