import waterBottle from "../images/waterbottle.jpg";

const ProductOverview = () => {
  return (
    <div className="w-full p-10">
      <section className="w-full flex flex-col md:flex-row rounded-3xl bg-white shadow-xl border border-slate-200 p-10 gap-12">

        <div className="md:w-1/2">
          <img
            src={waterBottle}
            alt="HydrateIQ smart water bottle"
            className="w-full h-auto rounded-2xl object-cover shadow-md"
          />
        </div>

        <div className="md:w-1/2 flex flex-col">

          <div className="space-y-2">
            <h1 className="font-semibold text-slate-900 text-4xl leading-tight">
              HydrateIQ smart <br /> water bottle
            </h1>

            <p className="text-sm text-slate-500 mt-1">
              Item code: <span className="text-slate-600">HDB-2819</span>
            </p>
          </div>

          <div className="mt-10 space-y-3">
            <p className="text-xs font-semibold tracking-[0.18em] text-slate-400 uppercase">
              Description
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              Smart LED glow reminds you when it&apos;s time to drink.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Tracks daily water intake so you can hit your hydration goals.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Perfect for classes, gym sessions, and late-night study sprints.
            </p>
          </div>

          <div className="mt-10 h-px w-full bg-slate-200" />

          <div className="mt-8">
            <p className="text-xs font-semibold tracking-[0.18em] text-slate-400 uppercase">
              Price
            </p>

            <div className="flex items-end gap-3 mt-2">
              <p className="text-3xl font-bold text-slate-900">$399</p>
              <p className="text-lg line-through text-slate-400">$465</p>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-xs font-semibold tracking-[0.18em] text-slate-400 uppercase mb-2">
              Color
            </p>

            <div className="relative w-56 bg-slate-100 rounded-xl px-4 py-3 shadow-sm cursor-pointer">
              <span className="text-slate-700 text-sm">Green</span>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">▼</span>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">

            <div className="relative w-24 bg-slate-100 rounded-xl px-4 py-3 shadow-sm cursor-pointer">
              <span className="text-slate-700 text-sm">02</span>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">▼</span>
            </div>

            <button className="flex-1 bg-teal-400 hover:bg-teal-500 text-white font-semibold py-3 rounded-xl shadow-sm transition">
              ADD TO CART
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ProductOverview;
