import partnershipImg from "../assets/partnership.jpeg";

export default function Partnership() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-2 text-green-500 font-semibold mb-4">
              <span>🤝</span>
              <span className="uppercase tracking-wide">Partnerships</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight mb-6">
              Driving Innovation Through{" "}
              <span className="text-green-500">
                Strategic Collaborations
              </span>
            </h2>

            <p className="text-gray-600 text-lg mb-8 max-w-xl">
              At SnabbTech, we believe in the power of partnerships to
              accelerate growth and deliver cutting-edge solutions.
            </p>

            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded shadow">
              Get in Touch
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={partnershipImg}
              alt="Strategic Partnership"
              className="rounded-2xl shadow-lg max-w-full h-auto"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
