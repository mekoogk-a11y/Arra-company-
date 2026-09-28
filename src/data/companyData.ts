import sudanBridgeEmpty from '../assets/images/sudan_bridge_empty_1790580497808.jpg';
import sudanHighwayEmpty from '../assets/images/sudan_highway_empty_1790580467721.jpg';
import sudanWaterPlant from '../assets/images/sudan_water_plant_1790580482058.jpg';
import sudanInterchangeEmpty from '../assets/images/sudan_interchange_empty_1790580510276.jpg';
import sudanCivilOffice from '../assets/images/sudan_civil_office_1790580453927.jpg';
import officialLogo from '../assets/images/arra_official_logo_1790581144034.jpg';
import { PhoneNumber, ServiceItem, ProjectItem, CoreStrength } from '../types';

export const COMPANY_NAME_AR = "شركة اررا للبنيات التحتية المحدودة";
export const COMPANY_NAME_EN = "ARRA LIMITED INFRASTRUCTURE COMPANY";
export const COMPANY_LOCATION_AR = "الخرطوم - الأزهري - شارع المطار";
export const COMPANY_LOCATION_EN = "Khartoum, Al-Azhari, Airport Street";

export const IMAGES = {
  officialLogo: officialLogo,
  heroBridge: sudanBridgeEmpty,
  highwayPaving: sudanHighwayEmpty,
  waterPipeline: sudanWaterPlant,
  civilStructures: sudanInterchangeEmpty,
  civilOffice: sudanCivilOffice,
};

// Default direct corporate lines formatted with international code +249
export const INITIAL_PHONE_NUMBERS: PhoneNumber[] = [
  {
    id: "phone-1",
    label: "الهاتف 1",
    number: "+249912345678",
    displayNumber: "+249 91 234 5678",
    hasWhatsapp: true,
    notes: "الإدارة العامة والمشاريع",
  },
  {
    id: "phone-2",
    label: "الهاتف 2",
    number: "+249901234567",
    displayNumber: "+249 90 123 4567",
    hasWhatsapp: true,
    notes: "الشؤون الهندسية والعمليات",
  },
  {
    id: "phone-3",
    label: "الهاتف 3",
    number: "+249123456789",
    displayNumber: "+249 12 345 6789",
    hasWhatsapp: true,
    notes: "إدارة العقود والمشتريات",
  },
  {
    id: "phone-4",
    label: "الهاتف 4",
    number: "+249967890123",
    displayNumber: "+249 96 789 0123",
    hasWhatsapp: true,
    notes: "خدمة العملاء والاتصال المباشر",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "roads",
    title: "إنشاء وتطوير الطرق",
    titleEn: "Road Construction & Development",
    description: "تنفيذ الطرق السريعة والشريانية والحضرية، أعمال الرصف بالأسفلت عالي المقاومة، طبقات الأساس، وتطبيق أحدث مواصفات السلامة المرورية.",
    iconName: "Milestone",
    features: ["تعبيد الطرق السريعة والإقليمية", "أعمال التسوية والتربة والأساس الحجري", "تخطيط وعلامات السلامة المرورية"],
  },
  {
    id: "bridges",
    title: "الجسور والكباري",
    titleEn: "Bridges & Overpasses",
    description: "تصميم وتنفيذ الجسور النيلية والخرسانية المعلقة والكباري العلوية، الركائز العميقة والكمرات سابقة الصب والإجهاد وفق أعلى الحسابات الإنشائية.",
    iconName: "Anchor",
    features: ["الجسور النيلية والمعابر المائية", "الكباري العلوية والتقاطعات الحضرية", "فحص الأحمال وسلامة الهياكل الإنشائية"],
  },
  {
    id: "civil",
    title: "أعمال الهندسة المدنية",
    titleEn: "Civil Engineering Works",
    description: "حزمة متكاملة من الأعمال الإنشائية والترابية، الجدران الاستنادية، الأعمال الهيدروليكية، وحماية مجاري السيول والفيضانات.",
    iconName: "HardHat",
    features: ["تسوية وتجهيز المواقع والمخططات", "الجدران الساندة ومصارف السيول", "منشآت التحصين والخرسانة المسلحة"],
  },
  {
    id: "buildings",
    title: "المباني والمنشآت",
    titleEn: "Buildings & Facilities",
    description: "تنفيذ المنشآت الحيوية والمجمعات الإدارية، المستودعات الصناعية، والمرافق العامة المعتمدة على معايير الكفاءة والاستدامة.",
    iconName: "Building2",
    features: ["المباني المؤسسية والمرافق الإدارية", "المستودعات والمجمعات الصناعية", "المنشآت الخدمية متعددة الاستخدامات"],
  },
  {
    id: "water",
    title: "شبكات المياه",
    titleEn: "Water Supply Networks",
    description: "مد خطوط النقل الرئيسية والتوزيع للمياه الصالحة للشرب، محطات الضخ، الخزانات الخرسانية العلوية والأرضية، ومحطات المعالجة.",
    iconName: "Droplets",
    features: ["خطوط الأنابيب الناقلة والفرعية", "محطات الضخ والرفع الهيدروليكي", "الخزانات التجميعية الأرضية والعلوية"],
  },
  {
    id: "sanitation",
    title: "شبكات الصرف الصحي",
    titleEn: "Sanitation & Drainage",
    description: "تنفيذ شبكات الصرف الصحي المتكاملة، محطات الرفع، شبكات تصريف مياه الأمطار والسيول للحفاظ على السلامة البيئية والمدن.",
    iconName: "Wrench",
    features: ["شبكات تجميع الصرف الصحي ومحطات الرفع", "أنظمة تصريف مياه الأمطار والسيول", "خطوط الطرد ومرافق المعالجة البيئية"],
  },
  {
    id: "energy",
    title: "مشاريع الطاقة والبنية التحتية",
    titleEn: "Energy & Power Infrastructure",
    description: "تهيئة المواقع لمحطات التوليد وخطوط النقل الكهربائي، البنى التحتية للطاقة المتجددة الشمسية، ومحطات التحويل الفرعية.",
    iconName: "Zap",
    features: ["القواعد الخرسانية لأبراج الضغط العالي", "البنية التحتية لحقول الطاقة الشمسية", "تمديد الكابلات الأرضية ومحطات التوزيع"],
  },
  {
    id: "construction",
    title: "أعمال الإنشاءات والتطوير",
    titleEn: "Construction & Development",
    description: "أعمال التشييد الشاملة للمخططات العمرانية والمناطق اللوجستية وتطوير البيئة التحتية الحضرية لتلبية التوسع السكاني والاقتصادي.",
    iconName: "Compass",
    features: ["تطوير المناطق اللوجستية والصناعية", "أعمال الرصف والإنترلوك والميادين", "التطوير الحضري وتحديث الواجهات"],
  },
  {
    id: "maintenance",
    title: "صيانة وتأهيل البنية التحتية",
    titleEn: "Infrastructure Rehabilitation",
    description: "برامج الصيانة الدورية والطارئة للطرق والجسور والمنشآت المتضررة، كشط وإعادة تدوير الأسفلت، وترميم المنشآت الخرسانية.",
    iconName: "RefreshCw",
    features: ["كشط وإعادة رصف مقاطع الطرق المتضررة", "حقن وترميم العناصر الخرسانية المتصدعة", "صيانة وتطهير قنوات ومجاري التصريف"],
  },
  {
    id: "management",
    title: "إدارة وتنفيذ المشاريع",
    titleEn: "Project Management (EPC)",
    description: "إدارة المشروعات الهندسية من مرحلة التخطيط والدراسات وحتى التسليم، وضبط الجودة والجدول الزمني والميزانية وفق معايير PMI العالمية.",
    iconName: "ShieldCheck",
    features: ["الإشراف الهندسي الشامل وضبط الجودة QA/QC", "إدارة المشتريات وسلاسل الإمداد الهندسي", "إدارة المخاطر والالتزام بالجدول الزمني"],
  },
];

export const CORE_STRENGTHS: CoreStrength[] = [
  {
    id: "quality",
    title: "الجودة العالية",
    description: "تطبيق أدق الفحوصات المخبرية للمواد والخرسانات والأسفلت لضمان عمر تشغيلي مديد يتجاوز التوقعات.",
    icon: "Award",
  },
  {
    id: "professionalism",
    title: "الاحترافية المهنية",
    description: "منظومة عمل هندسية متكاملة تدار وفق حوكمة صارمة وأعلى معايير الشفافية والمسؤولية المهنية.",
    icon: "Briefcase",
  },
  {
    id: "safety",
    title: "السلامة المهنية (HSE)",
    description: "أولوية قصوى لسلامة الكوادر البشرية وبيئة العمل، مع الالتزام الصارم ببروتوكولات السلامة العالمية.",
    icon: "ShieldAlert",
  },
  {
    id: "commitment",
    title: "الالتزام الصارم",
    description: "احترام دقيق للجداول الزمنية والمواصفات التعاقدية والتسليم المتقن دون أي تهاون أو تأخير.",
    icon: "ClockCheck",
  },
  {
    id: "engineering",
    title: "الكفاءة الهندسية",
    description: "نخبة من المهندسين المدنيين والخبراء السودانيين المدعومين بأحدث برامج النمذجة الهندسية والتحليل الإنشائي.",
    icon: "Cpu",
  },
  {
    id: "management-strength",
    title: "إدارة المشاريع",
    description: "تطبيق منهجيات إدارة المشروعات الاحترافية للتحكم في التكاليف والمخاطر والموارد بفاعلية تامة.",
    icon: "Kanban",
  },
  {
    id: "sustainability",
    title: "الاستدامة والبيئة",
    description: "تبني حلول هندسية صديقة للبيئة والاعتماد على المواد المحلية المستدامة وحماية الموارد الطبيعية.",
    icon: "Leaf",
  },
  {
    id: "standards",
    title: "العمل وفق المعايير المهنية",
    description: "التوافق التام مع الكود الهندسي السوداني والمواصفات القياسية الدولية (ASTM, AASHTO, BS).",
    icon: "CheckCircle2",
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "مشروع تطوير الجسور النيلية ومداخل العاصمة",
    category: "bridges",
    categoryLabel: "جسور وكباري",
    location: "الخرطوم - حوض النيل",
    description: "نموذج استراتيجي لتطوير ورفع كفاءة الجسور والوصلات الشريانية الرابطة بين ضفاف النيل لتسهيل الحركة الاقتصادية والتجارية.",
    image: IMAGES.heroBridge,
    status: "قيد التنفيذ",
    specs: ["تصميم ركائز مائية عميقة", "خرسانة مسلحة سابقة الإجهاد", "معالجة التمدد والفواصل الميكانيكية"],
  },
  {
    id: "proj-2",
    title: "مشروع توسعة وسفلتة الطريق القومي الشرياني",
    category: "roads",
    categoryLabel: "طرق وسفلتة",
    location: "السودان - المحور الشمالي الأوسط",
    description: "نموذج هندسي لإنشاء طريق سريع مزدوج بمواصفات حمولة ثقيلة، يشمل طبقات الأساس الحجري وأحدث معدات الرصف الأسفلتي.",
    image: IMAGES.highwayPaving,
    status: "قيد التنفيذ",
    specs: ["رصف أسفلتي سماكة 15 سم معدل", "مقاومة درجات الحرارة العالية", "أكتاف جانبية وتصريف سيول"],
  },
  {
    id: "proj-3",
    title: "مشروع الخطوط الناقلة للمياه والبنية التحتية للري",
    category: "water",
    categoryLabel: "شبكات مياه",
    location: "السودان - القطاع الأوسط والولايات",
    description: "تنفيذ خطوط أنابيب الضغط العالي لربط مصادر المياه النقية بالمناطق السكنية والزراعية مع محطات ضخ هيدروليكية مؤتمتة.",
    image: IMAGES.waterPipeline,
    status: "منجز",
    specs: ["أنابيب حديد دكتايل قطر 800 ملم", "محطات ضخ رئيسية بقدرات عالية", "صمامات تحكم وتدفق إلكترونية"],
  },
  {
    id: "proj-4",
    title: "مشروع التقاطعات الحضرية والمنشآت الخرسانية الكبرى",
    category: "civil",
    categoryLabel: "هندسة مدنية ومنشآت",
    location: "السودان - المراكز الحضرية",
    description: "تنفيذ منشآت خرسانية ضخمة وتقاطعات علوية لتحسين الانسيابية المرورية وتطوير البنية الحضرية الأساسية للمدن.",
    image: IMAGES.civilStructures,
    status: "قيد التنفيذ",
    specs: ["قواعد خرسانية مدعمة", "كمرات خرسانية جاهزة الصب", "إنارة ذكية وأنظمة تصريف متكاملة"],
  },
];
