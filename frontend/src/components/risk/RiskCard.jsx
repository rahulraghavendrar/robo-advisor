import { motion } from "framer-motion";

function RiskCard({
  title,
  description,
  level,
}) {

  return (
    <motion.div
      whileHover={{
        scale:1.03,
      }}

      className="bg-slate-900/50 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
    >

      <div className="flex justify-between items-center">

        <h2 className="text-3xl font-bold">
          {title}
        </h2>

        <div className="px-4 py-2 rounded-full bg-yellow-500/20 text-yellow-400">

          {level}

        </div>

      </div>

      <p className="text-gray-300 leading-8 mt-6">
        {description}
      </p>

    </motion.div>
  );
}

export default RiskCard;