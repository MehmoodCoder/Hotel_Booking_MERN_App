import React from "react";
import HotelCard from "./HotelCard";
import Title from "./Title";
import { useAppContext } from "../context/AppContext";

const FeaturedDestination = () => {
  const { rooms,navigate } = useAppContext();

  return rooms.length > 0 && (
    <>
      <div
        style={{
          backgroundColor: "#131212",
        }}
        className="bg-dark min-h-screen text-white w-full flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-13 lg:px-18 text-white py-16 md:py-20 border-t border-gray-800/60 min-h-screen"
      >
        <Title
          title="Explore Top Rated Rooms"
          description="Discover our best-selling destinations with world-class amenities and unbeatable night rates."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl px-2 py-8 justify-items-center">
          {rooms.map((room, index) => (
            <HotelCard key={room._id} room={room} index={index} />
          ))}
        </div>

        <button
          onClick={() => {
            navigate("/rooms");
            window.scrollTo(0, 0);
          }}
          className="mt-8 mb-4 px-6 py-3 text-sm font-bold border border-[#00F0FF]/40 text-[#111] bg-[#00F0FF] rounded-xl hover:bg-[#00F0FF] hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] cursor-pointer active:scale-95"
        >
          View All Destinations
        </button>
      </div>
    </>
  );
};

export default FeaturedDestination;
