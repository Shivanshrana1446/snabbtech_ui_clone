const Services = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* SERVICE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          
          {/* CARD 1 */}
          <div className="bg-[#174a73] rounded-xl p-9 text-white shadow-lg">
            <div className="mb-10">
              <svg width="70" height="80" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="4" y="6" width="32" height="20" rx="2" />
                <path d="M12 30h16" />
              </svg>
            </div>
            <h3 className="text-green-400 text-xl font-semibold mb-4">
              Custom Software Development
            </h3>
            <p className="text-white/90">
              Web & mobile applications tailored to business needs.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-[#174a73] rounded-xl p-8 text-white shadow-lg">
            <div className="mb-6">
              <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="6" y="6" width="28" height="28" rx="4" />
                <path d="M14 14h12v12H14z" />
              </svg>
            </div>
            <h3 className="text-green-400 text-xl font-semibold mb-4">
              Generative AI Development
            </h3>
            <p className="text-white/90">
              AI-powered solutions for automation and innovation.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-[#174a73] rounded-xl p-8 text-white shadow-lg">
            <div className="mb-6">
              <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="20" cy="20" r="12" />
                <path d="M20 8v24M8 20h24" />
              </svg>
            </div>
            <h3 className="text-green-400 text-xl font-semibold mb-4">
              Product Engineering & Consultation
            </h3>
            <p className="text-white/90">
              Expert guidance on how to build, what to build, and how to scale.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="bg-[#174a73] rounded-xl p-8 text-white shadow-lg">
            <div className="mb-6">
              <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 28h4v-8H6v8zM18 28h4V12h-4v16zM30 28h4V6h-4v22z" />
              </svg>
            </div>
            <h3 className="text-green-400 text-xl font-semibold mb-4">
              Growth and Description
            </h3>
            <p className="text-white/90">
              We help startups and SMEs turn ideas into scalable digital products—cost-effectively.
            </p>
          </div>
        </div>

        {/* PORTFOLIO SECTION (BELOW BOXES) */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 text-green-500 font-semibold uppercase tracking-wider mb-4">
            <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="5" width="20" height="14" rx="2" />
              <path d="M7 9h12M7 13h8" />
            </svg>
            <span>Portfolio</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">
            The Successfully <span className="text-green-500">Snabb</span> Businesses
          </h2>

          <p className="text-gray-600 text-lg">
            We take pride in catering their growing business needs and making them
            stand apart on the App Store & Google Play.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Services;
