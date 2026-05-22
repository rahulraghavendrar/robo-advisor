import { motion } from "framer-motion";

const arrows = [
  "📈",
  "📉",
  "📈",
  "📉",
  "📈",
  "📉",
];

function AnimatedBackground() {

  return (
    <div className="fixed inset-0 overflow-hidden -z-10">

      {/* Cyan Glow */}
      <motion.div
        animate={{
          x:[0,100,0],
          y:[0,-50,0],
        }}
        transition={{
          duration:15,
          repeat:Infinity,
        }}
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl"
      />

      {/* Purple Glow */}
      <motion.div
        animate={{
          x:[0,-100,0],
          y:[0,100,0],
        }}
        transition={{
          duration:18,
          repeat:Infinity,
        }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"
      />

      {/* Floating Stock Arrows */}
      {arrows.map((arrow,index)=>(

        <motion.div
          key={index}

          initial={{
            y:"110vh",
            x:150 * index + 100,
          }}

          animate={{
            y:"-10vh",
          }}

          transition={{
            duration:12 + index * 2,
            repeat:Infinity,
            ease:"linear",
            delay:index * 1.5,
          }}

          className="absolute text-5xl opacity-10"
        >
          {arrow}
        </motion.div>

      ))}

    </div>
  );
}

export default AnimatedBackground;