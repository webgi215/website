import { useState } from "react";
import IntroAnimation from "./components/IntroAnimation";
import SplashCursor
 from "./components/SplashCursor";
const HomePage = () => {
  return (

    <div className="flex h-screen items-center justify-center bg-gray-900 text-white ">
      <h1 className="text-5xl font-bold">Welcome to WebGi</h1>
    </div>

  );
};

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return showIntro ? <IntroAnimation onComplete={() => setShowIntro(false)} /> :
  <><SplashCursor /> <HomePage /></>;
  
}

export default App;