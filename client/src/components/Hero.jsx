import React from "react";

const Hero = () => {
  const cities = ["Dubai", "Singapore", "London", "New York"];

  return (
    <>
      <div className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url(https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-no-repeat bg-cover bg-center py-12 md:py-20">
        
        <div className="relative z-10 flex flex-col items-start w-full max-w-7xl">
          
          <p className="bg-transparent text-[#00F0FF] mt-20 border border-[#00F0FF] px-4 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-wide shadow-[0_0_15px_rgba(0,240,255,0.8)]">
            Luxury Stay Awaits You
          </p>

          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight font-extrabold max-w-2xl mt-5 drop-shadow-md">
            Discover Your Perfect Getaway
          </h1>

          <p className="max-w-xl mt-4 text-sm sm:text-base md:text-lg text-slate-100 font-light leading-relaxed drop-shadow-sm">
            Book premium hotels, cozy resorts, and exclusive suites worldwide at
            the guaranteed best competitive prices today.
          </p>

          <form className="bg-white text-gray-800 rounded-2xl p-4 sm:p-5 mt-8 shadow-2xl w-full border border-gray-100 grid grid-cols-1 sm:grid-cols-2 xl:flex xl:flex-row items-end gap-4">
            
            <div className="flex-1 w-full min-w-0">
              <div className="flex items-center gap-1.5 mb-1.5">
                <svg
                  className="w-4 h-4 text-gray-700 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  />
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.8 13.907C17.292 17.717 12 21 12 21s-5.292-3.283-5.8-7.093C5.7 10.1 8.5 7 12 7s6.3 3.1 5.8 6.907Z"
                  />
                </svg>
                <label htmlFor="destinationInput" className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  Destination
                </label>
              </div>
              <input
                list="destinations"
                id="destinationInput"
                type="text"
                className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2 text-sm font-medium text-gray-800 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                placeholder="Where to?"
                required
              />
              <datalist id="destinations">
                {cities.map((city, index) => (
                  <option value={city} key={index} />
                ))}
              </datalist>
            </div>

            <div className="flex-1 w-full min-w-0">
              <div className="flex items-center gap-1.5 mb-1.5">
                <svg
                  className="w-4 h-4 text-gray-700 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                  />
                </svg>
                <label htmlFor="checkIn" className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  Check in
                </label>
              </div>
              <input
                id="checkIn"
                type="date"
                className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2 text-sm font-medium text-gray-800 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
              />
            </div>

            <div className="flex-1 w-full min-w-0">
              <div className="flex items-center gap-1.5 mb-1.5">
                <svg
                  className="w-4 h-4 text-gray-700 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                  />
                </svg>
                <label htmlFor="checkOut" className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  Check out
                </label>
              </div>
              <input
                id="checkOut"
                type="date"
                className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2 text-sm font-medium text-gray-800 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
              />
            </div>

            <div className="w-full sm:w-auto xl:w-28 min-w-0">
              <div className="flex items-center gap-1.5 mb-1.5">
                <svg
                  className="w-4 h-4 text-gray-700 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                <label htmlFor="guests" className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  Guests
                </label>
              </div>
              <input
                min={1}
                max={4}
                id="guests"
                type="number"
                className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2 text-sm font-medium text-gray-800 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                placeholder="1"
              />
            </div>

            <button className="col-span-1 sm:col-span-2 xl:col-span-1 w-full xl:w-auto h-[42px] px-6 rounded-lg bg-black hover:bg-gray-800 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95 shrink-0 mt-2 sm:mt-0">
              <svg
                className="w-4 h-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
              <span>Search</span>
            </button>
          </form>

        </div>
      </div>
    </>
  );
};

export default Hero;