import {
  LayoutDashboard,
  PieChart,
  ShieldCheck,
  Wallet,
  LineChart,
  Settings,
  LogOut,
} from "lucide-react";

import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  useContext,
} from "react";

import {
  AuthContext,
} from "../context/AuthContext";

function Sidebar() {

  const location = useLocation();

  const navigate = useNavigate();

  const { logout } = useContext(
    AuthContext
  );

  const handleLogout = () => {

    logout();

    navigate("/login");
  };

  const menuItems = [

    {
      name:"Dashboard",
      icon:<LayoutDashboard size={22} />,
      path:"/dashboard",
    },

    {
      name:"Portfolio",
      icon:<PieChart size={22} />,
      path:"/portfolio",
    },

    {
      name:"Analytics",
      icon:<LineChart size={22} />,
      path:"/analytics",
    },

    {
      name:"Risk Analysis",
      icon:<ShieldCheck size={22} />,
      path:"/risk",
    },

    {
      name:"Assets",
      icon:<Wallet size={22} />,
      path:"/portfolio",
    },

    {
      name:"Settings",
      icon:<Settings size={22} />,
      path:"/settings",
    },
  ];

  return (

    <div className="fixed left-0 top-0 z-50 w-72 h-screen bg-slate-950/80 backdrop-blur-2xl border-r border-white/10 p-6 flex flex-col justify-between">

      <div>

        {/* Logo */}
        <Link to="/">

          <h1 className="text-4xl font-black mb-14 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer">

            RoboVest

          </h1>

        </Link>

        {/* Navigation */}
        <div className="space-y-3">

          {menuItems.map((item,index)=>(

            <Link
              key={index}
              to={item.path}
            >

              <div
                className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 cursor-pointer

                ${
                  location.pathname === item.path
                  ? "bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 shadow-lg shadow-cyan-500/10"
                  : "hover:bg-white/5 hover:text-cyan-400"
                }
                `}
              >

                {item.icon}

                <span className="text-lg font-medium">

                  {item.name}

                </span>

              </div>

            </Link>

          ))}

        </div>

      </div>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-red-500/10 hover:text-red-400 transition"
      >

        <LogOut size={22} />

        Logout

      </button>

    </div>
  );
}

export default Sidebar;