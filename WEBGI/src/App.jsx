import { useState } from "react";
import IntroAnimation from "./components/IntroAnimation";
import CustomCursor from "./shared/customCursor"; // ✅ Keep this
import HomePage from "./Pages/HomePage"; // ✅ Keep your version

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return showIntro ? (
    <IntroAnimation onComplete={() => setShowIntro(false)} />
  ) : (
    <>
      <CustomCursor /> {/* ✅ Use CustomCursor */}
      <HomePage />
    </>
  );
}

export default App;
