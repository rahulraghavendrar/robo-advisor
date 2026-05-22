import { motion } from "framer-motion";

import Sidebar from "../layout/Sidebar";

import PortfolioChart from "../charts/PortfolioChart";
import PerformanceChart from "../charts/PerformanceChart";

import AnimatedBackground from "../components/ui/AnimatedBackground";

import {
  portfolioData,
  performanceData,
  watchlist,
} from "../data/mockData";

function Dashboard() {

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-x-hidden">

      <AnimatedBackground />

      <Sidebar />

      {/* Main Content */}
      <motion.div
        initial={{ opacity:0, y:20 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:1 }}

        className="ml-72 p-10 relative z-10"
      >

        <h1 className="text-6xl font-black mb-10">
          Investment Dashboard
        </h1>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-6 mb-10">

          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-8 rounded-3xl shadow-2xl hover:scale-105 transition duration-300">

            <h2 className="text-lg opacity-80">
              Portfolio Value
            </h2>

            <p className="text-5xl font-black mt-4">
              $224,500
            </p>

          </div>

          <div className="bg-slate-900/50 rounded-3xl p-8 backdrop-blur-xl border border-white/10">

            <h2 className="text-lg opacity-80">
              Monthly Return
            </h2>

            <p className="text-5xl font-black mt-4 text-green-400">
              +12.4%
            </p>

          </div>

          <div className="bg-slate-900/50 rounded-3xl p-8 backdrop-blur-xl border border-white/10">

            <h2 className="text-lg opacity-80">
              Risk Score
            </h2>

            <p className="text-5xl font-black mt-4">
              Moderate
            </p>

          </div>

          <div className="bg-slate-900/50 rounded-3xl p-8 backdrop-blur-xl border border-white/10">

            <h2 className="text-lg opacity-80">
              AI Confidence
            </h2>

            <p className="text-5xl font-black mt-4">
              92%
            </p>

          </div>

        </div>

        {/* Charts */}
        <div className="grid grid-cols-2 gap-8 mb-10">

          <PortfolioChart data={portfolioData} />

          <PerformanceChart data={performanceData} />

        </div>

        {/* Watchlist */}
        <div className="bg-slate-900/50 rounded-3xl p-8 backdrop-blur-xl border border-white/10">

          <h2 className="text-3xl font-bold mb-6">
            Market Watchlist
          </h2>

          <div className="space-y-4">

            {watchlist.map((stock,index)=>(

              <div
                key={index}
                className="flex justify-between bg-slate-800/50 p-5 rounded-2xl hover:bg-slate-700/50 transition"
              >

                <span className="text-lg">
                  {stock.symbol}
                </span>

                <span className="text-cyan-400 text-lg">
                  ${stock.price}
                </span>

              </div>

            ))}

          </div>

        </div>

      </motion.div>

    </div>
  );
}

export default Dashboard;