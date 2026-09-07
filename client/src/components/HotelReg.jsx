import React, { useState, useEffect, useContext } from "react";
import { useAppContext } from "../context/AppContext";
import { toast } from "react-hot-toast";

const hotelRegAssets = {
  regImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
};

const HotelReg = () => {
  const { showHotelReg, setShowHotelReg, axios, getToken, setIsOwner } = useAppContext();

  const [formData, setFormData] = useState({
    hotelName: "",
    contactEmail: "",
    phone: "",
    city: "",
    address: "",
  });

  const handleClose = () => {
    setShowHotelReg(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
    };

    if (showHotelReg) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showHotelReg]);

  if (!showHotelReg) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await getToken();

      const payload = {
        name: formData.hotelName,
        contact: formData.phone,
        address: formData.address,
        city: formData.city,
      };

      const { data } = await axios.post("/api/hotels/", payload, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (data.success) {
        toast.success("Hotel registered successfully!");
        setIsOwner(true);
        handleClose();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        onClick={handleClose}
        className="fixed inset-0 bg-black/30 backdrop-blur-sm cursor-pointer transition-all duration-300"
      />

      <div className="relative z-10 flex bg-[#1e1e1e]/80 border border-gray-700/40 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl backdrop-blur-md">
        <div className="hidden md:block w-1/2 relative">
          <img
            src={hotelRegAssets.regImage}
            alt="Hotel Registration"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80" />
        </div>

        <div className="relative flex flex-col w-full md:w-1/2 p-6 sm:p-8 justify-center">
          <button
            onClick={handleClose}
            type="button"
            className="absolute top-5 right-5 p-2 rounded-full bg-gray-800/50 text-gray-300 hover:text-white hover:bg-gray-700/60 transition-all cursor-pointer border border-gray-700/40"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white">Register Your Hotel</h2>
            <p className="text-xs text-gray-400 mt-1">List your property with us and reach thousands of guests.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-1">
                Hotel Name
              </label>
              <input
                type="text"
                name="hotelName"
                value={formData.hotelName}
                onChange={handleChange}
                placeholder="Grand Luxury Resort"
                required
                className="w-full bg-[#121212]/60 border border-gray-700/50 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#00F0FF] transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-1">
                  Contact Email
                </label>
                <input
                  type="email"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  placeholder="hotel@domain.com"
                  required
                  className="w-full bg-[#121212]/60 border border-gray-700/50 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#00F0FF] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 234 567 890"
                  required
                  className="w-full bg-[#121212]/60 border border-gray-700/50 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#00F0FF] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-1">
                City / Location
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Los Angeles, CA"
                required
                className="w-full bg-[#121212]/60 border border-gray-700/50 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#00F0FF] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-1">
                Full Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="123 Sunset Blvd, Suite 100"
                required
                className="w-full bg-[#121212]/60 border border-gray-700/50 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#00F0FF] transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-3 px-4 bg-[#00F0FF] hover:bg-[#33f3ff] text-black font-bold text-xs rounded-xl transition-all shadow-[0_0_20px_rgba(0,240,255,0.2)] cursor-pointer"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HotelReg;