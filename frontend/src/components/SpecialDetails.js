import basket from "../assets/shopping-cart.png";

const SpecialDetails = ({ special }) => {
  return (
    <>
      <figure className="Food">
        <img src={special.img} alt="Greek Salad" />
        <div>
          <h2>{special.name}</h2>
          <span>£{special.price}</span>
        </div>

        <p>"{special.description}"</p>
        <section className="Order">
          <a href="/">Order a delivery</a>
          <img src={basket} alt="Shopping Cart" />
        </section>
      </figure>
    </>
  );
};

export default SpecialDetails;
