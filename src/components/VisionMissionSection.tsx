import React from 'react';
import { Eye, Target, Sparkles, Building, Compass } from 'lucide-react';

export const VisionMissionSection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-black text-[#08321F] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
            <span>التوجه الاستراتيجي · VISION & MISSION</span>
          </div>
          <h2 className="text-3xl font-black text-slate-900">
            رؤيتنا ورسالتنا لمستقبل السودان
          </h2>
        </div>

        {/* 2 Balanced Corporate Hero Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* الرؤية Card */}
          <div className="bg-gradient-to-br from-[#08321F] to-[#041A10] text-white p-8 sm:p-10 rounded-3xl shadow-xl border border-[#C5A059]/30 relative overflow-hidden flex flex-col justify-between text-right group">
            {/* Background luxury watermark */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#C5A059]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#03150D] border border-[#C5A059]/50 flex items-center justify-center shadow-inner">
                  <Eye className="w-7 h-7 text-[#D4AF37]" />
                </div>
                <span className="text-xs font-mono font-bold text-[#F3E19C] tracking-widest uppercase">
                  OUR VISION
                </span>
              </div>

              <h3 className="text-2xl font-black text-[#F3E19C] mb-4">
                الرؤية
              </h3>

              <blockquote className="text-lg sm:text-xl font-bold text-white leading-relaxed mb-6 border-r-4 border-[#D4AF37] pr-4">
                "المساهمة في بناء بنية تحتية أكثر كفاءة واستدامة لمستقبل السودان."
              </blockquote>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs text-slate-300">
              استشراف آفاق التنمية الحديثة وتطبيق تقنيات البناء المستدام لتلبية متطلبات النهضة الوطنية.
            </div>
          </div>

          {/* الرسالة Card */}
          <div className="bg-gradient-to-br from-white to-slate-50 text-slate-900 p-8 sm:p-10 rounded-3xl shadow-xl border border-slate-200/90 relative overflow-hidden flex flex-col justify-between text-right group hover:border-[#C5A059] transition-colors">
            {/* Background subtle watermark */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#08321F]/5 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shadow-inner">
                  <Target className="w-7 h-7 text-[#08321F]" />
                </div>
                <span className="text-xs font-mono font-bold text-[#08321F] tracking-widest uppercase">
                  OUR MISSION
                </span>
              </div>

              <h3 className="text-2xl font-black text-[#08321F] mb-4">
                الرسالة
              </h3>

              <blockquote className="text-lg sm:text-xl font-bold text-slate-900 leading-relaxed mb-6 border-r-4 border-[#08321F] pr-4">
                "تنفيذ مشاريع بنية تحتية وهندسية بجودة عالية وكفاءة مهنية، مع التركيز على احتياجات المجتمع والتنمية في السودان."
              </blockquote>
            </div>

            <div className="pt-4 border-t border-slate-200 text-xs text-slate-600">
              ترجمة الخطط الهندسية إلى واقع ملموس على الأرض يعزز استقرار المجتمعات وازدهار الاقتصاد.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
