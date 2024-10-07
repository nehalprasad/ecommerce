import React from 'react';
import Marquee from 'react-fast-marquee';

const messages = [
  "Free Deliveries Above Rs.599",
  "Additional Discounts at Checkout",
  "Free Deliveries Above Rs.599",
  "Additional Discounts at Checkout",
];

const Marquees = () => {
  return (
    <div className="bg-gray text-white text-xs py-1 font-bold">
      <Marquee>
        {messages.map((message, index) => (
          <div key={index} className="px-10">
            {message}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Marquees;