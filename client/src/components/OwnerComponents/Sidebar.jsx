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
    <aside className="md:w-64 w-16 border-r border-gray-800 min-h-screen pt-4 flex flex-col bg-[#1e1e1e]">
      <div className="flex flex-col gap-1">
        {sidebarLinks.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            end={item.path === "/owner"}
            className={({ isActive }) =>
              `relative flex items-center gap-3.5 px-6 py-3.5 transition-all duration-200 ${
                isActive
                  ? "bg-[#00F0FF]/10 text-[#00F0FF] font-semibold border-r-4 border-[#00F0FF]"
                  : "text-gray-400 hover:bg-gray-800/40 hover:text-gray-200"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <img
                  src={item.icon}
                  alt={item.name}
                  className={`w-5 h-5 transition-opacity ${
                    isActive ? "opacity-100" : "opacity-40 grayscale"
                  }`}
                />
                <span className="hidden md:block text-sm tracking-wide">
                  {item.name}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
