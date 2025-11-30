// components/ReviewSection.tsx
import { ChevronDown, Star } from "lucide-react";
import { useState } from "react";

const ReviewSection = () => {
  const totalRatings = 35000;
  const [expanded, setExpanded] = useState(false);

  const breakdown = [
    { label: "5.0", count: 14000 },
    { label: "4.0", count: 6000 },
    { label: "3.0", count: 4000 },
    { label: "2.0", count: 800 },
    { label: "1.0", count: 9000 },
  ];


  const reviews = [
    {
      name: "Sameer Bandha",
      timeAgo: "1 month ago",
      rating: 5.0,
      text: "HydrateIQ has genuinely changed my routine! The LED reminders are subtle but super effective, and I’ve been drinking way more water without thinking about it. Battery lasts forever too.",
    },
    {
      name: "Emma Creight",
      timeAgo: "4 months ago",
      rating: 4.0,
      text: "I love that the bottle learns my habits. It glows at the perfect times — never annoying, always helpful. The app analytics are so satisfying to check!",
    },
    {
    name: "Emma Creight",
    time: "4 months ago",
    rating: 4,
    text: "Effortless booking and unbeatable affordability. Peaceful atmosphere. Thumbs up!",
  },
  {
    name: "Daniel Moore",
    time: "2 months ago",
    rating: 5,
    text: "HydrateIQ helped me drink more water daily. The LED reminders are perfect!",
  },
  {
    name: "Sarah Lin",
    time: "1 month ago",
    rating: 4,
    text: "The tracking is great, and it motivates me every day. App UI is super clean too.",
  },
  {
    name: "Mason Blake",
    time: "1 week ago",
    rating: 5,
    text: "HydrateIQ is honestly a game-changer. Haven’t missed my hydration goals since.",
  },
  ];
  const visibleReviews = expanded ? reviews : reviews.slice(0, 2);


  const renderStars = (rating) => {
    const full = Math.round(rating);
    return (
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < full ? "fill-teal-400 text-teal-400" : "text-slate-200"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="w-full rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900 mb-6">Reviews</h2>

      {/* TOP: overall rating + distribution + category badges */}
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        {/* Left: Overall score */}
        <div className="flex flex-col items-start md:items-center gap-2 min-w-[120px]">
          <span className="text-4xl font-semibold text-slate-900">4.0</span>
          {renderStars(4)}
          <span className="text-sm text-slate-500">
            {Math.round(totalRatings / 1000)}k ratings
          </span>
        </div>

        {/* Middle: bars */}
        <div className="flex-1 w-full">
          <div className="flex flex-col gap-2">
            {breakdown.map((item) => {
              const pct = (item.count / totalRatings) * 100;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 text-sm text-slate-600"
                >
                  <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full rounded-full + bg-gradient-to-r from-teal-400 to-teal-300"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="w-10 text-right font-medium text-slate-800">
                    {item.label}
                  </span>
                  <span className="w-20 text-right text-slate-500">
                    {Math.round(item.count / 1000)}k reviews
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* BOTTOM: individual review rows */}
      <div className="mt-10 space-y-6">
        {visibleReviews.map((review) => (
          <div
            key={review.name}
            className="border-t border-slate-100 pt-4 first:border-t-0 first:pt-0"
          >
            {/* Row header: avatar + name + time + rating right aligned */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                {/* Simple avatar circle with initials */}
                <div className="h-9 w-9 rounded-full bg-slate-200 flex items-center justify-center text-xs font-semibold text-slate-700">
                  {review.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {review.name}
                  </p>
                  <p className="text-xs text-slate-500">{review.timeAgo}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-slate-900">
                  {review.rating.toFixed(1)}
                </span>
                {renderStars(review.rating)}
              </div>
            </div>

            {/* Review text */}
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              {review.text}
            </p>
          </div>
        ))}

        <button
        onClick={() => setExpanded(!expanded)}
        className="text-teal-500 hover:text-teal-600 font-medium flex items-center gap-1 hover:underline"
      >
        {expanded ? "Hide reviews" : "Read all reviews"}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${
            expanded ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      </div>
    </section>
  );
};

export default ReviewSection;
