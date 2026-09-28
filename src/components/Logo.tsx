import React from 'react';
import { IMAGES } from '../data/companyData';

interface LogoProps {
  variant?: 'light' | 'dark' | 'header' | 'footer';
  className?: string;
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  className = '',
  showSubtitle = true,
}) => {
  const isLight = variant === 'light' || variant === 'footer';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Exact Company Logo Image - Kept strictly as is */}
      <div className="relative shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden bg-white shadow-md border-2 border-[#C5A059] p-0.5 flex items-center justify-center group">
        <img
          src={IMAGES.officialLogo}
          alt="شعار شركة اررا للبنيات التحتية المحدودة"
          className="w-full h-full object-contain transform transition-transform duration-300 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Official Typography */}
      <div className="flex flex-col text-right">
        <span
          className={`font-black tracking-tight leading-tight text-sm sm:text-base md:text-lg ${
            isLight ? 'text-white' : 'text-[#062416]'
          }`}
        >
          شركة اررا للبنيات التحتية المحدودة
        </span>
        {showSubtitle && (
          <span
            className={`font-bold tracking-widest text-[9px] sm:text-[10px] md:text-[11px] uppercase ${
              isLight ? 'text-[#D4AF37]' : 'text-[#9C7924]'
            }`}
          >
            ARRA LIMITED INFRASTRUCTURE COMPANY
          </span>
        )}
      </div>
    </div>
  );
};
