import { motion } from "framer-motion";

function AnalyticsStat({
  title,
  value,
  color,
}) {

  return (
    <motion.div
      whileHover={{
        y:-5,
      }}

      className={`rounded-3xl p-8 backdrop-blur-xl border border-white/10 ${color}`}
    >

      <h2 className="text-lg opacity-70">
        {title}
      </h2>

      <p className="text-5xl font-black mt-4">
        {value}
      </p>

    </motion.div>
  );
}

export default AnalyticsStat;