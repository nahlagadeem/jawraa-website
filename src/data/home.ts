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
    image: "/assets/logos/service-managed-services.svg",
  },
  {
    title: { en: "Infrastructure", ar: "البنية التحتية" },
    description: {
      en: "Enterprise-ready architecture for data centers, connectivity, and critical business environments.",
      ar: "هندسة جاهزة للمؤسسات لمراكز البيانات والاتصال والبيئات التشغيلية الحرجة.",
    },
    image: "/assets/logos/service-infrastructure.svg",
  },
  {
    title: { en: "Systems & Cloud", ar: "الأنظمة والسحابة" },
    description: {
      en: "Scalable platforms that connect on-premise operations with cloud-first digital ecosystems.",
      ar: "منصات قابلة للتوسع تربط العمليات الداخلية بالمنظومات الرقمية السحابية.",
    },
    image: "/assets/logos/service-systems-cloud.svg",
  },
  {
    title: { en: "Cybersecurity", ar: "الأمن السيبراني" },
    description: {
      en: "Protective layers, compliance-focused controls, and resilient digital governance strategies.",
      ar: "طبقات حماية وضوابط امتثال واستراتيجيات حوكمة رقمية مرنة.",
    },
    image: "/assets/logos/service-cybersecurity.svg",
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
    image: "/assets/logos/client-ministry-culture.svg",
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
    image: "/assets/logos/client-pnu.svg",
  },
];

export type SuccessStory = {
  organization?: LocalizedText;
  title: LocalizedText;
  scope: LocalizedText;
  duration: LocalizedText;
  body: LocalizedText[];
};

export const homePageCopy = {
  eyebrow: {
    en: "JAWRAA DIGITAL TRANSFORMATION",
    ar: "التحول الرقمي مع جوراء",
  },
  heroTitle: {
    en: "Leading the Digital Future",
    ar: "قيادة المستقبل الرقمي",
  },
  heroLead: {
    en: "with purpose, precision, and scale.",
    ar: "برؤية هادفة، ودقة متناهية، ونطاق متكامل.",
  },
  heroBody: {
    en: "We build intelligent digital ecosystems that help organizations modernize infrastructure, strengthen capabilities, and create measurable business value.",
    ar: "نبني منظومات رقمية ذكية تساعد المؤسسات على تحديث البنية التحتية، وتعزيز القدرات، وخلق قيمة أعمال قابلة للقياس.",
  },
  impactLabel: {
    en: "FOCUSED IMPACT",
    ar: "نتائج مؤثرة",
  },
  impactText: {
    en: "Infrastructure, cloud, cybersecurity, and digital transformation solutions.",
    ar: "حلول البنية التحتية، والسحابة، والأمن السيبراني، والتحول الرقمي.",
  },
  identityEyebrow: {
    en: "IDENTITY",
    ar: "الهوية",
  },
  identityTitle: {
    en: "Vision, mission, and ambition shaped as one clear direction.",
    ar: "رؤيتنا ورسالتنا وطموحنا.. نصيغها في اتجاه واضح وموحد.",
  },
  identityBody: {
    en: "A concise strategic foundation that explains where Jawraa is going, how it delivers value, and the scale of impact it aims to create.",
    ar: "يوضح هذا الإطار الاستراتيجي إلى أين تتجه جوراء، وكيف تخلق القيمة لعملائها، وما الأثر الذي تسعى إلى تحقيقه على المدى الطويل.",
  },
  servicesEyebrow: {
    en: "WHAT WE DO",
    ar: "خدماتنا",
  },
  servicesTitle: {
    en: "Core services designed around real operational needs.",
    ar: "خدمات أساسية صُممت لتلبي احتياجاتكم التشغيلية الفعلية.",
  },
  servicesBody: {
    en: "A focused portfolio that helps enterprises modernize infrastructure, strengthen digital capabilities, and deliver better outcomes across teams and users.",
    ar: "محفظة مركزة تساعد الشركات على تحديث البنية التحتية، وتعزيز القدرات الرقمية، وتحقيق نتائج أفضل عبر الفرق والمستخدمين.",
  },
  partnersEyebrow: {
    en: "OUR PARTNERS",
    ar: "شركاؤنا",
  },
  partnersTitle: {
    en: "Built with trusted global technology leaders.",
    ar: "بُني مع قادة تقنية عالميين موثوقين.",
  },
  partnersBody: {
    en: "Strategic partnerships strengthen Jawraa’s ability to deliver reliable, future-facing digital solutions across multiple sectors.",
    ar: "تعزز الشراكات الاستراتيجية قدرة جوراء على تقديم حلول رقمية موثوقة ومواكبة للمستقبل عبر قطاعات متعددة.",
  },
  storiesEyebrow: {
    en: "SUCCESS STORIES",
    ar: "قصص النجاح",
  },
  clientsEyebrow: {
    en: "OUR CLIENTS",
    ar: "عملاؤنا",
  },
  clientsTitle: {
    en: "Organizations that trusted Jawraa to support critical digital initiatives.",
    ar: "منظمات وثقت بجوراء لدعم مبادرات رقمية حيوية.",
  },
  clientsBody: {
    en: "Jawraa collaborates with public and private sector entities that require reliability, technical depth, and implementation excellence.",
    ar: "تتعاون جوراء مع جهات من القطاعين العام والخاص تتطلب الموثوقية، والعمق التقني، والتميز في التنفيذ.",
  },
  readMore: {
    en: "Read more",
    ar: "اقرأ المزيد",
  },
  ctaTitle: {
    en: "Ready to build your next digital solution?",
    ar: "هل أنت مستعد لبناء حلك الرقمي القادم؟",
  },
  ctaBody: {
    en: "Let’s turn strategy into a stronger digital experience for your organization, your teams, and your users.",
    ar: "لنحوّل الاستراتيجية إلى تجربة رقمية أقوى لمؤسستك، وفرقك، ومستخدميك.",
  },
  ctaButton: {
    en: "Contact Jawraa",
    ar: "تواصل مع جوراء",
  },
} satisfies Record<string, LocalizedText>;

export const homeStats = [
  { value: "20", label: { en: "Years Experience", ar: "سنوات خبرة" } },
  { value: "1,000+", label: { en: "Projects Delivered", ar: "مشروع تم تسليمه" } },
  { value: "100+", label: { en: "Technology Partners", ar: "شركاء تقنيون" } },
];

export const homeIdentityCards: CardItem[] = [
  {
    title: { en: "Vision", ar: "الرؤية" },
    description: {
      en: "To lead digital transformation by building innovative, scalable, and future-ready technology ecosystems.",
      ar: "قيادة التحول الرقمي من خلال بناء منظومات تقنية مبتكرة، وقابلة للتوسع، وجاهزة للمستقبل.",
    },
    image: "/assets/home/icon-eye.webp",
  },
  {
    title: { en: "Mission", ar: "الرسالة" },
    description: {
      en: "Deliver reliable infrastructure, cloud, cybersecurity, and managed services that empower organizations.",
      ar: "تقديم بنية تحتية موثوقة، وخدمات سحابية، وأمن سيبراني، وخدمات مُدارة تمكّن المؤسسات.",
    },
    image: "/assets/home/icon-target.webp",
  },
  {
    title: { en: "Ambition", ar: "طموحنا" },
    description: {
      en: "Build impactful digital environments that help enterprises and public institutions grow and innovate.",
      ar: "بناء بيئات رقمية مؤثرة تساعد الشركات والمؤسسات العامة على النمو والابتكار.",
    },
    image: "/assets/home/icon-rocket.webp",
  },
];

export const homeServices: CardItem[] = [
  {
    title: { en: "Managed Services", ar: "الخدمات المُدارة" },
    description: {
      en: "Operational support models that keep systems stable, efficient, and continuously optimized.",
      ar: "نماذج دعم تشغيلي تحافظ على استقرار الأنظمة وكفاءتها وتحسينها المستمر.",
    },
    image: "/assets/logos/service-managed-services.svg",
  },
  {
    title: { en: "Infrastructure", ar: "البنية التحتية" },
    description: {
      en: "Enterprise-ready architecture for data centers, connectivity, and critical business environments.",
      ar: "بنية جاهزة للمؤسسات لمراكز البيانات، والاتصال، وبيئات الأعمال الحرجة.",
    },
    image: "/assets/logos/service-infrastructure.svg",
  },
  {
    title: { en: "Systems & Cloud", ar: "الأنظمة والسحابة" },
    description: {
      en: "Scalable platforms that connect on-premise operations with cloud-first digital ecosystems.",
      ar: "منصات قابلة للتوسع تربط العمليات المحلية بمنظومات رقمية قائمة على السحابة أولًا.",
    },
    image: "/assets/logos/service-systems-cloud.svg",
  },
  {
    title: { en: "Cybersecurity", ar: "الأمن السيبراني" },
    description: {
      en: "Protective layers, compliance-focused controls, and resilient digital governance strategies.",
      ar: "طبقات حماية، وضوابط تركز على الامتثال، واستراتيجيات حوكمة رقمية مرنة.",
    },
    image: "/assets/logos/service-cybersecurity.svg",
  },
  {
    title: { en: "Apple Education", ar: "تعليم آبل" },
    description: {
      en: "Learning technology solutions that bring creativity, accessibility, and innovation into education.",
      ar: "حلول تقنية تعليمية تجلب الإبداع، وإمكانية الوصول، والابتكار إلى التعليم.",
    },
  },
];

export const homePartners: CardItem[] = [
  {
    title: { en: "Qmatic", ar: "كيو ماتك" },
    description: {
      en: "A trusted customer journey management platform by leading banks to improve operations, increase profit, and enhance expertise.",
      ar: "منصة موثوقة لإدارة رحلة العميل من قبل بنوك رائدة لتحسين العمليات، وزيادة الأرباح، وتعزيز الخبرة.",
    },
    image: "/assets/home/partner-qmatic.webp",
  },
  {
    title: { en: "Cisco", ar: "سيسكو" },
    description: {
      en: "Cisco is a leading global provider of information and communications technology (ICT) infrastructure and enterprise networking.",
      ar: "سيسكو مزود عالمي رائد للبنية التحتية لتقنية المعلومات والاتصالات (ICT) وشبكات المؤسسات.",
    },
    image: "/assets/home/partner-cisco.webp",
  },
  {
    title: { en: "Huawei", ar: "هواوي" },
    description: {
      en: "Huawei is a leading global provider of information and communications technology (ICT) infrastructure and smart devices.",
      ar: "هواوي مزود عالمي رائد للبنية التحتية لتقنية المعلومات والاتصالات (ICT) والأجهزة الذكية.",
    },
    image: "/assets/home/partner-huawei.webp",
  },
  {
    title: { en: "IntelexVision", ar: "إنتلكس فيجن" },
    description: {
      en: "With deep knowledge and expertise in AI, video surveillance, and software integration including many years of experience in the CCTV industry.",
      ar: "بمعرفة وخبرة عميقة في الذكاء الاصطناعي، والمراقبة بالفيديو، وتكامل البرمجيات، بما في ذلك سنوات عديدة من الخبرة في مجال كاميرات المراقبة.",
    },
    image: "/assets/home/partner-intelexvision.webp",
  },
  {
    title: { en: "AppsWave", ar: "آبس ويف" },
    description: {
      en: "A technology company specializing in AI, automation, and cloud solutions to enable smarter, more agile digital work environments.",
      ar: "شركة تقنية متخصصة في الذكاء الاصطناعي، والأتمتة، والحلول السحابية لتمكين بيئات عمل رقمية أكثر ذكاءً ومرونة.",
    },
    image: "/assets/logos/partner-appswave.svg",
  },
];

export const homeSuccessStories: SuccessStory[] = [
  {
    title: {
      en: "NWC IT Staff Augmentation",
      ar: "تعزيز كوادر تقنية المعلومات لدى شركة المياه الوطنية",
    },
    scope: {
      en: "Project Scope: Managed IT staff augmentation services",
      ar: "نطاق المشروع: خدمات تعزيز كوادر تقنية المعلومات المُدارة",
    },
    duration: {
      en: "Duration: Three years (starting Q3 2019)",
      ar: "المدة: ثلاث سنوات (ابتداءً من الربع الثالث 2019)",
    },
    body: [
      {
        en: "Jawraa successfully provided highly skilled IT professionals to NWC, ensuring seamless operations and project execution.",
        ar: "نجحت جوراء في توفير متخصصين ذوي مهارات عالية في تقنية المعلومات لشركة المياه الوطنية، مما ضمن سلاسة العمليات وتنفيذ المشاريع.",
      },
      {
        en: "Our comprehensive managed services ensured the effective management and supervision of IT staff throughout the project.",
        ar: "ضمنت خدماتنا المُدارة الشاملة الإدارة والإشراف الفعال على كوادر تقنية المعلومات طوال فترة المشروع.",
      },
    ],
  },
  {
    title: {
      en: "NWC Hayat Transformation Business Enablement",
      ar: "تمكين أعمال تحول حياة لدى شركة المياه الوطنية",
    },
    scope: {
      en: "Project Scope: Change management program for standard used processes across directorates.",
      ar: "نطاق المشروع: برنامج إدارة التغيير للعمليات القياسية المستخدمة عبر الإدارات.",
    },
    duration: {
      en: "Duration: One year (starting Q3 2019)",
      ar: "المدة: سنة واحدة (ابتداءً من الربع الثالث 2019)",
    },
    body: [
      {
        en: "Jawraa played a pivotal role in implementing a strategic transformation program at NWC, enabling standardized processes and enhancing user experience across multiple directorates.",
        ar: "لعبت جوراء دورًا محوريًا في تنفيذ برنامج تحول استراتيجي لدى شركة المياه الوطنية، مما مكّن من توحيد العمليات وتعزيز تجربة المستخدم عبر عدة إدارات.",
      },
    ],
  },
  {
    organization: { en: "TETCO", ar: "TETCO" },
    title: {
      en: "Ministry of Education TETCO Future Gate Project",
      ar: "مشروع بوابة المستقبل لوزارة التعليم وTETCO",
    },
    scope: {
      en: "Project Scope: Digital transformation project to create interactive transformation framework",
      ar: "نطاق المشروع: مشروع تحول رقمي لإنشاء إطار تحول تفاعلي",
    },
    duration: { en: "Duration: On-going", ar: "المدة: مستمر" },
    body: [
      {
        en: "Jawraa is actively involved in Ministry of Education's TETCO's Future Gate Project, driving digital transformation and creating a modern learning environment.",
        ar: "تشارك Jawraa بفعالية في مشروع بوابة المستقبل التابع لوزارة التعليم وTETCO، من خلال قيادة التحول الرقمي وإنشاء بيئة تعليمية حديثة.",
      },
    ],
  },
  {
    organization: { en: "Zain", ar: "Zain" },
    title: { en: "Zain (TETCO Project)", ar: "Zain (TETCO Project)" },
    scope: {
      en: "Project Scope: Cloud network deployment and management for MoE schools",
      ar: "نطاق المشروع: نشر وإدارة شبكة سحابية لمدارس MoE",
    },
    duration: { en: "Duration: One year", ar: "المدة: سنة واحدة" },
    body: [
      {
        en: "Jawraa successfully deployed and managed a cloud network infrastructure for MoE schools, including core switching infrastructure, VoIP, WLAN, interactive projectors, and laptop distribution.",
        ar: "نجحت Jawraa في نشر وإدارة بنية تحتية لشبكة سحابية لمدارس MoE، بما في ذلك بنية التحويل الأساسية، وVoIP، وWLAN، وأجهزة العرض التفاعلية، وتوزيع أجهزة الحاسب المحمول.",
      },
    ],
  },
  {
    organization: {
      en: "MINISTRY OF ECONOMY & PLANNING",
      ar: "وزارة الاقتصاد والتخطيط",
    },
    title: {
      en: "MEPICT Infrastructure Implementation & Managed Services",
      ar: "تنفيذ بنية MEPICT التحتية والخدمات المُدارة",
    },
    scope: {
      en: "Project Scope: Comprehensive ICT infrastructure implementation and managed services.",
      ar: "نطاق المشروع: تنفيذ شامل للبنية التحتية لـ ICT والخدمات المُدارة.",
    },
    duration: {
      en: "Duration: Three to five-year renewal",
      ar: "المدة: تجديد من ثلاث إلى خمس سنوات",
    },
    body: [
      {
        en: "Jawraa delivered successful ICT infrastructure projects for MEP, encompassing data center facilities, network infrastructure, security and systems applications. Our managed services ensured ongoing support and optimization of the infrastructure.",
        ar: "قدّمت Jawraa مشاريع ناجحة في البنية التحتية لـ ICT لصالح MEP، وتشمل مرافق مراكز البيانات، والبنية التحتية للشبكات، والأمن، وتطبيقات الأنظمة. وقد ضمنت خدماتنا المُدارة الدعم المستمر وتحسين البنية التحتية.",
      },
    ],
  },
  {
    title: { en: "MEP E-Morasalat", ar: "MEP E-Morasalat" },
    scope: {
      en: "Project Scope: Supply and implementation of administrative communication system",
      ar: "نطاق المشروع: توريد وتنفيذ نظام الاتصالات الإدارية",
    },
    duration: { en: "Duration: One year", ar: "المدة: سنة واحدة" },
    body: [
      {
        en: "Jawraa provides comprehensive solution for administrative communications at MEP, automating document management processes and improving efficiency.",
        ar: "توفّر Jawraa حلًا شاملًا للاتصالات الإدارية في MEP، من خلال أتمتة عمليات إدارة الوثائق وتحسين الكفاءة.",
      },
    ],
  },
];

export const homeClients: CardItem[] = [
  {
    title: { en: "Ministry of Education", ar: "وزارة التعليم" },
    description: {
      en: "Supporting education-focused digital environments, operational systems, and transformation initiatives.",
      ar: "دعم البيئات الرقمية الموجهة للتعليم، والأنظمة التشغيلية، ومبادرات التحول.",
    },
    image: "/assets/home/client-education.webp",
  },
  {
    title: { en: "Ministry of Health", ar: "وزارة الصحة" },
    description: {
      en: "Contributing to digital infrastructure and service environments that improve operational effectiveness.",
      ar: "المساهمة في البنية التحتية الرقمية وبيئات الخدمات التي تحسن الفعالية التشغيلية.",
    },
    image: "/assets/home/client-health.webp",
  },
  {
    title: { en: "Ministry of Culture", ar: "وزارة الثقافة" },
    description: {
      en: "Enabling digital experiences and institutional solutions aligned with cultural sector development.",
      ar: "تمكين التجارب الرقمية والحلول المؤسسية المتوافقة مع تطوير القطاع الثقافي.",
    },
    image: "/assets/logos/client-ministry-culture.svg",
  },
  {
    title: { en: "Expo", ar: "إكسبو" },
    description: {
      en: "Supporting event-scale digital readiness, coordination environments, and technology-enabled experiences.",
      ar: "دعم الجاهزية الرقمية على مستوى الفعاليات، وبيئات التنسيق، والتجارب المدعومة بالتقنية.",
    },
    image: "/assets/home/client-expo.webp",
  },
  {
    title: { en: "PNU", ar: "جامعة الأميرة نورة" },
    description: {
      en: "Contributing to learning, technology, and institutional digital development within higher education.",
      ar: "المساهمة في التعلم، والتقنية، والتطوير الرقمي المؤسسي ضمن التعليم العالي.",
    },
    image: "/assets/logos/client-pnu.svg",
  },
];
