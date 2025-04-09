import { useState } from "react";
import IntroAnimation from "./components/IntroAnimation";
import CustomCursor from "./shared/customCursor"; // ✅ Keep this
import HomePage from "./Pages/Homepage"; // ✅ Keep your version
import Layout from "./components/Layout"; // ✅ Keep your version

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return showIntro ? (
    <IntroAnimation onComplete={() => setShowIntro(false)} />
  ) : (
    <>
       {/* ✅ Use CustomCursor */}
      <Layout>
      <CustomCursor />
      <HomePage />
    </Layout>
    </>
  );
}

export default App;
