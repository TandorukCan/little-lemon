const TestimonialDetails = ({ testimonial }) => {
  return (
    <section className="Card">
      <figure>
        <img src={testimonial.img} alt="" />
        <h3>
          {testimonial.author} <br />
          {testimonial.username}
        </h3>
      </figure>
      <p>"{testimonial.comment}"</p>
      <p>{testimonial.createdAt}</p>
    </section>
  );
};

export default TestimonialDetails;
