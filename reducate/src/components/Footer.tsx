import React from "react";
import Link from "next/link";
import { GraduationCap, Mail, Phone, MapPin, Globe, Play, Share2, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-500 py-32 px-6 md:px-12 lg:px-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24">
        <div className="space-y-10">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="bg-white/5 p-3 group-hover:bg-secondary transition-all duration-700">
              <GraduationCap className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-[0.1em] text-white font-serif">
              JG UNIVERSITY
            </span>
          </Link>
          <p className="text-sm leading-relaxed font-light tracking-wide">
            A prestigious institution dedicated to the intersection of traditional 
            values and modern innovation. Built on a legacy since 1965.
          </p>
          <div className="flex gap-8">
            <a href="https://wa.me/+917567756758" target="_blank" className="text-stone-600 hover:text-white transition-all"><MessageCircle className="w-4 h-4" /></a>
            <a href="#" className="text-stone-600 hover:text-white transition-all"><Share2 className="w-4 h-4" /></a>
            <a href="https://www.youtube.com/@jguniversity" target="_blank" className="text-stone-600 hover:text-white transition-all"><Play className="w-3 h-3 fill-stone-600 hover:fill-white" /></a>
            <a href="https://jguni.in/" target="_blank" className="text-stone-600 hover:text-white transition-all"><Globe className="w-4 h-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-10 text-[9px] uppercase tracking-[0.4em] opacity-50">Navigation</h4>
          <ul className="space-y-5 text-[10px] font-bold tracking-[0.3em] uppercase">
            <li><Link href="#about" className="hover:text-secondary transition-colors">The Legacy</Link></li>
            <li><Link href="#programs" className="hover:text-secondary transition-colors">Disciplines</Link></li>
            <li><Link href="#features" className="hover:text-secondary transition-colors">Features</Link></li>
            <li><Link href="https://jguni.in/admission-open.html" target="_blank" className="hover:text-secondary transition-colors">Admissions</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-10 text-[9px] uppercase tracking-[0.4em] opacity-50">Academic</h4>
          <ul className="space-y-5 text-[10px] font-bold tracking-[0.3em] uppercase">
            <li><a href="https://jguni.in/bca.html" target="_blank" className="hover:text-secondary transition-colors">Computing & IT</a></li>
            <li><a href="https://jguni.in/b-tech.html" target="_blank" className="hover:text-secondary transition-colors">Engineering</a></li>
            <li><a href="https://jguni.in/bba.html" target="_blank" className="hover:text-secondary transition-colors">Management</a></li>
            <li><a href="https://jguni.in/llb.html" target="_blank" className="hover:text-secondary transition-colors">Legal Studies</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-10 text-[9px] uppercase tracking-[0.4em] opacity-50">Contact</h4>
          <ul className="space-y-8 text-sm font-light tracking-wide">
            <li className="flex items-start gap-5">
              <MapPin className="w-5 h-5 text-secondary shrink-0 opacity-50" />
              <span className="leading-relaxed">JG Campus, Gulbai Tekra, Ahmedabad, Gujarat - 380015</span>
            </li>
            <li className="flex items-center gap-5">
              <Phone className="w-5 h-5 text-secondary shrink-0 opacity-50" />
              <span>+91 79 26300451</span>
            </li>
            <li className="flex items-center gap-5">
              <Mail className="w-5 h-5 text-secondary shrink-0 opacity-50" />
              <span>info@jguni.in</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-white/5 text-[9px] uppercase tracking-[0.4em] font-bold flex flex-col md:flex-row justify-between gap-10 opacity-30">
        <p>© 2024 JG University. Established 1965.</p>
        <div className="flex gap-10">
          <a href="https://jguni.in/privacy-policy.html" target="_blank" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
