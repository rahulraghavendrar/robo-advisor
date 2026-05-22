import { motion } from "framer-motion";

function InsightCard({
  title,
  description,
}) {

  return (
    <motion.div
      whileHover={{
        y:-5,
      }}

      className="bg-slate-900/50 rounded-3xl p-6 backdrop-blur-xl border border-white/10 hover:border-purple-400/40 hover:shadow-purple-500/20 hover:shadow-2xl transition duration-300"
    >

      <h2 className="text-2xl font-bold mb-4">
        {title}
      </h2>

      <p className="text-gray-300 leading-7">
        {description}
      </p>

    </motion.div>
  );
}

export default InsightCard;