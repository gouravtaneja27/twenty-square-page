"use client";
import React from "react";
import Button from "./common/Button";
import Icons from "./common/Icons";
const Hero = () => {
    return (
        <section className="z-10 flex justify-center items-start mt-20 sm:mt-28 lg:mt-39.25 px-4 lg:px-2">
            <div className="w-full flex flex-col items-center">
                <h1 className="text-center font-semibold max-w-182 text-3xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[130%] bg-gradient-to-r from-black to-[#494949] bg-clip-text text-transparent">
                    A wonderful way to Transform your walls.
                </h1>
                <p className="mt-4 sm:mt-6 text-center max-w-170 font-medium text-sm lg:text-lg xl:text-xl leading-[140%] text-black">
                    No matter your decorating style, we've got the tricks that can give life
                    to your walls and bring out your true personality.
                </p>
                <Button
                    className="mt-5 sm:mt-6 flex items-center py-2 sm:py-3 px-5 sm:px-[24.5px] text-white font-semibold text-sm sm:text-lg lg:text-xl rounded-[82px] bg-[#ED1C25] shadow-[0px_12px_43.8px_-10px_#ED1C25]"
                    text="Square Your Photos"
                />
                <div className="mt-12 sm:mt-20 lg:mt-22.25 text-[12px] text-[#1E1E1E]">
                    <Icons icon="arrow" />
                </div>
            </div>
        </section>
    );
};

export default Hero;