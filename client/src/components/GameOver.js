import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { newGame, getQuote } from "../features/quoteSlice";
import gameover from "../assets/gameover.png";

const GameOver = () => {
  const dispatch = useDispatch();
  const { score, isLoading } = useSelector((store) => store.quote);
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 backdrop-blur-sm transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex flex-col min-h-full items-center justify-center p-4 text-center">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all hover:bg-slate-500">
            <div className="flex flex-col bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <img src={gameover} alt="" className="w-14 h-14 self-center" />
              <div className="mt-3 text-center">
                <h3
                  className="text-lg lg:text-2xl font-logo font-medium leading-6 text-gray-900"
                  id="modal-title"
                >
                  Game Over
                </h3>
                <div className="mt-2">
                  <p className="text-2xl text-gray-500 font-monospace ">
                    Your Score : {score}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3">
              <button
                disabled={isLoading}
                onClick={() => {
                  dispatch(getQuote());
                  dispatch(newGame());
                }}
                type="button"
                className=" mt-3 inline-flex w-full justify-center rounded-md border border-gray-300  px-4 py-2 text-base font-medium text-gray-700 shadow-sm  bg-green-400 bg-opacity-70 hover:bg-opacity-100 duration-300 ease-in"
              >
                Play Again
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameOver;
