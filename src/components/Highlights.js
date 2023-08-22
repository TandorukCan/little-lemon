import restaurantfood from "../assets/restaurantfood.jpg";

function Highlighs() {
  return (
    <div className="Highlights">
      <div>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          "We are a family owned Mediterranean restaurant, focused on
          traditional recipes served with a modern twist."
        </p>
        <button>Reserve a table</button>
      </div>
      <img src={restaurantfood} alt="" />
    </div>
  );
}
export default Highlighs;
