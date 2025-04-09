import { useState } from "react";
import IntroAnimation from "./components/IntroAnimation";
import SplashCursor from "./components/SplashCursor";
import HomePage from "./Pages/HomePage"; // ✅ Import new homepage

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return showIntro ? (
    <IntroAnimation onComplete={() => setShowIntro(false)} />
  ) : (
    <>
      <SplashCursor />
      <HomePage />
    </>
  );
}

export default App;
