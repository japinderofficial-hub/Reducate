"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, BookOpen, UserCheck, Rocket } from "lucide-react";

const salientFeatures = [
  {
    title: "National Standard",
    desc: "UGC approved programmes fully aligned with the National Education Policy 2020.",
    icon: UserCheck,
  },
  {
    title: "Holistic Pedagogy",
    desc: "A balanced educational approach that cultivates both technical mastery and creative vision.",
    icon: Rocket,
  },
  {
    title: "Elite Mentorship",
    desc: "Direct access to faculty with extensive backgrounds in global industry and academia.",
    icon: Zap,
  },
  {
    title: "Applied Research",
    desc: "Immersive projects and real-world industrial use-cases integrated into every curriculum.",
    icon: BookOpen,
  },
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-[#fdfcf0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-secondary font-bold tracking-[0.4em] uppercase text-[9px]">
                Distinguished Excellence
              </span>
              <div className="w-12 h-[1px] bg-stone-200"></div>
            </div>
            <h3 className="text-5xl md:text-6xl text-primary mb-12 leading-[1.1] font-serif italic">
              Salient <span className="not-italic">Characteristics.</span>
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-10">
              {salientFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 border border-stone-100 bg-white shadow-sm hover:shadow-md transition-all duration-500"
                >
                  <feature.icon className="w-8 h-8 text-secondary mb-6 stroke-[1px]" />
                  <h4 className="text-lg font-serif text-primary mb-3">{feature.title}</h4>
                  <p className="text-stone-500 text-xs leading-relaxed font-light tracking-wide">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-6">
            <div className="space-y-6 mt-12">
              <div className="academic-border">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400"
                  alt="Students Collaboration"
                  className="w-full grayscale-[0.5] hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="academic-border">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400"
                  alt="Lab"
                  className="w-full grayscale-[0.5] hover:grayscale-0 transition-all duration-1000"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="academic-border">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=400"
                  alt="Library"
                  className="w-full grayscale-[0.5] hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="academic-border">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400"
                  alt="Tech Campus"
                  className="w-full grayscale-[0.5] hover:grayscale-0 transition-all duration-1000"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
