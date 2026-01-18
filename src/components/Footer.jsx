import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";

import LanguageSwitcher from "./shared/LanguageSwitcher";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = [
    {
      links: [
        "Home",
        "How It Works",
        "All Apps",
        "Pricing",
        "Setapp for Teams",
        "Blog",
        "Podcast",
        "Download",
      ],
    },
    {
      links: [
        "About",
        "Support",
        "Education Discount",
        "Family Plan",
        "For Developers",
        "Gift Cards",
        "Redeem Card or Code",
        "Setapp Reviews",
        "Affiliate Program",
        "Mac Developer Survey 2023",
      ],
    },
    {
      links: [
        "Getting started with Setapp",
        "Remote access to other Mac",
        "Fix macOS Ventura problems",
        "Best productivity apps",
        "Best YouTube downloaders",
        "Uninstall apps",
      ],
    },
  ];

  return (
    <footer className="bg-grey-700 text-gray-300">
      <div className="px-7.5 py-20">

        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 ">

          {/* LEFT */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src="./icon.svg" className="w-5 h-7.5" alt="logo" />
              <h2 className="text-white font-bold text-lg">SETAPP</h2>
            </div>

            <div className="space-y-6 mt-12 ">
              <p className="text-sm text-white max-w-xs">
                Updates from our team, written with love 🧡
              </p>

              <div className="flex max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-l-md bg-grey-600 text-sm outline-none placeholder:text-grey-300"
                />
                <button className="bg-white text-black px-4 rounded-r-md font-semibold">
                  <MdArrowForwardIos />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT LINKS */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[1fr_1fr_1fr] gap-10">
            {footerLinks.map((column, colIndex) => (
              <div key={colIndex}>
                <ul className="space-y-2 text-sm">
                  {column.links.map((link, linkIndex) => (
                    <li
                      key={linkIndex}
                      className="hover:text-grey-100 cursor-pointer transition"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>

        </div>

        {/* Language & DMCA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-12 mb-8">
          {/* DMCA */}
          <div className="text-[10px]  font-bold   tracking-tighter text-white">
            <span className="px-2 bg-grey-400 py-1 ">DMCA </span>
            <span className="border-l border-grey-700  pl-1 px-2 py-1  bg-grey-600 ">PROTECTED</span>
          </div>

          {/* Language */}
          <LanguageSwitcher variant="full" />
        </div>

        <hr className="border-gray-700 mb-8" />

        {/* BOTTOM ROW */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-white">
            © 2023 Setapp Limited, 9 Yellow Street, Youghal, Co. Cork, P36Y4A,
            Ireland. VAT ID: IE3452001BH
          </p>

          <div className="flex items-center gap-8">


            {/* Social */}
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-white  rounded-full flex items-center justify-center hover:bg-gray-500 cursor-pointer transition">
                <FaFacebookF size={14} className="text-gray-800" />
              </div>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-500 cursor-pointer transition">
                <FaTwitter size={14} className="text-gray-800" />
              </div>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-500 cursor-pointer transition">
                <FaYoutube size={14} className="text-gray-800" />
              </div>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-500 cursor-pointer transition">
                <FaInstagram size={14} className="text-gray-800" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-3 text-[12px] text-gray-500 mt-3">
          <Link to="/">Terms of Use</Link>
          <Link to="/">Privacy Policy</Link>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
