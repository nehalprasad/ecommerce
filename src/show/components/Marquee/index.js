import React from 'react';
import Marquee from 'react-fast-marquee';

import I18n from '../../../process/locales/I18n';

const messages = [
  I18n.t('navbar:freeDeliveries'),
  I18n.t('navbar:additionalDiscount'),
];

const Marquees = () => {
  return (
    <div className="bg-brown text-white text-sm py-1 font-bold">
      <Marquee>
        {messages.concat(messages, messages).map((message, index) => (
          <div key={index} className="px-10">
            {message}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Marquees;