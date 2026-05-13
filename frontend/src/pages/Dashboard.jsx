import Sidebar from "../layout/Sidebar";

import PortfolioChart from "../charts/PortfolioChart";
import PerformanceChart from "../charts/PerformanceChart";

import {
  portfolioData,
  performanceData,
  watchlist,
} from "../data/mockData";

function Dashboard() {

  return (
    <div className="flex">

      <Sidebar />

      <div className="ml-64 p-10 w-full">

        <h1 className="text-5xl font-bold mb-10">
          Investment Dashboard
        </h1>

        <div className="grid grid-cols-4 gap-6 mb-10">

          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6 rounded-3xl shadow-2xl">
            <h2 className="text-lg">Portfolio Value</h2>

            <p className="text-4xl font-bold mt-4">
              $224,500
            </p>
          </div>

          <div className="bg-slate-900/50 rounded-3xl p-6 backdrop-blur-xl border border-white/10">
            <h2 className="text-lg">Monthly Return</h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              +12.4%
            </p>
          </div>

          <div className="bg-slate-900/50 rounded-3xl p-6 backdrop-blur-xl border border-white/10">
            <h2 className="text-lg">Risk Score</h2>

            <p className="text-4xl font-bold mt-4">
              Moderate
            </p>
          </div>

          <div className="bg-slate-900/50 rounded-3xl p-6 backdrop-blur-xl border border-white/10">
            <h2 className="text-lg">AI Confidence</h2>

            <p className="text-4xl font-bold mt-4">
              92%
            </p>
          </div>

        </div>

        <div className="grid grid-cols-2 gap-8 mb-10">

          <PortfolioChart data={portfolioData} />

          <PerformanceChart data={performanceData} />

        </div>

        <div className="bg-slate-900/50 rounded-3xl p-6 backdrop-blur-xl border border-white/10">

          <h2 className="text-2xl font-bold mb-6">
            Market Watchlist
          </h2>

          <div className="space-y-4">

            {watchlist.map((stock, index) => (

              <div
                key={index}
                className="flex justify-between bg-slate-800/50 p-4 rounded-2xl"
              >
                <span>{stock.symbol}</span>

                <span className="text-cyan-400">
                  ${stock.price}
                </span>
              </div>

            ))}

          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;