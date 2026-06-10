import Sidebar from "../../layout/Sidebar";

import AnimatedBackground from "../../components/ui/AnimatedBackground";

import AnalyticsStat from "../../components/analytics/AnalyticsStat";

import PortfolioChart from "../../charts/PortfolioChart";

import PerformanceChart from "../../charts/PerformanceChart";

import HoldingsBreakdown from "../../components/analytics/HoldingsBreakdown";

import {

  allocationData,

  performanceData,

} from "../../data/analyticsData";

function AnalyticsPage() {

  return (

    <div className="min-h-screen bg-[#020617] text-white">

      <AnimatedBackground />

      <Sidebar />

      <div className="ml-72 p-10 relative z-10">

        <h1 className="text-6xl font-black mb-10">

          Portfolio Analytics

        </h1>

        {/* STATS */}

        <div className="grid grid-cols-3 gap-8 mb-10">

          <AnalyticsStat
            title="Annual Return"
            value="+18.2%"
            color="bg-green-500/10"
          />

          <AnalyticsStat
            title="Sharpe Ratio"
            value="1.92"
            color="bg-cyan-500/10"
          />

          <AnalyticsStat
            title="Volatility"
            value="12%"
            color="bg-purple-500/10"
          />

        </div>

        {/* CHARTS */}

        <div className="grid grid-cols-2 gap-8 mb-10">

          <PortfolioChart
            data={allocationData}
          />

          <PerformanceChart
            data={performanceData}
          />

        </div>

        {/* HOLDINGS */}

        <HoldingsBreakdown />

      </div>

    </div>
  );
}

export default AnalyticsPage;