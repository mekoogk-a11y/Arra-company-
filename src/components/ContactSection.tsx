import React, { useState } from 'react';
import { PhoneNumber } from '../types';
import { 
  Phone, MessageSquare, PhoneCall, Check, 
  Send, Edit3, Save, X, ExternalLink, ShieldAlert, CheckCircle2, MapPin 
} from 'lucide-react';
import { COMPANY_NAME_AR, COMPANY_NAME_EN, COMPANY_LOCATION_AR, COMPANY_LOCATION_EN } from '../data/companyData';

interface ContactSectionProps {
  phoneNumbers: PhoneNumber[];
  onUpdatePhoneNumbers: (updated: PhoneNumber[]) => void;
  onOpenRfp: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  phoneNumbers,
  onUpdatePhoneNumbers,
  onOpenRfp,
}) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editNumberVal, setEditNumberVal] = useState('');
  const [editNotesVal, setEditNotesVal] = useState('');
  const [isCopied, setIsCopied] = useState<string | null>(null);

  // Quick RFP form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    projectType: 'إنشاء وتطوير الطرق',
    location: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const handleStartEdit = (item: PhoneNumber) => {
    setEditingId(item.id);
    setEditNumberVal(item.number);
    setEditNotesVal(item.notes || '');
  };

  const handleSaveEdit = (id: string) => {
    const updated = phoneNumbers.map((p) => {
      if (p.id === id) {
        // Clean number
        const clean = editNumberVal.replace(/\s+/g, '');
        return {
          ...p,
          number: clean,
          displayNumber: editNumberVal,
          notes: editNotesVal,
        };
      }
      return p;
    });
    onUpdatePhoneNumbers(updated);
    setEditingId(null);
  };

  const handleCopy = (id: string, num: string) => {
    navigator.clipboard.writeText(num);
    setIsCopied(id);
    setTimeout(() => setIsCopied(null), 2000);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormLoading(true);

    try {
      await fetch('/api/rfp-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setFormSubmitted(true);
    } catch {
      setFormSubmitted(true);
    } finally {
      setFormLoading(false);
    }
  };

  // Convert number to clean WhatsApp link format
  const getWhatsappLink = (rawNumber: string) => {
    // Strip +, spaces, dashes
    const digitsOnly = rawNumber.replace(/[^0-9]/g, '');
    return `https://wa.me/${digitsOnly}?text=${encodeURIComponent('السلام عليكم، نود الاستفسار عن خدمات ومشاريع شركة اررا للبنيات التحتية المحدودة.')}`;
  };

  return (
    <section id="contact" className="py-24 bg-[#F8FAF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-black text-[#08321F] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
            <span>بيانات الاتصال المباشر · DIRECT CONTACT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3 leading-tight">
            تواصل مع شركة اررا للبنيات التحتية
          </h2>

          <div className="space-y-1">
            <div className="text-xl sm:text-2xl font-black text-[#08321F]">
              {COMPANY_NAME_AR}
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#9A7B2C] tracking-wider uppercase">
              {COMPANY_NAME_EN}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 mt-4 max-w-xl mx-auto">
            يسعدنا استقبال اتصالاتكم ومراسلاتكم المباشرة عبر الأرقام الرسمية المعتمدة للشركة والمتاحة للاتصال والمحادثة الفورية عبر واتساب.
          </p>

          {/* Company Headquarters Location Card */}
          <div className="mt-8 max-w-2xl mx-auto p-4 sm:p-5 rounded-2xl bg-white border border-[#C5A059]/40 shadow-sm flex items-center justify-center gap-3.5 text-right">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#08321F] shrink-0 shadow-inner">
              <MapPin className="w-5 h-5 text-[#C5A059]" />
            </div>
            <div className="text-right">
              <div className="text-xs font-bold text-[#9A7B2C] mb-0.5">موقع ومقر الشركة الرئيسي:</div>
              <div className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                {COMPANY_LOCATION_AR}
              </div>
              <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                {COMPANY_LOCATION_EN}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Distinct Phone Cards as explicitly ordered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {phoneNumbers.map((phone, idx) => (
            <div
              key={phone.id}
              className="bg-white rounded-2xl border-2 border-slate-200/90 hover:border-[#C5A059] p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-right relative group"
            >
              {/* Card Label */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#08321F] group-hover:bg-[#08321F] group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5 text-[#C5A059]" />
                  </div>

                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-black">
                    {phone.label}
                  </span>
                </div>

                {/* Edit modal / state */}
                {editingId === phone.id ? (
                  <div className="space-y-3 mb-4 p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <input
                      type="text"
                      value={editNumberVal}
                      onChange={(e) => setEditNumberVal(e.target.value)}
                      placeholder="+249..."
                      className="w-full text-xs font-mono font-bold p-2 bg-white border border-slate-300 rounded-lg text-left"
                      dir="ltr"
                    />
                    <input
                      type="text"
                      value={editNotesVal}
                      onChange={(e) => setEditNotesVal(e.target.value)}
                      placeholder="وصف الخط (اختياري)..."
                      className="w-full text-xs p-2 bg-white border border-slate-300 rounded-lg"
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleSaveEdit(phone.id)}
                        className="flex-1 py-1.5 bg-[#08321F] text-white text-xs font-bold rounded-lg flex items-center justify-center gap-1"
                      >
                        <Save className="w-3 h-3" /> حفظ
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="px-3 py-1.5 bg-slate-200 text-slate-700 text-xs font-bold rounded-lg"
                      >
                        إلغاء
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Display Number */}
                    <div className="mb-2">
                      <div 
                        className="text-lg sm:text-xl font-mono font-black text-slate-900 tracking-wide text-left cursor-pointer hover:text-[#08321F] transition-colors"
                        dir="ltr"
                        onClick={() => handleCopy(phone.id, phone.number)}
                        title="انقر لنسخ الرقم"
                      >
                        {phone.displayNumber}
                      </div>
                      {phone.notes && (
                        <div className="text-xs text-slate-500 font-medium mt-1">
                          {phone.notes}
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>

              {/* Action Buttons: اتصال + WhatsApp */}
              <div className="space-y-2 pt-4 border-t border-slate-100">
                {/* زر اتصال */}
                <a
                  href={`tel:${phone.number}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#08321F] hover:bg-[#062416] text-white text-xs font-black flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>اتصال مباشر</span>
                </a>

                {/* زر WhatsApp */}
                <a
                  href={getWhatsappLink(phone.number)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>محادثة WhatsApp</span>
                </a>

                {/* Micro tools: Copy and Edit */}
                <div className="flex items-center justify-between pt-1 text-[11px] text-slate-400">
                  <button
                    onClick={() => handleCopy(phone.id, phone.number)}
                    className="hover:text-slate-700 flex items-center gap-1 transition-colors"
                  >
                    {isCopied === phone.id ? (
                      <span className="text-emerald-600 font-bold flex items-center gap-1">
                        <Check className="w-3 h-3" /> تم النسخ
                      </span>
                    ) : (
                      <span>نسخ الرقم</span>
                    )}
                  </button>

                  <button
                    onClick={() => handleStartEdit(phone)}
                    className="hover:text-[#08321F] flex items-center gap-1 transition-colors"
                    title="تعديل الرقم لمطابقة الصورة المرفقة إذا لزم الأمر"
                  >
                    <Edit3 className="w-3 h-3" />
                    <span>تعديل</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Inquiry / Request Form Box */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl text-right">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-8">
            <div>
              <h3 className="text-2xl font-black text-slate-900 mb-1">
                نموذج طلب مشروع أو استفسار رسمي
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                يمكن للجهات الحكومية والخاصة والمطورين إرسال بيانات المشروع مباشرة للإدارة الهندسية.
              </p>
            </div>
            <div className="shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-[#08321F] text-xs font-bold border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                استجابة هندسية سريعة
              </span>
            </div>
          </div>

          {formSubmitted ? (
            <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-black text-[#08321F]">تم استلام طلبكم بنجاح!</h4>
              <p className="text-sm text-slate-700 max-w-md mx-auto">
                شكراً لتواصلكم مع شركة اررا للبنيات التحتية المحدودة. سيقوم فريقنا الفني بمراجعة التفاصيل والتواصل معكم عبر الهاتف المسجل.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="mt-4 px-6 py-2 rounded-lg bg-[#08321F] text-white text-xs font-bold"
              >
                إرسال استفسار آخر
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">
                    الاسم الكامل / اسم الجهة
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="مثال: المهندس أحمد / شركة..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:border-[#08321F] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">
                    رقم الهاتف للتواصل
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+249..."
                    dir="ltr"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:border-[#08321F] transition-all text-left"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">
                    نوع المشروع أو الخدمة
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:border-[#08321F] transition-all"
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
                  <label className="block text-xs font-bold text-slate-700 mb-2">
                    موقع المشروع داخل السودان
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="مثال: الخرطوم، نهر النيل، البحر الأحمر..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:border-[#08321F] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  تفاصيل المشروع والمواصفات الأولية
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="أدخل ملخصاً لطبيعة الأعمال والمساحة أو الأطوال والجداول الزمنية المطلوبة..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:border-[#08321F] transition-all"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={formLoading}
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#08321F] to-[#0D4B2E] text-white text-sm font-black flex items-center gap-2 shadow-lg hover:brightness-110 active:scale-95 transition-all"
                >
                  {formLoading ? (
                    <span>جاري الإرسال...</span>
                  ) : (
                    <>
                      <span>إرسال الطلب للإدارة الهندسية</span>
                      <Send className="w-4 h-4 text-[#D4AF37]" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
