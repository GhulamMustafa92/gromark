import cane1 from "../assets/cane1.jpg";
import cane2 from "../assets/cane2.jpg";
import Rating from "react-rating";
import saleBg from "../assets/saleBg.jpg";
import { FaStar, FaRegStar } from "react-icons/fa";

const saleProduct = [
  {
    id: 1,
    image: "/Images/sale1.webp",
    title: "Baby",
    product: "5 Products",
  },
  {
    id: 2,
    image: "/Images/sale2.webp",
    title: "Bakery",
    product: "6 Products",
  },
  {
    id: 3,
    image: "/Images/sale3.webp",
    title: "Beverages",
    product: "8 Products",
  },
  {
    id: 4,
    image: "/Images/sale4.webp",
    title: "Breakfast",
    product: "9 Products",
  },
  {
    id: 5,
    image: "/Images/sale5.webp",
    title: "Canned",
    product: "8 Products",
  },
  {
    id: 6,
    image: "/Images/sale6.webp",
    title: "Dairy",
    product: "6 Products",
  },
  {
    id: 7,
    image: "/Images/sale7.webp",
    title: "Deli",
    product: "1 Products",
  },
  {
    id: 8,
    image: "/Images/sale8.webp",
    title: "Frozen",
    product: "4 Products",
  },
  {
    id: 9,
    image: "/Images/sale9.webp",
    title: "Fruits",
    product: "1 Products",
  },
];

const winterSale1 = [
  {
    id: 1,
    image: "/Images/beans.webp",
    title: "Heyday Canning Saucy Tomato Alla Vodka Cannellini Beans",
    price: "$3.99",
    delPrice: "$4.99",
    rating: "4.5",
    qty: "2",
  },
  {
    id: 2,
    image: "/Images/biscut.webp",
    title: "Tony’s Chocolonely Pretzel and Toffee Milk Chocolate Candy Bar",
    price: "$487",
    delPrice: "$979",
    rating: "3.5",
    qty: "8",
  },
  {
    id: 3,
    image: "/Images/snack2.webp",
    title: "LesserEvil Popcorn Cheddar Cheese Snack - 4.6oz",
    price: "$59",
    delPrice: "$69",
    rating: "5",
    qty: "4",
  },
  {
    id: 4,
    image: "/Images/bottle.webp",
    title: "Gold Peak Sweetened Black Iced Tea Drink Smooth Sweet Flavor",
    price: "$99",
    delPrice: "$129",
    rating: "2.5",
    qty: "5",
  },
];
const winterSale2 = [
  {
    id: 1,
    image: "/Images/jam.webp",
    title: "Nutella Chocolate Hazelnut Spread – 13oz Creamy Spread",
    price: "$99",
    delPrice: "$49",
    rating: "4.5",
    qty: "2",
  },
  {
    id: 2,
    image: "/Images/carrot.webp",
    title: "Good & Gather Fresh Carrot Sticks Farm Fresh Cut Snack – 12oz",
    price: "$47",
    delPrice: "$79",
    rating: "3.5",
    qty: "8",
  },
  {
    id: 3,
    image: "/Images/snack.webp",
    title: "Chex Mix Traditional Large Crunchy Savory Snack Mix -z",
    price: "$19",
    delPrice: "$29",
    rating: "5",
    qty: "4",
  },
  {
    id: 4,
    image: "/Images/snack5.webp",
    title: "LesserEvil Popcorn Cheddar Cheese Snack - 4.6oz",
    price: "$34",
    delPrice: "$69",
    rating: "4.5",
    qty: "2",
  },
];
const product = [
    {
        id:1,
        image : "/Images/vegetable.webp",
        category : "Healthy Living",
        title : "How to keep fruits and vegetables fresh for longer",
        name : "Ava Collins",
        time : "4 months Ago",
    },
    {
        id:2,
        image : "/Images/chips.webp",
        category : "Healthy Living",
        title : "Choosing the best snacks for quick satisfying breaks",
        name : "Ava Collins",
        time : "4 months Ago",
    },
    {
        id:3,
        image : "/Images/chocolate.webp",
        category : "Food & Nutrition",
        title : "Discovering artisan chocolates and sweet treats",
        name : "Ava Collins",
        time : "4 months Ago",
    },
]
export default function Sales() {
  return (
    <>
      <section className="w-full py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {/* Card 1 */}
          <div
            className="relative rounded overflow-hidden min-h-[400px] md:min-h-[500px] bg-cover bg-center flex flex-col justify-start p-8"
            style={{ backgroundImage: `url(${cane1})` }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 " />

            <div className="relative z-10 mt-15">
              <h4 className="uppercase text-sm text-white font-semibold tracking-widest mb-2">
                Sparkling Drinks
              </h4>
              <h1 className="text-white text-3xl md:text-4xl font-bold leading-snug mb-3">
                Refreshing sparkling drinks made with bold natural flavors.
              </h1>
              <p className="text-white/80 text-sm md:text-base mb-5">
                Discover sodas and drinks crafted for everyday refreshment.
              </p>
              <button className="bg-primary mt-30 text-white font-bold py-2.5 px-6 rounded-full hover:opacity-90 transition">
                Shop Now
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="relative rounded overflow-hidden min-h-[400px] md:min-h-[500px] bg-cover bg-center flex flex-col justify-end p-8"
            style={{ backgroundImage: `url(${cane2})` }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 rounded" />

            <div className="relative z-10 mt-15">
              <h4 className="uppercase text-sm text-white font-semibold tracking-widest mb-2">
                Fresh Bakery
              </h4>
              <h1 className="text-white text-3xl md:text-4xl font-bold leading-snug mb-3">
                Freshly baked bread made for everyday family meals.
              </h1>
              <p className="text-white/80 text-sm md:text-base mb-5">
                Soft sliced breads and bakery favorites perfect for breakfast.
              </p>
              <button className="bg-primary mt-30 text-white font-bold py-2.5 px-6 rounded-full hover:opacity-90 transition">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 max-w-7xl mx-auto lg:grid-cols-9 gap-5">
          {saleProduct.map((items) => (
            <div
              key={items.id}
              className="flex flex-col items-center text-center gap-2 border border-gray-200 rounded-xl hover:shadow-md transition cursor-pointer"
            >
              <img
                src={items.image}
                alt={items.title}
                className="w-full h-30 object-contain rounded-lg"
              />
              <h1 className="text-sm font-bold text-gray-800 line-clamp-2">
                {items.title}
              </h1>
              <p className="text-xs text-gray-500 line-clamp-2">
                {items.product}
              </p>
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row bg-[#fff1f2] my-10 rounded-xl justify-between items-center gap-4 sm:gap-6 px-6 sm:px-10 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
            <h1 className="text-2xl font-semibold text-primary whitespace-nowrap">
              WINTER SALE
            </h1>
            <p className="text-primary">
              Up to <span className="font-bold text-primary">50%</span> discount
              offers along with unlimited campaigns and deals.
            </p>
          </div>

          <div className="flex-shrink-0 flex items-center justify-center bg-white border-2 border-dashed text-primary border-primary cursor-pointer hover:bg-primary hover:border-white hover:text-white transition-all duration-500 font-bold py-2 px-4 rounded-lg">
            GRO50MRK
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <div className="flex flex-col gap-4 ">
            {winterSale1.map((items) => (
              <div
                key={items.id}
                className="flex items-center gap-4 p-3  rounded-xl hover:shadow-sm transition cursor-pointer"
              >
                {/* Left - Image */}
                <div className="flex-shrink-0 w-20 h-20 bg-gray-50 rounded-lg overflow-hidden">
                  <img
                    src={items.image}
                    alt={items.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Right - Content */}
                <div className="flex flex-col gap-1 flex-1 min-w-0">
                  {/* Rating */}
                  <Rating
                    initialRating={Number(items.rating)}
                    readonly
                    emptySymbol={
                      <FaRegStar className="text-gray-300 text-sm" />
                    }
                    fullSymbol={<FaStar className="text-yellow-400 text-sm" />}
                    fractions={2}
                  />

                  {/* Title */}
                  <h4 className="text-gray-800 text-sm font-semibold line-clamp-2 leading-snug">
                    {items.title}
                  </h4>

                  {/* Price */}
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold text-sm">
                      {items.price}
                    </span>
                    <del className="text-gray-400 text-sm">
                      {items.delPrice}
                    </del>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            style={{ backgroundImage: `url(${saleBg})` }}
            className="relative bg-cover bg-center rounded-2xl hidden md:flex flex-col justify-center p-8 min-h-[420px] overflow-hidden"
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 rounded-2xl" />

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-between h-full">
              {/* Top Content */}
              <div className="flex flex-col gap-3">
                <h4 className="uppercase text-sm mt-5 text-white font-semibold tracking-widest">
                  Premium Beverages
                </h4>

                <h1 className="text-3xl lg:text-4xl font-bold mt-3 text-white leading-snug">
                  Bold sparkling drinks for cool moments.
                </h1>

                <p className="text-white/80 text-sm mt-3 leading-6 max-w-sm">
                  Enjoy crisp beverages and refreshing flavors perfect for
                  relaxing moments anytime day or night with friends.
                </p>
              </div>

              {/* Bottom Button */}
              <button className="bg-primary text-white font-bold py-2.5 px-6 rounded-full w-fit hover:opacity-90 transition mt-6">
                Shop Now
              </button>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 ">
              {winterSale2.map((items) => (
                <div
                  key={items.id}
                  className="flex items-center gap-4 p-3  rounded-xl hover:shadow-sm transition cursor-pointer"
                >
                  {/* Left - Image */}
                  <div className="flex-shrink-0 w-20 h-20 bg-gray-50 rounded-lg overflow-hidden">
                    <img
                      src={items.image}
                      alt={items.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Right - Content */}
                  <div className="flex flex-col gap-1 flex-1 min-w-0">
                    {/* Rating */}
                    <Rating
                      initialRating={Number(items.rating)}
                      readonly
                      emptySymbol={
                        <FaRegStar className="text-gray-300 text-sm" />
                      }
                      fullSymbol={
                        <FaStar className="text-yellow-400 text-sm" />
                      }
                      fractions={2}
                    />

                    {/* Title */}
                    <h4 className="text-gray-800 text-sm font-semibold line-clamp-2 leading-snug">
                      {items.title}
                    </h4>

                    {/* Price */}
                    <div className="flex items-center gap-2">
                      <span className="text-green-600 font-bold text-sm">
                        {items.price}
                      </span>
                      <del className="text-gray-400 text-sm">
                        {items.delPrice}
                      </del>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-7xl p-4 my-10 mx-auto gap-4 sm:text-left text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {
                product.map((items)=>{
                    return(
                        <div id={items.key}>
                            <img className="rounded-xl" src={items.image}/>
                            <div className="uppercase text-gray-500 my-4 text-sm font-semibold">{items.category}</div>
                            <div className="text-2xl font-bold">{items.title}</div>
                            <div className="font-semibold text-sm ">by <span className="mr-4">{items.name}</span><span>{items.time}</span></div>
                        </div>
                    )
                })
            }
        </div>
      </section>
    </>
  );
}
