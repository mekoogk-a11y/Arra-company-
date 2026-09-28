import React from 'react';
import { CORE_STRENGTHS } from '../data/companyData';
import { 
  Award, Briefcase, ShieldAlert, Clock, 
  Cpu, Kanban, Leaf, CheckCircle2 
} from 'lucide-react';

export const WhyArraSection: React.FC = () => {
  const getIcon = (id: string) => {
    const props = { className: "w-6 h-6 text-[#C5A059]" };
    switch (id) {
      case 'quality': return <Award {...props} />;
      case 'professionalism': return <Briefcase {...props} />;
      case 'safety': return <ShieldAlert {...props} />;
      case 'commitment': return <Clock {...props} />;
      case 'engineering': return <Cpu {...props} />;
      case 'management-strength': return <Kanban {...props} />;
      case 'sustainability': return <Leaf {...props} />;
      case 'standards': return <CheckCircle2 {...props} />;
      default: return <Award {...props} />;
    }
  };

  return (
    <section id="why-arra" className="py-24 bg-[#051F13] text-white relative overflow-hidden">
      {/* Background Architectural Watermark / Grid */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #D4AF37 1px, transparent 1px), linear-gradient(to bottom, #D4AF37 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#F3E19C] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span>معايير التميز المؤسسي · WHY ARRA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
            لماذا تختار شركة اررا للبنيات التحتية؟
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            نجمع بين الخبرة الهندسية الراسخة والالتزام التعاقدي الصارم لبناء بنية تحتية متينة تدوم لأجيال وتدعم مسيرة التنمية والإعمار في السودان.
          </p>
        </div>

        {/* 8 Strengths Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_STRENGTHS.map((strength) => (
            <div
              key={strength.id}
              className="bg-[#03150D]/80 border border-[#C5A059]/25 hover:border-[#D4AF37] rounded-2xl p-6 text-right transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-black/40 group"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-[#08321F] border border-[#C5A059]/40 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#C5A059]/20 transition-all">
                {getIcon(strength.id)}
              </div>

              {/* Title */}
              <h3 className="text-lg font-black text-white mb-2 group-hover:text-[#F3E19C] transition-colors">
                {strength.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {strength.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
