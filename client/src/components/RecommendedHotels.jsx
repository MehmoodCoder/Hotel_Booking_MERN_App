import React, { useState, useEffect } from "react";
import HotelCard from "./HotelCard";
import Title from "./Title";
import { useAppContext } from "../context/AppContext";

const RecommendedHotels = () => {
  const { rooms, searchCities, currency } = useAppContext();
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    if (!searchCities || searchCities.length === 0 || !rooms || rooms.length === 0) {
      setRecommended([]);
      return;
    }

    const searchCitiesLower = searchCities.map((city) =>
      city.toString().trim().toLowerCase()
    );

    const filteredHotels = rooms.filter((room) => {
      const roomCity = (
        room.hotel?.city ||
        room.hotel?.location ||
        room.city ||
        ""
      )
        .toString()
        .trim()
        .toLowerCase();

      if (!roomCity) return false;

      return searchCitiesLower.some(
        (city) => roomCity.includes(city) || city.includes(roomCity)
      );
    });

    setRecommended(filteredHotels);
  }, [rooms, searchCities]);

  return (
    recommended.length > 0 && (
      <div
        style={{ backgroundColor: "#131212" }}
        className="bg-dark min-h-screen text-white w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-13 lg:px-18 py-16 md:py-20 border-t border-gray-800/60"
      >
        <Title
          title="Explore Recommended Hotels"
          description="Discover our handpicked selected destinations with world-class amenities and unbeatable night rates."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl px-2 py-8 justify-items-center">
          {recommended.slice(0, 4).map((room, index) => (
            <HotelCard
              key={room._id || index}
              room={room}
              index={index}
              currency={currency}
            />
          ))}
        </div>
      </div>
    )
  );
};

export default RecommendedHotels;