import React from 'react';
import { NavLink } from 'react-router-dom';
import ContactForm from '../../components/ContactForm/ContactForm';

const ContactUs = () => {
  return (
    <>
      <div className="contactUs-wrapper flex items-center justify-center flex-col">
        <h1 className='font-poppins block mx-auto text-5xl font-semibold text-fontColor leading-[1.2] mt-8 mb-4'>Contact Us</h1>
        <p className='font-poppins block mx-auto text-base font-medium text-gray3 mb-8'>Any question or remaks ? Just write us a message !</p>
        <div className="contactUs-main flex items-center justify-center space-x-28">
          <div className="contactUs-image-wrapper">
            <img className='w-[450px]' src="/images/contact_us.svg" alt="contact us" />
          </div>
          <div className="contactUs-form-wrapper">
            <ContactForm />
          </div>
        </div>
        <div className="social-media-links font-semibold text-base text-fontColor font-poppins flex items-center justify-center space-x-40 my-3">
          <NavLink to="#">
            <div className="email-link space-x-4">
              <span className='text-primary'><i class="fa-solid fa-at"></i></span>
              <span>contact@techblog.com</span>
            </div>
          </NavLink>
          <NavLink to="#">
            <div className="instagram-link space-x-4">
              <span className='text-primary'><i className="fa-brands fa-instagram"></i></span>
              <span>instagram.com/techblog</span>
            </div>
          </NavLink>
          <NavLink to="#">
            <div className="facebook-link space-x-4">
              <span className='text-primary'><i className="fa-brands fa-facebook-f"></i></span>
              <span>facebook.com/techblog</span>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default ContactUs;