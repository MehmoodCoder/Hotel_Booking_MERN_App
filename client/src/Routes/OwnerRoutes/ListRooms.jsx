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
    <div className="min-h-screen bg-[#111111] text-white p-3 sm:p-6">
      <Title
        align="left"
        title="All Rooms"
        description="View and manage all available rooms, prices, and amenities."
      />

      <div className="mt-8 bg-[#111111] border border-gray-800 rounded-2xl p-4 sm:p-6 shadow-xl">
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-gray-800">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-wide">
              Rooms Directory
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">
              Total Listed Rooms: {rooms.length}
            </p>
          </div>
        </div>

        {/* Mobile View */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {rooms.map((item) => (
            <div
              key={item.id}
              className="bg-[#111111] border border-gray-800 rounded-xl p-4 flex flex-col gap-3"
            >
              <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                <span className="font-semibold text-white text-base">
                  {item.roomType}
                </span>
                <span className="text-[#00F0FF] font-bold text-sm bg-[#111111] px-2.5 py-1 rounded-lg border border-[#00F0FF]/30">
                  ${item.pricePerNight} / night
                </span>
              </div>

              <div>
                <p className="text-xs text-gray-400 mb-1.5 font-medium">
                  Amenities
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.amenities.map((amenity, index) => (
                    <span
                      key={index}
                      className="bg-[#111111] border border-gray-800 text-gray-300 text-[11px] px-2 py-0.5 rounded-md"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center pt-2 border-t border-gray-800 mt-1">
                <span className="text-xs text-gray-400 font-medium">
                  Status
                </span>
                <div className="flex items-center gap-3">
                  <span
                    className={`text-xs font-semibold ${
                      item.isAvailable ? "text-emerald-400" : "text-gray-500"
                    }`}
                  >
                    {item.isAvailable ? "Available" : "Occupied"}
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer select-none">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={item.isAvailable}
                      onChange={() => toggleAvailability(item.id)}
                    />
                    <div className="w-11 h-6 bg-[#111111] border border-gray-700 rounded-full peer peer-checked:bg-[#00F0FF] peer-checked:border-[#00F0FF] transition-all duration-200"></div>
                    <span className="absolute left-1 top-1 w-4 h-4 bg-white peer-checked:bg-black rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5 shadow-md"></span>
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto rounded-xl border border-gray-800">
          <table className="w-full text-left border-collapse bg-[#111111]">
            <thead>
              <tr className="bg-[#111111] border-b border-gray-800 text-gray-400 text-xs uppercase tracking-wider">
                <th className="py-4 px-5 font-semibold">Room Details</th>
                <th className="py-4 px-5 font-semibold">Amenities</th>
                <th className="py-4 px-5 font-semibold text-center">
                  Price / Night
                </th>
                <th className="py-4 px-5 font-semibold text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 text-sm bg-[#111111]">
              {rooms.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-800/30 transition-colors"
                >
                  <td className="py-4 px-5 font-semibold text-white">
                    {item.roomType}
                  </td>
                  <td className="py-4 px-5">
                    <div className="flex flex-wrap gap-1.5 max-w-xs">
                      {item.amenities.map((amenity, index) => (
                        <span
                          key={index}
                          className="bg-[#111111] border border-gray-800 text-gray-300 text-[11px] px-2.5 py-1 rounded-md font-medium"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-5 text-center">
                    <span className="text-[#00F0FF] font-bold text-base bg-[#111111] px-3 py-1 rounded-lg border border-[#00F0FF]/30">
                      ${item.pricePerNight}
                    </span>
                  </td>
                  <td className="py-4 px-5 text-center">
                    <div className="flex items-center justify-center">
                      <label className="relative inline-flex items-center cursor-pointer select-none">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={item.isAvailable}
                          onChange={() => toggleAvailability(item.id)}
                        />
                        <div className="w-12 h-7 bg-[#111111] border border-gray-700 rounded-full peer peer-checked:bg-[#00F0FF] peer-checked:border-[#00F0FF] transition-all duration-200"></div>
                        <span className="absolute left-1 top-1 w-5 h-5 bg-white peer-checked:bg-black rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5 shadow-md"></span>
                      </label>
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
