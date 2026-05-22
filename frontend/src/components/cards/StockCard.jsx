import { motion } from "framer-motion";

function StockCard({
  symbol,
  company,
  price,
  change,
}) {

  const positive = change.includes("+");

  return (
    <motion.div
      whileHover={{
        scale:1.03,
      }}

      className="bg-slate-900/50 border border-white/10 rounded-3xl p-5 backdrop-blur-xl hover:border-cyan-400/40 hover:shadow-cyan-500/20 hover:shadow-2xl transition duration-300"
    >

      <div className="flex justify-between items-center">

        <div>

          <h2 className="text-2xl font-bold">
            {symbol}
          </h2>

          <p className="text-gray-400 mt-1">
            {company}
          </p>

        </div>

        <div className="text-right">

          <p className="text-2xl font-bold">
            ${price}
          </p>

          <p
            className={`mt-1 ${
              positive
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {change}
          </p>

        </div>

      </div>
    </motion.div>
  );
}

export default StockCard;