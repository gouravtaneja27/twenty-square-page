"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { NAVLINKS as menuItems } from "@/utils/helper";
import Button from "./Button";
const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            setIsSticky(window.scrollY > 1);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);
    return (
        <header className="w-full fixed top-0 z-20">
            <div
                className={`max-w-360 mx-auto px-4 sm:px-6 py-3 flex items-center justify-between transition-all duration-300 ${isSticky
                    ? "bg-white shadow-md"
                    : "bg-[linear-gradient(180deg,#FFFFFF_0%,rgba(255,255,255,0)_100%)]"
                    }`}
            >
                <a href="/">
                    <img
                        src="/assets/logo.webp"
                        alt="brand-logo"
                        className="w-[80px] sm:w-[90px]"
                    />
                </a>
                <nav className="hidden lg:flex items-center justify-between gap-[120px]">
                    <div className="flex items-center gap-10">
                        {menuItems.map((link, i) => (
                            <Link
                                key={`nav-${i}`}
                                href={link.url}
                                className="text-base text-black hover:text-[#ED1C25]"
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        <Button
                            className="flex items-center gap-2.5 py-3 px-6 border border-[#EDEDED] text-black rounded-full"
                            text="Download App"
                            icon="download"
                        />

                        <Button
                            className="flex items-center border border-[#EDEDED] p-3 rounded-full"
                            icon="cart"
                        />

                        <Button
                            className="flex items-center gap-2.5 py-3 px-6 bg-[#ED1C25] text-white rounded-full"
                            text="Sign Up / Log In"
                        />
                    </div>
                </nav>
                <button
                    onClick={openDrawer}
                    className="lg:hidden flex flex-col gap-1"
                >
                    <span className="w-6 h-[2px] bg-black"></span>
                    <span className="w-6 h-[2px] bg-black"></span>
                    <span className="w-6 h-[2px] bg-black"></span>
                </button>
            </div>
            <div
                onClick={closeDrawer}
                className={`fixed inset-0 bg-black/30 z-20 transition-all duration-300 ${isDrawerOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
            />
            <aside
                className={`fixed top-0 right-0 h-full w-full bg-white z-30 shadow-lg transform transition-transform duration-300 ${isDrawerOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="p-6 flex flex-col items-center gap-5">
                    <button
                        onClick={closeDrawer}
                        className="self-end text-2xl"
                    >
                        ✕
                    </button>
                    {menuItems.map((link, i) => (
                        <Link
                            key={`mobile-${i}`}
                            href={link.url}
                            className="text-base text-black"
                            onClick={closeDrawer}
                        >
                            {link.title}
                        </Link>
                    ))}
                    <Button
                        className="flex items-center justify-center gap-2.5 py-3 px-6 border border-[#EDEDED] text-black rounded-full"
                        text="Download App"
                        icon="download"
                    />
                    <Button
                        className="flex items-center justify-center border border-[#EDEDED] p-3 rounded-full"
                        icon="cart"
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