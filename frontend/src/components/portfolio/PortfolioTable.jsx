import { motion } from "framer-motion";

function PortfolioTable({

  holdings,

  onDelete,

  onEdit

}) {

  return (

    <div className="bg-slate-900/50 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

      <h2 className="text-3xl font-bold mb-6">

        Portfolio Positions

      </h2>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="text-left border-b border-white/10">

              <th className="pb-4">
                Symbol
              </th>

              <th className="pb-4">
                Shares
              </th>

              <th className="pb-4">
                Avg Price
              </th>

              <th className="pb-4">
                Current Price
              </th>

              <th className="pb-4">
                Current Value
              </th>

              <th className="pb-4">
                Profit/Loss
              </th>

              <th className="pb-4">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {holdings.map((stock)=>(

              <motion.tr

                key={stock.id}

                whileHover={{
                  scale:1.01
                }}

                className="border-b border-white/5"
              >

                <td className="py-5 font-bold">

                  {stock.symbol}

                </td>

                <td>

                  {stock.shares}

                </td>

                <td>

                  ${stock.avg_price}

                </td>

                <td>

                  ${stock.current_price}

                </td>

                <td>

                  ${stock.current_value}

                </td>

                <td

                  className={
                    stock.profit_loss >= 0
                    ? "text-green-400"
                    : "text-red-400"
                  }
                >

                  ${stock.profit_loss}

                </td>

                <td>

                  <div className="flex gap-2">

                    <button

                      onClick={()=>
                        onEdit(stock)
                      }

                      className="bg-cyan-500 hover:bg-cyan-400 px-4 py-2 rounded-xl font-bold"
                    >

                      Edit

                    </button>

                    <button

                      onClick={()=>
                        onDelete(
                          stock.id
                        )
                      }

                      className="bg-red-500 hover:bg-red-400 px-4 py-2 rounded-xl font-bold"
                    >

                      Delete

                    </button>

                  </div>

                </td>

              </motion.tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default PortfolioTable;