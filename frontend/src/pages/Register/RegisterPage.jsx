import { useState } from "react";

import { motion } from "framer-motion";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import AnimatedBackground from "../../components/ui/AnimatedBackground";

import { registerUser } from "../../api/authApi";

function RegisterPage() {

  const navigate = useNavigate();

  const [loading,setLoading] =
    useState(false);

  const [error,setError] =
    useState("");

  const [success,setSuccess] =
    useState("");

  const [formData,setFormData] =
    useState({

      name:"",
      email:"",
      password:"",
    });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
      e.target.value,
    });
  };

  const handleSubmit = async(e) => {

    e.preventDefault();

    setLoading(true);

    setError("");

    try{

      const response =
        await registerUser(
          formData
        );

      setSuccess(
        response.data.message
      );

      setTimeout(()=>{

        navigate("/login");

      },1500);

    }

    catch(error){

      setError(
        "Registration failed"
      );
    }

    finally{

      setLoading(false);
    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#020617] text-white">

      <AnimatedBackground />

      <motion.div

        initial={{
          opacity:0,
          y:40
        }}

        animate={{
          opacity:1,
          y:0
        }}

        transition={{
          duration:1
        }}

        className="w-[550px] bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-[40px] p-10 relative z-10 shadow-2xl"
      >

        <h1 className="text-5xl font-black mb-3">

          Create Account

        </h1>

        <p className="text-gray-400 mb-10">

          Start your AI-powered investment journey today.

        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <input

            type="text"

            name="name"

            placeholder="Full Name"

            onChange={handleChange}

            className="w-full p-5 rounded-2xl bg-slate-800/50 border border-white/10 outline-none focus:border-cyan-400"

            required
          />

          <input

            type="email"

            name="email"

            placeholder="Email Address"

            onChange={handleChange}

            className="w-full p-5 rounded-2xl bg-slate-800/50 border border-white/10 outline-none focus:border-cyan-400"

            required
          />

          <input

            type="password"

            name="password"

            placeholder="Password"

            onChange={handleChange}

            className="w-full p-5 rounded-2xl bg-slate-800/50 border border-white/10 outline-none focus:border-cyan-400"

            required
          />

          {error && (

            <p className="text-red-400">

              {error}

            </p>

          )}

          {success && (

            <p className="text-green-400">

              {success}

            </p>

          )}

          <button

            type="submit"

            disabled={loading}

            className="w-full bg-cyan-500 hover:bg-cyan-400 transition p-5 rounded-2xl font-bold text-lg"
          >

            {

              loading

              ? "Creating Account..."

              : "Create Account"

            }

          </button>

        </form>

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