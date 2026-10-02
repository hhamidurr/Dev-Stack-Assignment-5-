
import { HiMenu } from "react-icons/hi";
import logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-4">
        
        <div className="flex items-center justify-between">

          {/* Mobile Hamburger */}
          <button className="lg:hidden text-2xl text-gray-700">
            <HiMenu />
          </button>

          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Dev Stack logo"
              className="w-32"
            />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex gap-10 items-center text-[#475569] font-medium text-[16px]">
            <li className="text-[#DB2777] cursor-pointer">Home</li>
            <li className="cursor-pointer hover:text-[#DB2777]">
              Technologies
            </li>
            <li className="cursor-pointer hover:text-[#DB2777]">
              Projects
            </li>
            <li className="cursor-pointer hover:text-[#DB2777]">
              About
            </li>
            <li className="cursor-pointer hover:text-[#DB2777]">
              Contact
            </li>
          </ul>

          {/* Auth Buttons */}
          <div className="flex gap-2 sm:gap-4 items-center">
            <button className="btn btn-ghost rounded-full text-[#334155]">
              Sign In
            </button>

            <button className="btn rounded-full border-none text-white bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 hover:opacity-90">
              Sign Up
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Nav;