import { useEffect, useState } from "react";
import { getQuote } from "./features/quoteSlice";
import { useDispatch, useSelector } from "react-redux";
import Quote from "./components/Quote";
import GameOver from "./components/GameOver";
import bearIcon from "./assets/bear-icon.png";
import bound2 from "./assets/BOUND2.mp3";
import music_on from "./assets/music.png";
import music_off from "./assets/no_music.png";

function App() {
  const dispatch = useDispatch();
  const { currentIndex } = useSelector((store) => store.quote);
  useEffect(() => {
    dispatch(getQuote());
  }, [dispatch]);

  const [showGameOver, setShowGameOver] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  useEffect(() => {
    let timer;
    if (currentIndex === 6) {
      timer = setTimeout(() => {
        setShowGameOver(true);
      }, 1000);
    } else {
      setShowGameOver(false);
    }
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const playAudio = () => {
    let audio = document.getElementById("audio");
    audio.play();
    setIsMusicPlaying(true);
  };
  const pauseAudio = () => {
    let audio = document.getElementById("audio");
    audio.pause();
    setIsMusicPlaying(false);
  };

  return (
    <main className="font-serif text-center bg-[url('./assets/mountains.png')] bg-cover min-h-screen">
      <audio id="audio" loop>
        <source src={bound2} type="audio/mpeg" />
      </audio>
      <nav className="flex justify-between backdrop-blur-sm bg-white/20">
        <div className="flex justify-center flex-grow">
          <img src={bearIcon} alt="" className="w-20 h-20 self-center" />
          <h2
            className="font-logo text-green-300 duration-300 ease-in hover:text-orange-400  cursor-pointer text-lg self-center"
            title={isMusicPlaying ? `Pause 🎶` : `Play 🎶`}
          >
            Ye Said It ?
          </h2>
        </div>
        <div className="self-center ml-auto mr-4 hover:cursor-pointer duration-100 ease-in hover:scale-110">
          {isMusicPlaying ? (
            <button onClick={pauseAudio} className="w-6">
              <img src={music_on} alt="music off" />
            </button>
          ) : (
            <button onClick={playAudio} className="w-6">
              <img src={music_off} alt="music off" />
            </button>
          )}
        </div>
      </nav>
      {showGameOver && <GameOver />}
      <Quote />
    </main>
  );
}

export default App;
