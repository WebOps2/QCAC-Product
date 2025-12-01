// src/components/Features.jsx
import analyticsImg from "../images/analytics.jpg";
import lifestyleImg from "../images/lifestyle.jpg";
import reminder from "../images/reminder.jpg";
const features = [
  {
    label: "Smart LED Coach",
    title: "Personalized hydration reminders",
    desc: "HydrateIQ learns your routine and gently glows when it's time to drink, so you never fall behind on your daily goal.",
    img: reminder,
  },
  {
    label: "Intake Analytics",
    title: "See your progress at a glance",
    desc: "Track daily, weekly, and monthly water intake. Spot trends and build healthier habits with simple, clear insights.",
    img: analyticsImg,
  },
  {
    label: "Everyday Ready",
    title: "Built for class, gym, and travel",
    desc: "BPA-free, leak-proof design with 10-day battery life and USB-C charging, so HydrateIQ is always ready to go.",
    img: lifestyleImg,
  },
];

const Features = () => {
  return (
    <section className="w-full px-4 md:px-10 lg:px-20 mt-16 mb-24">
      <div className="w-full rounded-3xl bg-slate-50 px-6 py-12 md:px-12 md:py-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center rounded-full bg-white px-4 py-1 text-lg font-medium text-slate-500 shadow-sm mb-4">
            Features
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900">
            Tech that keeps you effortlessly hydrated
          </h2>

          <p className="mt-3 text-sm md:text-base text-slate-500">
            Explore the smart tools inside HydrateIQ from LED reminders to
            hydration analytics-designed to help you feel your best every day.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((f, i) => (
            <article
              key={i}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-200 p-5 md:p-6 flex flex-col"
            >
              <img
                src={f.img}
                alt={f.title}
                className="mb-4 h-32 md:h-36 rounded-xl object-cover w-full border border-slate-100"
              />
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-400 mb-1">
                {f.label}
              </p>

              <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-2">
                {f.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {f.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
