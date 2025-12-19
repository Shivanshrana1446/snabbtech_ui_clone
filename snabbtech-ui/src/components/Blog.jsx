import blog1 from "../assets/box1.jpeg";
import blog2 from "../assets/box2.jpeg";
import blog3 from "../assets/box3.jpeg";
import blog4 from "../assets/box4.jpeg";
import blog5 from "../assets/box5.jpeg";
import blog6 from "../assets/box6.jpeg";

const blogs = [
  {
    image: blog1,
    title: "Why Auto Dealerships Need Digital Solutions",
    desc:
      "Auto dealerships operate in one of the most competitive, margin-pressured environments in retail. At the same time, around 95% of buyers now start their car-shopping journey online...",
  },
  {
    image: blog2,
    title: "How to Build Fast Apps That Load in Under 1 Second",
    desc:
      "Let’s be honest nobody likes slow apps. Studies show that if your app takes more than 2 seconds to load, users start dropping off...",
  },
  {
    image: blog3,
    title: "Flutter vs React Native: A 2025 Comparison Guide",
    desc:
      "If you are creating a mobile app in 2025, chances are you’ve heard the debate between Flutter and React Native...",
  },
  {
    image: blog4,
    title: "Is Your No-Code App a Ticking Time Bomb?",
    desc:
      "Over the last few years, the no-code and low-code revolution has grown incredibly popular...",
  },
  {
    image: blog5,
    title: "The Backbone of Digital Transformation: Custom Software",
    desc:
      "Imagine running a Formula 1 race… but you’re stuck driving a school bus. That’s what it feels like trying to scale...",
  },
  {
    image: blog6,
    title: "Is Your Slow Digital Transformation Silently Killing Your Business?",
    desc:
      "In the current fast-paced digital age, companies that hesitate to undergo digital transformation risk lagging behind...",
  },
];

export default function Blog() {
  return (
    <section className="w-full bg-[#f7f7f7] py-10 px-12">
      <div className="max-w-[150rem] mx-auto px-12">
        
        {/* GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>

      </div>
    </section>
  );
}

/* ---------------- BLOG CARD ---------------- */

function BlogCard({ blog }) {
  return (
    <div
      className="bg-white  overflow-hidden shadow-md
                 transition-all duration-300
                 hover:-translate-y-2 hover:shadow-xl"
    >
      {/* IMAGE */}
      <div className="overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-76 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4 leading-snug">
          {blog.title}
        </h3>

        <p className="text-gray-600 leading-relaxed mb-8 line-clamp-6">
          {blog.desc}
        </p>

        <button
          className="inline-flex items-center gap-2
                     bg-green-600 text-white
                     px-6 py-3 text-sm font-semibold
                     hover:bg-green-700 transition"
        >
          READ MORE »
        </button>
      </div>
    </div>
  );
}
