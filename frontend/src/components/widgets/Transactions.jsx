const transactions = [
  {
    stock:"AAPL",
    amount:"+$1200",
  },
  {
    stock:"TSLA",
    amount:"-$400",
  },
  {
    stock:"NVDA",
    amount:"+$2200",
  },
];

function Transactions() {

  return (
    <div className="bg-slate-900/50 rounded-3xl p-6 border border-white/10 backdrop-blur-xl">

      <h2 className="text-2xl font-bold mb-6">
        Recent Transactions
      </h2>

      <div className="space-y-4">

        {transactions.map((item,index)=>(

          <div
            key={index}
            className="flex justify-between bg-slate-800/50 p-4 rounded-2xl"
          >
            <span>{item.stock}</span>

            <span className="text-cyan-400">
              {item.amount}
            </span>
          </div>

        ))}

      </div>
    </div>
  );
}

export default Transactions;