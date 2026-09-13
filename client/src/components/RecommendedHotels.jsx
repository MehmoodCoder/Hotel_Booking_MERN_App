import React, {useState, useEffect} from "react";
import HotelCard from "./HotelCard";
import Title from "./Title";
import { useAppContext } from "../context/AppContext";

const RecommendedHotels = () => {
  const { rooms, searchedCities } = useAppContext();
  const [recommended, setRecommended] = useState([]);

  const filterHotels = () => {
    const filteredHotels = rooms.slice().filter((room) =>
      searchedCities.includes(room.city)
    );
    setRecommended(filteredHotels);
  };

  useEffect(() => {
    filterHotels();
  }, [rooms, searchedCities]);

  return (
    recommended.length > 0 && (
      <>
        <div
          style={{
            backgroundColor: "#131212",
          }}
          className="bg-dark min-h-screen text-white w-full flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-13 lg:px-18 text-white py-16 md:py-20 border-t border-gray-800/60 min-h-screen"
        >
          <Title
            title="Explore Recommended Hotels"
            description="Discover our handpicked selected destinations with world-class amenities and unbeatable night rates."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl px-2 py-8 justify-items-center">
            {recommended.map((room, index) => (
              <HotelCard key={room._id} room={room} index={index} />
            ))}
          </div>
        </div>
      </>
    )
  );
};

export default RecommendedHotels;
