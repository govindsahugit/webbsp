import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import "remixicon/fonts/remixicon.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <div className="relative z-0 w-full">
            <Contact />
          </div>
        </div>
        {/* <Routes>
          <Router path="/contack-us" element={<Contact />} />
        </Routes> */}
      </BrowserRouter>
    </>
  );
}

export default App;
