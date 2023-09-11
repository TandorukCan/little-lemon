import Hero from "./Hero";
import Highlights from "./Highlights";

function Main() {
  return (
    <main className="App-main">
      {/* <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes> */}
      <Highlights />
      <Hero />
    </main>
  );
}

export default Main;
