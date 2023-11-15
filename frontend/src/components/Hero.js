import greekSalad from "../assets/greekSalad.jpg";
import lemonDessert from "../assets/lemonDessert.jpg";
import bruchetta from "../assets/bruchetta.svg";
import basket from "../assets/shopping-cart.png";

function Hero() {
  return (
    <section className="Hero">
      <h1>This Weeks Specials!</h1>
      <button>Online Menu</button>
      <figure className="Food1">
        <img src={greekSalad} alt="Greek Salad" />
        <div>
          <h2>Greek Salad</h2>
          <span>£12.99</span>
        </div>

        <p>
          "The famous greek salad of crispy lettuce, peppers, olives and our
          Chicago style feta cheese, garnished with crunchy garlic and rosemary
          croutons."
        </p>
      </figure>
      <section className="Order1">
        <a href="/">Order a delivery</a>
        <img src={basket} alt="Shopping Cart" />
      </section>
      <figure className="Food2">
        <img src={bruchetta} alt="Bruchetta" />
        <div>
          <h2>Bruchetta</h2>
          <span>£5.99</span>
        </div>
        <p>
          "Our Bruschetta is made from grilled bread that has been smeared with
          garlic and seasoned with salt and olive oil."
        </p>
      </figure>
      <section className="Order2">
        <a href="/">Order a delivery</a>
        <img src={basket} alt="Shopping Cart" />
      </section>
      <figure className="Food3">
        <img src={lemonDessert} alt="Lemon Dessert" />
        <div>
          <h2>Lemon Dessert</h2>
          <span>£5.00</span>
        </div>
        <p>
          "This comes straight from grandma’s recipe book, every last ingredient
          has been sourced and is as authentic as can be imagined."
        </p>
      </figure>
      <section className="Order3">
        <a href="/">Order a delivery</a>
        <img src={basket} alt="Shopping Cart" />
      </section>
    </section>
  );
}
export default Hero;
