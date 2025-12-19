import logoCircle from "../assets/logo-app-Color-bg-circle.png";

import whatsapp from "../assets/m.svg";
import insta1 from "../assets/insta (1).svg";
import insta2 from "../assets/insta (2).svg";
import insta3 from "../assets/insta (3).svg";
import facebook from "../assets/facebook.svg";

export default function SecondLast() {
  return (
    <footer className="w-full bg-white py-20">
      <div className="max-w-[96rem] mx-auto px-6 grid lg:grid-cols-4 gap-20">

        {/* LEFT BRAND */}
        <div>
          {/* LOGO */}
          <div className="mb-6 group cursor-pointer">
            <img
              src={logoCircle}
              alt="SnabbTech Logo"
              className="w-32 h-32 object-contain transition-all duration-300
                         group-hover:scale-105
                         group-hover:drop-shadow-[0_12px_30px_rgba(0,0,0,0.18)]"
            />
          </div>

          <p className="text-gray-700 leading-relaxed mb-8 max-w-sm
                        transition-colors duration-300 hover:text-gray-900">
            Location: Mohali, India | Patran, India | Dublin, Ireland | Surrey,
            Canada | Sharjah, UAE
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4">
            <SocialImage src={whatsapp} alt="WhatsApp" />
            <SocialImage src={insta1} alt="Instagram" />
            <SocialImage src={insta2} alt="Instagram" />
            <SocialImage src={insta3} alt="Instagram" />
            <SocialImage src={facebook} alt="Facebook" />
          </div>
        </div>

        {/* SERVICES */}
        <div>
          <FooterTitle>Services</FooterTitle>
          <ul className="space-y-4 text-gray-800">
            {[
              "Web App Development",
              "Mobile App Development",
              "Software Development",
            ].map((item, i) => (
              <li
                key={i}
                className="cursor-pointer transition-all duration-300
                           hover:text-green-600 hover:translate-x-2"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* INDUSTRIES */}
        <div>
          <FooterTitle>Industries</FooterTitle>
          <ul className="space-y-4 text-gray-800">
            {[
              "Healthcare",
              "E-Commerce",
              "Food & Pickup & Delivery",
              "Home Services / Fitness",
              "Sports",
            ].map((item, i) => (
              <li
                key={i}
                className={`cursor-pointer transition-all duration-300
                            hover:text-green-600 hover:translate-x-2
                            ${item === "E-Commerce" ? "" : ""}`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <FooterTitle>Resources</FooterTitle>

          <ul className="space-y-4 text-gray-800 mb-10">
            {[
              "Blog",
              "Portfolio",
              "Partnerships",
              "About Us",
              "Email Us: ashish@snabbtech.com",
              "SnabbHealth",
            ].map((item, i) => (
              <li
                key={i}
                className="cursor-pointer transition-all duration-300
                           hover:text-green-600 hover:translate-x-2"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* BADGES */}
          <div className="flex items-center gap-6">
            <div
              className="border rounded-lg p-3 text-xs text-center cursor-pointer
                         transition-all duration-300
                         hover:-translate-y-1 hover:shadow-lg"
            >
              GoodFirms
              <br />
              <span className="bg-orange-500 text-white px-1 py-4 rounded mt-1 inline-block">
                PARTNER
              </span>
            </div>

            <div
              className="text-center text-xs cursor-pointer
                         transition-all duration-300
                         hover:-translate-y-1 hover:shadow-lg px-1 py-4 rounded-lg"
            >
              <div className="text-blue-700 font-bold">
                TOP ECOMMERCE
                <br />
                WEB DESIGN
                <br />
                COMPANY
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

/* REUSABLE COMPONENTS */

function FooterTitle({ children }) {
  return (
    <h4 className="text-xl font-semibold text-[#0b3c66] mb-6 relative inline-block group">
      {children}
      <span
        className="absolute left-0 -bottom-2 w-full h-[3px] bg-green-500
                   transition-all duration-300 group-hover:w-1/2"
      ></span>
    </h4>
  );
}

function SocialImage({ src, alt }) {
  return (
    <div
      className="w-11 h-11 rounded-full bg-[#0b3c66]
                 flex items-center justify-center cursor-pointer
                 transition-all duration-300
                 hover:bg-green-500 hover:scale-110 hover:shadow-lg"
    >
      <img src={src} alt={alt} className="w-6 h-6 object-contain" />
    </div>
  );
}
