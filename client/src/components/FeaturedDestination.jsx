import React from "react";
import HotelCard from "./HotelCard";

const data = {};

const FeaturedDestination = () => {
  return (
    <>
      <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20">
        <div className="flex flex-wrap items-center justify-center gap-6 mt-20">
          {data.map((room, index) => ( 
            <HotelCard key={room._id} index={room.index} room={room} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedDestination;
