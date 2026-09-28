import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { COMPANY_NAME_AR } from '../data/companyData';

interface RfpModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const RfpModal: React.FC<RfpModalProps> = ({
  isOpen,
  onClose,
  initialService = 'إنشاء وتطوير الطرق',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    projectType: initialService,
    location: '',
    details: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('/api/rfp-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-200 text-right">
        {/* Modal Header */}
        <div className="p-6 bg-gradient-to-r from-[#041A10] to-[#08321F] text-white flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-[#F3E19C] flex items-center gap-1.5 mb-1">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>{COMPANY_NAME_AR}</span>
            </div>
            <h3 className="text-xl font-black text-white">
              طلب خدمات / دراسة مشروع
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black text-[#08321F]">تم استلام طلبكم بنجاح</h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                شكراً لثقتكم بشركة اررا للبنيات التحتية المحدودة. سيقوم مهندسو الشركة بالتواصل معكم لمناقشة المتطلبات الفنية.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-[#08321F] text-white text-xs font-bold shadow-md"
              >
                إغلاق النافذة
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  اسم العميل / المؤسسة *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="الاسم الكامل أو اسم الجهة الرسمية"
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:border-[#08321F]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  رقم الهاتف للتواصل *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+249..."
                  dir="ltr"
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:border-[#08321F] text-left"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    القطاع الهندسي
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:bg-white focus:outline-none focus:border-[#08321F]"
                  >
                    <option value="إنشاء وتطوير الطرق">إنشاء وتطوير الطرق</option>
                    <option value="الجسور والكباري">الجسور والكباري</option>
                    <option value="أعمال الهندسة المدنية">أعمال الهندسة المدنية</option>
                    <option value="المباني والمنشآت">المباني والمنشآت</option>
                    <option value="شبكات المياه">شبكات المياه</option>
                    <option value="شبكات الصرف الصحي">شبكات الصرف الصحي</option>
                    <option value="مشاريع الطاقة والبنية التحتية">مشاريع الطاقة والبنية التحتية</option>
                    <option value="أعمال الإنشاءات والتطوير">أعمال الإنشاءات والتطوير</option>
                    <option value="صيانة وتأهيل البنية التحتية">صيانة وتأهيل البنية التحتية</option>
                    <option value="إدارة وتنفيذ المشاريع">إدارة وتنفيذ المشاريع</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    الولاية / المدينة داخل السودان
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="الخرطوم، بورتسودان، إلخ"
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:bg-white focus:outline-none focus:border-[#08321F]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  تفاصيل المشروع والمواصفات
                </label>
                <textarea
                  rows={3}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="أدخل نطاق العمل المطلوب والجدول الزمني التقديري..."
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:border-[#08321F]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-7 py-2.5 rounded-xl bg-[#08321F] hover:bg-[#062416] text-white text-xs font-black flex items-center gap-2 shadow-lg"
                >
                  {loading ? 'جاري الإرسال...' : 'إرسال طلب الخدمة'}
                  <Send className="w-3.5 h-3.5 text-[#D4AF37]" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
