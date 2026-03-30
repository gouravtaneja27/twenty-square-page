"use client";
import React from "react";
import Button from "./common/Button";
import Icons from "./common/Icons";
import Slider from "./common/Slider";
const Hero = () => {
    const stepsList = [
        "Peel the protective paper of the adhesive",
        "Place the frames against the wall and press firmly.",
        "Enjoy! (and feel free to rearrange).",
    ];
    return (
        <section className="lg:absolute inset-0 flex justify-center items-start mt-20 sm:mt-28 lg:mt-39.25 px-4 lg:px-2">
            <div className="w-full flex flex-col items-center">
                <h1 className="text-center font-semibold max-w-182 text-3xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[130%] bg-gradient-to-r from-black to-[#494949] bg-clip-text text-transparent">
                    A wonderful way to Transform your walls.
                </h1>
                <p className="text-center mt-4 sm:mt-6 max-w-170 font-medium text-sm lg:text-lg xl:text-xl leading-[140%] text-black">
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
                <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-7.75 mt-20 sm:mt-32 lg:mt-87.25">
                    <div className="w-full max-w-137.5">
                        <h2 className="font-semibold text-3xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[130%] bg-gradient-to-r from-black to-[#494949] bg-clip-text text-transparent">
                            It's so simple, even a child can do it.
                        </h2>
                        <div className="mt-6 sm:mt-6.75">
                            {stepsList.map((step, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 sm:gap-4.25 p-3 sm:p-4"
                                >
                                    <div className="flex items-center py-1.5 sm:py-1.75 px-3 bg-[linear-gradient(92.96deg,#ED1C25_-1.33%,#ED1C25_106.26%)] rounded-[41px] text-[10px] font-semibold text-white">
                                        {i + 1}
                                    </div>

                                    <p className="font-medium text-base sm:text-xl leading-[140%] text-black">
                                        {step}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <Button
                            className="mt-5 sm:mt-6 flex items-center py-2 sm:py-3 px-5 sm:px-[24.5px] text-white font-semibold text-sm sm:text-lg lg:text-xl rounded-[82px] bg-[#ED1C25] shadow-[0px_12px_43.8px_-10px_#ED1C25]"
                            text="Square Your Photos"
                        />
                    </div>
                    <div className="w-full">
                        <Slider />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;