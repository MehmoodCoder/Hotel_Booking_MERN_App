import React from "react";
import Title from "../components/Title";

const bookingsData = [
  {
    _id: "bk_1",
    room: {
      name: "The Grand Resort",
      type: "Single Bed",
      address: "Los Angeles, California, USA",
      images: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
      ],
    },
    checkIn: "10 Sep 2026",
    checkOut: "15 Sep 2026",
    guests: "2 Guests",
    totalPrice: 1495,
    status: "Confirmed",
    paymentStatus: "Unpaid",
  },
  {
    _id: "bk_2",
    room: {
      name: "Ocean View Suite",
      type: "Double Bed",
      address: "San Diego, California, USA",
      images: [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
      ],
    },
    checkIn: "01 Jul 2026",
    checkOut: "04 Jul 2026",
    guests: "1 Guest",
    totalPrice: 897,
    status: "Completed",
    paymentStatus: "Paid",
  },
];

const MyBookings = () => {
  return (
    <div className="w-full bg-[#1e1e1e] min-h-screen text-gray-200">
      <div className="pt-28 md:pt-36 px-4 md:px-16 lg:px-24 xl:px-32 pb-20 max-w-7xl mx-auto">
        <div className="mb-8">
          <Title
            align="left"
            title="My Bookings"
            description="View your upcoming and past bookings. All your reservations in one place."
          />
        </div>

        <div className="space-y-6">
          {bookingsData.map((booking) => (
            <div
              key={booking._id}
              className="bg-[#262626]/90 backdrop-blur-md border border-gray-800 rounded-2xl p-4 sm:p-6 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-gray-700 transition-all"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 w-full md:w-auto">
                <img
                  src={booking.room.images[0]}
                  alt={booking.room.name}
                  className="w-full sm:w-40 h-28 object-cover rounded-xl border border-gray-800 shrink-0"
                />
                <div className="space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-playfair text-xl font-bold text-white">
                      {booking.room.name}
                    </h3>
                    <span className="text-xs text-gray-400">
                      ({booking.room.type})
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-gray-400 flex-wrap">
                    <p className="flex items-center gap-1">
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
                      {booking.room.address}
                    </p>
                    <span>•</span>
                    <p className="flex items-center gap-1 text-gray-300">
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
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      {booking.guests}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 pt-1 text-xs text-gray-300">
                    <div>
                      <span className="text-gray-500 block text-[10px] uppercase font-semibold">
                        Check-In
                      </span>
                      <span>
                        {new Date(booking.checkIn).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-500 block text-[10px] uppercase font-semibold">
                        Check-Out
                      </span>
                      <span>
                        {new Date(booking.checkOut).toLocaleDateString(
                          "en-GB",
                          {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          },
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto gap-4 pt-4 md:pt-0 border-t md:border-t-0 border-gray-800">
                <div className="text-left md:text-right">
                  <span className="text-2xl font-black text-white">
                    ${booking.totalPrice}
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase border ${
                        booking.status === "Confirmed"
                          ? "bg-[#00F0FF]/10 text-[#00F0FF] border-[#00F0FF]/40"
                          : "bg-gray-800 text-gray-400 border-gray-700"
                      }`}
                    >
                      {booking.status}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase bg-transparent border ${
                        booking.paymentStatus === "Paid"
                          ? "text-emerald-400 border-emerald-500"
                          : "text-red-500 border-red-500/50"
                      }`}
                    >
                      {booking.paymentStatus}
                    </span>
                  </div>
                </div>

                {booking.paymentStatus !== "Paid" && (
                  <div className="flex items-center gap-2">
                    <button className="px-4 py-2 text-xs font-bold text-black bg-[#00F0FF] rounded-xl hover:bg-[#33f3ff] transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)] cursor-pointer">
                      Pay Now
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
