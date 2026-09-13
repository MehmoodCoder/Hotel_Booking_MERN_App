import React, { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const AllRooms = () => {
  const { rooms, navigate, currency } = useAppContext();
  const [searchParams] = useSearchParams();

  const [openFilters, setOpenFilters] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

  const destination = searchParams.get("destination") || "";

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

  const filteredRooms = useMemo(() => {
    if (!rooms) return [];

    return rooms
      .filter((room) => {
        if (destination) {
          const hotelCity = room.hotel?.city || room.hotel?.location || "";
          if (!hotelCity.toLowerCase().includes(destination.toLowerCase())) {
            return false;
          }
        }

        const currentType = room.roomType || room.type;
        if (selectedTypes.length > 0 && !selectedTypes.includes(currentType)) {
          return false;
        }

        const price = room.pricePerNight || room.price || 0;
        if (selectedPrice !== "all") {
          const [min, max] = selectedPrice.split("-").map(Number);
          if (price < min || price > max) return false;
        }

        return true;
      })
      .sort((a, b) => {
        const priceA = a.pricePerNight || a.price || 0;
        const priceB = b.pricePerNight || b.price || 0;

        if (sortBy === "lowToHigh") return priceA - priceB;
        if (sortBy === "highToLow") return priceB - priceA;
        if (sortBy === "newest")
          return new Date(b.createdAt) - new Date(a.createdAt);
        return 0;
      });
  }, [rooms, destination, selectedTypes, selectedPrice, sortBy]);

  return (
    <div className="w-full bg-[#111111] min-h-screen text-gray-200 relative">
      <div className="pt-28 md:pt-36 px-4 md:px-16 lg:px-24 xl:px-32 pb-20">
        <div className="mb-8 md:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="bg-transparent text-[#00F0FF] inline-block border border-[#00F0FF]/80 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-[0_0_15px_rgba(0,240,255,0.4)] mb-3">
              EXPLORE ACCOMMODATIONS
            </p>
            <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
              Hotel Rooms
            </h1>
            <p className="text-gray-400 text-xs md:text-sm max-w-2xl mt-2 leading-relaxed">
              Take advantage of our limited-time offers and special packages to
              enhance your stay.
            </p>
          </div>

          <button
            onClick={() => setOpenFilters(true)}
            className="lg:hidden self-start flex items-center gap-2 px-5 py-2.5 bg-[#111111] border border-gray-700 hover:border-[#00F0FF] text-white text-xs font-bold rounded-xl transition-all shadow-md cursor-pointer"
          >
            Filters
            {(selectedTypes.length > 0 || selectedPrice !== "all") && (
              <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse"></span>
            )}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 relative">
          <div className="w-full lg:w-[calc(100%-320px)] xl:w-[calc(100%-360px)] flex flex-col gap-6">
            {filteredRooms.length === 0 ? (
              <div className="text-center py-16 text-gray-400 bg-[#111111]/90 border border-gray-800 rounded-2xl">
                No rooms found matching your criteria.
              </div>
            ) : (
              filteredRooms.map((room) => (
                <div
                  key={room._id}
                  className="bg-[#111111]/90 backdrop-blur-md border border-gray-800 rounded-2xl p-4 md:p-5 flex flex-col sm:flex-row gap-6 hover:border-[#00F0FF]/60 transition-all duration-300 shadow-xl group hover:shadow-[0_0_25px_rgba(0,240,255,0.18)] hover:-translate-y-0.5"
                >
                  <div className="w-full sm:w-64 h-52 sm:h-auto rounded-xl overflow-hidden shrink-0 relative cursor-pointer">
                    <img
                      onClick={() => {
                        navigate(`/rooms/${room._id}`);
                        window.scrollTo(0, 0);
                      }}
                      title="View Details"
                      src={room.images?.[0] || room.image?.[0]}
                      alt={room.hotel?.name || "Room Image"}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md text-[#00F0FF] text-[10px] uppercase font-bold px-2.5 py-1 rounded-md border border-[#00F0FF]/40 shadow-md">
                      {room.roomType || room.type}
                    </div>
                  </div>

                  <div className="flex flex-col justify-between w-full">
                    <div>
                      <span className="text-xs text-[#00F0FF]/80 font-medium tracking-wide">
                        {room.hotel?.location || room.hotel?.city}
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
                        <div className="flex items-center text-amber-400">
                          {"★".repeat(Math.floor(room.rating || 5))}
                          <span className="text-gray-300 ml-1.5 font-semibold text-xs">
                            {room.rating || 5.0} (
                            {room.reviews || "100+ reviews"})
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-gray-400 mt-2.5 flex items-center gap-1.5">
                        {room.hotel?.address}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {(room.aminities || room.amenities || []).map(
                          (item, idx) => (
                            <span
                              key={idx}
                              className="text-[11px] bg-[#111111] text-gray-300 px-3 py-1 rounded-md border border-gray-700/60 shadow-sm"
                            >
                              {item}
                            </span>
                          ),
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-800/80">
                      <div>
                        <span className="text-2xl md:text-3xl font-black text-white tracking-tight">
                          {currency || "$"}
                          {room.pricePerNight || room.price}
                        </span>
                        <span className="text-xs text-gray-400 ml-1">
                          /night
                        </span>
                      </div>
                      <button
                        onClick={() => {
                          navigate(`/rooms/${room._id}`);
                          window.scrollTo(0, 0);
                        }}
                        className="px-5 py-2.5 text-xs font-bold text-black bg-[#00F0FF] rounded-lg hover:bg-[#33f3ff] transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.4)] cursor-pointer active:scale-95"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {openFilters && (
            <div
              onClick={() => setOpenFilters(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden transition-opacity"
            />
          )}

          <aside
            className={`fixed lg:sticky top-0 lg:top-28 right-0 h-full lg:h-auto w-80 max-w-[85vw] lg:w-[290px] xl:w-[320px] bg-[#111111] lg:bg-[#111111]/90 backdrop-blur-md border-l lg:border border-gray-800 lg:rounded-2xl p-6 z-50 lg:z-10 overflow-y-auto lg:overflow-visible transition-transform duration-300 ease-in-out ${
              openFilters
                ? "translate-x-0"
                : "translate-x-full lg:translate-x-0"
            }`}
          >
            <div className="flex items-center justify-between pb-4 border-b border-gray-800 mb-6">
              <h3 className="text-xs font-bold text-white tracking-widest uppercase">
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
                      className="w-4 h-4 rounded border-gray-700 bg-gray-900 text-[#00F0FF] focus:ring-[#00F0FF] accent-[#00F0FF] cursor-pointer"
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
