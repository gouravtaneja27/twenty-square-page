"use client";

import React from "react";
import Button from "./common/Button";

const Simple = () => {
    const stepsData = [
        "Peel the protective paper of the adhesive",
        "Place the frames against the wall and press firmly.",
        "Enjoy! (and feel free to rearrange).",
    ];

    return (
        <section>
            <div className="w-full max-w-137.5 z-10">

                {/* Heading */}
                <h2 className="font-semibold text-3xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[130%] bg-gradient-to-r from-black to-[#494949] bg-clip-text text-transparent">
                    It's so simple, even a child can do it.
                </h2>

                {/* Steps */}
                <div className="mt-6 sm:mt-6.75">
                    {stepsData.map((text, index) => (
                        <div
                            key={`step-${index}`}
                            className="flex items-center gap-3 sm:gap-4.25 p-3 sm:p-4"
                        >
                            <span className="flex items-center py-1.5 sm:py-1.75 px-3 bg-[linear-gradient(92.96deg,#ED1C25_-1.33%,#ED1C25_106.26%)] rounded-[41px] text-[10px] font-semibold text-white">
                                {index + 1}
                            </span>

                            <p className="font-medium text-base sm:text-xl leading-[140%] text-black">
                                {text}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <Button
                    className="mt-5 sm:mt-6 flex items-center py-2 sm:py-3 px-5 sm:px-[24.5px] text-white font-semibold text-sm sm:text-lg lg:text-xl rounded-[82px] bg-[#ED1C25] shadow-[0px_12px_43.8px_-10px_#ED1C25]"
                    text="Square Your Photos"
                />

            </div>
        </section>
    );
};

export default Simple;