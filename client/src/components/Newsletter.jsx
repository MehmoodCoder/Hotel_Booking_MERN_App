import React from "react";
import Title from "./Title";

const Newsletter = () => {
  return (
    <div className="w-full px-6 md:px-16 lg:px-24 xl:px-32 py-16 bg-[#121212] text-white flex justify-center border-t border-gray-800/60">
      <div className="w-full max-w-5xl rounded-3xl p-8 md:p-14 bg-[#111111] border border-gray-800 shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex flex-col items-center text-center">
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
            className="w-full px-4 py-2.5 text-sm rounded-xl bg-[#141414] border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-[#00F0FF]/50 transition-colors"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2.5 text-sm font-bold text-black bg-[#00F0FF] hover:bg-[#00D8E6] rounded-xl transition-all duration-300 shrink-0 cursor-pointer flex items-center justify-center gap-1.5 active:scale-95 shadow-[0_0_10px_rgba(0,240,255,0.3)] hover:shadow-[0_0_15px_rgba(0,240,255,0.6)]"
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
