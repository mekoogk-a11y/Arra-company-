import React, { useState } from 'react';
import { SERVICES } from '../data/companyData';
import { 
  Milestone, Anchor, HardHat, Building2, Droplets, 
  Wrench, Zap, Compass, RefreshCw, ShieldCheck, 
  ArrowLeft, CheckCircle 
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForRfp: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForRfp,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (name: string) => {
    const props = { className: "w-6 h-6 text-[#08321F]" };
    switch (name) {
      case 'Milestone': return <Milestone {...props} />;
      case 'Anchor': return <Anchor {...props} />;
      case 'HardHat': return <HardHat {...props} />;
      case 'Building2': return <Building2 {...props} />;
      case 'Droplets': return <Droplets {...props} />;
      case 'Wrench': return <Wrench {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'Compass': return <Compass {...props} />;
      case 'RefreshCw': return <RefreshCw {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      default: return <HardHat {...props} />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#F8FAF9] relative">
      {/* Decorative top border accent */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-black text-[#08321F] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
            <span>خدماتنا التخصصية · OUR CORE SERVICES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 leading-tight">
            حلول هندسية متكاملة لقطاع البنية التحتية
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            نقدم محفظة شاملة من الخدمات الإنشائية والهندسية المصممة لإنشاء وتأهيل شبكات البنية التحتية بكافة أرجاء السودان بأعلى معايير الدقة والجاهزية.
          </p>
        </div>

        {/* 10 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-7 border border-slate-200/80 hover:border-[#C5A059] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top indicator bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#08321F] to-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header of Card: Icon & Index */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 rounded-xl bg-emerald-50 border border-emerald-100/80 flex items-center justify-center group-hover:bg-[#08321F] group-hover:text-white transition-colors duration-300">
                    <span className="group-hover:brightness-200 transition-all">
                      {getIcon(service.iconName)}
                    </span>
                  </div>

                  <span className="text-xs font-mono font-bold text-slate-400">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-lg font-black text-slate-900 group-hover:text-[#08321F] transition-colors mb-1">
                  {service.title}
                </h3>
                <div className="text-[11px] font-semibold text-[#9A7B2C] uppercase tracking-wider mb-3">
                  {service.titleEn}
                </div>

                {/* Service Description */}
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Feature Bullet points */}
                <div className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => onSelectServiceForRfp(service.title)}
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-slate-50 hover:bg-[#08321F] text-slate-700 hover:text-white text-xs font-bold border border-slate-200 hover:border-transparent transition-all group/btn"
                >
                  <span>طلب تنفيذ هذه الخدمة</span>
                  <ArrowLeft className="w-3.5 h-3.5 text-slate-400 group-hover/btn:text-[#D4AF37] group-hover/btn:-translate-x-1 transition-all" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Assurance Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#041A10] to-[#08321F] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-[#C5A059]/30">
          <div className="text-right">
            <h4 className="text-lg font-black text-white mb-1">
              هل لديكم متطلبات مشروع محددة أو مناقصة بنية تحتية؟
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              فريقنا الهندسي جاهز لدراسة المخططات وجداول الكميات وتقديم العروض الفنية والمالية بدقة.
            </p>
          </div>

          <button
            onClick={() => onSelectServiceForRfp('استشارة هندسية عامة')}
            className="shrink-0 px-6 py-3 rounded-lg bg-[#C5A059] hover:bg-[#D4AF37] text-[#051F13] text-xs font-black shadow-lg transition-all"
          >
            طلب دراسة مشروع / مناقصة
          </button>
        </div>

      </div>
    </section>
  );
};
