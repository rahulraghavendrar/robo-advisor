const news = [
  {
    title:"NVIDIA hits all-time high amid AI boom",
  },
  {
    title:"Bitcoin surges past institutional expectations",
  },
  {
    title:"Federal Reserve hints at future rate cuts",
  },
];

function MarketNews() {

  return (
    <div className="bg-slate-900/50 rounded-3xl p-6 border border-white/10 backdrop-blur-xl">

      <h2 className="text-2xl font-bold mb-6">
        Market News
      </h2>

      <div className="space-y-4">

        {news.map((item,index)=>(

          <div
            key={index}
            className="bg-slate-800/50 rounded-2xl p-4 hover:bg-slate-700/50 transition"
          >
            {item.title}
          </div>

        ))}

      </div>
    </div>
  );
}

export default MarketNews;