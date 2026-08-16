import React from "react";

const Hero = () => {

    const cities = [
        "Dubai",
        "Singapur",
        "Landon",
        "New-York"
    ]
  return (
    <>
      <div className="flex flex-col items-start justify-content px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url(https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-no-repeat bg-cover bg-center h-screen">
        <div className="relative z-10 flex flex-col items-start pt-24 md:pt-32 pb-16">
          <p className="bg-transparent text-[#00F0FF] border border-[#00F0FF] px-4 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-wide shadow-[0_0_15px_rgba(0,240,255,0.8)]">
            Luxury Stay Awaits You
          </p>

          <h1 className="font-playfair text-2xl md:text-5xl md:text-[56px] leading-tight md:leading-[1.1] font-extrabold max-w-2xl mt-5 drop-shadow-md">
            Discover Your Perfect Gateaway
          </h1>

          <p className="max-w-xl mt-4 text-sm sm:text-base md:text-lg text-slate-100 font-light leading-relaxed drop-shadow-sm">
            Book premium hotels, cozy resorts, and exclusive suites worldwide at
            the guaranteed best competitive prices today.
          </p>
          <form className="bg-white text-gray-500 rounded-lg px-6 py-4 mt-8 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto">
            <div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-gray-800"
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
                <label htmlFor="destinationInput">Destination</label>
              </div>
              <input
                list="destinations"
                id="destinationInput"
                type="text"
                className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                placeholder="Type here"
                required
              />
              <datalist id="destinations">
                {
                    cities.map((city, index) => (
                        <option value={city} key={index}/>
                    ))
                }
              </datalist>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-gray-800"
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
                <label htmlFor="checkIn">Check in</label>
              </div>
              <input
                id="checkIn"
                type="date"
                className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
              />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-gray-800"
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
                <label htmlFor="checkOut">Check out</label>
              </div>
              <input
                id="checkOut"
                type="date"
                className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
              />
            </div>

            <div className="flex md:flex-col max-md:gap-2 max-md:items-center">
              <label htmlFor="guests">Guests</label>
              <input
                min={1}
                max={4}
                id="guests"
                type="number"
                className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16"
                placeholder="0"
              />
            </div>

            <button className="flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1">
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
