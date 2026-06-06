import { useState } from "react";

import {
  addStock
} from "../../services/portfolioApi";

function AddStockForm({
  onStockAdded
}) {

  const [formData,setFormData] =
    useState({

      symbol:"",
      shares:"",
      average_price:"",
    });

  const [loading,setLoading] =
    useState(false);

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
      e.target.value
    });
  };

  const handleSubmit = async(e) => {

    e.preventDefault();

    setLoading(true);

    try{

      await addStock({

        symbol:
          formData.symbol
          .toUpperCase(),

        shares:
          Number(
            formData.shares
          ),

        average_price:
          Number(
            formData.average_price
          )
      });

      setFormData({

        symbol:"",
        shares:"",
        average_price:"",
      });

      onStockAdded();

    }

    catch(error){

      console.log(error);
    }

    finally{

      setLoading(false);
    }
  };

  return (

    <div className="bg-slate-900/50 rounded-3xl p-8 border border-white/10 backdrop-blur-xl mb-10">

      <h2 className="text-3xl font-bold mb-6">

        Add Stock Position

      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-4 gap-4"
      >

        <input

          type="text"

          name="symbol"

          value={formData.symbol}

          onChange={handleChange}

          placeholder="AAPL"

          className="bg-slate-800/50 p-4 rounded-2xl border border-white/10"
        />

        <input

          type="number"

          name="shares"

          value={formData.shares}

          onChange={handleChange}

          placeholder="Shares"

          className="bg-slate-800/50 p-4 rounded-2xl border border-white/10"
        />

        <input

          type="number"

          step="0.01"

          name="average_price"

          value={formData.average_price}

          onChange={handleChange}

          placeholder="Average Price"

          className="bg-slate-800/50 p-4 rounded-2xl border border-white/10"
        />

        <button

          type="submit"

          disabled={loading}

          className="bg-cyan-500 hover:bg-cyan-400 rounded-2xl font-bold"
        >

          {
            loading
            ? "Adding..."
            : "Add Stock"
          }

        </button>

      </form>

    </div>
  );
}

export default AddStockForm;