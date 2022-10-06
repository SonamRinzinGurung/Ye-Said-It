import { useSelector, useDispatch } from "react-redux";
import { checkQuote, getQuote } from "../features/quoteSlice";
import { CorrectAnswer, WrongAnswer } from "./FeedBack";

const Quote = () => {
  const dispatch = useDispatch();
  const { quote, score, isCorrect } = useSelector((store) => store.quote);
  return (
    <>
      <div className="score">Score: {score}</div>
      {isCorrect && isCorrect && <CorrectAnswer />}
      {isCorrect !== null && isCorrect === false && <WrongAnswer />}

      <div>Quote:</div>
      <p>{quote}</p>
      <span>-Ye</span>
      <p>Did he say it?</p>
      <button
        onClick={() => {
          dispatch(checkQuote({ quote, choice: true }));
          // dispatch(getQuote());
        }}
      >
        Ye Said it
      </button>
      <button
        onClick={() => {
          dispatch(checkQuote({ quote, choice: false }));
          // dispatch(getQuote());
        }}
      >
        He ain't said it
      </button>
    </>
  );
};

export default Quote;
