import {
  useState,
  useContext,
} from "react";

import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import { loginUser } from "../../api/authApi";

import { AuthContext } from "../../context/AuthContext";

import AnimatedBackground from "../../components/ui/AnimatedBackground";

function LoginPage() {

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [formData,setFormData] = useState({

    email:"",
    password:"",
  });

  const [loading,setLoading] = useState(false);

  const [error,setError] = useState("");

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:e.target.value,
    });
  };

  const handleSubmit = async(e) => {

    e.preventDefault();

    setLoading(true);

    setError("");

    try{

      const response = await loginUser(formData);

      const token = response.data.access_token;

      login(token);

      navigate("/dashboard");

    }

    catch(err){

      setError(
        "Invalid credentials"
      );
    }

    finally{

      setLoading(false);
    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-[#020617] relative overflow-hidden text-white">

      <AnimatedBackground />

      <motion.div

        initial={{
          opacity:0,
          y:40,
        }}

        animate={{
          opacity:1,
          y:0,
        }}

        className="relative z-10 w-full max-w-md bg-slate-900/60 border border-white/10 backdrop-blur-2xl rounded-[40px] p-10"
      >

        <h1 className="text-5xl font-black mb-3">

          Welcome Back

        </h1>

        <p className="text-gray-400 mb-10">

          Login to your investment account

        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="w-full bg-slate-950/50 border border-white/10 rounded-2xl p-5 outline-none focus:border-cyan-400"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full bg-slate-950/50 border border-white/10 rounded-2xl p-5 outline-none focus:border-cyan-400"
            required
          />

          {error && (

            <p className="text-red-400">
              {error}
            </p>

          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-5 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition font-bold text-lg"
          >

            {
              loading
              ? "Logging in..."
              : "Login"
            }

          </button>

        </form>

      </motion.div>

    </div>
  );
}

export default LoginPage;