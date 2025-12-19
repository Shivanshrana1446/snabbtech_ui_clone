import React from "react";

// background
import settingsBg from "../assets/settings.png";

// icons
import lackExpertise from "../assets/lack-expertise.png";
import highCost from "../assets/high-cost.png";
import trialError from "../assets/trial-error.png";
import customize from "../assets/customize.png";

const challenges = [
  {
    title: "Lack of In-House Tech Expertise",
    description:
      "Businesses struggle to build and maintain a custom tech team.",
    icon: lackExpertise,
  },
  {
    title: "High Cost & Complexity",
    description:
      "Hiring, training, and managing developers takes time and resources.",
    icon: highCost,
  },
  {
    title: "Trial & Error Risks",
    description:
      "Developing tech solutions without experience leads to costly mistakes.",
    icon: trialError,
  },
  {
    title: "Customize with flexible enjoyment.",
    description:
      "Craft an application designed to the unique requirements of your business.",
    icon: customize,
  },
];

const Challenges = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* ---------- HEADER ---------- */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 text-green-500 font-medium mb-4">
            <span className="text-lg">💚</span>
            <span className="uppercase tracking-wide">Why Choose Us?</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#0b3c5d] mb-4">
            Why Choose Our Digital{" "}
            <span className="text-green-500">Solutions</span> ?
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            We bring the expertise, experience, and efficiency needed to build
            your tech product—without the risks.
          </p>
        </div>

        {/* ---------- CARDS ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {challenges.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl shadow-lg p-8 bg-no-repeat bg-cover bg-right"
              style={{
                backgroundImage: `url(${settingsBg})`,
              }}
            >
              <div className="flex gap-6 items-start">
                {/* icon */}
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-16 h-16 flex-shrink-0"
                />

                {/* content */}
                <div>
                  <h3 className="text-xl font-semibold text-[#0b3c5d] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-700 mb-6 max-w-md">
                    {item.description}
                  </p>

                  <button className="bg-[#7bb12d] hover:bg-[#6aa425] text-white font-medium px-6 py-3 rounded-lg shadow-md transition">
                    Get in Touch
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Challenges;
