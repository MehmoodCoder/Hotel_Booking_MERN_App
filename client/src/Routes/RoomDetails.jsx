import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

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
  const { rooms = [] } = useAppContext();
  const { id } = useParams();

  const [room, setRoom] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("1 Guest");
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    if (Array.isArray(rooms) && rooms.length > 0) {
      const foundRoom = rooms.find((item) => String(item._id) === String(id));
      if (foundRoom) {
        setRoom(foundRoom);
        if (foundRoom.images && foundRoom.images.length > 0) {
          setSelectedImage(foundRoom.images[0]);
        }
      }
    }
  }, [rooms, id]);

  if (!room) {
    return (
      <div className="w-full bg-[#111111] min-h-screen text-gray-200 flex items-center justify-center">
        <p className="text-[#00F0FF] text-sm font-medium animate-pulse">
          Loading room details...
        </p>
      </div>
    );
  }

  const price = room.pricePerNight ?? room.price ?? 0;
  const typeName = room.roomType || room.type || "Standard Room";
  const amenitiesList = room.aminities || room.amenities || [];

  const hotelName =
    typeof room.hotel === "object" ? room.hotel?.name : room.hotelName;
  const hotelLocation =
    typeof room.hotel === "object" ? room.hotel?.address : room.address;
  const ratingValue = Number(room.rating || room.hotel?.rating) || 0;

  const ownerData =
    typeof room.hotel === "object" && typeof room.hotel?.owner === "object"
      ? room.hotel.owner
      : null;

  const hostName =
    ownerData?.username ||
    ownerData?.name ||
    room.ownerName ||
    (typeof room.hotel?.owner === "string" ? room.hotel.owner : "Hotel Owner");

  const hostEmail = ownerData?.email || room.ownerEmail || "";

  const hostImage =
    ownerData?.image ||
    room.ownerImage ||
    "https://via.placeholder.com/150/111111/00F0FF?text=Owner";

  const handleCheckAvailability = (e) => {
    e.preventDefault();
    if (checkIn && checkOut) {
      setIsAvailable(room.isAvailable ?? true);
    }
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <span className="text-amber-400 font-bold">
        {"★".repeat(fullStars)}
        {hasHalfStar && "½"}
        {"☆".repeat(Math.max(0, emptyStars))}
      </span>
    );
  };

  return (
    <div className="w-full bg-[#111111] min-h-screen text-gray-200">
      <div className="pt-28 md:pt-36 px-4 md:px-16 lg:px-24 xl:px-32 pb-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="font-playfair text-2xl md:text-4xl font-extrabold text-white">
                {hotelName}
              </h1>
              <span className="text-xs text-gray-400">({typeName})</span>
            </div>
            <div className="flex items-center gap-3 mt-2 text-xs md:text-sm">
              <div className="flex items-center gap-1.5">
                {ratingValue > 0 ? (
                  <>
                    {renderStars(ratingValue)}
                    <span className="text-gray-300 ml-1 font-semibold text-xs">
                      {ratingValue} (
                      {room.reviewsCount
                        ? `${room.reviewsCount} reviews`
                        : "New Property"}
                      )
                    </span>
                  </>
                ) : (
                  <span className="text-yellow-400 text-xs font-medium px-2 py-0.5 rounded border border-yellow-700">
                    ★ New Property
                  </span>
                )}
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
                {hotelLocation}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 rounded-2xl overflow-hidden mb-10 border border-gray-800 shadow-2xl">
          <div className="lg:col-span-2 h-72 sm:h-96 lg:h-[420px] relative">
            <img
              src={selectedImage || room.images?.[0]}
              alt="Main Room"
              className="w-full h-full object-cover transition-all duration-300"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 h-72 sm:h-96 lg:h-[420px]">
            {room.images?.slice(0, 4).map((img, idx) => (
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
              {amenitiesList.length > 0 ? (
                amenitiesList.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-[#111111] text-gray-300 px-3.5 py-1.5 rounded-md border border-gray-800 flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]"></span>
                    {item}
                  </span>
                ))
              ) : (
                <span className="text-xs text-gray-500">
                  No amenities listed
                </span>
              )}
            </div>
          </div>
          <div className="md:text-right">
            <span className="text-3xl md:text-4xl font-black text-white tracking-tight">
              ${price}
            </span>
            <span className="text-sm text-gray-400"> / night</span>
          </div>
        </div>

        <form
          onSubmit={handleCheckAvailability}
          className="my-10 bg-[#111111] backdrop-blur-md border border-gray-800 rounded-2xl p-4 md:p-6 shadow-xl"
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
                onChange={(e) => {
                  setCheckIn(e.target.value);
                  setIsAvailable(false);
                }}
                className="bg-[#111111] text-gray-200 border border-gray-700 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#00F0FF]"
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
                onChange={(e) => {
                  setCheckOut(e.target.value);
                  setIsAvailable(false);
                }}
                className="bg-[#111111] text-gray-200 border border-gray-700 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#00F0FF]"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="bg-[#111111] text-gray-200 border border-gray-700 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#00F0FF]"
              >
                <option value="1 Guest">1 Guest</option>
                <option value="2 Guests">2 Guests</option>
                <option value="3 Guests">3 Guests</option>
                <option value="4+ Guests">4+ Guests</option>
              </select>
            </div>

            <button
              type="submit"
              className={`w-full h-10 mt-auto font-bold text-xs rounded-xl transition-all cursor-pointer ${
                isAvailable
                  ? "bg-green-500 text-black hover:bg-green-400 shadow-[0_0_15px_rgba(34,197,94,0.4)]"
                  : "bg-[#00F0FF] text-black hover:bg-[#33f3ff] shadow-[0_0_15px_rgba(0,240,255,0.4)]"
              }`}
            >
              {isAvailable ? "Book Now" : "Check Availability"}
            </button>
          </div>
        </form>

        <div className="space-y-5 my-10 border-b border-gray-800 pb-10">
          {highlights.map((item) => (
            <div key={item.id} className="flex items-start gap-4">
              <div className="p-2.5 bg-[#111111] rounded-xl border border-gray-800 text-[#00F0FF] shrink-0">
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

        <div className="mb-12 border-b border-gray-800 pb-10">
          <h3 className="font-playfair text-xl md:text-2xl font-bold text-white mb-4">
            Location on Map
          </h3>
          <div className="relative w-full h-80 rounded-2xl overflow-hidden border border-gray-800 bg-[#111111] flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(#00F0FF_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
            <div className="z-10 text-center p-4">
              <div className="inline-block px-4 py-2 bg-[#111111] border border-[#00F0FF]/40 rounded-xl text-[#00F0FF] text-xs font-bold mb-2 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                Exact location provided after booking
              </div>
              <p className="text-xs text-gray-400 mt-1">{hotelLocation}</p>
            </div>
          </div>
        </div>

        <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6 md:p-8">
          <h3 className="font-playfair text-xl md:text-2xl font-bold text-white mb-6">
            Property Host
          </h3>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="relative shrink-0">
              <img
                src={hostImage}
                alt={hostName}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/150/111111/00F0FF?text=Owner";
                }}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-[#00F0FF] shadow-[0_0_15px_rgba(0,240,255,0.3)]"
              />
              <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-[#111111] rounded-full"></span>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <div>
                  <h4 className="text-lg font-bold text-white">{hostName}</h4>
                  <p className="text-xs text-[#00F0FF]">Hotel Owner</p>
                </div>
                {hostEmail && (
                  <a href={`mailto:${hostEmail}`}>
                    <button className="px-4 py-2 text-xs font-bold border border-gray-700 hover:border-[#00F0FF] text-white hover:text-[#00F0FF] rounded-xl transition-all cursor-pointer self-center sm:self-auto">
                      Contact Host
                    </button>
                  </a>
                )}
              </div>
              <p className="text-xs text-gray-400 leading-relaxed mt-2">
                Verified property owner. Feel free to reach out directly for any
                specific inquiries or arrangements during your stay.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
