import React, { useState, useEffect } from 'react';
import './SliderStyles.css';

const testimonials = [
  {
    id: 1,
    name: "Himalayan Trip Nepal",
    quote: "Website: https://www.himalayantripnepal.com.",
    image: "https://himalayatrip.com/wp-content/uploads/2023/11/everest-base-camp-trek-2023-jpg.webp"
  },
  {
    id: 2,
    name: "Annapurna Travels",
    quote: "Website: http://www.annapurnatravel.com.",
    image: "https://www.annapurnatravel.com/uploaded/banner/cc3__nepal-banner.jpg"
  },
  {
    id: 3,
    name: "Yeti Travels",
    quote: "Website: http://www.yetitravels.com/.",
    image: "https://www.yetitravels.com/res/photos/img_4993d0138d69b.jpg"
  }
];

const TestimonialSlider = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextTestimonial();
    }, 2000); // Change testimonial every 2 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, [currentTestimonial]);

  const nextTestimonial = () => {
    setCurrentTestimonial(currentTestimonial === testimonials.length - 1 ? 0 : currentTestimonial + 1);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1);
  };

  return (
    <div className="testimonial-slider">
      <h1>Travel Agency</h1>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial-item ${index === currentTestimonial ? 'active' : ''}`}
            style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
          >
            <img src={testimonial.image} alt={testimonial.name} />
            <div className="testimonial-details">
              <p className="quote">{testimonial.quote}</p>
              <p className="name">{testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;


