export default function Reviews() {
  return (
    <section className="w-full bg-gray-100 py-14">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center">

          {/* GOOGLE */}
          <div>
            <h3 className="text-xl font-semibold text-blue-900">
              Google
            </h3>
            <div className="mt-2 flex justify-center items-center gap-2">
              <span className="text-red-600 font-semibold text-lg">4.8</span>
              <Stars />
            </div>
          </div>

          {/* FACEBOOK */}
          <div>
            <h3 className="text-xl font-semibold text-blue-900">
              Facebook
            </h3>
            <div className="mt-2 flex justify-center items-center gap-2">
              <span className="text-red-600 font-semibold text-lg">5.0</span>
              <Stars />
            </div>
          </div>

{/* CLUTCH */}
<div className="flex flex-col items-center">
  {/* Top row */}
  <div className="flex items-center gap-3">
    <span className="text-xs uppercase tracking-widest text-gray-500">
      Reviewed on
    </span>
    <span className="flex text-red-600 text-sm">
      ★★★★★
    </span>
  </div>

  {/* Bottom row */}
  <div className="flex items-center gap-3 mt-1">
    <span className="text-2xl font-bold text-blue-900">
      Clutch
    </span>
    <span className="text-sm text-gray-500 uppercase">
      4 Reviews
    </span>
  </div>
</div>


        </div>
      </div>
    </section>
  );
}

/* ⭐ STAR COMPONENT */
function Stars() {
  return (
    <div className="flex gap-1 text-red-600">
      ★ ★ ★ ★ ★
    </div>
  );
}
