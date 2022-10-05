import { useEffect } from "react";
import { getQuote } from "./features/quoteSlice";
import { useDispatch, useSelector } from "react-redux";
import Quote from "./components/Quote";
function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((store) => store.quote);
  useEffect(() => {
    dispatch(getQuote());
  }, [dispatch]);

  if (isLoading) {
    return <h3>Loading....</h3>;
  }
  return (
    <div className="App">
      <Quote />
    </div>
  );
}

export default App;
