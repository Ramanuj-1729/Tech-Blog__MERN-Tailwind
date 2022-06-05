import React from 'react';

const Footer = () => {
    return (
        <>
            <div className="footer-wrapper flex items-center justify-center">
                <div className="main-footer max-w-[1536px] flex items-center justify-center flex-col bg-fontColor w-full h-56 space-y-16">
                    <div className="social-media flex items-center justify-center text-2xl text-fontColor space-x-5">
                        <div className="instagram flex items-center justify-center bg-white w-12 h-12 rounded-full cursor-pointer"><i class="fa-brands fa-instagram"></i></div>
                        <div className="facebook flex items-center justify-center bg-white w-12 h-12 rounded-full cursor-pointer"><i class="fa-brands fa-facebook-f"></i></div>
                    </div>
                    <div className="copy-right font-poppins block mx-auto font-medium text-base text-white">© 2022 TECHBLOG. All rights reserved.</div>
                </div>
            </div>
        </>
    );
}

export default Footer;