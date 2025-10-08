import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import FloatingParticles from "./components/FloatingParticles";
import TerminalCursor from "./components/TerminalCursor";
import LoadingScreen from "./components/LoadingScreen";
import Home from "./pages/Home";
import ProjectsYear1 from "./pages/ProjectsYear1";
import ProjectsYear2 from "./pages/ProjectsYear2";
import Hobbies from "./pages/Hobbies";
import CCA from "./pages/CCA";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";

const AppContent = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState(location.pathname);

  useEffect(() => {
    if (location.pathname !== prevLocation) {
      setLoading(true);
      setPrevLocation(location.pathname);
    }
  }, [location, prevLocation]);

  const handleLoadingComplete = () => {
    setLoading(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <FloatingParticles />
      <TerminalCursor />
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/year1" element={<ProjectsYear1 />} />
          <Route path="/projects/year2" element={<ProjectsYear2 />} />
          <Route path="/activities/hobbies" element={<Hobbies />} />
          <Route path="/activities/cca" element={<CCA />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

export default App;
