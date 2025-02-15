import { useState } from "react";
import IntroAnimation from "./components/IntroAnimation";
import SplashCursor
 from "./components/SplashCursor";
const HomePage = () => {
  return (
    <div>
  <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <h1 className="text-5xl font-bold text-white flex justify-center ">Welcome to WebGi</h1>
    </div>

    
  );
};

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return showIntro ? <IntroAnimation onComplete={() => setShowIntro(false)} /> :
  <><SplashCursor /> <HomePage /></>;
  
}

export default App;