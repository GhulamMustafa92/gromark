import bg from "../assets/bg.webp";
import { MdOutlineBakeryDining } from "react-icons/md";
import { MdEmojiFoodBeverage } from "react-icons/md";
import { FaBowlFood } from "react-icons/fa6";
import { FaBabyCarriage } from "react-icons/fa";
import { LuMilk } from "react-icons/lu";
import { GiFruitBowl } from "react-icons/gi";
import { GiHealthNormal } from "react-icons/gi";
import { GiChickenOven } from "react-icons/gi";
import { LuPopcorn } from "react-icons/lu";
import { GiTomato } from "react-icons/gi";
import { useState } from "react";
import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { TiArrowRepeat } from "react-icons/ti";
import bg2 from "../assets/bg2.webp";
export default function Home() {
  const data = [
    "All",
    "Breakfast",
    "Deli",
    "Canned",
    "Organic",
    "Fruits",
    "Vegetables",
    "Meats",
    "Snacks",
  ];

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

  const products = [
    {
      id: 1,
      name: "Nutella Chocolate Hazelnut Spread – 13oz Creamy Spread",
      category: "Breakfast",
      price: "$4.99",
      delPrice: "$6.78",
      rating: "4.3",
      image: "/Images/jam.webp",
      image2: "/Images/jam3.webp",
      off: "47%",
    },
    {
      id: 2,
      name: "Good & Gather Fresh Carrot Sticks Farm Fresh Cut Snack – 12oz",
      category: "Vegetables",
      price: "$6.50",
      delPrice: "$8.78",
      rating: "4.3",
      image: "/Images/carrot.webp",
      image2: "/Images/carrot3.webp",
      off: "20%",
    },
    {
      id: 3,
      name: "Chex Mix Traditional Large Crunchy Savory Snack Mix - 13.5oz",
      category: "Snacks",
      price: "$2.30",
      delPrice: "$3.78",
      rating: "3.3",
      image: "/Images/snack.webp",
      image2: "/Images/snack0.webp",
      off: "50%",
    },
    {
      id: 4,
      name: "LesserEvil Popcorn Cheddar Cheese Snack - 4.6oz",
      category: "Snacks",
      price: "$8.99",
      delPrice: "$12.78",
      rating: "5",
      image: "/Images/snack2.webp",
      image2: "/Images/snack3.webp",
      off: "20%",
    },
    {
      id: 5,
      name: "Wheat Thins Sundried Tomato & Basil Wheat Cracker Snacks",
      category: "Snacks",
      price: "$3.20",
      delPrice: "$6.78",
      rating: "3.3",
      image: "/Images/snack5.webp",
      image2: "/Images/snack6.webp",
      off: "50%",
    },
    {
      id: 6,
      name: "Wheat Thins Sundried Tomato & Basil Wheat Cracker Snacks",
      category: "Breakfast",
      price: "$3.20",
      delPrice: "$6.78",
      rating: "4.3",
      image: "/Images/corn.webp",
      image2: "/Images/corn2.webp",
      off: "30%",
    },
    {
      id: 7,
      name: "Good & Gather All Natural Oven Roasted Turkey Breast",
      category: "Deli",
      price: "$20",
      delPrice: "$123",
      rating: "4.5",
      image: "/Images/burger.webp",
      image2: "/Images/burger2.webp",
      off: "50%",
    },
    {
      id: 8,
      name: "Heyday Canning Saucy Tomato Alla Vodka Cannellini Beans",
      category: "Canned",
      price: "$245",
      delPrice: "$700",
      rating: "5",
      image: "/Images/beans.webp",
      image2: "/Images/beans2.webp",
      off: "30%",
    },
    {
      id: 9,
      name: "Good & Gather Fresh Organic Granny Smith Apples - 2lb Bag",
      category: "Organic",
      price: "300",
      delPrice: "$400",
      rating: "4",
      image: "/Images/apple.webp",
      image2: "/Images/apple2.webp",
      off: "40%",
    },
    {
      id: 10,
      name: "Good & Gather Fresh Organic Bananas - 2lb Premium Quality",
      category: "Fruits",
      price: "$220",
      delPrice: "$498",
      rating: "3.3",
      image: "/Images/bnana.webp",
      image2: "/Images/bnana2.webp",
      off: "30%",
    },
    {
      id: 11,
      name: "Good & Gather Beef Meatballs - Frozen - 26oz Fully Cooked",
      category: "Meats",
      price: "$200",
      delPrice: "$278",
      rating: "3.3",
      image: "/Images/meet.webp",
      image2: "/Images/meet2.webp",
      off: "30%",
    },
  ];

const saleProduct = [
      {
      id: 1,
      name: "King's Hawaiian Original Sweet Hawaiian Rolls Family Pack",
      price: "$499",
      delPrice: "$678",
      rating: "4.3",
      image: "/Images/bread1.webp",
      image2: "/Images/bread2.webp",
      off: "23%",
    },
      {
      id: 2,
      name: "Favorite Day Raspberry Danish Bakery Pastry -14oz",
      price: "$349",
      delPrice: "$458",
      rating: "4",
      image: "/Images/pasta1.webp",
      image2: "/Images/pasta2.webp",
      off: "40%",
    },
      {
      id: 3,
      name: "Favorite Day Chocolate Chip Muffins Sweet Treat - 14oz/4ct",
      price: "$129",
      delPrice: "$478",
      rating: "4.3",
      image: "/Images/cake1.webp",
      image2: "/Images/cake2.webp",
      off: "50%",
    },
      {
      id: 4,
      name: "Favorite Day Mini Chocolate Chip Cookies Sweet Snack",
      price: "$499",
      delPrice: "$678",
      rating: "4.3",
      image: "/Images/cookie1.webp",
      image2: "/Images/cookie2.webp",
      off: "20%",
    },
      {
      id: 5,
      name: "Favorite Day Iced Lemon Sliced Loaf Cake Bakery Fresh - 14.1oz",
      price: "$549",
      delPrice: "$678",
      rating: "4.3",
      image: "/Images/chocobread1.webp",
      image2: "/Images/chocobread2.webp",
      off: "10%",
    },
]

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      <section
        className="w-full  bg-[#f8f6f7] bg-no-repeat bg-center bg-cover lg:bg-contain flex items-center min-h-[400px] lg:min-h-[550px]"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-10">
          {/* Left Content */}
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left flex flex-col items-center lg:items-start">
            <button className="bg-white text-primary px-4 py-1.5 rounded-full font-bold mb-5">
              Weekly Discount
            </button>

            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary leading-tight">
              Red Week
            </h2>

            <h3 className="text-2xl md:text-7xl font-bold text-secondary">
              Discounts Start This Week
            </h3>

            <p className="mt-6 text-gray-600 text-md font-bold leading-7">
              Discover this week's best grocery deals and save on everyday
              essentials. From snacks to fresh ingredients, amazing offers are
              waiting for you today.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center md:justify-between gap-6">
            {categories.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center justify-center gap-2 cursor-pointer group w-20 md:w-24"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-gray-100 text-3xl md:text-4xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <span className="text-sm md:text-base font-medium text-gray-700 text-center">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-10 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h1 className="text-3xl font-semibold">Best Seller</h1>

            <ul className="flex gap-4 md:gap-7 text-sm md:text-base font-semibold overflow-x-auto whitespace-nowrap pb-2 md:pb-0 scrollbar-hide">
              {data.map((cat) => (
                <li
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`cursor-pointer pb-1 border-b-2 transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-primary rounded-2xl text-white px-4 py-1"
                      : "border-transparent hover:text-primary"
                  }`}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          {/* Filtered Data */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item) => (
                <div
                  key={item.id}
                  className="group border relative cursor-pointer border-gray-200 rounded-xl p-4 flex flex-col text-left hover:shadow-md transition overflow-hidden"
                >
                  {/* Discount Badge */}
                  <div className="absolute top-3 left-3 bg-primary text-white font-bold text-sm rounded-full py-1 px-2 z-20">
                    {item.off}
                  </div>

                  {/* Heart - always visible */}
                  <div className="absolute top-3 right-3 z-20 border rounded-full p-1.5 text-sm border-gray-400 hover:text-white hover:bg-primary transition">
                    <FaRegHeart />
                  </div>

                  {/* Eye - slides in from left on hover */}
                  <div
                    className="absolute top-12 right-3 z-20 border rounded-full p-1.5 text-sm border-gray-400 hover:text-white hover:bg-primary bg-white
          opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0
          transition-all duration-300 delay-75"
                  >
                    <FaEye />
                  </div>

                  {/* Repeat Arrow - slides in from left on hover */}
                  <div
                    className="absolute top-[5.5rem] right-3 z-20 border rounded-full p-1.5 text-sm border-gray-400 hover:text-white hover:bg-primary bg-white
                    opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0
                    transition-all duration-300 delay-150"
                  >
                    <TiArrowRepeat />
                  </div>

                  <div className="relative w-full transition-all duration-1000 h-56">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-56 object-contain rounded-lg absolute inset-0 transition-opacity duration-700 group-hover:opacity-0"
                    />
                    <img
                      src={item.image2}
                      alt={item.name}
                      className="w-full h-40 object-contain rounded-lg absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    />
                  </div>

                  <h4 className="text-gray-800 text-left text-sm font-bold line-clamp-2 mt-3">
                    {item.name}
                  </h4>

                  <div className="mt-1 text-left flex items-center gap-1">
                    <Rating
                      initialRating={item.rating}
                      readonly
                      emptySymbol={
                        <FaRegStar className="text-gray-300 text-xl" />
                      }
                      fullSymbol={
                        <FaStar className="text-yellow-400 text-xl" />
                      }
                      fractions={2}
                    />
                    <span className="text-gray-500 text-sm">
                      ({item.rating})
                    </span>
                  </div>

                  <div className="flex justify-start items-center gap-4">
                    <span className="text-green-600 text-xl font-bold mt-1">
                      {item.price}
                    </span>
                    <span>
                      <del className="text-xl text-gray-500">
                        {item.delPrice}
                      </del>
                    </span>
                  </div>

                  <button className="mt-4 bg-primary text-white font-semibold py-2 rounded-lg hover:opacity-90 transition w-full">
                    Add to Cart
                  </button>

                  <p className="text-gray-400 text-sm">
                    Shipping in 16 hours 57 minutes
                  </p>
                  <h4 className="text-green-600 uppercase font-medium text-sm">
                    In Stock
                  </h4>
                </div>
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center">
                No products found in this category.
              </p>
            )}
          </div>
        </div>
      </section>
      <section className="bg-gray-100 max-w-7xl mx-auto rounded-xl py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="text-center lg:text-left max-w-md">
            <h1 className="text-2xl md:text-3xl font-semibold ">
              Subscribe to our newsletter
            </h1>
            <p className="mt-3 text-sm  ">
              Whether you're welcoming new contacts or sharing the latest news,
              you can make your business look good in just a few clicks.
            </p>
          </div>

          {/* Right Content */}
          <div className="w-full max-w-lg">
            <div className="flex flex-col sm:flex-row items-stretch gap-3">
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email address"
                className="flex-1 px-4 py-3 bg-white rounded-lg outline-none text-sm w-full"
              />
              <button className="bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition whitespace-nowrap">
                Subscribe
              </button>
            </div>

            <div className="flex items-start gap-2.5 mt-4">
              <input
                type="checkbox"
                name="terms"
                id="terms"
                className="mt-0.5 w-4 h-4 cursor-pointer appearance-none bg-white border border-gray-300 rounded checked:bg-primary checked:border-primary focus:ring-2 focus:ring-primary/30 transition relative
    checked:after:content-['✓'] checked:after:text-white checked:after:text-xs checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center"
              />
              <label htmlFor="terms" className="text-sm cursor-pointer">
                <span className="font-semibold">
                  By subscribing you agree to our
                </span>{" "}
                <span className="text-primary font-semibold hover:underline">
                  Terms & Conditions.
                </span>
              </label>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto border border-gray-200 rounded-xl md:my-10 my-4">
        <div
          className="bg-no-repeat  bg-center bg-cover lg:bg-cover border border-gray-200 rounded-xl  flex items-center min-h-[300px]  max-w-7xl mx-auto"
          style={{ backgroundImage: `url(${bg2})` }}
        >
          <div className="mx-14 md:max-w-120 md:text-left text-center ">
            <h4 className="text-sm text-gray-700 uppercase ">Bakery Favorites</h4>
            <h1 className="text-4xl font-bold">Fresh bakery treats made for sweet moments.</h1>
            <p className="text-sm">
              Soft pastries and delicious mini pies perfect for snacks and
              desserts.
            </p>
            <button className="mt-10 font-bold">Explore Bakery</button>
          </div>
          
        </div>
       <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {
            saleProduct.map((item) => (
                <div
                  key={item.id}
                  className="group border relative cursor-pointer border-gray-200 rounded-xl p-4 flex flex-col text-left hover:shadow-md transition overflow-hidden"
                >
                  {/* Discount Badge */}
                  <div className="absolute top-3 left-3 bg-primary text-white font-bold text-sm rounded-full py-1 px-2 z-20">
                    {item.off}
                  </div>

                  {/* Heart - always visible */}
                  <div className="absolute top-3 right-3 z-20 border rounded-full p-1.5 text-sm border-gray-400 hover:text-white hover:bg-primary transition">
                    <FaRegHeart />
                  </div>

                  {/* Eye - slides in from left on hover */}
                  <div
                    className="absolute top-12 right-3 z-20 border rounded-full p-1.5 text-sm border-gray-400 hover:text-white hover:bg-primary bg-white
          opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0
          transition-all duration-300 delay-75"
                  >
                    <FaEye />
                  </div>

                  {/* Repeat Arrow - slides in from left on hover */}
                  <div
                    className="absolute top-[5.5rem] right-3 z-20 border rounded-full p-1.5 text-sm border-gray-400 hover:text-white hover:bg-primary bg-white
                    opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0
                    transition-all duration-300 delay-150"
                  >
                    <TiArrowRepeat />
                  </div>

                  <div className="relative w-full transition-all duration-1000 h-56">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-56 object-contain rounded-lg absolute inset-0 transition-opacity duration-700 group-hover:opacity-0"
                    />
                    <img
                      src={item.image2}
                      alt={item.name}
                      className="w-full h-40 object-contain rounded-lg absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    />
                  </div>

                  <h4 className="text-gray-800 text-left text-sm font-bold line-clamp-2 mt-3">
                    {item.name}
                  </h4>

                  <div className="mt-1 text-left flex items-center gap-1">
                    <Rating
                      initialRating={item.rating}
                      readonly
                      emptySymbol={
                        <FaRegStar className="text-gray-300 text-xl" />
                      }
                      fullSymbol={
                        <FaStar className="text-yellow-400 text-xl" />
                      }
                      fractions={2}
                    />
                    <span className="text-gray-500 text-sm">
                      ({item.rating})
                    </span>
                  </div>

                  <div className="flex justify-start items-center gap-4">
                    <span className="text-green-600 text-xl font-bold mt-1">
                      {item.price}
                    </span>
                    <span>
                      <del className="text-xl text-gray-500">
                        {item.delPrice}
                      </del>
                    </span>
                  </div>

                  <button className="mt-4 bg-primary text-white font-semibold py-2 rounded-lg hover:opacity-90 transition w-full">
                    Add to Cart
                  </button>

                  <p className="text-gray-400 text-sm">
                    Shipping in 16 hours 57 minutes
                  </p>
                  <h4 className="text-green-600 uppercase font-medium text-sm">
                    In Stock
                  </h4>
                </div>
              ))
             
            }
          </div>
      </section>
    </>
  );
}
