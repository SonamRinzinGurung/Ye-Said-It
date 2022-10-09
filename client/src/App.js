import { useEffect } from "react";
import { getQuote } from "./features/quoteSlice";
import { useDispatch, useSelector } from "react-redux";
import Quote from "./components/Quote";
import GameOver from "./components/GameOver";
function App() {
  const dispatch = useDispatch();
  const { isLoading, currentIndex } = useSelector((store) => store.quote);
  useEffect(() => {
    dispatch(getQuote());
  }, [dispatch]);

  if (currentIndex === 6) {
    return <GameOver />;
  }
  return (
    <div className="App">
      {isLoading && <h2>Loading</h2>}
      <Quote />
    </div>
  );
}

export default App;
