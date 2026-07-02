import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdLocalShipping, MdOutlineShoppingCart } from "react-icons/md";
import { RiLeafLine } from "react-icons/ri";
import { BsShieldCheck } from "react-icons/bs";
import { useState } from "react";
import logo from "../assets/SVG/logo.svg";

const features = [
  {
    icon: <RiLeafLine className="text-2xl text-primary" />,
    title: "Fresh groceries delivered daily",
    desc: "Fresh products prepared and delivered",
  },
  {
    icon: <MdLocalShipping className="text-2xl text-primary" />,
    title: "Fast home delivery",
    desc: "Fast delivery service designed.",
  },
  {
    icon: <MdOutlineShoppingCart className="text-2xl text-primary" />,
    title: "Products carefully selected",
    desc: "Quality groceries selected with care.",
  },
  {
    icon: <BsShieldCheck className="text-2xl text-primary" />,
    title: "Easy and secure shopping",
    desc: "Simple ordering with secure payment.",
  },
];

const footerLinks = [
  {
    heading: "Company",
    links: [
      "Home",
      "About Us",
      "My Account",
      "Shop",
      "Contact Us",
      "Careers",
      "FAQs",
      "Blog",
    ],
  },
  {
    heading: "Shop",
    links: [
      "New Arrivals",
      "Best Sellers",
      "Trending Now",
      "Bakery",
      "Beverages",
      "Cookies & Bars",
      "Snacks",
      "Vegetables",
    ],
  },
  {
    heading: "Customer Care",
    links: ["Contact Us", "Order Tracking", "Payment Methods"],
  },
  {
    heading: "Quick Access",
    links: ["Wishlist", "Compare Table"],
  },
  {
    heading: "Legal",
    links: [
      "Payment Methods",
      "Accessibility",
      "Shipping & Delivery",
      "Returns & Refund Policy",
      "Cookie Policy",
      "Privacy Policy",
      "Terms & Conditions",
      "FAQs",
    ],
  },
  {
    heading: "Our Brands",
    links: [
      "Good & Gather",
      "Favorite Day",
      "Market Pantry",
      "Whitehaven",
      "Biofreeze",
      "Johnson & Johnson",
      "Stouffer's",
      "Stonyfield",
    ],
  },
];

const socialIcons = [
  { icon: FaFacebookF, label: "Facebook" },
  { icon: FaTwitter, label: "Twitter" },
  { icon: FaInstagram, label: "Instagram" },
  { icon: FaYoutube, label: "Youtube" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  return (
    <footer className="bg-white border-t border-gray-100">
      {/* Features Strip */}
      <div className="bg-[#f8f6f7] py-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-4">
              <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-full bg-white shadow-sm">
                {f.icon}
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-sm">
                  {f.title}
                </h4>
                <p className="text-gray-500 text-xs mt-0.5">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
  <div className="bg-primary/5 border-y border-primary/10 py-10 px-4">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">

    {/* Left - Heading & Paragraph */}
    <div className="md:w-1/2 text-center md:text-left">
      <h2 className="text-xl md:text-3xl font-bold text-gray-800">
        Subscribe to our newsletter
      </h2>
      <p className="text-gray-500 text-sm mt-3 leading-6">
        Get the latest grocery deals, fresh product updates, and special
        offers delivered straight to your inbox every single week.
      </p>
    </div>

    {/* Right - Input, Button & Checkbox */}
    <div className="md:w-1/2 w-full">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="flex-1 px-4 py-3 rounded-lg border border-gray-200 outline-none text-sm focus:border-primary transition"
        />
        <button className="bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition whitespace-nowrap">
          Subscribe
        </button>
      </div>

      {/* Checkbox */}
      <div className="flex items-center gap-2.5 mt-4">
        <div
          onClick={() => setAgreed(!agreed)}
          className={`w-4 h-4 flex-shrink-0 rounded border-2 cursor-pointer flex items-center justify-center transition-all duration-200 ${
            agreed ? "bg-primary border-primary" : "bg-white border-gray-300"
          }`}
        >
          {agreed && (
            <svg
              className="w-2.5 h-2.5 text-white"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="2,6 5,9 10,3" />
            </svg>
          )}
        </div>
        <label
          onClick={() => setAgreed(!agreed)}
          className="text-xs text-gray-500 cursor-pointer"
        >
          By subscribing you agree to our{" "}
          <span className="text-primary font-semibold hover:underline">
            Terms & Conditions.
          </span>
        </label>
      </div>
    </div>

  </div>
</div>

      {/* Main Links */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h3 className="font-bold text-gray-800 text-sm mb-4">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 text-sm hover:text-primary transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo + Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <img src={logo} alt="Gromark" className="w-28 cursor-pointer object-contain" />
            <p className="text-gray-400 text-sm mt-2">
              © 2026 Gromark Grocery. All Rights Reserved.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialIcons.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
              >
                <Icon className="text-sm" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
