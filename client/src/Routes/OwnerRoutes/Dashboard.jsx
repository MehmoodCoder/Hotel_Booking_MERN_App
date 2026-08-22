import React from "react";
import Title from "../../components/Title";

const Dashboard = () => {
  return (
    <div className="p-6 md:p-10 bg-[#121212] min-h-screen text-white">
      <Title
        align="left"
        title="Dashboard Overview"
        description="Track room availability, monitor real-time bookings, and review revenue growth all from one central panel."
      />

      <div className="flex flex-wrap gap-6 my-8">
        <div className="flex-1 min-w-[250px] bg-[#1e1e1e] border border-gray-800 p-6 rounded-2xl shadow-lg hover:border-[#00F0FF]/50 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400 font-medium">
                Total Bookings
              </p>
              <h3 className="text-3xl font-bold text-white mt-2">128</h3>
            </div>
            <div className="p-3 bg-[#262626] rounded-xl border border-gray-700">
              <img
                src="https://api.iconify.design/lucide:calendar-check.svg?color=%2300F0FF"
                alt="bookings-icon"
                className="w-6 h-6"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 min-w-[250px] bg-[#1e1e1e] border border-gray-800 p-6 rounded-2xl shadow-lg hover:border-[#00F0FF]/50 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400 font-medium">
                Total Revenue
              </p>
              <h3 className="text-3xl font-bold text-white mt-2">$24,500</h3>
            </div>
            <div className="p-3 bg-[#262626] rounded-xl border border-gray-700">
              <img
                src="https://api.iconify.design/lucide:dollar-sign.svg?color=%2300F0FF"
                alt="revenue-icon"
                className="w-6 h-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
