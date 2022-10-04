import { useSelector } from "react-redux";
const Quote = () => {
  const { quote } = useSelector((store) => store.quote);
  return (
    <>
      <div>Quote:</div>
      <p>{quote}</p>
      <span>-Ye</span>
    </>
  );
};

export default Quote;
