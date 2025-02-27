import { useState } from "react";
import IntroAnimation from "./components/IntroAnimation";
import CustomCursor from "./shared/customCursor";
import HomePage from "./Pages/HomePage/Homepage";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return showIntro ? (
    <IntroAnimation onComplete={() => setShowIntro(false)} />
  ) : (
    <>
      <CustomCursor />
      <HomePage />
    </>
  );
}

export default App;
