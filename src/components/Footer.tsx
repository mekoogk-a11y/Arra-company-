import React from 'react';
import { Logo } from './Logo';
import { PhoneNumber } from '../types';
import { Phone, ArrowUp, ShieldCheck, Heart, MapPin, MessageSquare } from 'lucide-react';
import { COMPANY_NAME_AR, COMPANY_NAME_EN, COMPANY_LOCATION_AR } from '../data/companyData';

interface FooterProps {
  phoneNumbers: PhoneNumber[];
}

export const Footer: React.FC<FooterProps> = ({ phoneNumbers }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#03150D] text-white pt-16 pb-12 border-t border-[#C5A059]/30 relative overflow-hidden">
      {/* Background Subtle Luxury Line */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 text-right space-y-4">
            <Logo variant="footer" showSubtitle={true} />

            <div className="pt-2">
              <div className="text-base font-black text-white">
                {COMPANY_NAME_AR}
              </div>
              <div className="text-xs font-bold text-[#D4AF37] tracking-wider uppercase mt-0.5">
                {COMPANY_NAME_EN}
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-md">
              شركة سودانية وطنية متخصصة في تنفيذ وتطوير مشاريع البنية التحتية والهندسة والإنشاءات، وفق معايير احترافية تركز على الجودة والاستدامة والكفاءة لخدمة تنمية ومستقبل السودان.
            </p>

            <div className="pt-1 flex items-center gap-2 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>مقر الشركة: {COMPANY_LOCATION_AR}</span>
            </div>

            <div className="pt-1 flex items-center gap-2 text-xs text-[#F3E19C]">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>نبني البنية التحتية لمستقبل السودان</span>
            </div>
          </div>

          {/* Quick Links Column (3 cols) */}
          <div className="lg:col-span-3 text-right">
            <h4 className="text-sm font-black text-[#D4AF37] mb-4 pb-1 border-b border-white/10 inline-block">
              روابط الموقع الرئيسية
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <a href="#" className="hover:text-[#F3E19C] transition-colors">الرئيسية</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#F3E19C] transition-colors">من نحن</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F3E19C] transition-colors">خدماتنا التخصصية</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#F3E19C] transition-colors">معرض مشاريع السودان</a>
              </li>
              <li>
                <a href="#why-arra" className="hover:text-[#F3E19C] transition-colors">لماذا اررا؟</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F3E19C] transition-colors">تواصل معنا</a>
              </li>
            </ul>
          </div>

          {/* Contact Direct Lines Column (4 cols) */}
          <div className="lg:col-span-4 text-right">
            <h4 className="text-sm font-black text-[#D4AF37] mb-4 pb-1 border-b border-white/10 inline-block">
              أرقام التواصل المباشر
            </h4>
            <div className="space-y-2">
              {phoneNumbers.map((p) => (
                <div key={p.id} className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5 text-xs">
                  <span className="text-slate-400 font-semibold">{p.label}:</span>
                  <a
                    href={`tel:${p.number}`}
                    className="font-mono font-bold text-slate-200 hover:text-[#D4AF37] transition-colors"
                    dir="ltr"
                  >
                    {p.displayNumber}
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-slate-400">
              خدمة الاتصال والمراسلة المباشرة عبر واتساب متاحة على كافة الخطوط.
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-200">{COMPANY_NAME_EN}</strong>. جميع الحقوق محفوظة.
          </div>

          <div className="flex items-center gap-3">
            <span>{COMPANY_LOCATION_AR}</span>
            <span>·</span>
            <span>جمهورية السودان</span>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <span>العودة للأعلى</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#D4AF37]" />
            </button>
          </div>
        </div>

        {/* Designer Credit */}
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-xs text-slate-400 text-center">
          <span className="text-slate-300 font-medium">تصميم كمال جعفر زكريا</span>
          <span className="hidden sm:inline text-slate-600">·</span>
          <a
            href="https://wa.me/249919980435"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#F3E19C] hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3 py-1 rounded-full border border-white/10"
            title="مراسلة كمال جعفر زكريا عبر واتساب"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>واتساب:</span>
            <span dir="ltr" className="font-mono font-bold tracking-wider text-white">
              +249919980435
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};
