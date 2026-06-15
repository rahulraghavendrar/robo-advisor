function AllocationTable({

  allocation

}) {

  return (

    <div className="bg-slate-900/50 border border-white/10 rounded-3xl p-6">

      <h2 className="text-3xl font-bold mb-6">

        Portfolio Allocation

      </h2>

      <div className="space-y-4">

        {allocation.map((item,index)=>(

          <div

            key={index}

            className="flex justify-between bg-slate-800/50 p-4 rounded-2xl"
          >

            <span>

              {item.symbol}

            </span>

            <span className="text-cyan-400">

              {item.percentage}%

            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default AllocationTable;