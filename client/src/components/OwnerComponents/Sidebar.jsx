import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const sidebarLinks = [
        { 
            name: "Dashboard", 
            path: "/owner", 
            icon: "https://api.iconify.design/lucide:layout-dashboard.svg?color=%239ca3af" 
        },
        { 
            name: "Add Room", 
            path: "/owner/add-room", 
            icon: "https://api.iconify.design/lucide:plus-square.svg?color=%239ca3af" 
        },
        { 
            name: "List Room", 
            path: "/owner/list-room", 
            icon: "https://api.iconify.design/lucide:list.svg?color=%239ca3af" 
        },
    ];

    return (
        <div className='md:w-64 w-16 border-r border-gray-700 h-screen pt-4 flex flex-col bg-[#1e1e1e]'>
            {sidebarLinks.map((item, index) => (
                <NavLink
                    key={index}
                    to={item.path}
                    end='/owner'
                    className={({ isActive }) =>
                        `flex items-center gap-3 p-3 px-4 transition-all duration-300 ${
                            isActive 
                            ? 'bg-[#00F0FF] text-black font-bold' 
                            : 'text-gray-400 hover:bg-[#262626] hover:text-white'
                        }`
                    }
                >
                    <img src={item.icon} alt={item.name} className='w-5 h-5' />
                    <span className='hidden md:block text-sm'>{item.name}</span>
                </NavLink>
            ))}
        </div>
    );
};

export default Sidebar;