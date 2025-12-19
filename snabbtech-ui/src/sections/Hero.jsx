const Hero = () => {
  return (
    <section
      className="relative w-full min-h-[90vh] bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://snabbtech.com/wp-content/uploads/2024/05/7c56d57b50521c4f5e13a17556b23179.homeBanner.webp')",
      }}
    >
      {/* CONTENT WRAPPER */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* LEFT TEXT */}
          <div className="z-10">
            <h1 className="text-[42px] md:text-[56px] leading-tight font-bold text-[#1e3a8a]">
              Your Trusted Tech <br />
              Partner in{" "}
              <span className="text-green-500">Product</span>{" "}
              <span className="text-green-500 block">
                Engineering.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-gray-600 text-lg">
              Bespoke Web, App, and Custom GenAI Development—from Concept to
              Scalable, Secure, and High-Performance Solutions.
            </p>

            <button className="mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium">
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* PHONE MOCKUP */}
      <div className="hidden lg:block absolute right-[30%] bottom-[20px] z-20">
  <div className="relative w-[200px] h-[400px] rounded-[34px] bg-black shadow-2xl overflow-hidden">


          {/* NOTCH */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140px] h-[22px] bg-black rounded-b-2xl z-30" />

          {/* PHONE IMAGE */}
            <img
            src="/src/assets/taxi.jpeg"
            className="absolute inset-0 w-full h-full object-cover rounded-[34px]"
            />

          {/* LABEL */}
          <div className="absolute bottom-6 w-full text-center z-30">
            <span className="text-white text-sm font-semibold tracking-widest">
              
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
