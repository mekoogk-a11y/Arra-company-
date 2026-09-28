import React from 'react';
import { IMAGES, COMPANY_NAME_AR, COMPANY_NAME_EN } from '../data/companyData';
import { ShieldCheck, HardHat, Compass, CheckCircle2, Award, Users } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Side: Modern Civil Infrastructure Headquarters Photo (No People) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-100 group">
              <img
                src={IMAGES.civilOffice}
                alt="المقر الهندسي والتنفيذي للمشاريع - شركة اررا للبنيات التحتية"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041A10]/70 via-transparent to-transparent opacity-60" />
            </div>

            {/* Overlapping Corporate Accreditation Box */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-gradient-to-br from-[#08321F] to-[#0D4B2E] text-white p-5 rounded-2xl shadow-xl border border-[#C5A059]/40 max-w-xs hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#C5A059]/20 flex items-center justify-center shrink-0 border border-[#C5A059]/30">
                  <Award className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <div className="text-sm font-black text-white">إمكانات تشغيلية وهندسية</div>
                  <div className="text-[11px] text-slate-300">جاهزية تنفيذ مشاريع البنية التحتية بالسودان</div>
                </div>
              </div>
            </div>

            {/* Subtle Gold Frame accent behind */}
            <div className="absolute -top-4 -left-4 w-32 h-32 border-t-2 border-l-2 border-[#C5A059] rounded-tl-2xl pointer-events-none -z-10" />
          </div>

          {/* Narrative Side */}
          <div className="lg:col-span-6 text-right">
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#08321F] mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C5A059]" />
              <span>من نحن · ABOUT ARRA</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight mb-4">
              ريادة سودانية راسخة في{' '}
              <span className="text-[#08321F] relative">
                تطوير وتنفيذ البنيات التحتية
              </span>
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-5">
              تأسست <strong className="text-[#08321F] font-bold">{COMPANY_NAME_AR}</strong> ({COMPANY_NAME_EN}) لتكون صرحاً وطنياً رائداً يساهم بفاعلية في دفع عجلة التنمية العمرانية والهندسية في جمهورية السودان.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              نحن نعمل كشريك استراتيجي في مجالات البنية التحتية، ونضع في صميم أعمالنا تشييد وتأهيل شبكات الطرق والكباري الحيوية، وشبكات إمداد المياه النقية وخطوط الصرف، والمشاريع الإنشائية والهندسة المدنية المتطورة، مستندين إلى خبرات هندسية سودانية رفيعة وأحدث الآليات الثقيلة والمعدات المتطورة.
            </p>

            {/* Corporate Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <ShieldCheck className="w-5 h-5 text-[#08321F] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 mb-0.5">معايير السلامة والجودة</h4>
                  <p className="text-[11px] text-slate-500">التزام دقيق بالكود الهندسي واختبارات الجودة المخبرية.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <HardHat className="w-5 h-5 text-[#08321F] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 mb-0.5">إشراف وتنفيذ متكامل</h4>
                  <p className="text-[11px] text-slate-500">إدارة المشروعات وفق أرقى الممارسات الهندسية الدولية.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <Compass className="w-5 h-5 text-[#08321F] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 mb-0.5">حلول مستدامة للسودان</h4>
                  <p className="text-[11px] text-slate-500">مراعاة الطبيعة الجغرافية والمناخية لمختلف الأقاليم.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-[#08321F] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 mb-0.5">التزام تام بالمواعيد</h4>
                  <p className="text-[11px] text-slate-500">دقة التخطيط وسرعة الإنجاز لتسليم المشاريع التعاقدية.</p>
                </div>
              </div>
            </div>

            {/* Quick Action */}
            <div className="flex items-center gap-4">
              <a
                href="#services"
                className="px-6 py-3 rounded-lg bg-[#08321F] hover:bg-[#062416] text-white text-xs font-black transition-colors"
              >
                استعراض خدماتنا التخصصية
              </a>
              <a
                href="#why-arra"
                className="px-6 py-3 rounded-lg border border-slate-200 hover:border-[#08321F] text-slate-700 hover:text-[#08321F] text-xs font-bold transition-colors"
              >
                لماذا تختار شركة اررا؟
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
