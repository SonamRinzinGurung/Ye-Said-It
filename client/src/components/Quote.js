import { useSelector, useDispatch } from "react-redux";
import { checkQuote } from "../features/quoteSlice";
import { CorrectAnswer, WrongAnswer } from "./FeedBack";

const Quote = () => {
  const dispatch = useDispatch();
  const { quotes, score, isCorrect, currentIndex } = useSelector(
    (store) => store.quote
  );
  const currentQuote = quotes[currentIndex];
  return (
    <>
      <div className="score">Score: {score}</div>
      {isCorrect !== null && isCorrect && <CorrectAnswer />}
      {isCorrect !== null && isCorrect === false && <WrongAnswer />}

      <div>Quote:</div>
      <p>{currentQuote}</p>
      <span>-Ye</span>
      <p>Did he say it?</p>
      <button
        onClick={() => {
          dispatch(checkQuote({ quote: currentQuote, choice: true }));
        }}
      >
        Ye Said It
      </button>
      <button
        onClick={() => {
          dispatch(checkQuote({ quote: currentQuote, choice: false }));
        }}
      >
        He ain't say it
      </button>
    </>
  );
};

export default Quote;
