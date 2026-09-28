import React from 'react';
import { Truck, Droplet, Building, Zap, Compass, Shield } from 'lucide-react';

export const SectorsSection: React.FC = () => {
  const sectors = [
    {
      title: 'قطاع النقل والمواصلات البرية',
      description: 'إنشاء وتأهيل شبكات الطرق القومية الرابطة بين الولايات، الجسور النيلية العابرة، والمحاور الحضرية لربط الموانئ ومراكز الإنتاج.',
      icon: Truck,
      stats: 'طرق وشرايين استراتيجية',
    },
    {
      title: 'قطاع الموارد المائية والري',
      description: 'بناء محطات الرفع الهيدروليكي، الخطوط الناقلة للمياه العذبة، حفر القنوات ومنظومات تصريف مياه الأمطار والسيول لحماية المدن.',
      icon: Droplet,
      stats: 'أمن مائي مستدام',
    },
    {
      title: 'قطاع الإنشاءات والتطوير العمراني',
      description: 'تجهيز المخططات السكنية والمناطق اللوجستية، تشييد المباني الحكومية والمرافق العامة، والأعمال الخرسانية الثقيلة.',
      icon: Building,
      stats: 'نهضة عمرانية حديثة',
    },
    {
      title: 'قطاع البنية التحتية للطاقة والاتصالات',
      description: 'تهيئة القواعد الإنشائية لمحطات التوليد ومزارع الطاقة الشمسية وتمديد مسارات كابلات الطاقة والشبكات الرئيسية.',
      icon: Zap,
      stats: 'طاقة لخدمة التنمية',
    },
  ];

  return (
    <section id="sectors" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-black text-[#08321F] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
            <span>القطاعات الاستراتيجية · STRATEGIC SECTORS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3 leading-tight">
            مجالات عمل الشركة عبر ولايات السودان
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed">
            تركز شركة اررا جهودها في قطاعات البنية الأساسية الحيوية التي تشكل العصب الاقتصادي والمحرك الرئيسي للتنمية في السودان.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#C5A059] transition-all duration-300 text-right flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-5 text-[#08321F] group-hover:bg-[#08321F] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6 text-[#C5A059]" />
                  </div>

                  <h3 className="text-base font-black text-slate-900 group-hover:text-[#08321F] transition-colors mb-2">
                    {sec.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {sec.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] font-bold text-[#9A7B2C]">
                  {sec.stats}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
