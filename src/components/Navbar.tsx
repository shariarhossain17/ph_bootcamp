import { Menu, X } from "lucide-react";
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
        to="/"
        onClick={() => setIsMenuOpen(false)}
      >
        হোম
      </Link>
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
    <>
      <div
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow"
        style={{ height: 75 }}
      >
        <div className="px-6 md:px-12 lg:px-16 py-4 custom-ador-font mx-auto h-full flex items-center justify-between">
          <nav className="flex items-center justify-between w-full">
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
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed top-[75px] left-0 right-0 z-50 bg-white shadow p-4 rounded flex flex-col gap-4">
            {navLinks}
          </div>
        )}
      </div>

      <div className="pt-[75px]"></div>
    </>
  );
};

export default Navbar;
