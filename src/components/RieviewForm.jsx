"use client";

import { Star } from "lucide-react";
import { useState } from "react";

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ rating, comment });
    setSubmitted(true);
    setRating(0);
    setHover(0);
    setComment("");
  };

  const currentValue = hover || rating;

  return (
    <section className="w-full rounded-3xl border border-slate-200 bg-white p-6 md:p-10 shadow-sm">
      <h2 className="text-3xl font-semibold text-slate-900 flex items-center gap-2">
        Reviews
      </h2>

      <p className="mt-2 text-slate-600">
        We hope HydrateIQ is keeping you feeling your best! Your feedback helps us
        improve reminders, analytics, and battery life for everyone.
      </p>

      <form className="mt-8 space-y-8" onSubmit={handleSubmit}>
        
        {/* ⭐ Rating */}
        <div>
          <label className="text-lg font-medium text-slate-800">
            How would you rate your experience?
          </label>

          <div className="mt-3 flex items-center gap-3">
            {Array.from({ length: 5 }).map((_, index) => {
              const value = index + 1;
              const active = value <= currentValue;

              return (
                <button
                  key={value}
                  type="button"
                  onClick={() => setRating(value)}
                  onMouseEnter={() => setHover(value)}
                  onMouseLeave={() => setHover(0)}
                >
                  <Star
                    className={
                      active
                        ? "h-10 w-10 fill-yellow-400 text-yellow-400 drop-shadow"
                        : "h-10 w-10 text-slate-300"
                    }
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* 💬 Comment */}
        <div>
          <label className="text-lg font-medium text-slate-800">
            Comment <span className="text-slate-500 text-sm">(optional)</span>
          </label>

          <textarea
            rows={4}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Tell us what you love or what we can improve..."
            className="
              w-full mt-2 rounded-2xl border border-slate-200 bg-slate-50 
              px-4 py-3 text-slate-800 text-base
              focus:border-teal-400 focus:ring-2 focus:ring-teal-200 focus:bg-white
              outline-none
            "
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="
            w-full rounded-full bg-teal-400
            py-4 text-lg font-semibold text-white shadow-md 
            hover:brightness-105 transition
          "
        >
          Submit review
        </button>

        {submitted && (
          <p className="text-emerald-600 text-sm">Thanks for your feedback! 💧</p>
        )}
      </form>
    </section>
  );
};

export default ReviewForm;
