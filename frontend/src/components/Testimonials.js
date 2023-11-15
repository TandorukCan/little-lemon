import { useEffect, useState } from "react";

//components
import TestimonialDetails from "../components/TestimonialDetails";

function Testimonials() {
  const [testimonials, setTestimonials] = useState(null);
  useEffect(() => {
    const fetchTestimonials = async () => {
      const response = await fetch("/api/testimonials");
      const json = await response.json();

      if (response.ok) {
        setTestimonials(json);
      }
    };
    fetchTestimonials();
  }, []);
  return (
    <section className="Testimonials">
      <h1>Testimonials</h1>
      <span className="TestimonialGrid">
        {testimonials &&
          testimonials.map((testimonial) => (
            <TestimonialDetails
              key={testimonial._id}
              testimonial={testimonial}
            />
          ))}
      </span>
    </section>
  );
}
export default Testimonials;

// below is for mongoDB
// db.testimonials.insertOne( { name: "Baris Gogus", userName: "Borisso23", comment: "We had such a great time celebrating my grandmothers birthday!", img: "https://pbs.twimg.com/profile_images/444190880463724544/6ERVCdWr_400x400.jpeg"})
// db.testimonials.insertOne( { name: "Ugurcan Kochan", userName: "UkeceUki", comment: "Best Feta Salad in town. Flawless everytime!", img: "https://media.licdn.com/dms/image/C5603AQG66p0mIS6H8w/profile-displayphoto-shrink_200_200/0/1648298719380?e=1704326400&v=beta&t=1c1NmMSWWE37_FIDFS1l_O0On2GQwb04sXXa0XT4G6U"})
// db.testimonials.insertOne( { name: "Kaan Bilge", userName: "Kaan8064", comment: "Seriously cannot stop thinking about the Turkish MacNCheese!!", img: "https://media.licdn.com/dms/image/D4D03AQE00GnstO2T5Q/profile-displayphoto-shrink_200_200/0/1698861169340?e=1704326400&v=beta&t=iG4URSJVw5kLRPO4pHJFU3OIMFj3i1fg2WVJmxCECYc"})
