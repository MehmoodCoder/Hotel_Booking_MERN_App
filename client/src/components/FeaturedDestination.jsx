import React from "react";
import HotelCard from "./HotelCard";

const data = {};

const FeaturedDestination = () => {
  return (
    <>
      <div>
        <div>
          {data.map((room, index) => (
            <HotelCard key={room._id} index={room.index} room={room} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedDestination;
