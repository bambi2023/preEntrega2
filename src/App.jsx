import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clothing" element={<p>clothing</p>} />
          <Route path="/jewelery" element={<p>Joyas</p>} />
          <Route path="/cart" element={<p>Carrito</p>} />
          <Route path="/detalle/:id" element={<p>detalle</p>} />
          <Route path="*" element={<p>404 vuelva a intenta por favor</p>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
