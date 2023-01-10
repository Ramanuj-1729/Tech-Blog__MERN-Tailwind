import React from 'react';
import { NavLink } from 'react-router-dom';
import ContactForm from '../../components/ContactForm/ContactForm';

const ContactUsPage = () => {
  return (
    <>
      <div className="contactUs-wrapper flex items-center justify-center flex-col wideScreen:mt-10 desktop:mt-5 mediumTablet:mt-2 largePhone:mt-2">
        <h1 className='font-poppins block mx-auto wideScreen:text-6xl desktop:text-5xl mediumTablet:text-4xl largePhone:text-4xl font-semibold text-fontColor leading-[1.2] mt-8 mb-4'>Contact Us</h1>
        <p className='font-poppins block mx-auto wideScreen:text-lg mediumTablet:text-base largePhone:text-base font-medium text-gray3 mb-8'>Any question or remaks ? Just write us a message !</p>
        <div className="contactUs-main flex items-center justify-center mediumTablet:flex-row largePhone:flex-col largeTablet:space-x-28 mediumTablet:space-x-8">
          <div className="contactUs-image-wrapper mediumTablet:mb-0 smallTablet:mb-6 largePhone:mb-6">
            <img className='wideScreen:w-[480px] desktop:w-[420px] largeTablet:w-[380px] mediumTablet:w-[320px] largePhone:w-[400px]' src="/images/contact_us.svg" alt="contact us" />
          </div>
          <div className="contactUs-form-wrapper">
            <ContactForm />
          </div>
        </div>
        <div className="social-media-links font-semibold largeTablet:text-base mediumTablet:text-sm smallTablet:text-xs text-fontColor font-poppins flex items-center justify-center wideScreen:space-x-52 desktop:space-x-44 largeTablet:space-x-28 mediumTablet:space-x-12 smallTablet:space-x-5 largePhone:space-x-44 mt-20 wideScreen:mb-3 largeTablet:mb-2 mediumTablet:mb-1 largePhone:mb-1">
          <NavLink to="#">
            <div className="email-link mediumTablet:space-x-4 largePhone:space-x-2">
              <span className='text-primary'><i className="fa-solid fa-at"></i></span>
              <span className='smallTablet:inline largePhone:hidden'>contact@techblog.com</span>
            </div>
          </NavLink>
          <NavLink to="#">
            <div className="instagram-link mediumTablet:space-x-4 largePhone:space-x-2">
              <span className='text-primary'><i className="fa-brands fa-instagram"></i></span>
              <span className='smallTablet:inline largePhone:hidden'>instagram.com/techblog</span>
            </div>
          </NavLink>
          <NavLink to="#">
            <div className="facebook-link mediumTablet:space-x-4 largePhone:space-x-2">
              <span className='text-primary'><i className="fa-brands fa-facebook-f"></i></span>
              <span className='smallTablet:inline largePhone:hidden'>facebook.com/techblog</span>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default ContactUsPage;