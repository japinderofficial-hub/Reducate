"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, Globe, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "Colleges", value: "17", icon: BookOpen },
  { label: "Schools", value: "3", icon: Users },
  { label: "Experience", value: "59+ Yrs", icon: Award },
  { label: "Global Partners", value: "20+", icon: Globe },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-[#faf9f0] border-y border-stone-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-28 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-secondary font-bold tracking-[0.4em] uppercase text-[9px]">
                The JG Legacy
              </span>
              <div className="flex-1 h-[1px] bg-stone-200"></div>
            </div>
            
            <h2 className="text-5xl md:text-6xl text-primary mb-10 leading-[1.1] font-serif">
              An Inheritance of <br />
              <span className="italic">Excellence.</span>
            </h2>
            
            <div className="space-y-8 mb-16">
              <p className="text-lg text-stone-600 leading-relaxed font-light">
                Rooted in the vision of the ASIA Charitable Trust, JG University 
                has been a cornerstone of academic brilliance since 1965. We offer 
                more than a degree; we provide a transformative journey through 
                experiential learning and global exposure.
              </p>
              <p className="text-stone-500 leading-relaxed font-light text-sm">
                Our campus is a confluence of diverse ideas, where faculty from 
                both academia and industry converge to mentor the next generation 
                of eminent practitioners.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-12 mb-16">
              {stats.map((stat, i) => (
                <div key={i} className="group cursor-default">
                  <p className="text-4xl font-serif text-primary group-hover:text-secondary transition-colors duration-500">{stat.value}</p>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-400 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link href="https://jguni.in/" target="_blank" className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-primary group">
              Our Full History <div className="w-8 h-[1px] bg-primary group-hover:w-12 group-hover:bg-secondary transition-all duration-500"></div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <div className="academic-border relative z-10">
              <div className="aspect-[4/5] overflow-hidden bg-stone-100">
                <img
                  src="/about_library.png"
                  alt="University Library Interior"
                  className="w-full h-full object-cover sepia-[0.05] hover:sepia-0 transition-all duration-1000 scale-105 hover:scale-100"
                />
              </div>
            </div>
            
            {/* Luxury Floating Badge */}
            <div className="absolute -bottom-12 -left-12 bg-stone-900 text-white p-10 shadow-2xl max-w-[240px] border border-white/10">
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
