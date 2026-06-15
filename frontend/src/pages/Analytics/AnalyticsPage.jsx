import {
  useEffect,
  useState,
} from "react";

import Sidebar from "../../layout/Sidebar";

import AnimatedBackground from "../../components/ui/AnimatedBackground";

import AnalyticsStat from "../../components/analytics/AnalyticsStat";

import PortfolioChart from "../../charts/PortfolioChart";

import AllocationTable from "../../components/analytics/AllocationTable";

import PortfolioHealthCard from "../../components/analytics/PortfolioHealthCard";

import {
  getAnalytics,
} from "../../services/portfolioApi";

function AnalyticsPage() {

  const [analytics,setAnalytics] =
    useState(null);

  const [loading,setLoading] =
    useState(true);

  useEffect(()=>{

    fetchAnalytics();

  },[]);

  const fetchAnalytics = async() => {

    try{

      const response =
        await getAnalytics();

      setAnalytics(
        response.data
      );
    }

    catch(error){

      console.log(error);
    }

    finally{

      setLoading(false);
    }
  };

  if(loading){

    return (

      <div className="h-screen flex items-center justify-center bg-[#020617] text-white">

        Loading Analytics...

      </div>
    );
  }

  return (

    <div className="min-h-screen bg-[#020617] text-white">

      <AnimatedBackground />

      <Sidebar />

      <div className="ml-72 p-10 relative z-10">

        <h1 className="text-6xl font-black mb-10">

          Portfolio Analytics

        </h1>

        <div className="grid grid-cols-3 gap-8 mb-10">

          <AnalyticsStat
            title="Positions"
            value={analytics.total_positions}
            color="bg-cyan-500/10"
          />

          <AnalyticsStat
            title="Largest Holding"
            value={analytics.largest_holding}
            color="bg-green-500/10"
          />

          <AnalyticsStat
            title="Largest %"
            value={`${analytics.largest_percentage}%`}
            color="bg-purple-500/10"
          />

        </div>

        <div className="grid grid-cols-2 gap-8 mb-10">

          <PortfolioChart
            data={analytics.allocation}
          />

          <PortfolioHealthCard

            health={
              analytics.health
            }

            diversification={
              analytics.diversification_score
            }

          />

        </div>

        <AllocationTable

          allocation={
            analytics.allocation
          }

        />

      </div>

    </div>
  );
}

export default AnalyticsPage;