"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Briefcase, Globe, Scale, BrainCircuit, PenTool } from "lucide-react";
import Link from "next/link";

const programs = [
  {
    title: "Computing & IT",
    description: "Architecting the digital future through advanced research in AI and Full Stack Development.",
    icon: Cpu,
    link: "https://jguni.in/bca.html"
  },
  {
    title: "Engineering",
    description: "Next-gen B.Tech tracks focusing on Data Science, Robotics, and emerging technologies.",
    icon: BrainCircuit,
    link: "https://jguni.in/b-tech.html"
  },
  {
    title: "Management",
    description: "Global MBA and BBA programmes with specializations in Aviation and International Finance.",
    icon: Briefcase,
    link: "https://jguni.in/bba.html"
  },
  {
    title: "Commerce",
    description: "A prestigious school for accounting and commerce with embedded global certifications.",
    icon: Globe,
    link: "https://jguni.in/bcom.html"
  },
  {
    title: "Legal Studies",
    description: "Modern legal education bridging the gap between traditional law and technology.",
    icon: Scale,
    link: "https://jguni.in/llb.html"
  },
  {
    title: "Future Tech",
    description: "Elite certifications in Blockchain, Metaverse, and Industrial IoT for industry leaders.",
    icon: PenTool,
    link: "https://jguni.in/metaverse.html"
  },
];

const Programs = () => {
  return (
    <section id="programs" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-secondary font-bold tracking-[0.4em] uppercase text-[9px]">
                Our Disciplines
              </span>
              <div className="w-12 h-[1px] bg-stone-200"></div>
            </div>
            <h3 className="text-5xl md:text-6xl text-primary leading-[1.1] font-serif">
              A Selection of <br />
              <span className="italic">Elite Programs.</span>
            </h3>
          </div>
          <p className="text-stone-400 max-w-sm mb-4 font-light text-sm tracking-wide leading-relaxed">
            Every curriculum is a masterpiece of academic design, blending 
            theoretical depth with immersive industrial application.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-stone-100">
          {programs.map((program, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="border-r border-b border-stone-100 p-16 hover:bg-[#fdfcf0] transition-all duration-700 group relative"
            >
              <div className="text-stone-300 group-hover:text-secondary transition-all duration-500 mb-10 group-hover:scale-110">
                <program.icon className="w-10 h-10 stroke-[0.5px]" />
              </div>
              <h4 className="text-2xl text-primary mb-6 font-serif group-hover:tracking-wider transition-all duration-700">
                {program.title}
              </h4>
              <p className="text-stone-500 mb-10 leading-relaxed font-light text-sm tracking-wide">
                {program.description}
              </p>
              <Link
                href={program.link}
                target="_blank"
                className="inline-flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.3em] text-stone-400 group-hover:text-primary transition-all"
              >
                Learn More <div className="w-6 h-[1px] bg-stone-200 group-hover:w-10 group-hover:bg-primary transition-all duration-500"></div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
