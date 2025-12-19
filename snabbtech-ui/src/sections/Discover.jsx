export default function Discover() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT TEXT */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
              Discover the{" "}
              <span className="text-green-600">Latest</span>
              <br />
              <span className="text-green-600">Innovations</span> at SnabbTech
            </h2>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-6">
            {/* GREEN INFO BOX */}
            <div className="bg-green-600 text-white p-8 md:p-10 rounded-xl">
              <p className="text-lg leading-relaxed">
                Stay ahead with cutting-edge solutions in AI, product engineering,
                and custom development. From scalable SaaS platforms to
                GenAI-powered automation, we’re building the future of tech—
                efficient, secure, and ready to scale.
              </p>
            </div>

            
          </div>

        </div>
      </div>
    </section>
  );
}
