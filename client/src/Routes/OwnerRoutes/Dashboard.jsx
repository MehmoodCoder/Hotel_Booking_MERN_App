import React from "react";
import Title from "../../components/Title";

const dashboardData = {
  totalBookings: 3,
  totalRevenue: 897,
  bookings: [
    {
      user: { name: "Great Stack" },
      roomName: "Double Bed",
      totalAmount: 299,
      isPaid: true,
    },
    {
      user: { name: "Great Stack" },
      roomName: "Double Bed",
      totalAmount: 399,
      isPaid: false,
    },
    {
      user: { name: "Great Stack" },
      roomName: "Single Bed",
      totalAmount: 199,
      isPaid: false,
    },
  ],
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <Title
        title="Dashboard"
        description="Monitor your room listings, track bookings and analyze revenue—all in one place. Stay updated with real-time insights to ensure smooth operations."
      />

      <div className="flex flex-wrap gap-6 my-8">
        <div className="flex-1 min-w-[250px] bg-[#1e1e1e] border border-gray-800 p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400 font-medium">
                Total Bookings
              </p>
              <h3 className="text-3xl font-bold text-white mt-2">
                {dashboardData.totalBookings}
              </h3>
            </div>
            <div className="p-3 bg-[#262626] rounded-xl border border-gray-700">
              <img
                src="https://api.iconify.design/lucide:calendar-check.svg?color=%2300F0FF"
                alt="bookings"
                className="w-6 h-6"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 min-w-[250px] bg-[#1e1e1e] border border-gray-800 p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400 font-medium">
                Total Revenue
              </p>
              <h3 className="text-3xl font-bold text-white mt-2">
                ${dashboardData.totalRevenue}
              </h3>
            </div>
            <div className="p-3 bg-[#262626] rounded-xl border border-gray-700">
              <img
                src="https://api.iconify.design/lucide:dollar-sign.svg?color=%2300F0FF"
                alt="revenue"
                className="w-6 h-6"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1e1e1e] border border-gray-800 rounded-2xl p-6 shadow-xl overflow-hidden">
        <h2 className="text-lg font-semibold mb-4 text-white">
          Recent Bookings
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-800 text-gray-400 text-xs uppercase tracking-wider">
                <th className="py-3 px-4 font-medium">User Name</th>
                <th className="py-3 px-4 font-medium max-sm:hidden">
                  Room Name
                </th>
                <th className="py-3 px-4 font-medium text-center">
                  Total Amount
                </th>
                <th className="py-3 px-4 font-medium text-center">
                  Payment Status
                </th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-800/60">
              {dashboardData.bookings.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-[#262626]/50 transition-colors"
                >
                  <td className="py-4 px-4 font-medium text-white">
                    {item.user.name}
                  </td>
                  <td className="py-4 px-4 text-gray-300 max-sm:hidden">
                    {item.roomName}
                  </td>
                  <td className="py-4 px-4 text-center font-semibold text-white">
                    ${item.totalAmount}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span
                      className={`inline-block px-4 py-1 rounded-full text-xs font-semibold bg-transparent border ${
                        item.isPaid
                          ? "text-emerald-400 border-emerald-500"
                          : "text-red-500 border-red-500"
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
