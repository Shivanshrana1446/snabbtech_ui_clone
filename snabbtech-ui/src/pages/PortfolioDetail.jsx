import tennisPal from "../assets/tennispal.png";
import tennisPalLogo from "../assets/tennispal-logo.png";
import appStore from "../assets/appstore.png";
import playStore from "../assets/playstore.png";


const PortfolioDetail = () => {
  return (
    <section className="bg-[#174a73] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* LOGO IMAGE REPLACED */}
          <img
            src={tennisPalLogo}
            alt="TennisPal Logo"
            className="h-16 md:h-20 mb-6"
          />

          <p className="text-lg text-white/90 leading-relaxed mb-8 max-w-xl">
            TennisPAL is a community where you can find and connect with other
            like-minded tennis players using the app. Use TennisPAL to find your
            next tennis partner, share your favourite moments, discover a new
            tennis court, and more. Meet, play, share, and learn tennis,
            anytime, anywhere!
          </p>

          {/* STORE LINKS */}
        <div className="flex items-center gap-6 mb-10">
        <span className="text-white/80">Available on:</span>
        <img src={appStore} alt="App Store" className="h-10 cursor-pointer" />
        <img src={playStore} alt="Play Store" className="h-10 cursor-pointer" />
        </div>


          {/* STATS */}
          <div className="flex items-center gap-12 mb-12">
            <div>
              <p className="text-xl font-semibold">Downloads:</p>
              <p className="text-green-400 text-lg">1k+</p>
            </div>

            <div className="h-10 w-px bg-white/40" />

            <div>
              <p className="text-xl font-semibold">Rating:</p>
              <p className="text-green-400 text-lg">5 / 5</p>
            </div>
          </div>

          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md font-semibold">
            Contact Us
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-end">
          <img
            src={tennisPal}
            alt="TennisPal App"
            className="h-[580px] drop-shadow-2xl"
          />
        </div>
      </div>

      {/* SLIDER ARROWS */}
      <button className="absolute left-6 top-1/2 -translate-y-1/2 text-4xl text-white/60 hover:text-white">
        ‹
      </button>
      <button className="absolute right-6 top-1/2 -translate-y-1/2 text-4xl text-white/60 hover:text-white">
        ›
      </button>
    </section>
  );
};

export default PortfolioDetail;
