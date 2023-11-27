import { Suspense, useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar, Footer } from "./components";
import { About, Contact, Home, Projects } from "./pages";

import { soundoff, soundon } from "./assets/icons";
import sakura from "./assets/sakura.mp3";

const App = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 1;
  audioRef.current.loop = true;

  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => audioRef.current.pause();
  }, [isPlayingMusic]);

  return (
    <main className="bg-slate-300/20 h-full">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/*"
            element={
              <>
                <Routes>
                  <Route path="/about" element={<About />} />

                  <Route path="/projects" element={<Projects />} />

                  <Route path="/contact" element={<Contact />} />
                </Routes>

                <Footer />
              </>
            }
          />
        </Routes>
      </Router>

      <div className="fixed bottom-2 left-2">
        <img
          src={isPlayingMusic ? soundon : soundoff}
          alt="sound"
          className="w-10 h-10 object-contain cursor-pointer"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </main>
  );
};

export default App;
