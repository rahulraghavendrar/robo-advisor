import Sidebar from "../../layout/Sidebar";

import AnimatedBackground from "../../components/ui/AnimatedBackground";

import HoldingCard from "../../components/portfolio/HoldingCard";

function PortfolioPage() {

  const holdings = [
    {
      symbol:"AAPL",
      company:"Apple Inc.",
      shares:120,
      value:"52,000",
      growth:"+12%",
    },

    {
      symbol:"NVDA",
      company:"NVIDIA Corp.",
      shares:45,
      value:"91,000",
      growth:"+24%",
    },

    {
      symbol:"TSLA",
      company:"Tesla Inc.",
      shares:60,
      value:"38,000",
      growth:"-3%",
    },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white">

      <AnimatedBackground />

      <Sidebar />

      <div className="ml-72 p-10 relative z-10">

        <h1 className="text-6xl font-black mb-10">
          Portfolio Holdings
        </h1>

        <div className="grid grid-cols-3 gap-8">

          {holdings.map((item,index)=>(

            <HoldingCard
              key={index}
              {...item}
            />

          ))}

        </div>

      </div>

    </div>
  );
}

export default PortfolioPage;