import React from 'react';
import { PhoneCall, ShieldCheck, Compass } from 'lucide-react';
import { IMAGES } from '../data/companyData';

interface HeroProps {
  onOpenRfp: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRfp }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#04190F]">
      {/* Background Image: Authentic Sudan Infrastructure Bridge */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.heroBridge}
          alt="مشاريع البنية التحتية والجسور في السودان - شركة اررا للبنيات التحتية"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
          loading="eager"
        />
        {/* Multilayer Luxury Gradient Overlay (Dark Green + Subtle Gold tone) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#041A10] via-[#062416]/85 to-[#08321F]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#041A10]/40 to-[#041A10]/90" />
        
        {/* Subtle Architectural Grid Lines */}
        <div 
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #C5A059 1px, transparent 1px), linear-gradient(to bottom, #C5A059 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Hero Content (7 cols on lg) */}
          <div className="lg:col-span-7 text-center sm:text-right">
            {/* Subtle Corporate Kicker (Anti-pill clean text) */}
            <div className="flex items-center justify-center sm:justify-start gap-2.5 text-xs sm:text-sm font-bold text-[#F3E19C] mb-4">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                شركة اررا للبنيات التحتية المحدودة
              </span>
              <span aria-hidden="true" className="text-white/40">·</span>
              <span className="text-white/80">ARRA LIMITED INFRASTRUCTURE</span>
            </div>

            {/* Exact Hero Title Required */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.18] tracking-tight mb-6">
              نبني البنية التحتية{' '}
              <span className="gold-gradient-text block sm:inline">
                لمستقبل السودان
              </span>
            </h1>

            {/* Exact Hero Description Required */}
            <p className="text-base sm:text-lg md:text-xl text-slate-200 font-normal leading-relaxed mb-8 max-w-2xl drop-shadow-sm">
              شركة اررا للبنيات التحتية المحدودة شركة سودانية متخصصة في تنفيذ وتطوير مشاريع البنية التحتية والهندسة والإنشاءات، وفق معايير احترافية تركز على الجودة والاستدامة والكفاءة.
            </p>

            {/* Action Buttons as requested */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-10">
              {/* استكشف خدماتنا */}
              <a
                href="#services"
                className="flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#051F13] font-black text-base shadow-lg shadow-[#000000]/30 hover:brightness-105 active:scale-95 transition-all text-center"
              >
                <span>استكشف خدماتنا</span>
                <Compass className="w-5 h-5 text-[#051F13]" />
              </a>

              {/* تواصل معنا */}
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-bold text-base border border-white/25 backdrop-blur-sm active:scale-95 transition-all text-center"
              >
                <PhoneCall className="w-4 h-4 text-[#D4AF37]" />
                <span>تواصل معنا</span>
              </a>

              {/* اطلب خدماتنا */}
              <button
                onClick={onOpenRfp}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#08321F] hover:bg-[#062416] text-[#F3E19C] border border-[#C5A059]/40 text-sm font-black transition-all"
              >
                <span>اطلب خدماتنا الآن</span>
              </button>
            </div>

            {/* Quick Value Metrics */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-right">
              <div>
                <div className="text-xl sm:text-2xl font-black text-[#D4AF37] mb-0.5">100%</div>
                <div className="text-xs text-slate-300 font-medium">أيادٍ وخبرات سودانية</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-white mb-0.5">معايير دولية</div>
                <div className="text-xs text-slate-300 font-medium">أعلى مواصفات الجودة</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-[#D4AF37] mb-0.5">جاهزية كاملة</div>
                <div className="text-xs text-slate-300 font-medium">أحدث المعدات والآليات</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-white mb-0.5">شراكة وتنمية</div>
                <div className="text-xs text-slate-300 font-medium">لإعمار كافة ولايات السودان</div>
              </div>
            </div>
          </div>

          {/* Official Company Logo Display Card (5 cols on lg) */}
          <div className="lg:col-span-5 flex items-center justify-center order-first lg:order-last">
            <div className="relative group max-w-xs sm:max-w-sm md:max-w-md w-full">
              {/* Subtle Luxury Ambient Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#D4AF37]/35 via-emerald-500/20 to-[#C5A059]/35 rounded-3xl blur-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Logo Card with Official Emblem as uploaded */}
              <div className="relative bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-7 shadow-2xl border-4 border-[#C5A059] flex flex-col items-center justify-center overflow-hidden">
                <img
                  src={IMAGES.officialLogo}
                  alt="شعار شركة اررا للبنيات التحتية المحدودة الرسمي - ARRA LIMITED INFRASTRUCTURE COMPANY"
                  className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 object-contain drop-shadow-md transform transition-transform duration-500 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
