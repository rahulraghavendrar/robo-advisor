import {
  useEffect,
  useState,
} from "react";

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

import {
  getDashboardData
} from "../services/portfolioApi";

function Dashboard() {

  const [dashboardData,setDashboardData] =
    useState(null);

  const [loading,setLoading] =
    useState(true);

  const [error,setError] =
    useState("");

  useEffect(()=>{

    fetchDashboard();

  },[]);

  const fetchDashboard = async() => {

    try {

      const response =
        await getDashboardData();

      setDashboardData(
        response.data
      );

    }

    catch(error){

      setError(
        "Unable to load dashboard"
      );
    }

    finally{

      setLoading(false);
    }
  };

  if(loading){

    return (

      <div className="h-screen flex items-center justify-center bg-[#020617] text-white">

        <div className="text-4xl font-bold animate-pulse">

          Loading Portfolio...

        </div>

      </div>
    );
  }

  if(error){

    return (

      <div className="h-screen flex items-center justify-center bg-[#020617] text-red-400">

        {error}

      </div>
    );
  }

  return (

    <div className="min-h-screen bg-[#020617] text-white overflow-x-hidden">

      <AnimatedBackground />

      <Sidebar />

      <motion.div

        initial={{
          opacity:0,
          y:20
        }}

        animate={{
          opacity:1,
          y:0
        }}

        transition={{
          duration:1
        }}

        className="ml-72 p-10 relative z-10"
      >

        <h1 className="text-6xl font-black mb-10">

          Investment Dashboard

        </h1>

        <div className="grid grid-cols-4 gap-6 mb-10">

          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-8 rounded-3xl shadow-2xl">

            <h2 className="text-lg opacity-80">

              Portfolio Value

            </h2>

            <p className="text-5xl font-black mt-4">

              $
              {dashboardData.current?.toFixed(2)}

            </p>

          </div>

          <div className="bg-slate-900/50 rounded-3xl p-8 border border-white/10">

            <h2 className="text-lg opacity-80">

              Invested

            </h2>

            <p className="text-5xl font-black mt-4 text-cyan-400">

              $
              {dashboardData.invested?.toFixed(2)}

            </p>

          </div>

          <div className="bg-slate-900/50 rounded-3xl p-8 border border-white/10">

            <h2 className="text-lg opacity-80">

              Profit / Loss

            </h2>

            <p className="text-5xl font-black mt-4 text-green-400">

              $
              {dashboardData.profit?.toFixed(2)}

            </p>

          </div>

          <div className="bg-slate-900/50 rounded-3xl p-8 border border-white/10">

            <h2 className="text-lg opacity-80">

              Positions

            </h2>

            <p className="text-5xl font-black mt-4">

              {dashboardData.positions}

            </p>

          </div>

        </div>

        <div className="grid grid-cols-2 gap-8 mb-10">

          <PortfolioChart
            data={portfolioData}
          />

          <PerformanceChart
            data={performanceData}
          />

        </div>

        <div className="bg-slate-900/50 rounded-3xl p-8 border border-white/10">

          <h2 className="text-3xl font-bold mb-6">

            Market Watchlist

          </h2>

          <div className="space-y-4">

            {watchlist.map(
              (stock,index)=>(

                <div
                  key={index}
                  className="flex justify-between bg-slate-800/50 p-5 rounded-2xl"
                >

                  <span>
                    {stock.symbol}
                  </span>

                  <span className="text-cyan-400">

                    ${stock.price}

                  </span>

                </div>

              )
            )}

          </div>

        </div>

      </motion.div>

    </div>
  );
}

export default Dashboard;