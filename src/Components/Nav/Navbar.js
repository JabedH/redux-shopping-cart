import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const asusCount1 = useSelector((state) => state.counter.value1);
  const dellCount1 = useSelector((state) => state.dellCounter.value1);
  console.log(dellCount1);

  const canonCount1 = useSelector((state) => state.canonCounter.value1);

  const totalCounter = asusCount1 + dellCount1 + canonCount1;
  const asusPrice = 35500 * asusCount1;
  const dellPrice = 9300 * dellCount1;
  const canonPrice = 36500 * canonCount1;
  const totalPrice = asusPrice + dellPrice + canonPrice;

  return (
    <div>
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Online Shopping</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {totalCounter}
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">{totalCounter} Items</span>
                <span className="text-info">TOTAL COST: TK {totalPrice}</span>
                <div
                  className="card-actions grid
                "
                >
                  <button className="btn rounded-none bg-purple-600 border-0">
                    CHECKOUT
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
