import React from "react";
import HotelCard from "./HotelCard";
import Title from "./Title";
import { useNavigate } from "react-router-dom";

const HotelData = [
  {
    _id: "room_1",
    title: "Grand Palace Resort - Murree",
    img: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    ],
    hotel: {
      name: "Grand Palace Resort",
      address: "Mall Road, Murree",
    },
    price: 150,
  },
  {
    _id: "room_2",
    title: "Serena Hotel - Islamabad",
    img: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    ],
    hotel: {
      name: "Serena Hotel",
      address: "Khayaban-e-Suhrawardy, Islamabad",
    },
    price: 220,
  },
  {
    _id: "room_3",
    title: "Pearl Continental - Lahore",
    img: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80",
    ],
    hotel: {
      name: "Pearl Continental",
      address: "Shahrah-e-Quaid-e-Azam, Lahore",
    },
    price: 180,
  },
  {
    _id: "room_4",
    title: "Luxus Hunza Hotel - Hunza",
    img: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
    ],
    hotel: {
      name: "Luxus Hunza Hotel",
      address: "Attabad Lake, Hunza Valley",
    },
    price: 260,
  },
];

const FeaturedDestination = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-13 lg:px-18 bg-[#121212] text-white py-16 md:py-20 border-t border-gray-800/60 min-h-screen">
        <Title
          title="Explore Top Rated Rooms"
          description="Discover our best-selling destinations with world-class amenities and unbeatable night rates."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl px-2 py-8 justify-items-center">
          {HotelData.map((room, index) => (
            <HotelCard key={room._id} room={room} index={index} />
          ))}
        </div>

        <button
          onClick={() => {
            navigate("/rooms");
            window.scrollTo(0, 0);
          }}
          className="mt-8 mb-4 px-6 py-3 text-sm font-bold border border-[#00F0FF]/40 text-[#00F0FF] bg-[#00F0FF]/10 rounded-xl hover:bg-[#00F0FF] hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] cursor-pointer active:scale-95"
        >
          View All Destinations
        </button>
      </div>
    </>
  );
};

export default FeaturedDestination;
