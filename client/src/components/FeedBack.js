import correctAnswer from "../assets/right-answer.png";
import wrongAnswer from "../assets/wrong-answer.png";

export const CorrectAnswer = () => {
  return (
    <div className="flex justify-center  bg-green-300 w-fit m-auto">
      <img src={correctAnswer} alt="happy-ye" className="w-14 h-14" />
      <h3 className="font-logo self-center p-1">You are right!</h3>
    </div>
  );
};

export const WrongAnswer = () => {
  return (
    <div className="flex justify-center  bg-orange-300 w-fit m-auto">
      <img src={wrongAnswer} alt="sad-ye" className="w-14 h-14" />

      <h3 className="font-logo  self-center  p-1">You are wrong!</h3>
    </div>
  );
};
