"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jigardan Gadhvi",
    role: "Eminent Alumnus",
    content: "I owe a great deal to the mentorship at JG. The faculty were more than just teachers; they were guides who shaped my artistic discipline.",
  },
  {
    name: "Yatendra Sinh Joddha",
    role: "Technical Head, TCS",
    content: "The foundation in computing I received here is unparalleled. Even today, I rely on the analytical skills cultivated during my years at JG.",
  },
  {
    name: "Stavan Doshi",
    role: "Entrepreneur",
    content: "The focus on innovation and independent thinking gave me the confidence to build my own legacy in the business world.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-stone-900 text-white overflow-hidden relative">
      {/* Sophisticated minimalist grid background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <pattern id="footer-grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#footer-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-secondary/50"></div>
            <span className="text-secondary font-bold tracking-[0.4em] uppercase text-[9px]">
              Alumni Testimonials
            </span>
            <div className="w-12 h-[1px] bg-secondary/50"></div>
          </div>
          <h3 className="text-5xl md:text-6xl font-serif italic">
            Voices of <span className="not-italic">Distinction.</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border-t border-l border-white/5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 1 }}
              className="p-16 border-r border-b border-white/5 hover:bg-white/[0.02] transition-all duration-700 group"
            >
              <Quote className="w-10 h-10 text-secondary mb-10 opacity-30 group-hover:opacity-100 transition-opacity duration-700 stroke-[1px]" />
              <p className="text-lg mb-12 italic text-stone-300 leading-relaxed font-light">
                "{t.content}"
              </p>
              <div>
                <h4 className="font-serif text-xl text-white mb-2">{t.name}</h4>
                <p className="text-secondary text-[10px] font-bold uppercase tracking-[0.2em]">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
