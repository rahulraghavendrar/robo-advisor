import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import AnimatedBackground from "../../components/ui/AnimatedBackground";

function LoginPage() {

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#020617] text-white">

      <AnimatedBackground />

      <motion.div
        initial={{ opacity:0, y:40 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:1 }}

        className="w-[500px] bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-[40px] p-10 relative z-10 shadow-2xl"
      >

        <h1 className="text-5xl font-black mb-3">
          Welcome Back
        </h1>

        <p className="text-gray-400 mb-10">
          Login to access your AI-powered investment dashboard.
        </p>

        <div className="space-y-6">

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

          <Link to="/dashboard">

            <button className="w-full bg-cyan-500 hover:bg-cyan-400 transition p-5 rounded-2xl font-bold text-lg shadow-lg shadow-cyan-500/20 hover:scale-[1.02] duration-300">

              Login

            </button>

          </Link>

        </div>

        <div className="mt-8 text-center text-gray-400">

          Don’t have an account?

          <Link
            to="/register"
            className="text-cyan-400 ml-2 hover:underline"
          >
            Register
          </Link>

        </div>

      </motion.div>

    </div>
  );
}

export default LoginPage;