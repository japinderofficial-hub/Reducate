"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden hero-pattern bg-[var(--background)]">
      {/* Structural luxury accents */}
      <div className="absolute top-0 right-0 w-[1px] h-full bg-stone-200 hidden lg:block"></div>
      <div className="absolute top-[15%] left-0 w-full h-[1px] bg-stone-200/50"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-secondary"></div>
            <span className="text-secondary font-bold tracking-[0.4em] uppercase text-[9px]">
              Academic Session 2024-25
            </span>
          </div>
          
          <h1 className="text-6xl md:text-[90px] text-primary leading-[0.95] mb-12 !font-serif italic font-light">
            Defining <br />
            <span className="not-italic font-medium">Modern Legacy.</span>
          </h1>
          
          <p className="text-lg text-stone-500 mb-14 max-w-lg leading-relaxed font-light tracking-wide">
            A sanctuary of higher learning where tradition meets transformation. 
            We cultivate leaders who bridge the gap between historical wisdom 
            and future innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-10 items-center">
            <Link href="https://jguni.in/admission-open.html" target="_blank" className="btn-primary w-full sm:w-auto px-12">
              Apply Now <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link 
              href="https://jguni.in/" 
              target="_blank" 
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary hover:text-secondary transition-all flex items-center gap-4 group"
            >
              <div className="w-12 h-12 border border-stone-200 flex items-center justify-center group-hover:border-secondary group-hover:scale-110 transition-all duration-500">
                <Play className="w-3 h-3 fill-primary group-hover:fill-secondary" />
              </div>
              The Experience
            </Link>
          </div>

          <div className="mt-24 pt-12 border-t border-stone-200 flex items-center gap-16">
            <div className="group cursor-default">
              <p className="text-3xl font-serif text-primary group-hover:text-secondary transition-colors">10k+</p>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-400 mt-1">Alumni Network</p>
            </div>
            <div className="group cursor-default">
              <p className="text-3xl font-serif text-primary group-hover:text-secondary transition-colors">500+</p>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-400 mt-1">Distinguished Faculty</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="academic-border relative z-10">
            <div className="aspect-[4/5] overflow-hidden bg-stone-100">
              <img
                src="/hero_campus.png"
                alt="JG University Main Campus"
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100"
              />
            </div>
          </div>
          
          {/* Minimalist framing */}
          <div className="absolute -top-8 -left-8 w-24 h-24 border-t border-l border-stone-300"></div>
          <div className="absolute -bottom-8 -right-8 w-24 h-24 border-b border-r border-stone-300"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
