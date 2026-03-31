import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import css from "./App.module.css";

import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Services from "./pages/Services";
import FoodMenu from "./pages/FoodMenu";
import Gallery from "./pages/Gallery";
import Career from "./pages/Career";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className={css.app}>
      <Sidebar />

      <div className={css.content}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/food-menu" element={<FoodMenu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
