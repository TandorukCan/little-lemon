import Hero from "./Hero";
import About from "./About";
import Testimonials from "./Testimonials";
import Highlights from "./Highlights";

function Main() {
  return (
    <div className="App-main">
      {/* <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes> */}
      <Highlights />
      <Hero />
      <Testimonials />
      <About />
    </div>
  );
}

export default Main;
