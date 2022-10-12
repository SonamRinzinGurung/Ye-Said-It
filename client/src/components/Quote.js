import { useSelector, useDispatch } from "react-redux";
import { checkQuote } from "../features/quoteSlice";
import { CorrectAnswer, WrongAnswer } from "./FeedBack";
import trueIcon from "../assets/true.png";
import falseIcon from "../assets/false.png";

const Quote = () => {
  const dispatch = useDispatch();
  const { quotes, score, isCorrect, currentIndex } = useSelector(
    (store) => store.quote
  );
  const currentQuote = quotes[currentIndex];
  return (
    <section className="flex flex-col gap-2">
      <div className="self-end p-2.5 bg-green-300 m-4 font-monospace rounded-lg shadow-sm w-40 text-xl lg:text-2xl lg:w-52 hover:bg-orange-400 hover:shadow-2xl duration-300 ease-in">
        Score: {score}
      </div>
      <div className="flex flex-col backdrop-blur-sm max-w-sm m-auto p-5 py-6 my-4 shadow-lg rounded-md hover:shadow-2xl duration-200 ease-in lg:my-2">
        <div className="flex flex-col">
          {isCorrect === null && (
            <>
              <p className="font-display leading-8 text-green-300 text-3xl">
                " {currentQuote} "
              </p>
              <span className="font-monospace self-end text-2xl">-Ye</span>
            </>
          )}

          <p className="font-display text-2xl text-orange-400 my-5">
            Did Ye say it ?
          </p>
        </div>

        {isCorrect === null && (
          <div className="flex m-auto font-monospace text-xl">
            <button
              className="bg-green-400 bg-opacity-80 hover:bg-opacity-100 hover:shadow-lg text-white  w-2/3 p-2 mx-4 rounded-xl duration-300 ease-in-out"
              onClick={() => {
                dispatch(checkQuote({ quote: currentQuote, choice: true }));
              }}
            >
              <img src={trueIcon} alt="" />
              Ye Said It
            </button>
            <button
              className="duration-300 ease-in-out bg-orange-400 bg-opacity-80 hover:bg-opacity-100 hover:shadow-lg text-white w-2/3 p-2 mx-4 rounded-xl"
              onClick={() => {
                dispatch(checkQuote({ quote: currentQuote, choice: false }));
              }}
            >
              <img src={falseIcon} alt="" />
              Ye ain't say it
            </button>
          </div>
        )}
        {isCorrect !== null && isCorrect && <CorrectAnswer />}
        {isCorrect !== null && isCorrect === false && <WrongAnswer />}
      </div>
    </section>
  );
};

export default Quote;
