import React, { useState } from "react";
import Title from "../../components/Title";

const DummyData = [
  {
    id: "1",
    roomType: "Luxury Suite",
    amenities: [
      "Free Wi-Fi",
      "Air Conditioning",
      "Pool Access",
      "Free Breakfast",
    ],
    pricePerNight: 250,
    isAvailable: true,
  },
  {
    id: "2",
    roomType: "Double Bed",
    amenities: ["Free Wi-Fi", "TV", "Air Conditioning"],
    pricePerNight: 120,
    isAvailable: true,
  },
  {
    id: "3",
    roomType: "Single Bed",
    amenities: ["Free Wi-Fi", "TV"],
    pricePerNight: 75,
    isAvailable: false,
  },
  {
    id: "4",
    roomType: "Family Room",
    amenities: ["Free Wi-Fi", "Air Conditioning", "TV", "Free Room Service"],
    pricePerNight: 180,
    isAvailable: true,
  },
];

function ListRooms() {
  const [rooms, setRooms] = useState(DummyData);

  const toggleAvailability = (id) => {
    setRooms((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isAvailable: !item.isAvailable } : item,
      ),
    );
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white p-3 sm:p-6">
      <Title
        align="left"
        title="All Rooms"
        description="View and manage all available rooms, prices, and amenities."
      />

      <div className="mt-8 bg-[#1e1e1e]/80 backdrop-blur-md border border-gray-800/80 rounded-2xl p-4 sm:p-6 shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-gray-800">
          <div>
            <h2 className="text-xl font-bold text-white tracking-wide">
              Rooms Directory
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">
              Total Listed Rooms: {rooms.length}
            </p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-gray-800/50">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-[#181818] border-b border-gray-800 text-gray-400 text-xs uppercase tracking-wider">
                <th className="py-4 px-5 font-semibold">Room Details</th>
                <th className="py-4 px-5 font-semibold">Amenities</th>
                <th className="py-4 px-5 font-semibold text-center">
                  Price / Night
                </th>
                <th className="py-4 px-5 font-semibold text-center">
                  Availability
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/60 text-sm">
              {rooms.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-[#252525]/50 transition-colors group"
                >
                  <td className="py-4 px-5 font-semibold text-white group-hover:text-[#00F0FF] transition-colors">
                    {item.roomType}
                  </td>
                  <td className="py-4 px-5">
                    <div className="flex flex-wrap gap-1.5 max-w-xs">
                      {item.amenities.map((amenity, index) => (
                        <span
                          key={index}
                          className="bg-[#141414] border border-gray-800 text-gray-300 text-[11px] px-2.5 py-1 rounded-md font-medium group-hover:border-gray-700 transition-all"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-5 text-center">
                    <span className="text-[#00F0FF] font-bold text-base bg-[#00F0FF]/10 px-3 py-1 rounded-lg border border-[#00F0FF]/20">
                      ${item.pricePerNight}
                    </span>
                  </td>
                  <td className="py-4 px-5 text-center">
                    <div className="flex items-center justify-center gap-3">
                      <label className="relative inline-flex items-center cursor-pointer select-none">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={item.isAvailable}
                          onChange={() => toggleAvailability(item.id)}
                        />
                        <div className="w-12 h-7 bg-slate-800 border border-gray-700 rounded-full peer peer-checked:bg-[#00F0FF] peer-checked:border-[#00F0FF] transition-all duration-200"></div>
                        <span className="dot absolute left-1 top-1 w-5 h-5 bg-white peer-checked:bg-black rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5 shadow-md"></span>
                      </label>
                      <span
                        className={`text-xs font-semibold w-16 text-left hidden sm:inline-block ${
                          item.isAvailable
                            ? "text-emerald-400"
                            : "text-gray-500"
                        }`}
                      >
                        {item.isAvailable ? "Active" : "Hidden"}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListRooms;
