import Hero from "./Hero";
import About from "./About";
import Testimonials from "./Testimonials";
import Highlights from "./Highlights";

function Main() {
  return (
    <div className="App-main">
      <Highlights />
      <Hero />
      <Testimonials />
      <About />
    </div>
  );
}

export default Main;
