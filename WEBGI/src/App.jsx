import Logo from "./assets/Logo1.png"
import { useState } from "react";
import IntroAnimation from "./components/IntroAnimation";
import  {Menus} from "./utils"
// import SplashCursor from "./components/SplashCursor";
import DesktopMenu from "./components/DesktopMenu";
import MobMenu from "./components/MobMenu";

const HomePage = () => {
  return (
    <div>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      

      <header className="fixed top-0 left-0 right-0 h-16 bg-[#18181A] flex items-center z-50">
  <nav className="max-w-30xl w-full mx-auto px-4 flex items-center justify-between">
    
    {/* Left: Logo + Brand Name */}
    <div className="flex items-center gap-x-2 flex-shrink-0">
      <img
        src={Logo} 
        alt="Logo"
        className="w-10 h-10 object-contain"
      />
      <h3 className="text-lg font-bold text-white">WEBGI</h3>
    </div>
    
    {/* Right: Desktop Menu & Sign In */}
    <div className="hidden lg:flex items-center gap-x-6 ml-auto">
      {/* Desktop Menu Items */}
      <ul className="flex items-center gap-x-6">
        {Menus.map((menu) => (
          <DesktopMenu menu={menu} key={menu.name} />
        ))}
      </ul>
      
    </div>
    
    {/* Mobile Menu Icon (hidden on large screens) */}
    <div className="lg:hidden">
      <MobMenu Menus={Menus} />
    </div>
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
