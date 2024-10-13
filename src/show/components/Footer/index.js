import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebookF } from 'react-icons/fa';

const sections = [
  {
    title: 'Skin Solutions',
    content: (
      <>
        <p><b>Clinic Address:</b><br />D- 396, Defence Colony, Delhi 110024</p>
        <p><b>Clinic Phone No:</b><br />9821-585-586</p>
        <p><b>Support No:</b><br />01141048056 (10 AM - 5 PM)</p>
        <p><b>Email:</b><br />skinsolutions@gmail.com</p>
      </>
    ),
  },
  {
    title: 'Important Links',
    content: (
      <ul className="space-y-1.5">
        {['Meet our Doctors', 'My Account', 'Media Coverage', 'Blogs', 'Cart', 'Sitemap'].map((item, i) => (
          <li key={i}><Link to="#" className="hover:underline block">{item}</Link></li>
        ))}
      </ul>
    ),
  },
  {
    title: 'Information',
    content: (
      <ul className="space-y-1.5">
        {['Contacts', 'Shipping Policy', 'Refund & Return Policy', 'Privacy Policy', 'Terms & Conditions'].map((item, i) => (
          <li key={i}><Link to="#" className="hover:underline block">{item}</Link></li>
        ))}
      </ul>
    ),
  },
  {
    title: 'Clinic Timings:',
    content: (
      <>
        <p className="mb-5">Tuesday to Sunday - 12:00 PM to 6:30 PM. Closed on Monday</p>
        <div className="flex space-x-2">
          {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
            <a key={index} href="#" className="bg-white rounded-full p-1.5 text-gray-800 hover:text-blue-800">
              <Icon size={7} />
            </a>
          ))}
        </div>
      </>
    ),
  },
];

const Footer = () => (
  <footer className="bg-zinc-800 text-white px-5">
    <div className="container mx-auto flex flex-col md:flex-row">
      {sections.map(({ title, content }, index) => (
        <div className="w-full md:w-1/4 mb-8 md:mb-0" key={index}>
          <h2 className="text-xs font-bold uppercase mb-2">{title}</h2>
          <div className="text-xs text-lightbrown">
            {content}
          </div>
        </div>
      ))}
    </div>
  </footer>
);

export default Footer;