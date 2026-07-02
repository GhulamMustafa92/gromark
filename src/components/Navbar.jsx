import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { HiBars3 } from "react-icons/hi2";
import logo from "../assets/SVG/logo.svg";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaScaleBalanced } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
import { RiUser6Line } from "react-icons/ri";
import { FaBabyCarriage } from "react-icons/fa";
import { useState } from "react";
import { MdOutlineBakeryDining } from "react-icons/md";
import { MdEmojiFoodBeverage } from "react-icons/md";
import { FaBowlFood } from "react-icons/fa6";
import { LuMilk } from "react-icons/lu";
import { GiFruitBowl } from "react-icons/gi";
import { GiHealthNormal } from "react-icons/gi";
import { GiChickenOven } from "react-icons/gi";
import { LuPopcorn } from "react-icons/lu";
import { GiTomato } from "react-icons/gi";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const categories = [
    { name: "Bakery", icon: <MdOutlineBakeryDining /> },
    { name: "Baby", icon: <FaBabyCarriage /> },
    { name: "Beverages", icon: <MdEmojiFoodBeverage /> },
    { name: "Breakfast", icon: <FaBowlFood /> },
    { name: "Dairy", icon: <LuMilk /> },
    { name: "Fruits", icon: <GiFruitBowl /> },
    { name: "Healthcare", icon: <GiHealthNormal /> },
    { name: "Meats", icon: <GiChickenOven /> },
    { name: "Snacks", icon: <LuPopcorn /> },
    { name: "Vegetables", icon: <GiTomato /> },
  ];
  return (
    <>
      {/* Navbar */}
      <section>
        <div className="bg-primary text-white ">
          <div className="max-w-7xl mx-auto">
            <Carousel
              autoPlay
              infiniteLoop
              interval={3000}
              showStatus={false}
              showThumbs={false}
              showIndicators={false}
              swipeable
              emulateTouch
              renderArrowPrev={(onClickHandler, hasPrev) =>
                hasPrev && (
                  <button
                    onClick={onClickHandler}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full text-white hover:scale-110 transition"
                  >
                    <IoIosArrowBack size={30} />
                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext) =>
                hasNext && (
                  <button
                    onClick={onClickHandler}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full text-white hover:scale-110 transition"
                  >
                    <IoIosArrowForward size={30} />
                  </button>
                )
              }
            >
              {[
                "Weekly grocery deals are live – Discover new savings today.",
                "Free delivery on orders over $50 – Shop fresh groceries today!",
                "Save up to 40% on selected grocery items – Limited time offer.",
                "Fresh groceries delivered to your door – Fast and reliable delivery.",
                "Best grocery offers available this week – Don't miss out!",
              ].map((text, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center py-3 px-12"
                >
                  <div className="flex items-center justify-center gap-4 flex-wrap">
                    <p className="text-sm md:text-base font-medium">{text}</p>
                    <button className="bg-white text-black px-3.5 py-1.5 rounded-xl font-bold hover:opacity-90 text-sm transition">
                      Shop Now
                    </button>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Top utility bar - left list hidden on mobile, right side stays */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-2">
          {/* Left Side - hidden on small screens */}
          <ul className="hidden md:flex flex-wrap items-center gap-6 text-sm text-gray-700">
            <li className="hover:text-red-600 font-semibold cursor-pointer">
              About Us
            </li>
            <li className="hover:text-red-600 font-semibold cursor-pointer">
              My Account
            </li>
            <li className="hover:text-red-600 font-semibold cursor-pointer">
              Order Tracking
            </li>
            <li className="hover:text-red-600 font-semibold cursor-pointer">
              Contact Us
            </li>
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-4 md:gap-6">
            <div className="relative group">
              <button className="flex items-center gap-2 cursor-pointer text-sm">
                🏳️‍⚧️ English
              </button>
              <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    🏁 Français
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    🏳️‍🌈Español
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    🏴‍☠️Türkçe
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    🏴‍☠️Deutsch
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative group">
              <button className="cursor-pointer text-sm">USD</button>
              <div className="absolute right-0 mt-2 w-28 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    EUR
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    GBP
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    CHF
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    TRY
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main header - logo, search, account, cart - responsive */}
      <section className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-3 md:gap-6">
          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            className="w-28 md:w-44 object-contain flex-shrink-0"
          />

          {/* Menu (hamburger) */}
          <HiBars3
            onClick={() => setOpenMenu(true)}
            className="text-3xl cursor-pointer hover:text-primary transition flex-shrink-0"
          />

          {/* Search - full bar on sm+ screens, icon only on mobile */}
          <div className="hidden sm:flex items-center w-full max-w-3xl bg-gray-100 rounded-lg p-2 shadow-sm">
            <button className="flex items-center gap-2 bg-white px-5 py-3 rounded-lg font-medium">
              All
              <IoIosArrowDown />
            </button>
            <input
              type="text"
              placeholder="Search for products..."
              className="flex-1 bg-transparent px-5 outline-none"
            />
            <button className="w-12 h-12 flex items-center justify-center rounded-lg hover:bg-white transition">
              <CiSearch size={28} />
            </button>
          </div>

          <button className="sm:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 flex-shrink-0">
            <CiSearch size={22} />
          </button>

          {/* Account - hidden on smaller screens, icon still shows on lg */}
          <div className="hidden lg:flex items-center gap-3 cursor-pointer">
            <RiUser6Line className="text-3xl" />
            <div>
              <p className="text-xs text-gray-500">Welcome</p>
              <h4 className="font-semibold">Account</h4>
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-3 md:gap-6">
            <FaRegHeart className="hidden md:block text-2xl cursor-pointer hover:text-primary transition" />
            <FaScaleBalanced className="hidden lg:block text-2xl cursor-pointer hover:text-primary transition" />

            <div className="flex items-center gap-2 md:gap-3 cursor-pointer">
              <IoBagOutline className="text-lg md:text-3xl" />
              <div className="hidden sm:block">
                <p className="text-xs text-gray-500">Cart</p>
                <h4 className="font-bold text-sm text-primary">$3,499</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overlay - tap outside par sidebar close ho jaye */}
      {openMenu && (
        <div
          onClick={() => setOpenMenu(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-80 bg-white shadow-2xl z-50 transition-transform duration-300 flex flex-col ${
          openMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-200 flex-shrink-0">
          <h2 className="text-md text-gray-400 font-semibold">
            All Categories
          </h2>
          <button
            onClick={() => setOpenMenu(false)}
            className="text-xl hover:text-red-500"
          >
            ✕
          </button>
        </div>

        {/* Categories */}
        <ul className="flex-1 overflow-y-auto py-2">
          {categories.map((item) => (
            <li
              key={item.name}
              className="flex items-center justify-between px-5 py-4 hover:bg-gray-100 cursor-pointer transition"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">{item.icon}</span>
                <span className="font-medium text-gray-700">{item.name}</span>
              </div>
              <IoIosArrowDown className="text-gray-500 text-lg" />
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className="border-t p-5 text-sm text-gray-500 flex-shrink-0">
          © 2026 Gromark. All Rights Reserved.
        </div>
      </div>

      {/* Secondary navbar (Home/Shop/Blog etc.) - HIDDEN on mobile, normal on md+ */}
      <section className="hidden md:block border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Left Side */}
          <div className="flex items-center gap-8">
            <li className="list-none flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer font-medium hover:bg-primary hover:text-white transition-all duration-300">
              All Categories
              <IoIosArrowDown className="text-sm" />
            </li>
            <li className="list-none flex items-center gap-2 cursor-pointer font-medium hover:text-primary transition">
              Home <IoIosArrowDown className="text-sm" />
            </li>
            <li className="list-none flex items-center gap-2 cursor-pointer font-medium hover:text-primary transition">
              Shop <IoIosArrowDown className="text-sm" />
            </li>
            <li className="list-none flex items-center gap-2 cursor-pointer font-medium hover:text-primary transition">
              About Us <IoIosArrowDown className="text-sm" />
            </li>
            <li className="list-none flex items-center gap-2 cursor-pointer font-medium hover:text-primary transition">
              Blog <IoIosArrowDown className="text-sm" />
            </li>
            <li className="list-none flex items-center gap-2 cursor-pointer font-medium hover:text-primary transition">
              Contact Us <IoIosArrowDown className="text-sm" />
            </li>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-8">
            <li className="list-none flex items-center gap-2 cursor-pointer font-medium hover:text-primary transition">
              On Sale
              <button className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                -50%
              </button>
              <IoIosArrowDown className="text-sm" />
            </li>
            <li className="list-none flex items-center gap-2 cursor-pointer font-medium hover:text-primary transition">
              Best Seller <IoIosArrowDown className="text-sm" />
            </li>
          </div>
        </div>
      </section>
    </>
  );
}
