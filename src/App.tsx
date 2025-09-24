import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import History from "./pages/History";
import Product from "./pages/Product";
import Vql from "./pages/Vql";
import Inquiry from "./pages/Inquiry";
import Direction from "./pages/Direction";
import Hss from "./pages/Hss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/history" element={<History />} />
          <Route path="/product" element={<Product />} />
          <Route path="/vql" element={<Vql />} />
          <Route path="/hss" element={<Hss />} />
          <Route path="/direction" element={<Direction />} />
          <Route path="/inquiry" element={<Inquiry />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
