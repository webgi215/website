import Logo from "./assets/Logo1.png"
import { useState } from "react";
import IntroAnimation from "./components/IntroAnimation";
import  {} from "./utils"
import SplashCursor from "./components/SplashCursor";
import Navbar from "./components/Navbar"; // Import Navbar

const HomePage = () => {
  return (
    <div>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <header className="h-16 text-[15px] fixed inset-0 flex-center bg-[#18181A]">
      <nav className="px-3.5 flex-center-betweeen w-full max-w-7xl mx-auto">
      <div className="flex-center gap-x-3 z-[999] relative">
        <img src={Logo} className="size-20"/>
        <h3 className="text-lg font-bold text-white">
          WEBGI
        </h3>
      </div>
      {/* Menus */}
      <ul>

      </ul>
      </nav>
      </header>
      
      {/* <Navbar /> Include Navbar at the top */}
      
    </div>
  );
};

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return showIntro ? (
    <IntroAnimation onComplete={() => setShowIntro(false)} />
  ) : (
    <>
      {/* <SplashCursor /> */}
      <HomePage />
    </>
  );
}

export default App;
