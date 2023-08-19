import React from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
        <ul className="space-y-2">
          <li><NavLink to="/" className="text-white hover:bg-gray-700 block p-2 text-sm lg:text-base">contact</NavLink></li>
          <li><NavLink to="/map" className="text-white text-sm lg:text-base hover:bg-gray-700 block p-2">Maps</NavLink></li>
          <li><NavLink to="/graph" className="text-white text-sm lg:text-base hover:bg-gray-700 block p-2">Graph</NavLink></li>
          
        </ul>
  );
}

export default Sidebar;
