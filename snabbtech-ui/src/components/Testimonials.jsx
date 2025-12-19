import bg from "../assets/bg.png";

export default function Testimonials() {
  return (
    <section
      className="w-full py-20 relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Optional overlay for readability */}
      <div className="absolute inset-0 bg-white/80"></div>

      <div className="relative max-w-[96rem] mx-auto px-6 grid lg:grid-cols-[1fr_1.3fr] gap-24 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-5xl font-bold text-blue-900 leading-tight mb-6">
            What our <span className="text-green-500">clients</span>
            <br />
            say about us.
          </h2>

          <p className="text-gray-600 text-lg max-w-xl leading-relaxed">
            Aliquam tristique libero at dui sodales, et placerat orci
            lobortis. Donec metus lorem, vulputate at sapien.
          </p>
        </div>

        {/* RIGHT TESTIMONIALS */}
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* CARD 1 */}
          <div className="bg-white rounded-xl p-10 shadow-lg relative">
            <Stars />
            <p className="text-gray-600 leading-relaxed mb-10 text-lg">
              SnabbTech consistently delivers efficient and reliable service,
              demonstrating a clear understanding of project requirements.
              They excel at translating these needs into precise and effective
              technical solutions.
            </p>

            <div>
              <p className="font-semibold text-blue-900 text-lg">Nathan</p>
              <p className="text-sm text-gray-500">Founder</p>
            </div>

            <QuoteIcon />
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-xl p-10 shadow-lg relative">
            <Stars />
            <p className="text-gray-600 leading-relaxed mb-10 text-lg">
              He skillfully transformed our idea into reality, demonstrating
              expertise and precision. We are eager to continue working with
              him and would confidently recommend his services for any
              development project.
            </p>

            <div>
              <p className="font-semibold text-blue-900 text-lg">Omkar</p>
              <p className="text-sm text-gray-500">CEO</p>
            </div>

            <QuoteIcon />
          </div>

        </div>
      </div>
    </section>
  );
}

/* ⭐ STAR RATING */
function Stars() {
  return (
    <div className="flex gap-1 mb-5">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-yellow-400 text-xl">★</span>
      ))}
    </div>
  );
}

/* ❝ QUOTE ICON */
function QuoteIcon() {
  return (
    <div className="absolute bottom-6 right-6 text-blue-200 text-7xl leading-none">
      ❝
    </div>
  );
}
