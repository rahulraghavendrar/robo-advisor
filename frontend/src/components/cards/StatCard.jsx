import { motion } from "framer-motion";

function StatCard({
  title,
  value,
  color,
  icon,
}) {

  return (
    <motion.div
      whileHover={{
        scale:1.05,
        y:-5,
      }}

      className={`p-6 rounded-3xl shadow-2xl backdrop-blur-xl border border-white/10 ${color}`}
    >

      <div className="flex justify-between items-center">

        <div>

          <h2 className="text-lg opacity-80">
            {title}
          </h2>

          <p className="text-4xl font-bold mt-4">
            {value}
          </p>

        </div>

        <div className="text-5xl opacity-70">
          {icon}
        </div>

      </div>

    </motion.div>
  );
}

export default StatCard;