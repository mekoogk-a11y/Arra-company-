import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Phone, Menu, X, ShieldCheck, ArrowUpRight, MapPin } from 'lucide-react';
import { COMPANY_LOCATION_AR } from '../data/companyData';

interface HeaderProps {
  onOpenRfp: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenRfp,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'الرئيسية', href: '#' },
    { label: 'من نحن', href: '#about' },
    { label: 'خدماتنا', href: '#services' },
    { label: 'مشاريعنا', href: '#projects' },
    { label: 'مجالات العمل', href: '#sectors' },
    { label: 'لماذا اررا؟', href: '#why-arra' },
    { label: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-[#08321F]/10'
          : 'bg-white/90 backdrop-blur-sm py-4 border-b border-[#08321F]/5'
      }`}
    >
      {/* Top micro-bar on desktop */}
      <div className="hidden lg:block border-b border-slate-100 pb-2 mb-2 text-xs text-slate-600">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#08321F] font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
              شركة سودانية معتمدة لتنفيذ وتطوير مشاريع البنية التحتية
            </span>
            <span className="text-slate-300">|</span>
            <span className="flex items-center gap-1 text-slate-600">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{COMPANY_LOCATION_AR}</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="text-[#08321F] font-bold hover:text-[#C5A059] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>أرقام التواصل المباشر</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Company Official Logo */}
        <a href="#" className="hover:opacity-95 transition-opacity">
          <Logo variant="dark" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[14.5px] font-bold text-slate-700 hover:text-[#08321F] relative py-1 transition-colors group"
            >
              {link.label}
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Primary CTA: "اطلب خدماتنا" */}
          <button
            onClick={onOpenRfp}
            className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#08321F] to-[#0D4B2E] text-white text-sm font-black shadow-md hover:shadow-lg hover:from-[#062416] hover:to-[#08321F] border border-[#C5A059]/40 transition-all transform active:scale-95 group"
          >
            <span>اطلب خدماتنا</span>
            <ArrowUpRight className="w-4 h-4 text-[#D4AF37] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#08321F] hover:bg-slate-100 transition-colors"
            aria-label="القائمة الرئيسية"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-6 py-6 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-slate-800 hover:text-[#08321F] hover:bg-emerald-50/60 px-3 py-2 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg text-xs text-slate-700">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>{COMPANY_LOCATION_AR}</span>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRfp();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#08321F] text-white font-black text-sm shadow-md"
              >
                <span>اطلب خدماتنا</span>
                <ArrowUpRight className="w-4 h-4 text-[#D4AF37]" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
