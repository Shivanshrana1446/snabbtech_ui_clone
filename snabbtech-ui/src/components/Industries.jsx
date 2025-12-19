import delivery from "../assets/delivery.png";
import sports from "../assets/sports-svgrepo-com.svg";
import realEstate from "../assets/hand-gesture-house-svgrepo-com.png";
import education from "../assets/book-closed-svgrepo-com.svg";
import healthcare from "../assets/delivery-150x150.png";
import ecommerce from "../assets/commerce-and-shopping-ecommerce-svgrepo-com.svg";
import food from "../assets/delivered-300x300.png";
import fitness from "../assets/fitness-svgrepo-com.svg";

export default function Industries() {
  const industries = [
    { title: "Food & Pickup & Delivery", img: food },
    { title: "Education", img: education },
    { title: "Home Services", img: realEstate },
    { title: "Healthcare", img: healthcare },
    { title: "Real Estate", img: realEstate },
    { title: "Fitness", img: fitness },
    { title: "Sports", img: sports },
    { title: "E-Commerce", img: ecommerce },
  ];

  return (
    <section className="w-full py-24 bg-[#f5f5f5]">
      <div className="max-w-[92rem] mx-auto px-6">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Best <span className="text-green-600">Solutions</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Continuous iteration and adaptation based on feedback for optimal problem-solving.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {industries.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-10 flex flex-col items-center text-center"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-20 h-20 object-contain mb-6"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
