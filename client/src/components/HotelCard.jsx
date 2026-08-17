import React from "react";
import { Link } from "react-router-dom";
import starRating from "../assets/starRatings.svg";

const HotelCard = ({ room, index }) => {
  return (
    <Link
      to={"/room/" + room._id}
      onClick={() => window.scrollTo(0, 0)}
      className="group relative w-full max-w-sm rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 text-white shadow-[0px_4px_12px_rgba(255,255,255,0.15)] hover:shadow-[0px_6px_20px_rgba(255,255,255,0.25)] transition-all duration-300 flex flex-col justify-between"
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-800">
        <img
          src={room.img?.[0]}
          alt={room.hotel?.name || "Room Image"}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {index % 2 === 0 && (
          <span className="px-3 py-1 absolute top-3 left-3 text-xs bg-black/80 backdrop-blur-md text-white font-medium rounded-full border border-white/20 shadow-md">
            Best Seller
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col gap-3 flex-1 justify-between">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-playfair text-lg md:text-xl font-semibold text-white tracking-wide truncate">
              {room.hotel?.name}
            </h3>
            <div className="flex items-center gap-1.5 shrink-0 bg-white/10 px-2 py-0.5 rounded-md backdrop-blur-sm border border-white/10">
              <img
                src={starRating}
                alt="star icon"
                className="w-3.5 h-3.5 object-contain"
              />
              <span className="text-xs font-medium text-white">4.5</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-gray-300 text-xs md:text-sm">
            <img
              src="https://api.iconify.design/lucide:map-pin.svg?color=white"
              alt="location icon"
              className="w-4 h-4 opacity-80 shrink-0"
            />
            <span className="line-clamp-1 font-light">
              {room.hotel?.address}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-800/80 mt-1">
          <div>
            <span className="text-xl md:text-2xl font-bold text-white">
              ${room.price}
            </span>
            <span className="text-xs text-gray-400 font-light"> / night</span>
          </div>

          <button className="px-4 py-2 text-xs md:text-sm font-medium text-white bg-transparent border border-white/80 rounded-lg hover:bg-white hover:text-black transition-all duration-300 cursor-pointer active:scale-95">
            Book Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;
