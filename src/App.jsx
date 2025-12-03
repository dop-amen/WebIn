import "./App.css";
import Home from "./pages/Home";
import Header from "../src/layouts/Header.jsx";
import Footer from "./layouts/Footer.jsx";
import About from "./pages/About";
import CheckoutPage from "./layouts/CheckoutPage";
import { Routes,Route } from "react-router";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
