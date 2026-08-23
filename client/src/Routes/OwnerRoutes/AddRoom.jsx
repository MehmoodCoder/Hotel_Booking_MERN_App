import React, { useState } from "react";
import Title from "../../components/Title";

function AddRoom() {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const [inputs, setInputs] = useState({
    roomType: "",
    pricePerNight: 0,
    amenities: {
      "Free Wi-Fi": false,
      "Air Conditioning": false,
      TV: false,
      "Free Room Service": false,
      "Mountain View": false,
      "Free Breakfast": false,
      "Pool Access": false,
    },
  });

  const uploadPlaceholder =
    "https://api.iconify.design/lucide:upload-cloud.svg?color=%2300F0FF";

  return (
    <form className="min-h-screen bg-[#111111] text-white p-6 md:p-10">
      <Title
        align="left"
        title="Add Room"
        description="Add a new room to your hotel listing. Fill in the details below, upload images, and set the amenities to attract potential guests."
      />

      <div className="mt-8">
        <p className="text-gray-300 font-medium text-sm mb-3">Upload Images</p>
        <div className="grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap">
          {Object.keys(images).map((key) => (
            <label
              htmlFor={`roomImage${key}`}
              key={key}
              className="w-28 h-28 border-2 border-dashed border-gray-800 hover:border-[#00F0FF] bg-[#111111] rounded-xl flex flex-col items-center justify-center cursor-pointer transition-all overflow-hidden group shadow-md"
            >
              {images[key] ? (
                <img
                  className="w-full h-full object-cover"
                  src={URL.createObjectURL(images[key])}
                  alt={`Room ${key}`}
                />
              ) : (
                <div className="flex flex-col items-center gap-1">
                  <img
                    src={uploadPlaceholder}
                    alt="Upload"
                    className="w-8 h-8 opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                  <span className="text-[10px] text-gray-500 group-hover:text-gray-300">
                    Image {key}
                  </span>
                </div>
              )}
              <input
                required
                type="file"
                accept="image/*"
                id={`roomImage${key}`}
                hidden
                onChange={(e) =>
                  setImages({ ...images, [key]: e.target.files[0] })
                }
              />
            </label>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-col md:flex-row gap-6 max-w-2xl">
        <div className="flex-1 flex flex-col gap-2">
          <label className="text-gray-300 font-medium text-sm">Room Type</label>
          <select
            required
            value={inputs.roomType}
            onChange={(e) => setInputs({ ...inputs, roomType: e.target.value })}
            className="bg-[#111111] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00F0FF] transition-all cursor-pointer"
          >
            <option value="" disabled className="bg-[#111111] text-gray-500">
              Select Room Type
            </option>
            <option value="Single Bed" className="bg-[#111111] text-white">
              Single Bed
            </option>
            <option value="Double Bed" className="bg-[#111111] text-white">
              Double Bed
            </option>
            <option value="Luxury Suite" className="bg-[#111111] text-white">
              Luxury Suite
            </option>
            <option value="Family Room" className="bg-[#111111] text-white">
              Family Room
            </option>
          </select>
        </div>

        <div className="flex-1 flex flex-col gap-2">
          <label className="text-gray-300 font-medium text-sm">
            Price Per Night ($)
          </label>
          <input
            type="number"
            min="0"
            value={inputs.pricePerNight}
            onChange={(e) =>
              setInputs({ ...inputs, pricePerNight: Number(e.target.value) })
            }
            required
            placeholder="e.g. 150"
            className="bg-[#111111] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00F0FF] transition-all"
          />
        </div>
      </div>

      <div className="mt-8">
        <p className="text-gray-300 font-medium text-sm mb-3">Amenities</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl">
          {Object.keys(inputs.amenities).map((amenity, index) => (
            <label
              key={index}
              htmlFor={`amenities${index + 1}`}
              className="flex items-center gap-3 bg-[#111111] border border-gray-800 p-3 rounded-xl hover:border-gray-700 cursor-pointer select-none transition-all group"
            >
              <div className="relative flex items-center justify-center">
                <input
                  type="checkbox"
                  id={`amenities${index + 1}`}
                  checked={inputs.amenities[amenity]}
                  onChange={() =>
                    setInputs({
                      ...inputs,
                      amenities: {
                        ...inputs.amenities,
                        [amenity]: !inputs.amenities[amenity],
                      },
                    })
                  }
                  className="sr-only peer"
                />

                <div className="w-5 h-5 bg-[#111111] border border-gray-700 rounded-md peer-checked:bg-[#00F0FF] peer-checked:border-[#00F0FF] transition-all duration-200 flex items-center justify-center peer-focus:ring-2 peer-focus:ring-[#00F0FF]/30 group-hover:border-gray-500">
                  <svg
                    className={`w-3.5 h-3.5 text-black font-bold transition-opacity duration-200 ${
                      inputs.amenities[amenity] ? "opacity-100" : "opacity-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="3.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>

              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                {amenity}
              </span>
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="bg-[#00F0FF] text-black font-semibold px-8 py-3 rounded-xl mt-8 cursor-pointer hover:bg-cyan-300 transition-all shadow-lg shadow-[#00F0FF]/10 active:scale-95"
      >
        Add Room
      </button>
    </form>
  );
}

export default AddRoom;
