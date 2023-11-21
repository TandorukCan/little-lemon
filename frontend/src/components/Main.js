import Specials from "./Specials";
import Highlights from "./Highlights";

function Main() {
  return (
    <main className="App-main">
      {/* <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes> */}
      <Highlights />
      <Specials />
    </main>
  );
}

export default Main;
