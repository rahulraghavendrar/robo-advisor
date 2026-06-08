import {
  useEffect,
  useState,
} from "react";

import Sidebar from "../../layout/Sidebar";

import AnimatedBackground from "../../components/ui/AnimatedBackground";

import PortfolioTable from "../../components/portfolio/PortfolioTable";

import AddStockForm from "../../components/portfolio/AddStockForm";

import {
  getValuation,
  deleteStock,
} from "../../services/portfolioApi";

function PortfolioPage() {

  const [portfolio, setPortfolio] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetchPortfolio();

  }, []);

  const fetchPortfolio = async () => {

    try {

      const response =
        await getValuation();

      setPortfolio(
        response.data
      );

    }

    catch (error) {

      console.log(error);

    }

    finally {

      setLoading(false);

    }
  };

  const handleDelete = async (id) => {

    try {

      await deleteStock(id);

      await fetchPortfolio();

    }

    catch (error) {

      console.log(error);

      alert(
        "Failed to delete stock"
      );
    }
  };

  if (loading) {

    return (

      <div className="h-screen flex items-center justify-center bg-[#020617] text-white">

        Loading Portfolio...

      </div>

    );
  }

  return (

    <div className="min-h-screen bg-[#020617] text-white">

      <AnimatedBackground />

      <Sidebar />

      <div className="ml-72 p-10 relative z-10">

        <h1 className="text-6xl font-black mb-10">

          Portfolio Holdings

        </h1>

        {/* SUMMARY CARDS */}

        <div className="grid grid-cols-3 gap-6 mb-10">

          <div className="bg-slate-900/50 rounded-3xl p-8 border border-white/10">

            <h2 className="text-lg opacity-80">

              Invested Value

            </h2>

            <p className="text-4xl font-bold mt-3">

              $

              {portfolio.total_invested}

            </p>

          </div>

          <div className="bg-slate-900/50 rounded-3xl p-8 border border-white/10">

            <h2 className="text-lg opacity-80">

              Current Value

            </h2>

            <p className="text-4xl font-bold mt-3 text-cyan-400">

              $

              {portfolio.current_value}

            </p>

          </div>

          <div className="bg-slate-900/50 rounded-3xl p-8 border border-white/10">

            <h2 className="text-lg opacity-80">

              Profit / Loss

            </h2>

            <p
              className={`text-4xl font-bold mt-3 ${
                portfolio.profit_loss >= 0
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >

              $

              {portfolio.profit_loss}

            </p>

          </div>

        </div>

        {/* ADD STOCK */}

        <AddStockForm
          onStockAdded={
            fetchPortfolio
          }
        />

        {/* PORTFOLIO TABLE */}

        <PortfolioTable

          holdings={
            portfolio.holdings
          }

          onDelete={
            handleDelete
          }

        />

      </div>

    </div>
  );
}

export default PortfolioPage;