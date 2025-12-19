import industryImg from "../assets/industry.webp";

export default function IndustryReasons() {
  return (
    <section
      className="w-full py-24"
      style={{ backgroundColor: "#f5f5f5" }} // off-white
    >
      <div className="max-w-[92rem] mx-auto px-6 grid md:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
        
        {/* LEFT IMAGE – STRETCHED */}
        <div className="w-full  -ml-2 md:-ml-2">
          <img
            src={industryImg}
            alt="Industry"
            className="
              w-full
              h-[400px] md:h-[540px]
              
            "
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-green-600 text-lg">▌</span>
            <p className="text-green-600 font-semibold uppercase tracking-wide">
              Our Industry
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight mb-10">
            Here are 3 Reasons to <br />
            Patronize <span className="text-green-600">SnabbTech</span>
          </h2>

          <div className="space-y-8">
            <div className="flex gap-4">
              <span className="text-green-600 text-2xl mt-1">✔</span>
              <div>
                <h4 className="text-xl font-semibold text-blue-900">
                  Expert In-House Team
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  100+ products delivered by experienced tech,
                  project management, and QA experts.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-green-600 text-2xl mt-1">✔</span>
              <div>
                <h4 className="text-xl font-semibold text-blue-900">
                  Cost-Efficient Solution
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  40–50% lower cost compared to building an in-house team.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-green-600 text-2xl mt-1">✔</span>
              <div>
                <h4 className="text-xl font-semibold text-blue-900">
                  Faster Execution, Zero Compliance Hassle
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Scale quickly without HR and compliance overheads.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
