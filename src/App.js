import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Highlights from "./components/Highlights";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <body className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/highlights" element={<Highlights />} />
        <Route path="/specials" element={<Hero />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </body>
  );
}

export default App;
