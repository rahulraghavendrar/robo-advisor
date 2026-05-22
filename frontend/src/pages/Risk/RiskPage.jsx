import Sidebar from "../../layout/Sidebar";

import AnimatedBackground from "../../components/ui/AnimatedBackground";

import RiskCard from "../../components/risk/RiskCard";

function RiskPage() {

  return (
    <div className="min-h-screen bg-[#020617] text-white">

      <AnimatedBackground />

      <Sidebar />

      <div className="ml-72 p-10 relative z-10">

        <h1 className="text-6xl font-black mb-10">
          AI Risk Analysis
        </h1>

        <div className="space-y-8">

          <RiskCard
            title="Portfolio Diversification"
            level="Medium"
            description="Your portfolio is moderately diversified across equities, crypto, and fixed-income assets."
          />

          <RiskCard
            title="Market Volatility"
            level="High"
            description="Technology holdings may experience increased volatility due to market uncertainty."
          />

          <RiskCard
            title="AI Recommendation"
            level="Optimal"
            description="Consider increasing bond allocation by 5% to reduce downside exposure."
          />

        </div>

      </div>

    </div>
  );
}

export default RiskPage;