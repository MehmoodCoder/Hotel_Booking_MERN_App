import React from "react";
import Title from "./Title";

const testimonialsData = [
  {
    _id: "1",
    name: "Emma Rodriguez",
    location: "Barcelona, Spain",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 4,
    review:
      "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay provides.",
  },
  {
    _id: "2",
    name: "Sarah Jenkins",
    location: "London, UK",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    review:
      "The seamless booking process and verified luxury properties made our family vacation truly unforgettable. Highly recommended!",
  },
  {
    _id: "3",
    name: "Michael Chen",
    location: "Singapore",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    review:
      "Outstanding customer service and top-tier hotel selections. Booking our anniversary trip through this platform was the best decision.",
  },
];

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center w-full px-6 md:px-16 lg:px-24 xl:px-32 py-20 bg-[#111111] text-white border-t border-gray-800/60">
      <Title
        title="Guest Reviews & Feedback"
        description="Discover why thousands of happy travelers trust us for their perfect getaway."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-12 justify-items-center">
        {testimonialsData.map((item) => (
          <div
            key={item._id}
            className="group relative w-full max-w-[380px] rounded-2xl p-6 bg-[#111111] border border-gray-800 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] hover:border-[#00F0FF]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border border-gray-700/80 shadow-md"
                />
                <div>
                  <h4 className="font-playfair text-base font-semibold text-white tracking-wide">
                    {item.name}
                  </h4>
                  <p className="text-gray-400 text-xs font-light">
                    {item.location}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 text-yellow-400 text-sm">
                {[...Array(item.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              <p className="text-gray-300 text-xs md:text-sm font-light leading-relaxed">
                "{item.review}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
