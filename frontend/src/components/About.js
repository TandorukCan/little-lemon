import marioAndAdrian from "../assets/MarioandAdrianA.jpg";

function About() {
  return (
    <section className="About">
      <article>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.{" "}
        </p>
      </article>
      <img src={marioAndAdrian} alt="" />
    </section>
  );
}
export default About;
