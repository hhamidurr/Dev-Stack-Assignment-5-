import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="container mx-auto px-4">

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="/src/assets/logo-text.png"
              alt="Dev Stack"
              className="w-36 mb-5"
            />

            <p className="text-gray-500 text-sm leading-6 max-w-xs">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-white hover:bg-linear-to-r hover:from-[#EC4899] hover:to-[#8B5CF6] hover:border-transparent transition-all duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-white hover:bg-linear-to-r hover:from-[#EC4899] hover:to-[#8B5CF6] hover:border-transparent transition-all duration-300"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-white hover:bg-linear-to-r hover:from-[#EC4899] hover:to-[#8B5CF6] hover:border-transparent transition-all duration-300"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-5">
              Product
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-[#EC4899] transition-colors"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-[#EC4899] transition-colors"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-[#EC4899] transition-colors"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-5">
              Company
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-[#EC4899] transition-colors"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-[#EC4899] transition-colors"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-[#EC4899] transition-colors"
                >
                  Career
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-5">
              Legal
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-[#EC4899] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-[#EC4899] transition-colors"
                >
                  Terms Of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-5 flex  text-center">
          <p className="text-sm text-gray-400 text-center mx-auto">
            © 2026 Dev Stack. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
