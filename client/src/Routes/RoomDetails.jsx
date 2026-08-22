import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const roomsData = [
  {
    _id: "1",
    hotel: {
      name: "The Grand Resort",
      location: "San Diego, CA, USA",
      address: "Los Angeles, California, USA",
    },
    rating: 4.8,
    reviews: "200+ reviews",
    price: 299,
    type: "Single Bed",
    badge: "20% OFF",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80",
    ],
    amenities: ["Free wifi", "Free breakfast", "Mountain view"],
    host: {
      name: "Emma Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      responseRate: "100%",
      responseTime: "10 mins",
    },
  },
];

const highlights = [
  {
    id: 1,
    title: "Spotless & Sanitized",
    description:
      "Rigorous cleaning protocols ensure maximum hygiene and comfort.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 13l4 4L19 7"
      />
    ),
  },
  {
    id: 2,
    title: "Enhanced Cleaning",
    description:
      "Host follows strict, professional-grade sanitization standards.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    id: 3,
    title: "Prime Location",
    description:
      "Highly rated by recent guests for easy access and great surroundings.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
    ),
  },
  {
    id: 4,
    title: "Seamless Check-in",
    description:
      "Smooth, hassle-free arrival process praised by previous visitors.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
      />
    ),
  },
];

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("1 Guest");

  useEffect(() => {
    const foundRoom = roomsData.find((item) => item._id === id) || roomsData[0];
    setRoom(foundRoom);
    if (foundRoom?.images?.length > 0) {
      setSelectedImage(foundRoom.images[0]);
    }
  }, [id]);

  return (
    room && (
      <div className="w-full bg-[#111111] min-h-screen text-gray-200">
        <div className="pt-28 md:pt-36 px-4 md:px-16 lg:px-24 xl:px-32 pb-20 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="font-playfair text-2xl md:text-4xl font-extrabold text-white">
                  {room.hotel.name}
                </h1>
                <span className="text-xs text-gray-400">({room.type})</span>
                {room.badge && (
                  <span className="bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/40 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                    {room.badge}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3 mt-2 text-xs md:text-sm">
                <div className="flex items-center text-amber-400">
                  {"★".repeat(Math.floor(room.rating))}
                  <span className="text-gray-300 ml-1.5 font-semibold text-xs">
                    {room.rating} ({room.reviews})
                  </span>
                </div>
                <span className="text-gray-500">•</span>
                <p className="text-gray-400 flex items-center gap-1 text-xs">
                  <svg
                    className="w-3.5 h-3.5 text-[#00F0FF]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                  </svg>
                  {room.hotel.address}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 rounded-2xl overflow-hidden mb-10 border border-gray-800 shadow-2xl">
            <div className="lg:col-span-2 h-72 sm:h-96 lg:h-[420px] relative">
              <img
                src={selectedImage || room.images[0]}
                alt="Main Room"
                className="w-full h-full object-cover transition-all duration-300"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 h-72 sm:h-96 lg:h-[420px]">
              {room.images.slice(0, 4).map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`relative overflow-hidden rounded-lg cursor-pointer border-2 transition-all ${
                    selectedImage === img
                      ? "border-[#00F0FF]"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Room ${idx + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-gray-800">
            <div>
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-white">
                Unmatched Comfort, Unforgettable Stays
              </h2>
              <div className="flex flex-wrap gap-2 mt-4">
                {room.amenities.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-gray-900 text-gray-300 px-3.5 py-1.5 rounded-md border border-gray-800 flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]"></span>
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:text-right">
              <span className="text-3xl md:text-4xl font-black text-white tracking-tight">
                ${room.price}
              </span>
              <span className="text-sm text-gray-400"> / day</span>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log({ checkIn, checkOut, guests });
            }}
            className="my-10 bg-[#262626]/90 backdrop-blur-md border border-gray-800 rounded-2xl p-4 md:p-6 shadow-xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                  Check-In
                </label>
                <input
                  type="date"
                  required
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="bg-gray-900 text-gray-200 border border-gray-700 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#00F0FF]"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                  Check-Out
                </label>
                <input
                  type="date"
                  required
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="bg-gray-900 text-gray-200 border border-gray-700 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#00F0FF]"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                  Guests
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="bg-gray-900 text-gray-200 border border-gray-700 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#00F0FF]"
                >
                  <option value="1 Guest">1 Guest</option>
                  <option value="2 Guests">2 Guests</option>
                  <option value="3 Guests">3 Guests</option>
                  <option value="4+ Guests">4+ Guests</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full h-10 mt-auto bg-[#00F0FF] text-black font-bold text-xs rounded-xl hover:bg-[#33f3ff] transition-all shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-[0_0_22px_rgba(0,240,255,0.7)] cursor-pointer"
              >
                Check Availability
              </button>
            </div>
          </form>

          <div className="space-y-5 my-10 border-b border-gray-800 pb-10">
            {highlights.map((item) => (
              <div key={item.id} className="flex items-start gap-4">
                <div className="p-2.5 bg-gray-900 rounded-xl border border-gray-800 text-[#00F0FF] shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {item.icon}
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{item.title}</h4>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-12 border-b border-gray-800 pb-10">
            Room assignments are finalized upon arrival based on availability.
            Enjoy a spacious 1-bedroom, 1-bathroom setup designed for ultimate
            relaxation and warmth. Rooms feature either one king bed or two
            double beds depending on daily availability.{" "}
          </p>

          <div className="mb-12 border-b border-gray-800 pb-10">
            <h3 className="font-playfair text-xl md:text-2xl font-bold text-white mb-4">
              Location on Map
            </h3>
            <div className="relative w-full h-80 rounded-2xl overflow-hidden border border-gray-800 bg-gray-900 flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(#00F0FF_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
              <div className="z-10 text-center p-4">
                <div className="inline-block px-4 py-2 bg-[#00F0FF]/10 border border-[#00F0FF]/40 rounded-xl text-[#00F0FF] text-xs font-bold mb-2 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                  Exact location provided after booking
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  {room.hotel.address}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#262626]/90 backdrop-blur-md border border-gray-800 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center gap-4">
              <img
                src={room.host.avatar}
                alt={room.host.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-[#00F0FF]/60 shadow-[0_0_10px_rgba(0,240,255,0.3)]"
              />
              <div>
                <h4 className="text-base font-bold text-white">
                  Hosted by {room.host.name}
                </h4>
                <div className="flex items-center gap-4 mt-1 text-xs text-gray-400">
                  <span>
                    Response rate:{" "}
                    <strong className="text-white">
                      {room.host.responseRate}
                    </strong>
                  </span>
                  <span>
                    Response time:{" "}
                    <strong className="text-white">
                      {room.host.responseTime}
                    </strong>
                  </span>
                </div>
              </div>
            </div>
            <button className="px-6 py-2.5 text-xs font-bold text-black bg-[#00F0FF] rounded-xl hover:bg-[#33f3ff] transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)] cursor-pointer">
              Contact Host
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default RoomDetails;
