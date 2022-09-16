import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../Redux/asusCounter/action";
import {
  canonDecrement,
  canonIncrement,
} from "../Redux/canonCounter/canonAction";
import { dellDecrement, dellIncrement } from "../Redux/dellCounter/dellAction";
import AsusCounter from "./AsusCounter";
import CanonCounter from "./CanonCounter";
import DellCounter from "./DellCounter";

const ACounter = () => {
  const asusCount = useSelector((state) => state.counter.value);
  const asusCount1 = useSelector((state) => state.counter.value1);

  const dellCount = useSelector((state) => state.dellCounter.value);
  const canonCount = useSelector((state) => state.canonCounter.value);
  
  const dellCount1 = useSelector((state) => state.dellCounter.value1);
  const canonCount1 = useSelector((state) => state.canonCounter.value1);

  const totalCounter = asusCount1 + dellCount1 + canonCount1;
  const asusPrice = 35500 * asusCount1;
  const dellPrice = 9300 * dellCount1;
  const canonPrice = 36500 * canonCount1;
  const totalPrice = asusPrice + dellPrice + canonPrice;

  const dispatch = useDispatch();

  const asusIncrementHandler = () => {
    dispatch(increment());
  };
  const asusDecrementHandler = () => {
    dispatch(decrement());
  };
  const dellIncrementHandler = () => {
    dispatch(dellIncrement());
  };
  const dellDecrementHandler = () => {
    dispatch(dellDecrement());
  };
  const canonIncrementHandler = () => {
    dispatch(canonIncrement());
  };
  const canonDecrementHandler = () => {
    dispatch(canonDecrement());
  };
  return (
    <div className="">
      <div class=" h-full md:h-screen lg:px-11 px-5">
        <div class="grid grid-cols-12 gap-6 ">
          <div class="  pt-20 col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
            <div className="flex justify-between">
              <h3 className="text-gray-900 font-bold text-2xl text-start ">
                Shopping Cart
              </h3>
              <h3 className="text-gray-900 font-bold text-2xl text-end ">
                3 Items
              </h3>
            </div>
            <div className="flex flex-col w-full ">
              <div className="divider"></div>
            </div>
            {/* All counter */}

            <h3 className="text-xl">Products Details</h3>

            <AsusCounter asusIncrementHandler={asusIncrementHandler} />
            <DellCounter dellIncrementHandler={dellIncrementHandler} />
            <CanonCounter canonIncrementHandler={canonIncrementHandler} />
          </div>
          <div class="p-5 h-full bg-[#F6F6F6] col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
            <h3 className=" text-start text-xl font-bold">Order Summary</h3>
            <div className="divider"></div>
            <div class="    rounded-lg my-4 mx-4">
              {asusCount1 > 0 && (
                <div class="flex justify-between border-b-2 mb-2">
                  <div class="text-lg py-2">
                    <p>Asus Vivobook X515MA</p>
                  </div>
                  <div class="text-lg py-2">
                    <div class="flex flex-row space-x-2 w-full items-center rounded-lg">
                      <button
                        onClick={() => asusDecrementHandler()}
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
                        onClick={
                          asusCount > 0 ? () => asusIncrementHandler() : ""
                        }
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
                        onClick={() => dellDecrementHandler()}
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
                        onClick={dellCount >0 ?() => dellIncrementHandler():''}
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
                        onClick={
                          canonCount > 0 ? () => canonIncrementHandler() : ""
                        }
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
              <div class=" items-center text-center">
                <div class=" pt-5 font-bold flex justify-between py-5">
                  <div className="flex justify-between ">
                    <p>ITEMS </p>
                    <p class="ml-3">{totalCounter}</p>
                  </div>
                  <p class=""> TK {totalPrice}</p>
                </div>
              </div>
              <div className="pt-5 grid gap-5">
                <h3 className="text-start font-bold pb-2">SHIPPING</h3>
                <div className=" bg-white  p-2 ">
                  <h3 className="">Standard Shipping</h3>
                </div>
              </div>
              <div className="grid gap-5">
                <h3 className="text-start font-bold mt-3">PROMO CODE</h3>
                <input
                  type="text"
                  placeholder="Enter Your Code "
                  className="p-2"
                />
                <input
                  type="submit"
                  value="Apply"
                  className="btn w-20 rounded-none bg-[#FA7474] border-0"
                />
              </div>
              <div className="grid gap-5">
                <div className="divider"></div>
                <div className="flex justify-between font-bold">
                  <h3>TOTAL COST</h3>
                  <h3>TK {totalPrice}</h3>
                </div>
                <input
                  type="submit"
                  value="CHECKOUT"
                  className="btn rounded-none bg-purple-600 border-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ACounter;
