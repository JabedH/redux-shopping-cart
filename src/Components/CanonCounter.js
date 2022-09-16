import React from "react";
import { useSelector } from "react-redux";

const CanonCounter = ({ canonIncrementHandler }) => {
  const canonCount = useSelector((state) => state.canonCounter.value);
  return (
    <div>
      <div class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
        <div class="flex justify-between px-4 items-center">
          <div class="text-lg font-semibold">
            <p>Canon Eos 4000D 18MP ({canonCount})</p>
            <p class="text-gray-400 text-base">Tk 36,500</p>
          </div>
          <div class="text-lg font-semibold">
            {canonCount > 0 ? (
              <button
                onClick={() => canonIncrementHandler()}
                class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            ) : (
              <h3 className=" text-red-500 font-bold">Sold out</h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CanonCounter;
