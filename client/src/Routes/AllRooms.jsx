import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const roomsData = [
  {
    _id: "1",
    hotel: {
      name: "The Grand Resort",
      location: "San Diego, CA, USA",
      address: "Los Angeles, California, USA",
    },
    rating: 4.8,
    reviews: "200+ reviews",
    price: 100,
    type: "Luxury Room",
    image: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    ],
    amenities: ["Free Wifi", "Pool Access", "1 King Bed"],
  },
  {
    _id: "2",
    hotel: {
      name: "The Regal Palace",
      location: "Skyline Boulevard, NY, USA",
      address: "Los Angeles, California, USA",
    },
    rating: 4.9,
    reviews: "350+ reviews",
    price: 150,
    type: "Double Bed",
    image: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    ],
    amenities: ["Free Wifi", "Free Room Service", "1 King Bed"],
  },
  {
    _id: "3",
    hotel: {
      name: "Velvet Nights Inn",
      location: "Beachfront Drive, CA, USA",
      address: "Los Angeles, California, USA",
    },
    rating: 4.7,
    reviews: "180+ reviews",
    price: 120,
    type: "Family Suite",
    image: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
    ],
    amenities: ["Free Wifi", "Free PC for Gaming", "1 King Bed"],
  },
  {
    _id: "4",
    hotel: {
      name: "Crystal Waters Resort",
      location: "Night Sky Parkway, AZ, USA",
      address: "Los Angeles, California, USA",
    },
    rating: 4.6,
    reviews: "210+ reviews",
    price: 200,
    type: "Luxury Room",
    image: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
    ],
    amenities: ["Free Wifi", "Free kitchen", "2 King Beds"],
  },
  {
    _id: "5",
    hotel: {
      name: "Skyline Luxe Hotel",
      location: "Metro Avenue, Chicago, USA",
      address: "Los Angeles, California, USA",
    },
    rating: 4.9,
    reviews: "250+ reviews",
    price: 250,
    type: "Single Bed",
    image: [
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80",
    ],
    amenities: ["Free Wifi", "Free Lunch", "2 Beds"],
  },
];

const AllRooms = () => {
  const navigate = useNavigate();

  const [openFilters, setOpenFilters] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

  const handleTypeChange = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  };

  const clearFilters = () => {
    setSelectedTypes([]);
    setSelectedPrice("all");
    setSortBy("popular");
  };

  return (
    <div className="w-full bg-[#1e1e1e] min-h-screen text-gray-200 relative">
      <div className="pt-28 md:pt-36 px-4 md:px-16 lg:px-24 xl:px-32 pb-20">
        {/* Header Section */}
        <div className="mb-8 md:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="bg-transparent text-[#00F0FF] inline-block border border-[#00F0FF]/80 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-[0_0_15px_rgba(0,240,255,0.4)] drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)] mb-3">
              EXPLORE ACCOMMODATIONS
            </p>
            <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-[0_8px_16px_rgba(0,0,0,0.9)]">
              Hotel Rooms
            </h1>
            <p className="text-gray-400 text-xs md:text-sm max-w-2xl mt-2 leading-relaxed">
              Take advantage of our limited-time offers and special packages to
              enhance your stay and create unforgettable memories.
            </p>
          </div>

          {/* Mobile Filter Toggle Button */}
          <button
            onClick={() => setOpenFilters(true)}
            className="lg:hidden self-start flex items-center gap-2 px-5 py-2.5 bg-[#262626] border border-gray-700 hover:border-[#00F0FF] text-white text-xs font-bold rounded-xl transition-all shadow-md cursor-pointer"
          >
            <svg
              className="w-4 h-4 text-[#00F0FF]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
            Filters
            {(selectedTypes.length > 0 || selectedPrice !== "all") && (
              <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse"></span>
            )}
          </button>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 relative">
          {/* Room Listings Column */}
          <div className="w-full lg:w-[calc(100%-320px)] xl:w-[calc(100%-360px)] flex flex-col gap-6">
            {roomsData.map((room) => (
              <div
                key={room._id}
                className="bg-[#262626]/90 backdrop-blur-md border border-gray-800 rounded-2xl p-4 md:p-5 flex flex-col sm:flex-row gap-6 hover:border-[#00F0FF]/60 transition-all duration-300 shadow-xl group hover:shadow-[0_0_25px_rgba(0,240,255,0.18)] hover:-translate-y-0.5"
              >
                <div className="w-full sm:w-64 h-52 sm:h-auto rounded-xl overflow-hidden shrink-0 relative cursor-pointer">
                  <img
                    onClick={() => {
                      navigate(`/rooms/${room._id}`);
                      window.scrollTo(0, 0);
                    }}
                    title="View Details"
                    src={room.image[0]}
                    alt={room.hotel?.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md text-[#00F0FF] text-[10px] uppercase font-bold px-2.5 py-1 rounded-md border border-[#00F0FF]/40 shadow-md">
                    {room.type}
                  </div>
                </div>

                <div className="flex flex-col justify-between w-full">
                  <div>
                    <span className="text-xs text-[#00F0FF]/80 font-medium tracking-wide">
                      {room.hotel?.location}
                    </span>
                    <h3
                      onClick={() => {
                        navigate(`/rooms/${room._id}`);
                        window.scrollTo(0, 0);
                      }}
                      className="text-xl md:text-2xl font-bold text-white mt-0.5 cursor-pointer group-hover:text-[#00F0FF] transition-colors"
                    >
                      {room.hotel?.name}
                    </h3>

                    <div className="flex items-center gap-2 mt-2 text-xs md:text-sm">
                      <div className="flex items-center text-amber-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        {"★".repeat(Math.floor(room.rating))}
                        <span className="text-gray-300 ml-1.5 font-semibold text-xs">
                          {room.rating} ({room.reviews})
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-gray-400 mt-2.5 flex items-center gap-1.5">
                      <svg
                        className="w-3.5 h-3.5 text-[#00F0FF] shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {room.hotel?.address}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {room.amenities.map((item, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] bg-gray-900/90 text-gray-300 px-3 py-1 rounded-md border border-gray-700/60 shadow-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-800/80">
                    <div>
                      <span className="text-2xl md:text-3xl font-black text-white tracking-tight">
                        ${room.price}
                      </span>
                      <span className="text-xs text-gray-400 ml-1">/night</span>
                    </div>
                    <button
                      onClick={() => {
                        navigate(`/rooms/${room._id}`);
                        window.scrollTo(0, 0);
                      }}
                      className="px-5 py-2.5 text-xs font-bold text-black bg-[#00F0FF] rounded-lg hover:bg-[#33f3ff] transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-[0_0_22px_rgba(0,240,255,0.7)] cursor-pointer active:scale-95"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex justify-center mt-8">
              <button className="px-8 py-3 text-sm font-semibold text-white bg-transparent border border-[#00F0FF]/60 hover:border-[#00F0FF] rounded-xl hover:bg-[#00F0FF]/10 transition-all duration-300 cursor-pointer shadow-[0_0_12px_rgba(0,240,255,0.25)] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                Show More Rooms
              </button>
            </div>
          </div>

          {/* Overlay Background for Mobile Drawer */}
          {openFilters && (
            <div
              onClick={() => setOpenFilters(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden transition-opacity"
            />
          )}

          {/* Filters Sidebar: Fixed Sticky on Desktop & Slide-in Drawer on Mobile */}
          <aside
            className={`fixed lg:sticky top-0 lg:top-28 right-0 h-full lg:h-auto w-80 max-w-[85vw] lg:w-[290px] xl:w-[320px] bg-[#262626] lg:bg-[#262626]/90 backdrop-blur-md border-l lg:border border-gray-800 lg:rounded-2xl p-6 z-50 lg:z-10 overflow-y-auto lg:overflow-visible transition-transform duration-300 ease-in-out ${
              openFilters
                ? "translate-x-0"
                : "translate-x-full lg:translate-x-0"
            }`}
          >
            <div className="flex items-center justify-between pb-4 border-b border-gray-800 mb-6">
              <h3 className="text-xs font-bold text-white tracking-widest uppercase flex items-center gap-2">
                Filters
              </h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={clearFilters}
                  className="text-xs text-[#00F0FF] hover:text-[#52f4ff] font-semibold transition-colors cursor-pointer"
                >
                  CLEAR ALL
                </button>
                <button
                  onClick={() => setOpenFilters(false)}
                  className="lg:hidden text-gray-400 hover:text-white p-1"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Popular Filters
              </h4>
              <div className="space-y-2.5">
                {[
                  "Single Bed",
                  "Family Suite",
                  "Double Bed",
                  "Luxury Room",
                ].map((type) => (
                  <label
                    key={type}
                    className="flex items-center gap-3 text-xs md:text-sm text-gray-300 hover:text-white cursor-pointer select-none transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={selectedTypes.includes(type)}
                      onChange={() => handleTypeChange(type)}
                      className="w-4 h-4 rounded border-gray-700 bg-gray-900 text-[#00F0FF] focus:ring-[#00F0FF] focus:ring-offset-gray-900 accent-[#00F0FF] cursor-pointer"
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-6 pt-5 border-t border-gray-800">
              <h4 className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Price Range
              </h4>
              <div className="space-y-2.5">
                {[
                  { label: "All Prices", value: "all" },
                  { label: "$100 to $500", value: "100-500" },
                  { label: "$500 to $1000", value: "500-1000" },
                  { label: "$1000 to $1500", value: "1000-1500" },
                ].map((price) => (
                  <label
                    key={price.value}
                    className="flex items-center gap-3 text-xs md:text-sm text-gray-300 hover:text-white cursor-pointer select-none transition-colors"
                  >
                    <input
                      type="radio"
                      name="price"
                      value={price.value}
                      checked={selectedPrice === price.value}
                      onChange={(e) => setSelectedPrice(e.target.value)}
                      className="w-4 h-4 rounded-full border-gray-700 bg-gray-900 text-[#00F0FF] focus:ring-[#00F0FF] accent-[#00F0FF] cursor-pointer"
                    />
                    {price.label}
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-5 border-t border-gray-800 mb-6 lg:mb-0">
              <h4 className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Sort By
              </h4>
              <div className="space-y-2.5">
                {[
                  { label: "Price: Low to High", value: "lowToHigh" },
                  { label: "Price: High to Low", value: "highToLow" },
                  { label: "Newest First", value: "newest" },
                ].map((sort) => (
                  <label
                    key={sort.value}
                    className="flex items-center gap-3 text-xs md:text-sm text-gray-300 hover:text-white cursor-pointer select-none transition-colors"
                  >
                    <input
                      type="radio"
                      name="sortBy"
                      value={sort.value}
                      checked={sortBy === sort.value}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-4 h-4 rounded-full border-gray-700 bg-gray-900 text-[#00F0FF] focus:ring-[#00F0FF] accent-[#00F0FF] cursor-pointer"
                    />
                    {sort.label}
                  </label>
                ))}
              </div>
            </div>

            {/* Mobile View Apply Button */}
            <button
              onClick={() => setOpenFilters(false)}
              className="lg:hidden w-full mt-6 py-3 text-xs font-bold text-black bg-[#00F0FF] rounded-xl shadow-md active:scale-95 transition-transform"
            >
              Apply Filters
            </button>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default AllRooms;
