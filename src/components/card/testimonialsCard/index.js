import React from "react";
import "./testimonials.scss";
import img from "../../../images/quote-up.png";
import heroImg from "../../../images/heroImg.png";
import rating from "../../../images/rating.png";

const TestimonialsCard = ({testimonialWriter, testimonialrating, testimonialWriterImg}) => {
  return (
    <div className="card-testimonial">
      <div className="card-testimonial__content">
        <div className="card-testimonial__logo">
          <img src={img} alt="quote-up" />
        </div>
        <div className="card-testimonial__text">
          <p>
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non.{" "}
          </p>
        </div>
        <div className="card-testimonial__personaldetails">
          <div className="name">
            <div>
              <img src={testimonialWriterImg} />
            </div>
            <div>
              <h3>{testimonialWriter}</h3>
            </div>
          </div>
          <div className="rating">
            <div><img src={rating} alt="rating" /></div>
            <div><h3>{testimonialrating}</h3></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
