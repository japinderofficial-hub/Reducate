"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send, ArrowRight } from "lucide-react";
import Link from "next/link";

const CTA = () => {
  return (
    <section id="admissions" className="section-padding bg-[#fdfcf0]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-stone-900 text-white overflow-hidden relative border border-white/5"
        >
          {/* Subtle architectural luxury overlay */}
          <div className="absolute inset-0 opacity-[0.03]">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="lux-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#lux-grid)" />
            </svg>
          </div>

          <div className="relative z-10 px-10 py-24 md:p-32 flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="max-w-xl text-center lg:text-left">
              <h3 className="text-5xl md:text-7xl text-white mb-10 font-serif leading-tight">
                Your Future <br />
                <span className="italic text-secondary">Awaits.</span>
              </h3>
              <p className="text-stone-400 text-lg mb-0 font-light leading-relaxed tracking-wide">
                Join a legacy of academic distinction. Applications for our 
                diverse undergraduate and postgraduate programmes are now open.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 w-full lg:w-auto">
              <Link 
                href="https://jguni.in/admission-open.html" 
                target="_blank"
                className="bg-white text-stone-900 px-14 py-6 font-bold hover:bg-stone-100 transition-all text-center flex items-center justify-center gap-4 group shadow-2xl text-[10px] uppercase tracking-[0.2em]"
              >
                Apply Online <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link 
                href="mailto:info@jguni.in"
                className="bg-transparent border border-white/20 text-white px-14 py-6 font-bold hover:bg-white/5 transition-all text-center flex items-center justify-center gap-4 text-[10px] uppercase tracking-[0.2em]"
              >
                Inquire <Send className="w-3 h-3 opacity-50" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
