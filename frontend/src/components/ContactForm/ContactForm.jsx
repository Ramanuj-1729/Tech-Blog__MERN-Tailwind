import React from 'react';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const ContactForm = () => {
    return (
        <>
            <form action="">
                <div className="form-inputs font-poppins space-y-5">
                    <div className="name-input border-2 border-gray2 rounded-[5px] p-2 space-x-2">
                        <span className='text-gray2'><i class="fa-solid fa-user"></i></span>
                        <input className='border-none outline-none w-96' type="text" name="name" placeholder='Name' />
                    </div>
                    <div className="email-input border-2 border-gray2 rounded-[5px] p-2 space-x-2">
                        <span className='text-gray2'><i class="fa-solid fa-envelope"></i></span>
                        <input className='border-none outline-none w-96' type="email" name="email" placeholder='Email' />
                    </div>
                    <div className="message-input border-2 border-gray2 rounded-[5px] p-2 space-x-2 flex">
                        <span className='text-gray2'><i class="fa-solid fa-comments"></i></span>
                        <textarea className='border-none outline-none w-96' name="message" cols="40" rows="6" placeholder='Message'></textarea>
                    </div>
                </div>
                <div className="form-button relative float-right my-8">
                    <PrimaryButton width="44" height="12" buttonName="Send Message" />
                </div>
            </form>
        </>
    );
}

export default ContactForm;