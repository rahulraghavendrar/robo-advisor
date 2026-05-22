import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import AnimatedBackground from "../../components/ui/AnimatedBackground";

function RegisterPage() {

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#020617] text-white">

      <AnimatedBackground />

      <motion.div
        initial={{ opacity:0, y:40 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:1 }}

        className="w-[550px] bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-[40px] p-10 relative z-10 shadow-2xl"
      >

        <h1 className="text-5xl font-black mb-3">
          Create Account
        </h1>

        <p className="text-gray-400 mb-10">
          Start your AI-powered investment journey today.
        </p>

        <div className="space-y-6">

          <input
            type="text"
            placeholder="Full Name"

            className="w-full p-5 rounded-2xl bg-slate-800/50 border border-white/10 outline-none focus:border-cyan-400 transition"
          />

          <input
            type="email"
            placeholder="Email Address"

            className="w-full p-5 rounded-2xl bg-slate-800/50 border border-white/10 outline-none focus:border-cyan-400 transition"
          />

          <input
            type="password"
            placeholder="Password"

            className="w-full p-5 rounded-2xl bg-slate-800/50 border border-white/10 outline-none focus:border-cyan-400 transition"
          />

          <button className="w-full bg-cyan-500 hover:bg-cyan-400 transition p-5 rounded-2xl font-bold text-lg shadow-lg shadow-cyan-500/20 hover:scale-[1.02] duration-300">

            Create Account

          </button>

        </div>

        <div className="mt-8 text-center text-gray-400">

          Already have an account?

          <Link
            to="/login"
            className="text-cyan-400 ml-2 hover:underline"
          >
            Login
          </Link>

        </div>

      </motion.div>

    </div>
  );
}

export default RegisterPage;