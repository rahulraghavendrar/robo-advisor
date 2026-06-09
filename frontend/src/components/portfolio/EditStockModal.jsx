import {
  useState
} from "react";

import {
  updateStock
} from "../../services/portfolioApi";

function EditStockModal({

  stock,

  onClose,

  onUpdated

}) {

  const [shares,setShares] =
    useState(
      stock.shares
    );

  const [averagePrice,
  setAveragePrice] =
    useState(
      stock.avg_price
    );

  const handleSave =
  async() => {

    try{

      await updateStock(

        stock.id,

        {
          shares:Number(
            shares
          ),

          average_price:Number(
            averagePrice
          )
        }
      );

      await onUpdated();

      onClose();

    }

    catch(error){

      console.log(error);

      alert(
        "Failed to update position"
      );
    }
  };

  return (

    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

      <div className="bg-slate-900 p-8 rounded-3xl w-[450px] border border-white/10">

        <h2 className="text-3xl font-bold mb-6">

          Edit Position

        </h2>

        <div className="mb-4">

          <label className="block mb-2">

            Shares

          </label>

          <input

            type="number"

            value={shares}

            onChange={(e)=>

              setShares(
                e.target.value
              )
            }

            className="w-full p-4 rounded-xl bg-slate-800"
          />

        </div>

        <div className="mb-6">

          <label className="block mb-2">

            Average Price

          </label>

          <input

            type="number"

            value={averagePrice}

            onChange={(e)=>

              setAveragePrice(
                e.target.value
              )
            }

            className="w-full p-4 rounded-xl bg-slate-800"
          />

        </div>

        <div className="flex gap-4">

          <button

            onClick={
              handleSave
            }

            className="flex-1 bg-cyan-500 hover:bg-cyan-400 p-4 rounded-xl font-bold"
          >

            Save

          </button>

          <button

            onClick={
              onClose
            }

            className="flex-1 bg-red-500 hover:bg-red-400 p-4 rounded-xl font-bold"
          >

            Cancel

          </button>

        </div>

      </div>

    </div>
  );
}

export default EditStockModal;