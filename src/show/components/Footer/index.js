import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebookF } from 'react-icons/fa';
import I18n from '../../../process/locales/I18n';
const sections = [
  {
    title: I18n.t('footer:skinsolutions'),
    content: (
      <>
        <p><b>{I18n.t('footer.clinicAddress')}</b><br />{I18n.t('footer.clinicAddressDetails')}</p>
        <p><b>{I18n.t('footer.Phone')}</b><br />{I18n.t('footer.PhoneNo')}</p>
        <p><b>{I18n.t('footer.supportNo')}</b><br />{I18n.t('footer.supportNoDetails')}</p>
        <p><b>{I18n.t('footer.email')}</b><br />{I18n.t('footer.emailDetails')}</p>
      </>
    ),
  },
  {
    title: I18n.t('footer:importantLinks'),
    content: (
      <ul className="space-y-1.5">
        {I18n.t('footer.importantLinksItems', { returnObjects: true }).map((item, i) => (
          <li key={i}><Link to="#" className="hover:underline block">{item}</Link></li>
        ))}
      </ul>
    ),
  },
  {
    title: I18n.t('footer:information'),
    content: (
      <ul className="space-y-1.5">
        {I18n.t('footer.informationItems', { returnObjects: true }).map((item, i) => (
          <li key={i}><Link to="#" className="hover:underline block">{item}</Link></li>
        ))}
      </ul>
    ),
  },
  {
    title: I18n.t('footer:clinicTimings'),
    content: (
      <>
        <p className="mb-5">{I18n.t('footer:timings')} </p>
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
  <footer className="bg-zinc-800 text-white mt-5 p-5">
    <div className="flex flex-col md:flex-row px-10">
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