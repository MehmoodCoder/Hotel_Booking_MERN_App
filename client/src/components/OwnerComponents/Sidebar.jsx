import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const sidebarLinks = [
    {
      name: "Dashboard",
      path: "/owner",
      icon: "https://api.iconify.design/lucide:layout-dashboard.svg?color=%2300F0FF",
    },
    {
      name: "Add Room",
      path: "/owner/add-room",
      icon: "https://api.iconify.design/lucide:plus-square.svg?color=%2300F0FF",
    },
    {
      name: "List Room",
      path: "/owner/list-room",
      icon: "https://api.iconify.design/lucide:list.svg?color=%2300F0FF",
    },
  ];

  return (
    <aside className="md:w-64 w-20 border-r border-gray-800/80 min-h-screen p-4 flex flex-col bg-[#121212] select-none">
      <div className="flex flex-col gap-2.5 mt-2">
        {sidebarLinks.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            end="/owner"
            className={({ isActive }) =>
              `group relative flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                isActive
                  ? "bg-gradient-to-r from-[#00F0FF] to-[#00B8FF] text-black font-bold shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                  : "text-gray-400 hover:bg-[#1e1e1e] hover:text-white"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <img
                  src={item.icon}
                  alt={item.name}
                  className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110 ${
                    isActive
                      ? "brightness-0"
                      : "opacity-70 group-hover:opacity-100"
                  }`}
                />
                <span className="hidden md:block text-xs tracking-wide">
                  {item.name}
                </span>
                {isActive && (
                  <span className="hidden md:block absolute right-2 w-1.5 h-1.5 rounded-full bg-black" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
