import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../Redux/asusCounter/action";
import {
  canonDecrement,
  canonIncrement,
} from "../Redux/canonCounter/canonAction";
import { dellDecrement, dellIncrement } from "../Redux/dellCounter/dellAction";

const ACounter = () => {
  const asusCount = useSelector((state) => state.counter.value);
  const asusCount1 = useSelector((state) => state.counter.value1);

  const dellCount = useSelector((state) => state.dellCounter.value);
  const dellCount1 = useSelector((state) => state.dellCounter.value1);
  console.log(dellCount1);
  const canonCount = useSelector((state) => state.canonCounter.value);
  const canonCount1 = useSelector((state) => state.canonCounter.value1);

  const totalCounter = asusCount1 + dellCount1 + canonCount1;
  const asusPrice = 35500 * asusCount1;
  const dellPrice = 9300 * dellCount1;
  const canonPrice = 36500 * canonCount1;
  const totalPrice = asusPrice + dellPrice + canonPrice;

  const dispatch = useDispatch();

  const asusIncrementHandler = (value) => {
    dispatch(increment(value));
  };
  const asusDecrementHandler = (value) => {
    dispatch(decrement(value));
  };
  const dellIncrementHandler = (value) => {
    dispatch(dellIncrement(value));
  };
  const dellDecrementHandler = (value) => {
    dispatch(dellDecrement(value));
  };
  const canonIncrementHandler = () => {
    dispatch(canonIncrement());
  };
  const canonDecrementHandler = () => {
    dispatch(canonDecrement());
  };
  return (
    <div>
      <div class="bg-gray-50 h-full md:h-screen">
        <div class="grid place-items-center">
          <h1 class="text-gray-900 font-bold text-3xl p-10 underline decoration-purple-500 decoration-4 underline-offset-8 mb-4">
            Shopping Cart
          </h1>
        </div>
        <div class="grid grid-cols-12 gap-6">
          <div class="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
            <div class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
              <div class="flex justify-between px-4 items-center">
                <div class="text-lg font-semibold">
                  <p>Asus Vivobook X515MA ({asusCount})</p>
                  <p class="text-gray-400 text-base">Tk 35,500</p>
                </div>
                <div class="text-lg font-semibold">
                  {asusCount > 0 ? (
                    <button
                      onClick={() => asusIncrementHandler(1)}
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
            <div class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
              <div class="flex justify-between px-4 items-center">
                <div class="text-lg font-semibold">
                  <p>Dell E1916HV 18.5 Inch ({dellCount})</p>
                  <p class="text-gray-400 text-base">Tk 9,300</p>
                </div>
                <div class="text-lg font-semibold">
                  {dellCount > 0 ? (
                    <button
                      onClick={() => dellIncrementHandler()}
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
          <div class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
            <div class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
              {asusCount1 > 0 && (
                <div class="flex justify-between border-b-2 mb-2">
                  <div class="text-lg py-2">
                    <p>Asus Vivobook X515MA</p>
                  </div>
                  <div class="text-lg py-2">
                    <div class="flex flex-row space-x-2 w-full items-center rounded-lg">
                      <button
                        onClick={() => asusDecrementHandler(1)}
                        class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M18 12H6"
                          />
                        </svg>
                      </button>
                      <p>{asusCount1}</p>
                      <button
                        onClick={() => asusIncrementHandler(1)}
                        class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {dellCount1 > 0 && (
                <div class="flex justify-between border-b-2 mb-2">
                  <div class="text-lg py-2">
                    <p>Dell E1916HV 18.5 Inch</p>
                  </div>
                  <div class="text-lg py-2">
                    <div class="flex flex-row space-x-2 w-full items-center rounded-lg">
                      <button
                        onClick={() => dellDecrementHandler(1)}
                        class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M18 12H6"
                          />
                        </svg>
                      </button>
                      <p>{dellCount1}</p>
                      <button
                        onClick={() => dellIncrementHandler(1)}
                        class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {canonCount1 > 0 && (
                <div class="flex justify-between border-b-2 mb-2">
                  <div class="text-lg py-2">
                    <p>Canon Eos 4000D 18MP</p>
                  </div>
                  <div class="text-lg py-2">
                    <div class="flex flex-row space-x-2 w-full items-center rounded-lg">
                      <button
                        onClick={() => canonDecrementHandler()}
                        class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M18 12H6"
                          />
                        </svg>
                      </button>
                      <p>{canonCount1}</p>
                      <button
                        onClick={() => canonIncrementHandler()}
                        class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <div class="flex justify-center items-center text-center">
                <div class="text-xl font-semibold">
                  <p>Total Item</p>
                  <p class="text-5xl">{totalCounter}</p>
                </div>
              </div>
            </div>
            <div class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
              <div class="flex justify-center items-center text-center">
                <div class="text-xl font-semibold">
                  <p>Total Price</p>
                  <p class="text-5xl">{totalPrice}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ACounter;
