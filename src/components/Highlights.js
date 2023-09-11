import restaurantfood from "../assets/restaurantfood.jpg";
import { Link } from "react-router-dom";

function Highlighs() {
  return (
    <section className="Highlights">
      <article>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          "We are a family owned Mediterranean restaurant, focused on
          traditional recipes served with a modern twist."
        </p>
        <Link to="/booking">
          <button>Reserve a table</button>
        </Link>
      </article>
      <img src={restaurantfood} alt="" />
    </section>
  );
}
export default Highlighs;
