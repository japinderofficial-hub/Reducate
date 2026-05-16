"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Features", href: "#features" },
    { name: "Faculty", href: "#faculty" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-6 py-4",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-8"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="bg-stone-900 p-2.5 transition-all duration-700 group-hover:bg-secondary">
            <GraduationCap className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-[0.1em] text-primary font-serif">
            JG UNIVERSITY
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link 
            key={link.name}
            href={link.href}
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-500 hover:text-primary transition-all relative group"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-secondary group-hover:w-full transition-all duration-500"></span>
          </Link>
        ))}
        <Link 
          href="https://jguni.in/admission-open.html" 
          target="_blank"
          className="bg-stone-900 text-white py-4 px-10 text-[9px] font-bold uppercase tracking-[0.3em] hover:bg-stone-700 transition-all shadow-xl active:scale-[0.98]"
        >
          Apply Now
        </Link>
      </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-stone-100 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-10 gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="https://jguni.in/admission-open.html"
                target="_blank"
                className="bg-stone-900 text-white p-5 text-[9px] font-bold uppercase tracking-[0.3em] text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
