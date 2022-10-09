import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { newGame, getQuote } from "../features/quoteSlice";

const GameOver = () => {
  const dispatch = useDispatch();
  const { score } = useSelector((store) => store.quote);
  return (
    <>
      <div> GameOver</div>
      <p>Your score : {score}</p>
      <button
        onClick={() => {
          dispatch(getQuote());
          dispatch(newGame());
        }}
      >
        Play Again
      </button>
    </>
  );
};

export default GameOver;
