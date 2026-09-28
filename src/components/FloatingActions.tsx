import React from 'react';
import { MessageSquare, PhoneCall } from 'lucide-react';
import { PhoneNumber } from '../types';

interface FloatingActionsProps {
  primaryPhone: PhoneNumber;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  primaryPhone,
}) => {
  const digitsOnly = primaryPhone.number.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${digitsOnly}?text=${encodeURIComponent(
    'السلام عليكم، نود الاستفسار عن خدمات ومشاريع شركة اررا للبنيات التحتية المحدودة.'
  )}`;

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-center gap-3">
      {/* Floating Call Button (Mobile/Tablet prioritized) */}
      <a
        href={`tel:${primaryPhone.number}`}
        className="sm:hidden w-12 h-12 rounded-full bg-[#08321F] text-white border-2 border-[#C5A059] shadow-2xl flex items-center justify-center transition-all transform hover:scale-110 active:scale-95"
        title="اتصال مباشر بالشركة"
        aria-label="اتصال مباشر بالشركة"
      >
        <PhoneCall className="w-5 h-5 text-[#D4AF37]" />
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center hover:bg-[#20ba5a] transition-all transform hover:scale-110 active:scale-95 border-2 border-white"
        title="محادثة مباشرة عبر واتساب"
        aria-label="محادثة مباشرة عبر واتساب"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
      </a>
    </div>
  );
};

