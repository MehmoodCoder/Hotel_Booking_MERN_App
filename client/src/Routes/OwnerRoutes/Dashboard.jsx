import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import { useAppContext } from "../../context/AppContext";

const Dashboard = () => {
  const { currency = "$", user, getToken, axios } = useAppContext();
  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState({
    totalBookings: 0,
    totalRevenue: 0,
    bookings: [],
  });

  const fetchDashboardData = async () => {
    try {
      const token = await getToken();
      const { data } = await axios.get("/api/bookings/hotel", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (data.success) {
        setDashboardData(data.dashboardData);
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchDashboardData();
    }
  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#00F0FF]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white p-3 sm:p-6">
      <Title
        align="left"
        title="Dashboard"
        description="Monitor your room listings, track bookings and analyze revenue—all in one place."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
        <div className="bg-[#111111]/80 backdrop-blur-md border border-gray-800 p-5 sm:p-6 rounded-2xl shadow-xl hover:border-gray-700 transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                Total Bookings
              </p>
              <h3 className="text-3xl font-extrabold text-white mt-2">
                {dashboardData.totalBookings}
              </h3>
            </div>
            <div className="p-3 bg-transparent rounded-xl border border-[#00F0FF]/20">
              <img
                src="https://api.iconify.design/lucide:calendar-check.svg?color=%2300F0FF"
                alt="bookings"
                className="w-6 h-6"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#111111]/80 backdrop-blur-md border border-gray-800 p-5 sm:p-6 rounded-2xl shadow-xl hover:border-gray-700 transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                Total Revenue
              </p>
              <h3 className="text-3xl font-extrabold text-[#00F0FF] mt-2">
                {currency}
                {dashboardData.totalRevenue}
              </h3>
            </div>
            <div className="p-3 bg-transparent rounded-xl border border-[#00F0FF]/20">
              <img
                src="https://api.iconify.design/lucide:dollar-sign.svg?color=%2300F0FF"
                alt="revenue"
                className="w-6 h-6"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#111111] border border-gray-800 rounded-2xl p-4 sm:p-6 shadow-xl">
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-gray-800">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-wide">
              Recent Bookings
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">
              Latest transactions and reservation activities
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:hidden">
          {dashboardData.bookings.map((item, index) => (
            <div
              key={item._id || index}
              className="bg-[#141414] border border-gray-800 rounded-xl p-4 flex flex-col gap-3"
            >
              <div className="flex justify-between items-center border-b border-gray-800/80 pb-2">
                <span className="font-semibold text-white text-base">
                  {item.user?.name || item.user?.email || "Guest"}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-[11px] font-semibold border ${
                    item.isPaid
                      ? "text-emerald-400 border-emerald-500/30 bg-transparent"
                      : "text-red-400 border-red-500/30 bg-transparent"
                  }`}
                >
                  {item.isPaid ? "Completed" : "Pending"}
                </span>
              </div>

              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400 font-medium">Room</span>
                <span className="text-gray-200">
                  {item.room?.roomType || item.room?.roomName || "N/A"}
                </span>
              </div>

              <div className="flex justify-between items-center text-sm pt-2 border-t border-gray-800/80">
                <span className="text-gray-400 font-medium">Total Amount</span>
                <span className="text-[#00F0FF] font-bold text-base">
                  {currency}
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:block overflow-x-auto rounded-xl border border-gray-800/50">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#181818] border-b border-gray-800 text-gray-400 text-xs uppercase tracking-wider">
                <th className="py-4 px-5 font-semibold">User Name</th>
                <th className="py-4 px-5 font-semibold">Room Name</th>
                <th className="py-4 px-5 font-semibold text-center">
                  Total Amount
                </th>
                <th className="py-4 px-5 font-semibold text-center">
                  Payment Status
                </th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-800/60">
              {dashboardData.bookings.map((item, index) => (
                <tr
                  key={item._id || index}
                  className="hover:bg-[#252525]/50 transition-colors group"
                >
                  <td className="py-4 px-5 font-semibold text-white group-hover:text-[#00F0FF] transition-colors">
                    {item.user?.name || item.user?.email || "Guest"}
                  </td>
                  <td className="py-4 px-5 text-gray-300">
                    {item.room?.roomType || item.room?.roomName || "N/A"}
                  </td>
                  <td className="py-4 px-5 text-center font-bold text-[#00F0FF]">
                    {currency}
                    {item.price}
                  </td>
                  <td className="py-4 px-5 text-center">
                    <span
                      className={`inline-block px-3.5 py-1 rounded-full text-xs font-semibold border ${
                        item.isPaid
                          ? "text-emerald-400 border-emerald-500/30 bg-transparent"
                          : "text-red-400 border-red-500/30 bg-transparent"
                      }`}
                    >
                      {item.isPaid ? "Completed" : "Pending"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
