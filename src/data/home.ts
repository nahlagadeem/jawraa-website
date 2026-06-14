import type { Locale } from "@/config/site";

type LocalizedText = Record<Locale, string>;

export type CardItem = {
  title: LocalizedText;
  description: LocalizedText;
  image?: string;
};

export const homeCopy = {
  eyebrow: {
    en: "Jawraa Digital Transformation",
    ar: "جوراء للتحول الرقمي",
  },
  heroTitle: {
    en: "Leading the Digital Future",
    ar: "نقود المستقبل الرقمي",
  },
  heroLead: {
    en: "with purpose, precision, and scale.",
    ar: "بهدف واضح ودقة عالية ونطاق واسع.",
  },
  heroBody: {
    en: "We build intelligent digital ecosystems that help organizations modernize infrastructure, strengthen capabilities, and create measurable business value.",
    ar: "نبني منظومات رقمية ذكية تساعد الجهات على تحديث البنية التحتية، وتعزيز القدرات، وتحقيق قيمة أعمال قابلة للقياس.",
  },
  impactLabel: {
    en: "Focused Impact",
    ar: "أثر مركز",
  },
  impactText: {
    en: "Infrastructure, cloud, cybersecurity, and digital transformation solutions.",
    ar: "حلول البنية التحتية والسحابة والأمن السيبراني والتحول الرقمي.",
  },
  identityEyebrow: {
    en: "Identity",
    ar: "هويتنا",
  },
  identityTitle: {
    en: "Vision, mission, and ambition shaped as one clear direction.",
    ar: "رؤية ورسالة وطموح باتجاه واحد واضح.",
  },
  identityBody: {
    en: "A concise strategic foundation that explains where Jawraa is going, how it delivers value, and the scale of impact it aims to create.",
    ar: "أساس استراتيجي واضح يشرح وجهة جوراء، وطريقة تقديم القيمة، وحجم الأثر الذي تسعى إلى تحقيقه.",
  },
  servicesEyebrow: {
    en: "What We Do",
    ar: "ما نقدمه",
  },
  servicesTitle: {
    en: "Core services designed around real operational needs.",
    ar: "خدمات رئيسية مصممة حول احتياجات تشغيلية حقيقية.",
  },
  servicesBody: {
    en: "A focused portfolio that helps enterprises modernize infrastructure, strengthen digital capabilities, and deliver better outcomes across teams and users.",
    ar: "محفظة خدمات مركزة تساعد المؤسسات على تحديث البنية التحتية وتعزيز القدرات الرقمية وتحقيق نتائج أفضل للفرق والمستخدمين.",
  },
  partnersEyebrow: {
    en: "Our Partners",
    ar: "شركاؤنا",
  },
  partnersTitle: {
    en: "Built with trusted global technology leaders.",
    ar: "نبني مع قادة تقنية عالميين موثوقين.",
  },
  partnersBody: {
    en: "Strategic partnerships strengthen Jawraa's ability to deliver reliable, future-facing digital solutions across multiple sectors.",
    ar: "تعزز الشراكات الاستراتيجية قدرة جوراء على تقديم حلول رقمية موثوقة ومستقبلية عبر قطاعات متعددة.",
  },
  storiesEyebrow: {
    en: "Success Stories",
    ar: "قصص النجاح",
  },
  clientsEyebrow: {
    en: "Our Clients",
    ar: "عملاؤنا",
  },
  clientsTitle: {
    en: "Organizations that trusted Jawraa to support critical digital initiatives.",
    ar: "جهات وثقت بجوراء لدعم مبادرات رقمية محورية.",
  },
  clientsBody: {
    en: "Jawraa collaborates with public and private sector entities that require reliability, technical depth, and implementation excellence.",
    ar: "تعمل جوراء مع جهات حكومية وخاصة تحتاج إلى موثوقية وعمق تقني وتميز في التنفيذ.",
  },
  ctaTitle: {
    en: "Ready to build your next digital solution?",
    ar: "هل أنت جاهز لبناء حلك الرقمي القادم؟",
  },
  ctaBody: {
    en: "Let's turn strategy into a stronger digital experience for your organization, your teams, and your users.",
    ar: "لنحوّل الاستراتيجية إلى تجربة رقمية أقوى لمنظمتك وفرقك ومستخدميك.",
  },
  ctaButton: {
    en: "Contact Jawraa",
    ar: "تواصل مع جوراء",
  },
} satisfies Record<string, LocalizedText>;

export const stats = [
  { value: "20", label: { en: "Years Experience", ar: "سنة خبرة" } },
  { value: "1,000+", label: { en: "Projects Delivered", ar: "مشروع منجز" } },
  { value: "100+", label: { en: "Technology Partners", ar: "شريك تقني" } },
];

export const identityCards: CardItem[] = [
  {
    title: { en: "Vision", ar: "الرؤية" },
    description: {
      en: "To lead digital transformation by building innovative, scalable, and future-ready technology ecosystems.",
      ar: "قيادة التحول الرقمي من خلال بناء منظومات تقنية مبتكرة وقابلة للتوسع وجاهزة للمستقبل.",
    },
    image: "/assets/home/icon-eye.webp",
  },
  {
    title: { en: "Mission", ar: "الرسالة" },
    description: {
      en: "Deliver reliable infrastructure, cloud, cybersecurity, and managed services that empower organizations.",
      ar: "تقديم بنية تحتية وسحابة وأمن سيبراني وخدمات مدارة موثوقة تمكّن المؤسسات.",
    },
    image: "/assets/home/icon-target.webp",
  },
  {
    title: { en: "Ambition", ar: "الطموح" },
    description: {
      en: "Build impactful digital environments that help enterprises and public institutions grow and innovate.",
      ar: "بناء بيئات رقمية مؤثرة تساعد المؤسسات والجهات العامة على النمو والابتكار.",
    },
    image: "/assets/home/icon-rocket.webp",
  },
];

export const services: CardItem[] = [
  {
    title: { en: "Managed Services", ar: "الخدمات المدارة" },
    description: {
      en: "Operational support models that keep systems stable, efficient, and continuously optimized.",
      ar: "نماذج دعم تشغيلي تحافظ على استقرار الأنظمة وكفاءتها وتحسينها المستمر.",
    },
    image: "/assets/home/icon-gear.webp",
  },
  {
    title: { en: "Infrastructure", ar: "البنية التحتية" },
    description: {
      en: "Enterprise-ready architecture for data centers, connectivity, and critical business environments.",
      ar: "هندسة جاهزة للمؤسسات لمراكز البيانات والاتصال والبيئات التشغيلية الحرجة.",
    },
    image: "/assets/home/icon-shield.webp",
  },
  {
    title: { en: "Systems & Cloud", ar: "الأنظمة والسحابة" },
    description: {
      en: "Scalable platforms that connect on-premise operations with cloud-first digital ecosystems.",
      ar: "منصات قابلة للتوسع تربط العمليات الداخلية بالمنظومات الرقمية السحابية.",
    },
    image: "/assets/home/icon-cloud.webp",
  },
  {
    title: { en: "Cybersecurity", ar: "الأمن السيبراني" },
    description: {
      en: "Protective layers, compliance-focused controls, and resilient digital governance strategies.",
      ar: "طبقات حماية وضوابط امتثال واستراتيجيات حوكمة رقمية مرنة.",
    },
    image: "/assets/home/icon-shield.webp",
  },
  {
    title: { en: "Apple Education", ar: "Apple Education" },
    description: {
      en: "Learning technology solutions that bring creativity, accessibility, and innovation into education.",
      ar: "حلول تعليمية تقنية تعزز الإبداع والوصول والابتكار في التعليم.",
    },
  },
];

export const partners: CardItem[] = [
  {
    title: { en: "Qmatic", ar: "Qmatic" },
    description: {
      en: "A trusted customer journey management platform by leading brands to improve operations, increase profit, and enhance expertise.",
      ar: "منصة موثوقة لإدارة رحلة العميل تساعد العلامات الرائدة على تحسين العمليات ورفع الكفاءة.",
    },
    image: "/assets/home/partner-qmatic.webp",
  },
  {
    title: { en: "Cisco", ar: "Cisco" },
    description: {
      en: "Cisco is a leading global provider of information and communications technology infrastructure and enterprise networking.",
      ar: "سيسكو مزود عالمي رائد للبنية التحتية لتقنية المعلومات والاتصالات والشبكات المؤسسية.",
    },
    image: "/assets/home/partner-cisco.webp",
  },
  {
    title: { en: "Huawei", ar: "Huawei" },
    description: {
      en: "Huawei is a leading global provider of information and communications technology infrastructure and smart devices.",
      ar: "هواوي مزود عالمي رائد للبنية التحتية لتقنية المعلومات والاتصالات والأجهزة الذكية.",
    },
    image: "/assets/home/partner-huawei.webp",
  },
  {
    title: { en: "IntelexVision", ar: "IntelexVision" },
    description: {
      en: "With deep knowledge and expertise in AI, video surveillance, and software integration including many years of experience in the CCTV industry.",
      ar: "خبرة عميقة في الذكاء الاصطناعي والمراقبة المرئية وتكامل البرمجيات وخبرة واسعة في قطاع CCTV.",
    },
    image: "/assets/home/partner-intelexvision.webp",
  },
  {
    title: { en: "AppsWave", ar: "AppsWave" },
    description: {
      en: "A technology company specializing in AI, automation, and cloud solutions to enable smarter, more agile digital work environments.",
      ar: "شركة تقنية متخصصة في الذكاء الاصطناعي والأتمتة والسحابة لتمكين بيئات عمل رقمية أكثر ذكاء ومرونة.",
    },
    image: "/assets/home/partner-appswave.webp",
  },
];

export const clients: CardItem[] = [
  {
    title: { en: "Ministry of Education", ar: "وزارة التعليم" },
    description: {
      en: "Supporting education-focused digital environments, operational systems, and transformation initiatives.",
      ar: "دعم البيئات الرقمية التعليمية والأنظمة التشغيلية ومبادرات التحول.",
    },
    image: "/assets/home/client-education.webp",
  },
  {
    title: { en: "Ministry of Health", ar: "وزارة الصحة" },
    description: {
      en: "Contributing to digital infrastructure and service environments that improve operational effectiveness.",
      ar: "المساهمة في البنية التحتية الرقمية وبيئات الخدمة التي تعزز الفاعلية التشغيلية.",
    },
    image: "/assets/home/client-health.webp",
  },
  {
    title: { en: "Ministry of Culture", ar: "وزارة الثقافة" },
    description: {
      en: "Enabling digital experiences and institutional solutions aligned with cultural sector development.",
      ar: "تمكين تجارب رقمية وحلول مؤسسية مرتبطة بتطوير القطاع الثقافي.",
    },
    image: "/assets/home/client-culture.webp",
  },
  {
    title: { en: "Expo", ar: "إكسبو" },
    description: {
      en: "Supporting event-scale digital readiness, coordination environments, and technology-enabled experiences.",
      ar: "دعم الجاهزية الرقمية للفعاليات وبيئات التنسيق والتجارب المدعومة بالتقنية.",
    },
    image: "/assets/home/client-expo.webp",
  },
  {
    title: { en: "PNU", ar: "جامعة الأميرة نورة" },
    description: {
      en: "Contributing to learning, technology, and institutional digital development within higher education.",
      ar: "المساهمة في التعلم والتقنية والتطوير الرقمي المؤسسي في التعليم العالي.",
    },
    image: "/assets/home/client-pnu.webp",
  },
];
