import type { Locale } from "@/config/site";
import { clients, partners, services } from "./home";

type Text = Record<Locale, string>;

export type SimpleCard = {
  title: Text;
  description: Text;
  image?: string;
};

export type ServicePageData = {
  slug: string;
  eyebrow: Text;
  title: Text;
  description: Text;
  introTitle: Text;
  introBody: Text;
  featureCards: SimpleCard[];
  includedTitle: Text;
  included: SimpleCard[];
};

export const aboutPage = {
  active: "/about",
  eyebrow: { en: "About Jawraa", ar: "عن جوراء" },
  title: {
    en: "From vision to digital impact.",
    ar: "من الرؤية إلى الأثر الرقمي.",
  },
  lead: {
    en: "A journey of innovation, infrastructure, and transformation.",
    ar: "رحلة من الابتكار والبنية التحتية والتحول.",
  },
  body: {
    en: "Jawraa was founded with one clear ambition: to build the technology foundations that make organizations more capable, connected, and prepared for a rapidly evolving digital world.",
    ar: "تأسست جوراء بطموح واضح: بناء الأسس التقنية التي تجعل المؤسسات أكثر قدرة وترابطا واستعدادا لعالم رقمي سريع التغير.",
  },
  stats: [
    { value: "10,000+", label: { en: "Service users", ar: "مستخدم خدمة" } },
    { value: "150,000 KM", label: { en: "Network reach", ar: "امتداد شبكي" } },
    { value: "20+", label: { en: "Years of market expertise", ar: "سنة خبرة" } },
  ],
  timeline: [
    { year: "2003", label: { en: "Jawraa founded", ar: "تأسيس جوراء" } },
    { year: "2010", label: { en: "Infrastructure expansion", ar: "توسع البنية التحتية" } },
    { year: "2014", label: { en: "Cloud and managed delivery", ar: "السحابة والخدمات المدارة" } },
    { year: "2018", label: { en: "Cybersecurity growth", ar: "نمو الأمن السيبراني" } },
    { year: "2026", label: { en: "Enterprise digital partner", ar: "شريك رقمي مؤسسي" } },
  ],
  values: [
    { title: { en: "Customer-Centric Focus", ar: "التركيز على العميل" }, description: { en: "We design around continuity, clarity, and outcomes.", ar: "نصمم حول الاستمرارية والوضوح والنتائج." } },
    { title: { en: "Innovation", ar: "الابتكار" }, description: { en: "We introduce practical technology that moves work forward.", ar: "نقدم تقنية عملية تدفع العمل إلى الأمام." } },
    { title: { en: "Reliability", ar: "الموثوقية" }, description: { en: "We build for stable, secure, and available operations.", ar: "نبني لعمليات مستقرة وآمنة ومتاحة." } },
    { title: { en: "Growth Mindset", ar: "عقلية النمو" }, description: { en: "We continuously improve capability, service, and delivery.", ar: "نحسن القدرات والخدمة والتسليم باستمرار." } },
    { title: { en: "Operational Excellence", ar: "التميز التشغيلي" }, description: { en: "We focus on process, precision, and measurable impact.", ar: "نركز على الإجراءات والدقة والأثر القابل للقياس." } },
    { title: { en: "Regional Impact", ar: "الأثر الإقليمي" }, description: { en: "We serve institutions that shape the region's digital future.", ar: "نخدم مؤسسات تسهم في تشكيل المستقبل الرقمي للمنطقة." } },
  ],
};

export const servicesOverview = {
  active: "/services",
  eyebrow: { en: "Services", ar: "الخدمات" },
  title: {
    en: "Digital capabilities built for continuity, security, and scale.",
    ar: "قدرات رقمية مبنية للاستمرارية والأمان والتوسع.",
  },
  description: {
    en: "Jawraa delivers focused technology services across managed operations, infrastructure, cloud platforms, cybersecurity, and Apple education solutions.",
    ar: "تقدم جوراء خدمات تقنية مركزة تشمل التشغيل المدار والبنية التحتية والمنصات السحابية والأمن السيبراني وحلول Apple Education.",
  },
  items: services,
};

export const servicePages: Record<string, ServicePageData> = {
  "managed-services": {
    slug: "managed-services",
    eyebrow: { en: "Managed Services", ar: "الخدمات المدارة" },
    title: { en: "Managed services built for continuity, speed, and operational confidence.", ar: "خدمات مدارة مبنية للاستمرارية والسرعة والثقة التشغيلية." },
    description: { en: "Jawraa combines trusted delivery with deep regional expertise to help organizations run smarter and transform faster.", ar: "تجمع جوراء بين التنفيذ الموثوق والخبرة الإقليمية لمساعدة المؤسسات على التشغيل بذكاء والتحول بسرعة." },
    introTitle: { en: "We accelerate digital transformation with tailored IT services.", ar: "نسرع التحول الرقمي بخدمات تقنية مصممة حسب الحاجة." },
    introBody: { en: "Our managed services support complex organizations through reliable operations, governance, technical staffing, service management, and continuous improvement.", ar: "تدعم خدماتنا المدارة المؤسسات المعقدة عبر التشغيل الموثوق والحوكمة والكوادر الفنية وإدارة الخدمات والتحسين المستمر." },
    featureCards: [
      { title: { en: "We accelerate digital transformation with tailored IT services.", ar: "نسرع التحول الرقمي بخدمات تقنية مصممة حسب الحاجة." }, description: { en: "Jawraa delivers cutting-edge services that drive transformation for government entities, telecom operators, and SMBs.", ar: "تقدم جوراء خدمات متقدمة تدفع التحول للجهات الحكومية ومشغلي الاتصالات والمؤسسات." }, image: "/assets/pages/managed-14.webp" },
      { title: { en: "Innovative managed services for digital transformation.", ar: "خدمات مدارة مبتكرة للتحول الرقمي." }, description: { en: "Flexible operating models, practical automation, and experienced teams keep services performing.", ar: "نماذج تشغيل مرنة وأتمتة عملية وفرق خبيرة تحافظ على أداء الخدمات." }, image: "/assets/pages/managed-34.webp" },
      { title: { en: "Strategic IT governance for sustainable success.", ar: "حوكمة تقنية استراتيجية لنجاح مستدام." }, description: { en: "Governance structures align delivery, risk, performance, and business priorities.", ar: "هياكل حوكمة تربط التسليم والمخاطر والأداء وأولويات الأعمال." }, image: "/assets/pages/managed-24.webp" },
      { title: { en: "IT talent solutions that catalyze digital transformation.", ar: "حلول كفاءات تقنية تحفز التحول الرقمي." }, description: { en: "Specialized professionals extend internal capabilities and improve execution confidence.", ar: "مختصون يعززون القدرات الداخلية ويرفعون الثقة في التنفيذ." }, image: "/assets/pages/managed-07.webp" },
    ],
    includedTitle: { en: "Our Managed Services Include", ar: "تشمل خدماتنا المدارة" },
    included: ["IT as a Service", "Outsourcing Services", "Project Management", "System Implementation", "Strategy", "Due Diligence", "Governance Stakeholder Management", "Local Supply Chain Development", "Organization Design & Procurement", "Socioeconomic Impact Assessment"].map((title) => ({ title: { en: title, ar: title }, description: { en: "Focused delivery capability for enterprise environments.", ar: "قدرة تنفيذ مركزة للبيئات المؤسسية." } })),
  },
  infrastructure: {
    slug: "infrastructure",
    eyebrow: { en: "Infrastructure", ar: "البنية التحتية" },
    title: { en: "Powering reliable infrastructure for tomorrow's digital world", ar: "تمكين بنية تحتية موثوقة لعالم الغد الرقمي" },
    description: { en: "Jawraa builds digital transformation through a foundation that integrates performance, reliability, and resilience.", ar: "تبني جوراء التحول الرقمي عبر أساس يجمع الأداء والموثوقية والمرونة." },
    introTitle: { en: "We help our clients build robust technology infrastructure for a digital future.", ar: "نساعد عملاءنا على بناء بنية تقنية قوية للمستقبل الرقمي." },
    introBody: { en: "From data centers to enterprise networks and passive infrastructure, Jawraa designs and implements environments that support critical operations.", ar: "من مراكز البيانات إلى الشبكات المؤسسية والبنية التحتية السلبية، تصمم جوراء بيئات تدعم العمليات الحرجة." },
    featureCards: [
      { title: { en: "Build, Operate, and Maintain Enduring Data Centers", ar: "بناء وتشغيل وصيانة مراكز بيانات مستدامة" }, description: { en: "Secure, scalable, and efficient data center environments.", ar: "بيئات مراكز بيانات آمنة وقابلة للتوسع وفعالة." }, image: "/assets/pages/infra-29.webp" },
      { title: { en: "Optimize Operational Efficiency and Decision-Making", ar: "تحسين الكفاءة التشغيلية واتخاذ القرار" }, description: { en: "Systems that provide performance visibility and operational control.", ar: "أنظمة توفر وضوح الأداء والتحكم التشغيلي." }, image: "/assets/pages/infra-24.webp" },
      { title: { en: "Simplify Data and Secure Storage", ar: "تبسيط البيانات وتأمين التخزين" }, description: { en: "Reliable storage, backup, and continuity foundations.", ar: "أسس موثوقة للتخزين والنسخ الاحتياطي والاستمرارية." }, image: "/assets/pages/infra-21.webp" },
      { title: { en: "Customer Network Solutions for Optimal Performance", ar: "حلول شبكات العملاء لأداء أمثل" }, description: { en: "Connectivity and network architecture for resilient organizations.", ar: "اتصال وهندسة شبكات لمؤسسات أكثر مرونة." }, image: "/assets/pages/infra-07.webp" },
    ],
    includedTitle: { en: "Passive Infrastructure", ar: "البنية التحتية السلبية" },
    included: ["Data Connectivity & Cabling", "Data Center & Site Preparation", "Campuses for Business", "Security & Surveillance", "Access Control Systems", "Enterprise System Solutions"].map((title) => ({ title: { en: title, ar: title }, description: { en: "Designed for stable enterprise operations.", ar: "مصممة لاستقرار العمليات المؤسسية." } })),
  },
  "systems-cloud": {
    slug: "systems-cloud",
    eyebrow: { en: "Systems & Cloud", ar: "الأنظمة والسحابة" },
    title: { en: "Transforming operations with intelligent cloud ecosystems", ar: "تحويل العمليات بمنظومات سحابية ذكية" },
    description: { en: "Jawraa delivers digital transformation through cloud-first solutions that improve performance, acceptance, security, and scalability.", ar: "تقدم جوراء التحول الرقمي عبر حلول سحابية تحسن الأداء والقبول والأمان والقابلية للتوسع." },
    introTitle: { en: "We empower our client's businesses with cloud-first solutions.", ar: "نمكّن أعمال عملائنا بحلول سحابية أولا." },
    introBody: { en: "Modern applications, business systems, hosting, security, and automation come together to support responsive digital operations.", ar: "تجتمع التطبيقات الحديثة وأنظمة الأعمال والاستضافة والأمان والأتمتة لدعم عمليات رقمية مرنة." },
    featureCards: [
      { title: { en: "Unlock the Power of the Cloud", ar: "إطلاق قوة السحابة" }, description: { en: "Scalable cloud platforms and migration paths.", ar: "منصات سحابية قابلة للتوسع ومسارات انتقال واضحة." }, image: "/assets/pages/cloud-11.webp" },
      { title: { en: "Drive business value and optimize operations", ar: "تعظيم قيمة الأعمال وتحسين العمليات" }, description: { en: "Business systems that improve insight, automation, and delivery.", ar: "أنظمة أعمال تحسن الرؤية والأتمتة والتسليم." }, image: "/assets/pages/cloud-18.webp" },
      { title: { en: "Prioritize security, accessibility, and integrity of data.", ar: "إعطاء الأولوية لأمن البيانات وإتاحتها وسلامتها." }, description: { en: "Security and data management practices built into the platform.", ar: "ممارسات أمن وإدارة بيانات مدمجة في المنصة." }, image: "/assets/pages/cloud-24.webp" },
      { title: { en: "Scale business operations.", ar: "توسيع العمليات التجارية." }, description: { en: "Solutions ready for growth, integration, and continuity.", ar: "حلول جاهزة للنمو والتكامل والاستمرارية." }, image: "/assets/pages/cloud-28.webp" },
    ],
    includedTitle: { en: "Systems & Cloud Services Include", ar: "تشمل خدمات الأنظمة والسحابة" },
    included: ["Systems and Applications", "Business Intelligence", "App, Push, SaaS", "ERP", "Websites", "B2B Integration", "CRM Dashboard", "ERP Consult", "Robotic Process Automation"].map((title) => ({ title: { en: title, ar: title }, description: { en: "Cloud-ready enterprise capability.", ar: "قدرة مؤسسية جاهزة للسحابة." } })),
  },
  cybersecurity: {
    slug: "cybersecurity",
    eyebrow: { en: "Cybersecurity", ar: "الأمن السيبراني" },
    title: { en: "Protecting what matters in a connected world", ar: "حماية ما يهم في عالم مترابط" },
    description: { en: "Jawraa helps organizations strengthen a digital future built on security, governance, and resilience.", ar: "تساعد جوراء المؤسسات على تعزيز مستقبل رقمي قائم على الأمان والحوكمة والمرونة." },
    introTitle: { en: "We safeguard digital journeys", ar: "نحمي الرحلات الرقمية" },
    introBody: { en: "In today's connected operations, security and continuity are business essentials. Jawraa supports organizations with practical cyber capabilities across assessment, response, governance, awareness, and managed security.", ar: "في العمليات المتصلة اليوم، يعد الأمن والاستمرارية من أساسيات الأعمال. تدعم جوراء المؤسسات بقدرات سيبرانية عملية تشمل التقييم والاستجابة والحوكمة والتوعية والأمن المدار." },
    featureCards: [
      { title: { en: "Simplifying compliance for a secure future.", ar: "تبسيط الامتثال لمستقبل آمن." }, description: { en: "Governance and compliance frameworks aligned with operating realities.", ar: "أطر حوكمة وامتثال متوافقة مع الواقع التشغيلي." } },
      { title: { en: "Comprehensive defense against cyber threats", ar: "دفاع شامل ضد التهديدات السيبرانية" }, description: { en: "Controls, monitoring, and response readiness for resilient operations.", ar: "ضوابط ومراقبة وجاهزية استجابة لعمليات مرنة." } },
      { title: { en: "Integrated security for seamless transformation.", ar: "أمن متكامل لتحول سلس." }, description: { en: "Security embedded into infrastructure, systems, and cloud transformation.", ar: "أمن مدمج في البنية التحتية والأنظمة والتحول السحابي." } },
      { title: { en: "Empowering teams as cyber defenders.", ar: "تمكين الفرق كمدافعين سيبرانيين." }, description: { en: "Awareness and training programs that improve daily security behavior.", ar: "برامج توعية وتدريب تحسن السلوك الأمني اليومي." } },
    ],
    includedTitle: { en: "Our Cybersecurity Services Include", ar: "تشمل خدمات الأمن السيبراني" },
    included: ["Threat Assessment", "Incident Response", "Compliance & Governance", "Security Architecture Design", "Training & Awareness", "Managed Security Services"].map((title) => ({ title: { en: title, ar: title }, description: { en: "Practical security capability.", ar: "قدرة أمنية عملية." } })),
  },
};

export const partnerPage = {
  active: "/partners",
  eyebrow: { en: "Partners", ar: "الشركاء" },
  title: { en: "Collaborating with global leaders to deliver excellence", ar: "نتعاون مع قادة عالميين لتقديم التميز" },
  description: { en: "Jawraa builds digital transformation through trusted partnerships that expand delivery capability across technology domains.", ar: "تبني جوراء التحول الرقمي عبر شراكات موثوقة توسع قدرات التنفيذ عبر المجالات التقنية." },
  items: partners,
  strip: ["Jamf", "Sophos", "Adobe", "Logitech", "Microsoft"],
};

export const clientsPage = {
  active: "/clients",
  eyebrow: { en: "Clients", ar: "العملاء" },
  title: { en: "Delivering value to clients across critical sectors", ar: "تقديم قيمة للعملاء عبر قطاعات حيوية" },
  description: { en: "Jawraa supports organizations that require reliable technology foundations, modern operations, and measurable transformation.", ar: "تدعم جوراء جهات تحتاج إلى أسس تقنية موثوقة وعمليات حديثة وتحول قابل للقياس." },
  items: clients,
};

export const mediaPage = {
  active: "/media-center",
  eyebrow: { en: "Media Center", ar: "المركز الإعلامي" },
  title: { en: "Latest updates from Jawraa's digital ecosystem", ar: "آخر مستجدات منظومة جوراء الرقمية" },
  description: { en: "News, insights, and announcements will be published here as the media center content is prepared.", ar: "ستنشر هنا الأخبار والرؤى والإعلانات عند تجهيز محتوى المركز الإعلامي." },
};

export const contactPage = {
  active: "/contact",
  eyebrow: { en: "Contact Us", ar: "اتصل بنا" },
  title: { en: "Start a conversation with Jawraa", ar: "ابدأ حوارا مع جوراء" },
  description: { en: "Connect with our team to discuss your next digital infrastructure, cloud, cybersecurity, or managed services initiative.", ar: "تواصل مع فريقنا لمناقشة مبادرتك القادمة في البنية التحتية أو السحابة أو الأمن السيبراني أو الخدمات المدارة." },
};
