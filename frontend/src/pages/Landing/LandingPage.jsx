import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import AnimatedBackground from "../../components/ui/AnimatedBackground";

function LandingPage() {

  return (

    <div className="min-h-screen relative overflow-hidden flex items-center justify-center px-10 bg-[#020617] text-white">

      <AnimatedBackground />

      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-20 items-center relative z-10">

        {/* LEFT SECTION */}
        <motion.div

          initial={{
            opacity:0,
            x:-50,
          }}

          animate={{
            opacity:1,
            x:0,
          }}

          transition={{
            duration:1,
          }}
        >

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 text-cyan-300 mb-8">

            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />

            AI Powered Investment Platform

          </div>

          {/* Heading */}
          <h1 className="text-8xl font-black leading-tight">

            Smart

            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">

              Investing

            </span>

          </h1>

          {/* Description */}
          <p className="text-xl text-gray-300 mt-8 leading-10 max-w-2xl">

            Build intelligent portfolios, analyze financial markets,
            monitor real-time performance, and optimize your investments
            using AI-driven financial insights.

          </p>

          {/* Buttons */}
          <div className="flex gap-6 mt-12">

            {/* LOGIN */}
            <Link to="/login">

              <button className="px-10 py-5 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition text-lg font-semibold shadow-lg shadow-cyan-500/30 hover:scale-105 duration-300">

                Get Started

              </button>

            </Link>

            {/* REGISTER */}
            <Link to="/register">

              <button className="px-10 py-5 rounded-2xl border border-white/20 hover:border-cyan-400 transition text-lg hover:bg-white/5 duration-300">

                Create Account

              </button>

            </Link>

          </div>

          {/* Stats */}
          <div className="flex gap-12 mt-16">

            <div>

              <h2 className="text-5xl font-black text-cyan-400">
                $2.4M+
              </h2>

              <p className="text-gray-400 mt-2">
                Assets Managed
              </p>

            </div>

            <div>

              <h2 className="text-5xl font-black text-green-400">
                18.2%
              </h2>

              <p className="text-gray-400 mt-2">
                Average Returns
              </p>

            </div>

            <div>

              <h2 className="text-5xl font-black text-purple-400">
                10K+
              </h2>

              <p className="text-gray-400 mt-2">
                Active Investors
              </p>

            </div>

          </div>

        </motion.div>

        {/* RIGHT SECTION */}
        <motion.div

          initial={{
            opacity:0,
            x:50,
          }}

          animate={{
            opacity:1,
            x:0,
          }}

          transition={{
            duration:1,
          }}

          className="relative"
        >

          {/* Glow */}
          <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-full" />

          {/* Main Card */}
          <div className="relative bg-slate-900/60 border border-white/10 backdrop-blur-2xl rounded-[40px] p-10 shadow-2xl">

            <div className="flex justify-between items-center mb-10">

              <div>

                <h2 className="text-4xl font-black">
                  Portfolio Overview
                </h2>

                <p className="text-gray-400 mt-2">
                  AI Generated Insights
                </p>

              </div>

              <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-2xl">

                ↗

              </div>

            </div>

            {/* Stats */}
            <div className="space-y-8">

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-gray-400">
                    Total Assets
                  </p>

                  <h3 className="text-3xl font-black mt-2">
                    $2.4M
                  </h3>

                </div>

                <span className="text-cyan-400 text-xl">
                  +12%
                </span>

              </div>

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-gray-400">
                    Annual Return
                  </p>

                  <h3 className="text-3xl font-black mt-2">
                    18.2%
                  </h3>

                </div>

                <span className="text-green-400 text-xl">
                  +4.1%
                </span>

              </div>

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-gray-400">
                    AI Confidence
                  </p>

                  <h3 className="text-3xl font-black mt-2">
                    94%
                  </h3>

                </div>

                <span className="text-purple-400 text-xl">
                  Stable
                </span>

              </div>

            </div>

            {/* Mini Chart */}
            <div className="mt-12">

              <div className="flex items-end gap-3 h-40">

                <div className="w-10 bg-cyan-500 rounded-t-xl h-[35%]" />

                <div className="w-10 bg-cyan-400 rounded-t-xl h-[50%]" />

                <div className="w-10 bg-blue-500 rounded-t-xl h-[70%]" />

                <div className="w-10 bg-purple-500 rounded-t-xl h-[90%]" />

                <div className="w-10 bg-green-400 rounded-t-xl h-[100%]" />

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </div>
  );
}

export default LandingPage;