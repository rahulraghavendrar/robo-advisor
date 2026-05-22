import { motion } from "framer-motion";

function HoldingCard({
  symbol,
  company,
  shares,
  value,
  growth,
}) {

  const positive = growth.includes("+");

  return (
    <motion.div
      whileHover={{
        scale:1.03,
      }}

      className="bg-slate-900/50 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:border-cyan-400/30 transition duration-300"
    >

      <div className="flex justify-between items-start">

        <div>

          <h2 className="text-3xl font-bold">
            {symbol}
          </h2>

          <p className="text-gray-400 mt-1">
            {company}
          </p>

        </div>

        <div
          className={`px-3 py-1 rounded-full text-sm ${
            positive
              ? "bg-green-500/20 text-green-400"
              : "bg-red-500/20 text-red-400"
          }`}
        >
          {growth}
        </div>

      </div>

      <div className="mt-8 flex justify-between">

        <div>

          <p className="text-gray-400">
            Shares
          </p>

          <p className="text-2xl font-bold mt-2">
            {shares}
          </p>

        </div>

        <div>

          <p className="text-gray-400">
            Value
          </p>

          <p className="text-2xl font-bold mt-2 text-cyan-400">
            ${value}
          </p>

        </div>

      </div>

    </motion.div>
  );
}

export default HoldingCard;