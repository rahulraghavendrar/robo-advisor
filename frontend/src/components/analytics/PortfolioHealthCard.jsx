function PortfolioHealthCard({

  health,

  diversification

}) {

  return (

    <div className="bg-slate-900/50 border border-white/10 rounded-3xl p-8">

      <h2 className="text-3xl font-bold mb-6">

        Portfolio Health

      </h2>

      <div className="space-y-4">

        <div>

          <p className="text-gray-400">

            Health Status

          </p>

          <p className="text-3xl font-bold text-green-400">

            {health}

          </p>

        </div>

        <div>

          <p className="text-gray-400">

            Diversification Score

          </p>

          <p className="text-3xl font-bold text-cyan-400">

            {diversification}/100

          </p>

        </div>

      </div>

    </div>
  );
}

export default PortfolioHealthCard;