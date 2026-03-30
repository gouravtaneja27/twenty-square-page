"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { navLInks as navItems } from "@/utils/helper";
import Button from "./Button";
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    useEffect(() => {
        const handleWindowScroll = () => {
            setIsScrolled(window.scrollY > 1);
        };
        window.addEventListener("scroll", handleWindowScroll);
        return () => window.removeEventListener("scroll", handleWindowScroll);
    }, []);
    const openMenu = () => setDrawerOpen(true);
    const closeMenu = () => setDrawerOpen(false);
    return (
        <header className="w-full fixed top-0 z-20">
            <div
                className={`max-w-360 mx-auto px-4 sm:px-6 py-3 flex items-center justify-between transition-all duration-300 ${isScrolled
                    ? "bg-white shadow-md"
                    : "bg-[linear-gradient(180deg,#FFFFFF_0%,rgba(255,255,255,0)_100%)]"
                    }`}
            >
                <a href="/">
                    <img
                        src="/assets/logo.webp"
                        alt="site-logo"
                        className="w-[80px] sm:w-[90px]"
                    />
                </a>
                <nav className="hidden lg:flex items-center justify-between gap-[120px]">
                    <div className="flex items-center gap-10">
                        {navItems.map((nav, i) => (
                            <Link
                                key={`desktop-${i}`}
                                href={nav.url}
                                className="text-base text-black hover:text-[#ED1C25]"
                            >
                                {nav.title}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        <Button
                            className=" group flex items-center gap-2.5  py-3 px-6  border border-[#EDEDED]  text-black   rounded-full  transition-all duration-300 ease-in-out hover:bg-black  hover:text-white  hover:border-black"
                            text="Download App"
                            icon="download"
                        />

                        <Button
                            className="flex items-center border border-[#EDEDED] p-3 rounded-full"
                            icon="cart"
                        />
                        <Button
                            className=" flex items-center gap-2.5 py-3 px-6 bg-[#ED1C25] text-white rounded-full transition-colors duration-200  hover:bg-[#c9151d]"
                            text="Sign Up / Log In"
                        />
                    </div>
                </nav>
                <div className="lg:hidden flex items-center gap-3">
                    <Button
                        className="flex items-center border border-[#EDEDED] p-[10px] rounded-full"
                        icon="cart"
                    />
                    <button onClick={openMenu} className="flex flex-col gap-1">
                        <span className="w-6 h-[2px] bg-black"></span>
                        <span className="w-6 h-[2px] bg-black"></span>
                        <span className="w-6 h-[2px] bg-black"></span>
                    </button>
                </div>
            </div>
            <div
                onClick={closeMenu}
                className={`fixed inset-0 bg-black/30 z-20 transition-all duration-300 ${drawerOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
            />
            <aside
                className={`fixed top-0 right-0 h-full w-full bg-white z-30 shadow-lg transform transition-transform duration-300 ${drawerOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="p-6 flex flex-col items-center gap-5">
                    <button onClick={closeMenu} className="self-end text-2xl">
                        ✕
                    </button>
                    {navItems.map((nav, i) => (
                        <Link
                            key={`mobile-${i}`}
                            href={nav.url}
                            className="text-base text-black"
                            onClick={closeMenu}
                        >
                            {nav.title}
                        </Link>
                    ))}
                    <Button
                        className="flex items-center justify-center gap-2.5 py-3 px-6 border border-[#EDEDED] text-black rounded-full"
                        text="Download App"
                        icon="download"
                    />

                    <Button
                        className="flex items-center justify-center gap-2.5 py-3 px-6 bg-[#ED1C25] text-white rounded-full"
                        text="Sign Up / Log In"
                    />
                </div>
            </aside>
        </header>
    );
};

export default Navbar;