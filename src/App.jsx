import { Router, BrowserRouter as Route, Routes } from "react-router-dom";

import { Navbar, Home, About, Projects, Contact } from "./components";

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" Element={<Home />} />
          <Route path="/about" Element={<About />} />
          <Route path="/projects" Element={<Projects />} />
          <Route path="/contact" Element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
