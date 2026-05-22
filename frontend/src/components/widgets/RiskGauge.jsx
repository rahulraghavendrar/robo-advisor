function RiskGauge() {

  return (
    <div className="bg-slate-900/50 rounded-3xl p-6 border border-white/10 backdrop-blur-xl">

      <h2 className="text-2xl font-bold mb-6">
        Risk Meter
      </h2>

      <div className="w-full bg-slate-700 rounded-full h-6 overflow-hidden">

        <div className="bg-gradient-to-r from-green-400 to-yellow-400 h-6 w-[65%] rounded-full" />

      </div>

      <p className="mt-4 text-lg text-cyan-400">
        Moderate Risk Profile
      </p>
    </div>
  );
}

export default RiskGauge;