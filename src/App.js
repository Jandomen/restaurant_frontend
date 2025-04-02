import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Navbar from "./components/Navbar";
import Menu from "./pages/Menu";
import Reservas from "./pages/Reservas";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("darkMode");
    if (storedTheme) {
      setDarkMode(storedTheme === "true");
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
  };

  return (
    <div className={darkMode ? "bg-black text-white min-h-screen" : "bg-white text-black min-h-screen"}>
      <Router>
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservas" element={<Reservas />} />
        </Routes>
        <Footer darkMode={darkMode} />
      </Router>
    </div>
  );
}

export default App;
