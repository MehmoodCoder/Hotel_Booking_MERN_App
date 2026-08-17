import React from "react";
import HotelCard from "./HotelCard";

const HotelData = [
  {
    _id: "room_1",
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
  return (
    <>
      <div className="flex flex-col items-center w-full px-6 md:px-13 lg:px-18 bg-slate-50 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full px-4 py-8">
          {HotelData.map((room, index) => (
            <HotelCard key={room._id} room={room} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedDestination;
