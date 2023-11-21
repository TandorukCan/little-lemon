// import greekSalad from "../assets/greekSalad.jpg";
// import lemonDessert from "../assets/lemonDessert.jpg";
// import bruchetta from "../assets/bruchetta.svg";
// import basket from "../assets/shopping-cart.png";
import { useEffect, useState } from "react";

//components
import SpecialDetails from "../components/SpecialDetails";

function Specials() {
  const [specials, setSpecials] = useState(null);
  useEffect(() => {
    const fetchSpecials = async () => {
      const response = await fetch("/api/specials");
      const json = await response.json();

      if (response.ok) {
        setSpecials(json);
      }
    };
    fetchSpecials();
  }, []);

  return (
    <>
      <section className="SpecialsHeading">
        <h1>This Weeks Specials!</h1>
        <button>Online Menu</button>
      </section>

      <section className="Specials">
        {specials &&
          specials.map((special) => (
            <SpecialDetails key={special._id} special={special} />
          ))}
        {/* <figure className="Food1">
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
      </section> */}
      </section>
    </>
  );
}
export default Specials;
