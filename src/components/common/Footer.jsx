"use client";
import React from "react";
import Button from "./Button";
const Footer = () => {
    const aboutLinks = ["About Us", "FAQ’s", "Policies"];
    const productLinks = ["Squares", "Gift Cards", "Offers"];
    return (
        <footer className="w-full bg-[#F2F2F2] mt-20 sm:mt-32 lg:mt-25.25">
            <div className="max-w-324 mx-auto w-full px-4">
                <div className="flex flex-col xl:flex-row gap-10 xl:gap-[345.77px]">
                    <div className="flex flex-col sm:flex-row justify-center gap-10 sm:gap-20 lg:gap-43.75 pt-9.5">
                        <div className="flex justify-center lg:justify-start">
                            <img
                                src="/assets/footer-img.png"
                                alt="footer-logo"
                                className="w-28 sm:w-35.5 h-15"
                            />
                        </div>
                        <div className="flex">
                            <div className="w-33.75 flex flex-col">
                                <h3 className="text-base font-medium text-black leading-[150%]">
                                    About
                                </h3>
                                {aboutLinks.map((item, i) => (
                                    <a
                                        key={`about-${i}`}
                                        href="#"
                                        className={`font-normal text-sm leading-[150%] text-[#4A4F4B] hover:text-black ${i === 0 ? "pt-5" : "pt-3"
                                            }`}
                                    >
                                        {item}
                                    </a>
                                ))}
                            </div>
                            <div className="w-33.75 flex flex-col">
                                <h3 className="text-base font-medium text-black leading-[150%]">
                                    Products
                                </h3>

                                {productLinks.map((item, i) => (
                                    <a
                                        key={`product-${i}`}
                                        href="#"
                                        className={`font-normal text-sm leading-[150%] text-[#4A4F4B] hover:text-black ${i === 0 ? "pt-5" : "pt-3"
                                            }`}
                                    >
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-[320px] mx-auto lg:mx-0 mt-6 lg:mt-[14.45px] sm:h-38 -rotate-3 rounded-2xl flex flex-col bg-white shadow-[-33px_37px_43.8px_-17px_#0000001A] px-3 sm:px-6.25 py-4 sm:py-0">

                        <img
                            src="/assets/message.png"
                            alt="help-icon"
                            className="w-10 sm:w-12.25 h-10 sm:h-12.5"
                        />

                        <h4 className="pt-[4.66px] text-xl sm:text-2xl font-semibold leading-[100%] bg-gradient-to-r from-black to-[#494949] bg-clip-text text-transparent">
                            Need some help?
                        </h4>

                        <div className="flex items-center mt-[10.96px] gap-3 sm:gap-[7.72px]">
                            <Button
                                className="py-2 px-[16.30px] rounded-[82px] bg-[#F2F2F2] border border-[#E3E3E3] text-[#2B2B2B] text-sm"
                                text="Chat With Us"
                            />
                            <Button
                                className="py-[8.5px] px-4 rounded-[82px] bg-[#F2F2F2] border border-[#E3E3E3] text-[#2B2B2B] text-sm"
                                text="Contact Us"
                            />
                        </div>
                    </div>
                </div>
                <div className="border-t border-[#0000001A] mt-10 sm:mt-[41.69px] py-8 sm:py-12.75 flex flex-col sm:flex-row items-center justify-between gap-4">

                    <p className="text-xs sm:text-sm text-black text-center sm:text-left leading-[150%]">
                        Twenty Square © 2024. All Rights Reserved.
                    </p>

                    <div className="flex items-center gap-4.25">
                        <a href="#">
                            <img src="/assets/insta.png" alt="instagram" className="w-5 sm:w-6 h-5 sm:h-6 rounded-xl" />
                        </a>
                        <a href="#">
                            <img src="/assets/facebook.png" alt="facebook" className="w-5 sm:w-6 h-5 sm:h-6 rounded-xl" />
                        </a>
                        <a href="#">
                            <img src="/assets/youtube.png" alt="youtube" className="w-6 sm:w-7 h-6 sm:h-7 rounded-xl" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;