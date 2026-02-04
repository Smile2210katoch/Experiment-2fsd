import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
