import React from 'react'
import Button from './Button'

const Footer = () => {
    return (
        <div className='w-full bg-[#F2F2F2] mt-20 sm:mt-32 lg:mt-58.25'>
            <div className='max-w-324 mx-auto w-full px-4'>

                <div className='flex flex-col lg:flex-row gap-10 lg:gap-[345.77px]'>

                    <div className='flex flex-col sm:flex-row justify-center gap-10 sm:gap-20 lg:gap-43.75 pt-9.5'>

                        <div className='flex justify-center sm:justify-start'>
                            <img src="/assets/logo.webp" alt="" className='w-28 sm:w-35.5  h-15' />
                        </div>

                        <div className='flex gap-10 sm:gap-16'>

                            <div className='w-33.75 flex flex-col'>
                                <h3 className='font-medium text-base leading-[150%] text-black'>About</h3>
                                <a href="" className='hover:text-black pt-5 font-normal text-sm leading-[150%] text-[#4A4F4B]'>About Us</a>
                                <a href="" className='hover:text-black pt-3 font-normal text-sm leading-[150%] text-[#4A4F4B]'>FAQ’s</a>
                                <a href="" className='hover:text-black pt-3 font-normal text-sm leading-[150%] text-[#4A4F4B]'>Policies</a>
                            </div>

                            <div className='w-33.75 flex flex-col'>
                                <h3 className='font-medium text-base leading-[150%] text-black'>Products</h3>
                                <a href="" className='hover:text-black pt-5 font-normal text-sm leading-[150%] text-[#4A4F4B]'>Squares</a>
                                <a href="" className='hover:text-black pt-3 font-normal text-sm leading-[150%] text-[#4A4F4B]'>Gift Cards</a>
                                <a href="" className='hover:text-black pt-3 font-normal text-sm leading-[150%] text-[#4A4F4B]'>Offers</a>
                            </div>
                        </div>
                    </div>
                    <div className='max-w-[330px] w-full mt-6 lg:mt-[14.45px] mx-auto lg:mx-0 -rotate-3 rounded-2xl flex flex-col bg-white shadow-[-33px_37px_43.8px_-17px_#0000001A] px-5 sm:px-6.25'>
                        <img src="/assets/message.png" alt="" className='w-10 sm:w-12.25 h-10 sm:h-12.5' />
                        <h4 className='font-semibold text-xl sm:text-2xl pt-[4.66px] leading-[100%] bg-gradient-to-r from-black to-[#494949] bg-clip-text text-transparent'>
                            Need some help?
                        </h4>
                        <div className='flex flex-col sm:flex-row mt-[4.96px] items-center gap-3 sm:gap-[7.72px]'>
                            <Button className={"py-2.5 px-4 rounded-[82px] bg-[#F2F2F2] border border-[#E3E3E3] text-semibold text-[#2B2B2B] text-sm leading-[100%]"} text={"Chat With Us"} />
                            <Button className={"py-2.5 px-4 rounded-[82px] bg-[#F2F2F2] border border-[#E3E3E3] text-semibold text-[#2B2B2B] text-sm leading-[100%]"} text={"Contact Us"} />
                        </div>
                    </div>
                </div>
                <div className='border-t border-t-[#0000001A] py-8 sm:py-12.75 flex flex-col sm:flex-row items-center mt-10 sm:mt-[41.69px] justify-between w-full gap-4'>
                    <h4 className='font-normal text-xs sm:text-sm leading-[150%] text-black text-center sm:text-left'>
                        Twenty Square © 2024. All Rights Reserved.
                    </h4>
                    <div className='flex items-center gap-4.25'>
                        <a href=""><img src="/assets/insta.png" alt="" className='w-5 sm:w-6 h-5 sm:h-6 rounded-xl' /></a>
                        <a href=""><img src="/assets/facebook.png" alt="" className='w-5 sm:w-6 h-5 sm:h-6 rounded-xl' /></a>
                        <a href=""><img src="/assets/youtube.png" alt="" className='w-6 sm:w-7 h-6 sm:h-7 rounded-xl' /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer