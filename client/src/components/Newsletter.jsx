import React from "react";
import Title from "./Title";

const Newsletter = () => {
  return (
    <div className="w-full px-6 md:px-16 lg:px-24 xl:px-32 py-16 bg-gray-950 text-white flex justify-center">
      <div className="w-full max-w-5xl rounded-3xl p-8 md:p-14 bg-gray-900 border border-gray-800 shadow-[0px_4px_20px_rgba(255,255,255,0.08)] flex flex-col items-center text-center">
        <Title
          title="Unlock Exclusive Member Deals"
          description="Subscribe to get secret hotel discounts, early access to seasonal packages, and curated luxury travel guides."
        />
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md mt-8"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            required
            className="w-full px-4 py-2.5 text-sm rounded-lg bg-gray-950 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-white/50 transition-colors"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2.5 text-sm font-medium text-black bg-white rounded-lg hover:bg-gray-200 transition-all duration-300 shrink-0 cursor-pointer flex items-center justify-center gap-1.5 active:scale-95"
          >
            <span>Join Now</span>
            <span>&rarr;</span>
          </button>
        </form>

        <p className="text-[11px] text-gray-500 font-light mt-4">
          No spam, unsubscribe anytime. Read our Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
