import {
  LayoutDashboard,
  PieChart,
  ShieldCheck,
  Wallet,
  LineChart,
} from "lucide-react";

function Sidebar() {

  return (
    <div className="w-64 h-screen fixed bg-slate-900/60 backdrop-blur-xl border-r border-white/10 p-6">

      <h1 className="text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        RoboVest
      </h1>

      <div className="space-y-8 text-lg">

        <div className="flex items-center gap-4 hover:text-cyan-400 transition cursor-pointer">
          <LayoutDashboard />
          Dashboard
        </div>

        <div className="flex items-center gap-4 hover:text-cyan-400 transition cursor-pointer">
          <PieChart />
          Portfolio
        </div>

        <div className="flex items-center gap-4 hover:text-cyan-400 transition cursor-pointer">
          <ShieldCheck />
          Risk Analysis
        </div>

        <div className="flex items-center gap-4 hover:text-cyan-400 transition cursor-pointer">
          <Wallet />
          Assets
        </div>

        <div className="flex items-center gap-4 hover:text-cyan-400 transition cursor-pointer">
          <LineChart />
          Market
        </div>

      </div>
    </div>
  );
}

export default Sidebar;