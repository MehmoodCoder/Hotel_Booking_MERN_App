import React from "react";
import { Link } from "react-router-dom";
import starRating from "../assets/starRatings.svg";

const HotelCard = ({ room, index }) => {
  return (
    <div>
    <Link
      to={"/room/" + room._id}
      onClick={() => window.scrollTo(0, 0)}
      className="group relative w-full max-w-sm rounded-2xl overflow-hidden bg-[#111111] border border-gray-800 text-white shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:border-[#00F0FF]/40 transition-all duration-300 flex flex-col justify-between"
    >
      <div
        title={room.title}
        className="relative w-full aspect-[4/3] overflow-hidden bg-gray-900"
      >
        <img
          src={room.img?.[0]}
          alt={room.hotel?.name || "Room Image"}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {index % 2 === 0 && (
          <span className="px-3 py-1 absolute top-3 left-3 text-xs bg-black/80 backdrop-blur-md text-[#00F0FF] font-semibold rounded-full border border-[#00F0FF]/30 shadow-md">
            Best Seller
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col gap-3 flex-1 justify-between">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-playfair text-lg md:text-xl font-bold text-white tracking-wide truncate">
              {room.hotel?.name}
            </h3>
            <div className="flex items-center gap-1.5 shrink-0 bg-[#141414] px-2.5 py-1 rounded-md border border-gray-800">
              <img
                src={starRating}
                alt="star icon"
                className="w-3.5 h-3.5 object-contain"
              />
              <span className="text-xs font-bold text-yellow-400">4.5</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-gray-400 text-xs md:text-sm">
            <img
              src="https://api.iconify.design/lucide:map-pin.svg?color=%2300F0FF"
              alt="location icon"
              className="w-4 h-4 opacity-90 shrink-0"
            />
            <span className="line-clamp-1 font-light">
              {room.hotel?.address}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-800 mt-1">
          <div>
            <span className="text-xl md:text-2xl font-extrabold text-[#00F0FF]">
              ${room.price}
            </span>
            <span className="text-xs text-gray-400 font-light"> / night</span>
          </div>

          <button className="px-4 py-2 text-xs md:text-sm font-bold text-black bg-[#00F0FF] hover:bg-[#00D8E6] rounded-xl transition-all duration-300 shadow-[0_0_10px_rgba(0,240,255,0.3)] hover:shadow-[0_0_15px_rgba(0,240,255,0.6)] cursor-pointer active:scale-95">
            Book Now
          </button>
        </div>
      </div>
    </Link>
    </div>
  );
};

export default HotelCard;
