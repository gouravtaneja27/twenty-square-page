"use client";
import { navLInks } from "@/utils/helper";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "./Button";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 1);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className="w-full mx-auto fixed top-0 z-20">
            {/* Navbar */}
            <div
                className={`max-w-360 w-full mx-auto px-4 sm:px-6 pt-3 pb-3.25 flex items-center justify-between transition-all duration-300 ${scrolled
                        ? "bg-white shadow-md"
                        : "bg-[linear-gradient(180deg,#FFFFFF_0%,rgba(255,255,255,0)_100%)]"
                    }`}
            >
                {/* Logo */}
                <a href="">
                    <img
                        src="/assets/logo.webp"
                        alt="logo"
                        className="w-[80px] sm:w-[90.47px] h-auto"
                    />
                </a>
                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center justify-between gap-29.75">
                    <div className="flex items-center gap-10.25">
                        {navLInks.map((item, index) => (
                            <Link
                                key={index}
                                href={item.url}
                                className="font-normal text-base text-black"
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center gap-2.5">
                        <Button
                            className="flex items-center gap-2.5 py-3.5 px-6 border border-[#EDEDED] font-semibold text-base text-black rounded-[82px]"
                            text="Download App"
                            icon="download"
                        />
                        <Button
                            className="flex items-center border border-[#EDEDED] p-[13.5px] rounded-[82px]"
                            icon="cart"
                        />
                        <Button
                            className="flex items-center gap-2.5 py-3 px-6 bg-[#ED1C25] font-semibold text-base text-white rounded-[82px]"
                            text="Sign Up/Log In"
                        />
                    </div>
                </div>
                {/* Hamburger */}
                <button
                    className="lg:hidden flex flex-col gap-1"
                    onClick={() => setMenuOpen(true)}>
                    <span className="w-6 h-[2px] bg-black"></span>
                    <span className="w-6 h-[2px] bg-black"></span>
                    <span className="w-6 h-[2px] bg-black"></span>
                </button>
            </div>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/30 z-20 transition-opacity duration-300 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={() => setMenuOpen(false)}
            ></div>
            {/* Right Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-[280px] bg-white z-30 shadow-lg transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="p-6 flex items-center flex-col gap-5">
                    {/* Close Button */}
                    <button
                        className="self-end text-2xl"
                        onClick={() => setMenuOpen(false)}
                    >
                        ✕
                    </button>
                    {/* Nav Links */}
                    {navLInks.map((item, index) => (
                        <Link
                            key={index}
                            href={item.url}
                            className="text-black text-base"
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.title}
                        </Link>
                    ))}
                    {/* Buttons */}
                    <Button
                        className="flex items-center justify-center gap-2.5 py-3 px-6 border border-[#EDEDED] text-black rounded-[82px]"
                        text="Download App"
                        icon="download"
                    />
                    <Button
                        className="flex items-center justify-center border border-[#EDEDED] p-3 rounded-[82px]"
                        icon="cart"
                    />
                    <Button
                        className="flex items-center justify-center gap-2.5 py-3 px-6 bg-[#ED1C25] text-white rounded-[82px]"
                        text="Sign Up/Log In"
                    />
                </div>
            </div>
        </div>
    );
};

export default Navbar;