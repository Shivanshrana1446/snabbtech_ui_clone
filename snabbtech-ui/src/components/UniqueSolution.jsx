export default function UniqueSolutions() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
            Unique Solutions{" "}
            <span className="text-green-600">SnabbTech</span> offers
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Beyond Development: End-to-End Product Success
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Card 1 */}
          <div className="bg-[#164b73] rounded-2xl p-12 shadow-xl">
            <div className="mb-6 text-white text-4xl">
              {/* Replace with image/icon if needed */}
              👨‍💼📊
            </div>

            <h3 className="text-2xl font-semibold text-green-500 mb-4">
              In-Depth Consulting
            </h3>

            <p className="text-white leading-relaxed">
              Accurate scoping to crystallize the right product roadmap.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#164b73] rounded-2xl p-10 shadow-xl">
            <div className="mb-6 text-white text-4xl">
              🧑‍💻🎯
            </div>

            <h3 className="text-2xl font-semibold text-green-500 mb-4">
              Bug-Free Guarantee
            </h3>

            <p className="text-white leading-relaxed">
              Free 90-day support to ensure seamless deployment.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#164b73] rounded-2xl p-10 shadow-xl">
            <div className="mb-6 text-white text-4xl">
              🛡️📋
            </div>

            <h3 className="text-2xl font-semibold text-green-500 mb-4">
              Industry-Standard Quality Audits
            </h3>

            <p className="text-white leading-relaxed">
              Every product meets performance, security, and scalability
              benchmarks.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
