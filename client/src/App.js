import { useEffect } from "react";
import { getQuote } from "./features/quoteSlice";
import { useDispatch, useSelector } from "react-redux";
import Quote from "./components/Quote";
import GameOver from "./components/GameOver";
import Loading from "./components/Loading";
import bearIcon from "./assets/bear-icon.png";

function App() {
  const dispatch = useDispatch();
  const { isLoading, currentIndex } = useSelector((store) => store.quote);
  useEffect(() => {
    dispatch(getQuote());
  }, [dispatch]);

  return (
    <div className={"dark"}>
      <main className="font-serif text-center bg-[url('./assets/mountains.png')] bg-cover  min-h-screen">
        <nav className="flex justify-center backdrop-blur-sm bg-white/30">
          <img src={bearIcon} alt="" className="w-20 h-20 self-center" />
          <h2 className="font-logo text-green-300 duration-300 ease-in hover:text-orange-400  cursor-pointer text-lg self-center">
            Ye Said It?
          </h2>
        </nav>
        {currentIndex === 6 && <GameOver />}
        <Quote />
      </main>
    </div>
  );
}

export default App;
