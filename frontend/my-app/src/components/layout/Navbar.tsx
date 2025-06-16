import React from "react";
import { NavLink } from "react-router-dom";
import { Home, PlusCircle, List, FileText, Layers } from "lucide-react";

const navItems = [
  { to: "/", label: "Home", icon: <Home size={18} /> },
  { to: "/questions", label: "All Questions", icon: <List size={18} /> },
  {
    to: "/add",
    label: "Add Question",
    icon: <PlusCircle size={18} />,
  },
  { to: "/create-quiz", label: "Create Quiz", icon: <FileText size={18} /> },
  { to: "/quizzes", label: "All Quizzes", icon: <Layers size={18} /> },
];

const Navbar: React.FC = () => {
  return (
    <nav className="hidden md:flex flex-col w-64 bg-white shadow-md p-4">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium ${
              isActive
                ? "bg-blue-100 text-blue-700"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          {item.icon}
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
