import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import { Link } from "react-router";

import logo from "../assets/logo/PH-Logo-White.png";

const Footer = () => {
  return (
    <div>
      <footer className="w-full bg-gradient-to-r from-purple-950 to-purple-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <img className="w-[207px]" src={logo} alt="" />
              </div>

              <div className="space-y-3 text-gray-200">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Level-4, 34, Awal Centre, Banani, Dhaka</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <a
                    href="mailto:web@programming-hero.com"
                    className="hover:text-pink-300 transition"
                  >
                    web@programming-hero.com
                  </a>
                </div>

                <div className="pt-4">
                  <div className="text-sm text-gray-300 mb-2">
                    যোগাযোগ বিস্তারিত জানতে কল করুন
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 flex-shrink-0" />
                    <div>
                      <a
                        href="tel:01322-901105"
                        className="hover:text-pink-300 transition block"
                      >
                        01322-901105
                      </a>
                      <a
                        href="tel:01322-810874"
                        className="hover:text-pink-300 transition block"
                      >
                        01322-810874
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Links Section 1 */}
            <div>
              <h3 className="text-lg font-medium mb-4">লিঙ্কসমূহ</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-200 hover:text-pink-300 transition"
                  >
                    আমাদের সম্পর্কে
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses"
                    className="text-gray-200 hover:text-pink-300 transition"
                  >
                    আমাদের কোর্স
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-gray-200 hover:text-pink-300 transition"
                  >
                    ব্লগ পড়ুন
                  </Link>
                </li>
                <li>
                  <Link
                    to="/refund-policy"
                    className="text-gray-200 hover:text-pink-300 transition"
                  >
                    রিফান্ড নীতি
                  </Link>
                </li>
                <li>
                  <Link
                    to="/copyright-policy"
                    className="text-gray-200 hover:text-pink-300 transition"
                  >
                    কোপাইরাইট নীতি
                  </Link>
                </li>
                <li>
                  <Link
                    to="/partnership"
                    className="text-gray-200 hover:text-pink-300 transition"
                  >
                    সহযোগিতা
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-medium mb-4">সোশ্যাল মিডিয়া</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-200 hover:text-pink-300 transition"
                  >
                    <Facebook className="h-5 w-5" />
                    <span>ফেসবুক</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-200 hover:text-pink-300 transition"
                  >
                    <Instagram className="h-5 w-5" />
                    <span>ইনস্টাগ্রাম</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-200 hover:text-pink-300 transition"
                  >
                    <Youtube className="h-5 w-5" />
                    <span>ইউটিউব</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-200 hover:text-pink-300 transition"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>লিংকডইন</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* App Download */}
            <div>
              <h3 className="text-lg font-medium mb-4">
                আমার অ্যাপটি ডাউনলোড করুন
              </h3>
              <div className="space-y-3">
                <a href="#" className="block" target="_blank" rel="noreferrer">
                  <div className="bg-black rounded-lg p-2 flex items-center space-x-2 hover:bg-gray-900 transition">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-6 h-6 text-white"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M17.05,20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24,0-1.44.62-2.2.44-3.06-.35C2.79,15.25,3.51,7.59,8.42,7.31c1.33.07,2.25.8,3.06.85,1.15-.13,2.24-.87,3.44-.87,2.07.05,3.63,1.15,4.33,2.99-3.46,2.27-2.22,7.52,1.03,9.04C19.62,21.32,18.2,21.38,17.05,20.28ZM12.03,7c.16-2.56,1.91-4.74,4.4-5-0.16,2.58-2.03,4.68-4.4,5Z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">
                        Download on the
                      </div>
                      <div className="text-sm font-semibold">App Store</div>
                    </div>
                  </div>
                </a>

                <a href="#" className="block" target="_blank" rel="noreferrer">
                  <div className="bg-black rounded-lg p-2 flex items-center space-x-2 hover:bg-gray-900 transition">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-6 h-6 text-white"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.698 12l2-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">GET IT ON</div>
                      <div className="text-sm font-semibold">Google Play</div>
                    </div>
                  </div>
                </a>

                <a href="#" className="block" target="_blank" rel="noreferrer">
                  <div className="bg-black rounded-lg p-2 flex items-center space-x-2 hover:bg-gray-900 transition">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-6 h-6 text-white"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M11.5 12.5H14V14H11.5V16.5H10V14H7.5V12.5H10V10H11.5V12.5M21 3V21H3V3H21M16.56 4H7.44L7.5 4.06V4.12L7.44 19.94H16.56L16.5 4.12V4.06L16.56 4Z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Download from</div>
                      <div className="text-sm font-semibold">Microsoft</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-6 border-t border-purple-800 text-center text-sm text-gray-300">
            © 2025 Programming Hero. All Rights Reserved. Developed By SHAHRIAR
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
