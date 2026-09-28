export interface PhoneNumber {
  id: string;
  label: string;
  number: string;
  displayNumber: string;
  hasWhatsapp: boolean;
  notes?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'roads' | 'bridges' | 'water' | 'civil' | 'energy';
  categoryLabel: string;
  location: string;
  description: string;
  image: string;
  status: 'منجز' | 'قيد التنفيذ' | 'مرحلة التصميم';
  specs?: string[];
}

export interface CoreStrength {
  id: string;
  title: string;
  description: string;
  icon: string;
}

