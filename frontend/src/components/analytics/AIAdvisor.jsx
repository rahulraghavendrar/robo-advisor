import {
  useState,
} from "react";

import {
  Sparkles,
  Send,
  Loader2,
} from "lucide-react";

import {
  getAIAdvice,
} from "../../services/portfolioApi";


function AIAdvisor() {

  const [
    question,
    setQuestion
  ] = useState(
    "Analyze my portfolio and explain its main strengths, risks, and diversification opportunities."
  );

  const [
    advice,
    setAdvice
  ] = useState("");

  const [
    loading,
    setLoading
  ] = useState(false);

  const [
    error,
    setError
  ] = useState("");


  const handleAskAI = async() => {

    if(!question.trim()) {

      setError(
        "Please enter a question."
      );

      return;
    }

    setLoading(true);

    setError("");

    setAdvice("");


    try {

      const response =
        await getAIAdvice(
          question
        );

      setAdvice(
        response.data.advice
      );

    }

    catch(error) {

      console.log(error);

      if(
        error.response &&
        error.response.data &&
        error.response.data.detail
      ) {

        setError(
          error.response.data.detail
        );

      }

      else {

        setError(
          "Unable to generate AI advice."
        );

      }

    }

    finally {

      setLoading(false);

    }

  };


  return (

    <div className="bg-slate-900/50 border border-cyan-400/20 rounded-3xl p-8 backdrop-blur-xl shadow-2xl">

      <div className="flex items-center justify-between mb-6">

        <div>

          <div className="flex items-center gap-3">

            <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-400/20">

              <Sparkles
                size={26}
                className="text-cyan-400"
              />

            </div>

            <div>

              <h2 className="text-3xl font-bold">

                RoboVest AI Advisor

              </h2>

              <p className="text-gray-400 mt-1">

                AI-powered analysis of your live portfolio

              </p>

            </div>

          </div>

        </div>

      </div>


      <div className="mb-6">

        <label className="block text-gray-300 mb-3 font-medium">

          Ask about your portfolio

        </label>

        <textarea

          value={question}

          onChange={(e) =>
            setQuestion(
              e.target.value
            )
          }

          rows={4}

          placeholder="Example: Which part of my portfolio is most concentrated?"

          className="w-full bg-slate-800/70 border border-white/10 rounded-2xl p-5 text-white placeholder-gray-500 outline-none focus:border-cyan-400/50 resize-none"

        />

      </div>


      <button

        onClick={
          handleAskAI
        }

        disabled={loading}

        className="w-full flex items-center justify-center gap-3 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-60 disabled:cursor-not-allowed text-slate-950 font-bold py-4 rounded-2xl transition"

      >

        {

          loading

            ?

            <>

              <Loader2
                size={22}
                className="animate-spin"
              />

              Analyzing Portfolio...

            </>

            :

            <>

              <Send
                size={22}
              />

              Ask RoboVest AI

            </>

        }

      </button>


      {

        error && (

          <div className="mt-6 p-5 rounded-2xl bg-red-500/10 border border-red-400/20 text-red-300">

            {error}

          </div>

        )

      }


      {

        advice && (

          <div className="mt-8 bg-slate-800/50 border border-white/10 rounded-2xl p-6">

            <div className="flex items-center gap-3 mb-5">

              <Sparkles
                size={22}
                className="text-cyan-400"
              />

              <h3 className="text-xl font-bold">

                AI Portfolio Insights

              </h3>

            </div>

            <div className="whitespace-pre-line text-gray-200 leading-8">

              {advice}

            </div>

          </div>

        )

      }


      <div className="mt-6 text-sm text-gray-500">

        AI-generated analysis is educational and should not be treated as a guarantee of investment performance.

      </div>

    </div>

  );

}


export default AIAdvisor;