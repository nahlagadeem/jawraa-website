import type { Locale } from "@/config/site";
import { services } from "./home";

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
  introCards?: SimpleCard[];
  featureCards: SimpleCard[];
  overviewEyebrow?: Text;
  whyEyebrow?: Text;
  strengthsEyebrow?: Text;
  managedEyebrow?: Text;
  strengths?: SimpleCard[];
  outcomeCards?: SimpleCard[];
  includedTitle: Text;
  included: SimpleCard[];
};

export const aboutPage = {
  active: "/about",
  eyebrow: { en: "ABOUT JAWRAA", ar: "عن جوراء" },
  title: {
    en: "From vision to digital impact.",
    ar: "من الرؤية.. إلى الأثر الرقمي.",
  },
  lead: {
    en: "A journey of innovation, infrastructure, and transformation.",
    ar: "رحلة من الابتكار والبنية التحتية والتحول.",
  },
  body: {
    en: "Jawraa was founded with a clear ambition: to build the technology foundations that enable organizations to grow, connect, and innovate in a rapidly evolving digital world.",
    ar: "تأسست Jawraa بطموح واضح: بناء الأسس التقنية التي تمكّن المؤسسات من النمو، والتواصل، والابتكار في عالم رقمي سريع التطور.",
  },
  heroCta: { en: "Discover Our Story", ar: "اكتشف قصتنا" },
  visionLabel: { en: "Our Vision", ar: "رؤيتنا" },
  stats: [
    { value: "10,000+", label: { en: "Trusted Clients", ar: "عملاء موثوقون" } },
    { value: "150,000 KM", label: { en: "Network Coverage", ar: "تغطية الشبكة" } },
    { value: "20+", label: { en: "Years of Regional Expertise", ar: "سنوات من الخبرة الإقليمية" } },
  ],
  timelineEyebrow: { en: "JAWRAA’S JOURNEY", ar: "رحلة Jawraa" },
  timeline: [
    { year: "2005", label: { en: "Founded with a vision to provide innovative IT solutions.", ar: "تأسست برؤية لتقديم حلول تقنية معلومات مبتكرة." } },
    { year: "2008", label: { en: "Established as a system integrator, offering comprehensive IT services.", ar: "تأسست كمكامل أنظمة، تقدم خدمات تقنية معلومات شاملة." } },
    { year: "2014", label: { en: "Jawraa awarded CITC license for an MVNO in Saudi Arabia.", ar: "حصلت Jawraa على ترخيص CITC لمشغل شبكة افتراضية MVNO في المملكة العربية السعودية." } },
    { year: "2015", label: { en: "Expanded into telecom in-building solutions, providing cutting-edge connectivity solutions.", ar: "توسعت في حلول الاتصالات داخل المباني، مقدمة حلول اتصال متطورة." } },
    { year: "2016", label: { en: "Became a cloud and managed service provider, offering scalable and reliable cloud-based solutions.", ar: "أصبحت مزودًا للخدمات السحابية والخدمات المُدارة، مقدمة حلولًا سحابية قابلة للتوسع وموثوقة." } },
    { year: "2017", label: { en: "Added consultancy and governance services to our portfolio, helping clients optimize their IT operations.", ar: "أضافت خدمات الاستشارات والحوكمة إلى محفظتها، مما يساعد العملاء على تحسين عمليات تقنية المعلومات لديهم." } },
    { year: "2021", label: { en: "Evolved into a complete digital transformation provider, offering end-to-end solutions to drive business growth.", ar: "تطورت لتصبح مزودًا متكاملًا للتحول الرقمي، مقدمة حلولًا شاملة لدفع نمو الأعمال." } },
    { year: "2022", label: { en: "Jawraa awarded CITC license for an MVNO in Saudi Arabia.", ar: "حصلت Jawraa على ترخيص CITC لمشغل شبكة افتراضية MVNO في المملكة العربية السعودية." } },
    { year: "2023", label: { en: "Achieved a significant milestone by becoming an Apple Authorized Reseller.", ar: "حققت إنجازًا مهمًا بأن أصبحت موزع آبل معتمد (Apple Authorized Reseller)." } },
    { year: "2024", label: { en: "Becoming the only Apple Authorized Education Specialist in Saudi Arabia.", ar: "أصبحت أخصائي التعليم المعتمد الوحيد من آبل (Apple Authorized Education Specialist) في المملكة العربية السعودية." } },
    { year: "2025", label: { en: "Becoming the only Apple Premium Education in Saudi Arabia.", ar: "أصبحت شريك آبل المميز للتعليم (Apple Premium Education) الوحيد في المملكة العربية السعودية." } },
  ],
  identityEyebrow: { en: "IDENTITY", ar: "الهوية" },
  identity: [
    {
      title: { en: "Vision", ar: "الرؤية" },
      description: {
        en: "Our vision at Jawraa is to be the preferred partner for digital transformation in Saudi Arabia by delivering innovative solutions, leveraging our expertise, and committing fully to our clients’ success.",
        ar: "رؤيتنا في Jawraa هي أن نكون الشريك المفضل للتحول الرقمي في المملكة العربية السعودية من خلال تقديم حلول مبتكرة، والاستفادة من خبراتنا، والالتزام الكامل بنجاح عملائنا.",
      },
    },
    {
      title: { en: "Mission", ar: "الرسالة" },
      description: {
        en: "Our mission is to drive digital transformation through innovative IT solutions and comprehensive services that empower businesses to optimize operations, enhance customer experiences, and achieve sustainable growth.",
        ar: "رسالتنا هي قيادة التحول الرقمي من خلال حلول تقنية معلومات مبتكرة وخدمات شاملة تمكّن الأعمال من تحسين العمليات، وتعزيز تجارب العملاء، وتحقيق نمو مستدام.",
      },
    },
    {
      title: { en: "Ambition", ar: "الطموح" },
      description: {
        en: "We strive to continually expand our technological frontier by incorporating cutting-edge AI, deep learning, and advanced cybersecurity practices to define the next era of digital readiness.",
        ar: "نسعى إلى توسيع حدودنا التقنية باستمرار من خلال دمج الذكاء الاصطناعي المتطور، والتعلم العميق، وممارسات الأمن السيبراني المتقدمة لنرسم ملامح العصر القادم من الجاهزية الرقمية.",
      },
    },
  ],
  valuesEyebrow: { en: "VALUES", ar: "القيم" },
  valuesTitle: {
    en: "Six core values shape Jawraa’s culture and decision-making.",
    ar: "ست قيم أساسية تشكل ثقافة Jawraa وصناعة القرار فيها.",
  },
  values: [
    { title: { en: "Customer-Centric Focus", ar: "التركيز على العميل" }, description: { en: "We are keen on understanding our clients’ needs and providing solutions that exceed their expectations.", ar: "نحرص على فهم احتياجات عملائنا وتقديم حلول تتجاوز توقعاتهم." } },
    { title: { en: "Innovation", ar: "الابتكار" }, description: { en: "We embrace forward-thinking ideas and transform them into real digital progress.", ar: "نتبنى الأفكار المستقبلية ونحولها إلى تقدم رقمي حقيقي." } },
    { title: { en: "Reliability", ar: "الموثوقية" }, description: { en: "We build trust through stable systems, responsible delivery, and consistent support.", ar: "نبني الثقة من خلال أنظمة مستقرة، وتنفيذ مسؤول، ودعم مستمر." } },
    { title: { en: "Growth Mindset", ar: "عقلية النمو" }, description: { en: "We continuously improve capabilities, services, and solutions to stay ahead.", ar: "نحسّن باستمرار القدرات والخدمات والحلول للبقاء في المقدمة." } },
    { title: { en: "Operational Excellence", ar: "التميز التشغيلي" }, description: { en: "We focus on precision, structure, and execution quality across every project.", ar: "نركز على الدقة، والتنظيم، وجودة التنفيذ في كل مشروع." } },
    { title: { en: "Regional Impact", ar: "الأثر الإقليمي" }, description: { en: "We deliver solutions that strengthen the digital future of organizations across the region.", ar: "نقدم حلولًا تعزز المستقبل الرقمي للمؤسسات في أنحاء المنطقة." } },
  ],
  ctaTitle: {
    en: "Ready to explore Jawraa’s next chapter?",
    ar: "هل أنت مستعد لاستكشاف الفصل القادم من Jawraa؟",
  },
  ctaBody: {
    en: "Let’s transform this company story into a stronger digital experience that reflects leadership, trust, and future-ready ambition.",
    ar: "لنحوّل قصة هذه الشركة إلى تجربة رقمية أقوى تعكس القيادة، والثقة، والطموح الجاهز للمستقبل.",
  },
  ctaButton: { en: "Contact Jawraa", ar: "تواصل مع جوراء" },
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
    eyebrow: { en: "MANAGED SERVICES", ar: "الخدمات المُدارة" },
    title: {
      en: "Managed services built for continuity, speed, and operational confidence.",
      ar: "الخدمات المُدارة خُدمات صُممت لضمان الاستمرارية، والسرعة، والكفاءة التشغيلية.",
    },
    description: {
      en: "Jawraa combines trusted delivery with deep regional expertise to help organizations run smarter and transform faster.",
      ar: "تجمع جوراء بين التنفيذ الموثوق والخبرة الإقليمية العميقة لمساعدة المنظمات على العمل بذكاء أكبر والتحول بسرعة أعلى.",
    },
    introTitle: {
      en: "We accelerate digital transformation with tailored IT services.",
      ar: "نسرّع التحول الرقمي من خلال خدمات تقنية معلومات مصممة خصيصًا.",
    },
    introBody: {
      en: "As a trusted leader in managed services, Jawraa delivers cutting-edge solutions that drive digital transformation for government entities, telecom operators, and SMBs. Our team of industry experts applies the skills and knowledge needed to manage multi-technology projects effectively, ensuring on-time delivery, cost efficiency, and high-quality outcomes that accelerate growth in a digital-first world.",
      ar: "بصفتها رائدة موثوقة في الخدمات المُدارة، تقدم جوراء حلولًا متطورة تدفع التحول الرقمي للجهات الحكومية، ومشغلي الاتصالات، والمنشآت الصغيرة والمتوسطة. يطبّق فريقنا من خبراء الصناعة المهارات والمعرفة اللازمة لإدارة المشاريع متعددة التقنيات بفاعلية، بما يضمن التسليم في الوقت المحدد، وكفاءة التكلفة، ومخرجات عالية الجودة تسرّع النمو في عالم رقمي أولًا.",
    },
    overviewEyebrow: { en: "SERVICE OVERVIEW", ar: "نظرة عامة على الخدمة" },
    whyEyebrow: { en: "WHY JAWRAA", ar: "لماذا جوراء" },
    strengthsEyebrow: { en: "SERVICE STRENGTHS", ar: "نقاط قوة الخدمة" },
    managedEyebrow: { en: "MANAGED SERVICES", ar: "الخدمات المُدارة" },
    featureCards: [
      { title: { en: "We accelerate digital transformation with tailored IT services.", ar: "نسرّع التحول الرقمي من خلال خدمات تقنية معلومات مصممة خصيصًا." }, description: { en: "As a trusted leader in managed services, Jawraa delivers cutting-edge solutions that drive digital transformation for government entities, telecom operators, and SMBs. Our team of industry experts applies the skills and knowledge needed to manage multi-technology projects effectively, ensuring on-time delivery, cost efficiency, and high-quality outcomes that accelerate growth in a digital-first world.", ar: "بصفتها رائدة موثوقة في الخدمات المُدارة، تقدم جوراء حلولًا متطورة تدفع التحول الرقمي للجهات الحكومية، ومشغلي الاتصالات، والمنشآت الصغيرة والمتوسطة. يطبّق فريقنا من خبراء الصناعة المهارات والمعرفة اللازمة لإدارة المشاريع متعددة التقنيات بفاعلية، بما يضمن التسليم في الوقت المحدد، وكفاءة التكلفة، ومخرجات عالية الجودة تسرّع النمو في عالم رقمي أولًا." }, image: "/assets/pages/managed-14.webp" },
      { title: { en: "Innovative managed services for digital transformation.", ar: "خدمات مُدارة مبتكرة للتحول الرقمي." }, description: { en: "Jawraa provides comprehensive managed services tailored to unique business needs, drawing on over 20 years of industry expertise. Our proficiency in navigating complex, multi-technology projects guarantees timely delivery and exceptional outcomes. We deliver cost-effective solutions that drive success by prioritizing your business objectives and leveraging our robust partnerships.", ar: "تقدم جوراء خدمات مُدارة شاملة مصممة وفق احتياجات الأعمال الفريدة، مستندة إلى أكثر من 20 عامًا من الخبرة في القطاع. تضمن كفاءتنا في إدارة المشاريع المعقدة متعددة التقنيات التسليم في الوقت المناسب وتحقيق نتائج استثنائية. نقدم حلولًا فعّالة من حيث التكلفة تدفع النجاح من خلال إعطاء الأولوية لأهداف أعمالك والاستفادة من شراكاتنا القوية." }, image: "/assets/pages/managed-34.webp" },
      { title: { en: "Strategic IT governance for sustainable success.", ar: "حوكمة استراتيجية لتقنية المعلومات لتحقيق نجاح مستدام." }, description: { en: "Jawraa devotes time to understanding each business model and collaborating closely with stakeholders to assess operations comprehensively. This partnership allows us to craft a digitized business model underpinned by automated processes that enhance operational efficiency. Our strategic approach boosts efficiency, elevates customer satisfaction, and drives stronger return on investment.", ar: "تخصص جوراء الوقت لفهم كل نموذج عمل والتعاون الوثيق مع أصحاب المصلحة لتقييم العمليات بصورة شاملة. تتيح لنا هذه الشراكة صياغة نموذج أعمال رقمي مدعوم بعمليات مؤتمتة تعزز الكفاءة التشغيلية. يعزز نهجنا الاستراتيجي الكفاءة، ويرفع رضا العملاء، ويدفع عائدًا أقوى على الاستثمار." }, image: "/assets/pages/managed-24.webp" },
      { title: { en: "IT talent solutions that catalyze digital transformation.", ar: "حلول مواهب تقنية المعلومات التي تحفّز التحول الرقمي." }, description: { en: "Jawraa offers staffing and HR solutions tailored for businesses and governmental agencies needing highly skilled professionals to drive their digital transformation journey. With a strong outsourcing record and broad certifications across leading IT domains, we ensure swift turnaround times and expedited project delivery.", ar: "تقدم جوراء حلول التوظيف والموارد البشرية المصممة للشركات والجهات الحكومية التي تحتاج إلى متخصصين ذوي مهارات عالية لدفع رحلة التحول الرقمي. ومن خلال سجل قوي في التعهيد وشهادات واسعة عبر مجالات تقنية المعلومات الرائدة، نضمن أوقات إنجاز سريعة وتسليمًا معجلًا للمشاريع." }, image: "/assets/pages/managed-07.webp" },
    ],
    strengths: [
      { title: { en: "Industry Experts", ar: "خبراء الصناعة" }, description: { en: "A highly skilled team managing multi-technology environments.", ar: "فريق عالي المهارة يدير بيئات متعددة التقنيات." } },
      { title: { en: "On-Time Delivery", ar: "التسليم في الوقت المحدد" }, description: { en: "Proven project execution aligned with strict timelines.", ar: "تنفيذ مشاريع مثبت ومتوافق مع جداول زمنية صارمة." } },
      { title: { en: "Cost Efficiency", ar: "كفاءة التكلفة" }, description: { en: "Optimized solutions that reduce operational costs.", ar: "حلول محسّنة تقلل التكاليف التشغيلية." } },
      { title: { en: "High-Quality Outcomes", ar: "مخرجات عالية الجودة" }, description: { en: "Reliable implementation aligned with global standards.", ar: "تنفيذ موثوق متوافق مع المعايير العالمية." } },
    ],
    outcomeCards: [
      { title: { en: "Business Digitization", ar: "التحول الرقمي للأعمال" }, description: { en: "Automated processes that optimize operations.", ar: "عمليات مؤتمتة تُحسّن التشغيل." } },
      { title: { en: "Operational Excellence", ar: "التميز التشغيلي" }, description: { en: "Improved efficiency through strategic IT governance.", ar: "كفاءة محسّنة من خلال حوكمة استراتيجية لتقنية المعلومات." } },
      { title: { en: "Stakeholder Alignment", ar: "مواءمة أصحاب المصلحة" }, description: { en: "Collaborative planning that ensures unified objectives.", ar: "تخطيط تعاوني يضمن توحيد الأهداف." } },
      { title: { en: "Accelerated Delivery", ar: "تسليم متسارع" }, description: { en: "Swift deployment supported by certified IT professionals.", ar: "تنفيذ سريع مدعوم بمحترفي تقنية معلومات معتمدين." } },
    ],
    includedTitle: { en: "Our Managed Services Include", ar: "تشمل خدماتنا المُدارة" },
    included: [
      { title: { en: "IT as a Service", ar: "تقنية المعلومات كخدمة" }, description: { en: "Flexible IT solutions delivered on demand to support evolving business needs.", ar: "حلول تقنية معلومات مرنة تُقدّم عند الطلب لدعم احتياجات الأعمال المتغيرة." } },
      { title: { en: "Outsourcing Services", ar: "خدمات استقطاب وإسناد الكفاءات (Outsourcing)" }, description: { en: "Flexible IT professionals and sourcing solutions delivered on demand to support evolving business needs.", ar: "نوفر كوادر تقنية مؤهلة وحلول استقطاب مرنة عند الطلب، لمساعدة المؤسسات على مواكبة متطلبات الأعمال المتجددة." } },
      { title: { en: "Project Management", ar: "إدارة المشاريع" }, description: { en: "Structured project governance ensuring timely and cost-effective delivery.", ar: "حوكمة مشاريع منظمة تضمن التسليم في الوقت المناسب وبكفاءة من حيث التكلفة." } },
      { title: { en: "System Implementation", ar: "تنفيذ الأنظمة" }, description: { en: "End-to-end system deployment aligned with strategic objectives.", ar: "نشر الأنظمة من البداية إلى النهاية بما يتماشى مع الأهداف الاستراتيجية." } },
      { title: { en: "Strategy", ar: "الاستراتيجية" }, description: { en: "Strategic advisory services to align technology with business vision.", ar: "خدمات استشارية استراتيجية لمواءمة التقنية مع رؤية الأعمال." } },
      { title: { en: "Due Diligence", ar: "العناية الواجبة" }, description: { en: "Comprehensive technical and operational assessments for informed decisions.", ar: "تقييمات تقنية وتشغيلية شاملة لاتخاذ قرارات مستنيرة." } },
      { title: { en: "Government Stakeholder Management", ar: "إدارة أصحاب المصلحة الحكوميين" }, description: { en: "Structured engagement and coordination with governmental entities.", ar: "تواصل وتنسيق منظم مع الجهات الحكومية." } },
      { title: { en: "Local Supply Cluster Development", ar: "تطوير تجمع الإمداد المحلي" }, description: { en: "Strengthening local ecosystems to enhance sustainable value creation.", ar: "تعزيز المنظومات المحلية لرفع خلق القيمة المستدامة." } },
      { title: { en: "Organization Design & Procurement", ar: "تصميم المنظمة والمشتريات" }, description: { en: "Optimized organizational structures and procurement strategies.", ar: "هياكل تنظيمية واستراتيجيات مشتريات محسّنة." } },
      { title: { en: "Socioeconomic Impact Assessment", ar: "تقييم الأثر الاجتماعي والاقتصادي" }, description: { en: "Data-driven evaluation of long-term social and economic outcomes.", ar: "تقييم قائم على البيانات للنتائج الاجتماعية والاقتصادية طويلة المدى." } },
    ],
  },
  infrastructure: {
    slug: "infrastructure",
    eyebrow: { en: "Infrastructure", ar: "البنية التحتية" },
    title: {
      en: "Powering reliable infrastructure for tomorrow’s digital world",
      ar: "بنية تحتية موثوقة تُمكّن أعمال اليوم وتدعم تطلعات الغد الرقمي.",
    },
    description: {
      en: "Jawraa leads digital transformation through a Saudi vision that integrates innovation and progress, delivering solutions that make a tangible difference..",
      ar: "تقود جوراء التحول الرقمي من خلال رؤية سعودية تدمج الابتكار والتقدم، وتقدم حلولًا تصنع فرقًا ملموسًا..",
    },
    introTitle: {
      en: "We help our clients build robust technology infrastructure for a digital future.",
      ar: "نساعد عملاءنا على بناء بنية تحتية تقنية قوية لمستقبل رقمي.",
    },
    introBody: {
      en: "As part of the digital transformation journey, Jawraa offers comprehensive infrastructure services customized to telecom operators, government organizations, SMBs, and others.",
      ar: "كجزء من رحلة التحول الرقمي، تقدم جوراء خدمات بنية تحتية شاملة مخصصة لمشغلي الاتصالات، والجهات الحكومية، والشركات الصغيرة والمتوسطة، وغيرها.",
    },
    introCards: [
      {
        title: {
          en: "We help our clients build robust technology infrastructure for a digital future.",
          ar: "نساعد عملاءنا على بناء بنية تحتية تقنية قوية لمستقبل رقمي.",
        },
        description: {
          en: "As part of the digital transformation journey, Jawraa offers comprehensive infrastructure services customized to telecom operators, government organizations, SMBs, and others.",
          ar: "كجزء من رحلة التحول الرقمي، تقدم جوراء خدمات بنية تحتية شاملة مخصصة لمشغلي الاتصالات، والجهات الحكومية، والشركات الصغيرة والمتوسطة، وغيرها.",
        },
        image: "/assets/pages/infra-07.webp",
      },
      {
        title: { en: "Protect What Matters Most", ar: "حماية ما هو الأهم" },
        description: {
          en: "People, Property, and Processes. Jawraa’s comprehensive security solutions protect assets, manage access, and optimize building operations.",
          ar: "الأشخاص، والممتلكات، والعمليات. تحمي حلول جوراء الأمنية الشاملة الأصول، وتدير الوصول، وتحسّن كفاءة تشغيل المباني.",
        },
        image: "/assets/pages/infra-27.webp",
      },
    ],
    featureCards: [
      { title: { en: "Build, Operate, and Maintain Enduring Data Centers", ar: "بناء وتشغيل وصيانة مراكز بيانات مستدامة" }, description: { en: "Jawraa delivers world-class data center solutions meeting the highest standards of reliability, security, and efficiency.", ar: "تقدم جوراء حلول مراكز بيانات عالمية المستوى تلبي أعلى معايير الموثوقية والأمن والكفاءة." }, image: "/assets/pages/infra-29.webp" },
      { title: { en: "Optimize Operational Efficiency and Decision-Making", ar: "تحسين الكفاءة التشغيلية وصنع القرار" }, description: { en: "Jawraa designs state-of-the-art control rooms equipped with advanced technology and ergonomic layouts.", ar: "تصمم جوراء غرف تحكم متطورة مجهزة بتقنيات متقدمة وتخطيطات مريحة." }, image: "/assets/pages/infra-24.webp" },
      { title: { en: "Simplify Data and Secure Storage", ar: "تبسيط البيانات وتأمين التخزين" }, description: { en: "Jawraa safeguards your critical data with reliable, scalable storage solutions.", ar: "تحمي جوراء بياناتك الحيوية من خلال حلول تخزين موثوقة وقابلة للتوسع." }, image: "/assets/pages/infra-21.webp" },
      { title: { en: "Customize Network Solutions for Optimal Performance", ar: "تخصيص حلول الشبكات لتحقيق الأداء الأمثل" }, description: { en: "Jawraa designs hardware and network infrastructure solutions tailored to business needs, with a permanent emphasis on security.", ar: "تصمم جوراء حلول الأجهزة والبنية التحتية للشبكات المصممة وفقًا لاحتياجات الأعمال، مع تركيز دائم على الأمن." }, image: "/assets/pages/infra-07.webp" },
      { title: { en: "Transform Meeting Rooms into Dynamic and Inspiring Environments", ar: "تحويل غرف الاجتماعات إلى بيئات ديناميكية وملهمة" }, description: { en: "Jawraa’s solutions enable seamless communication and productive collaboration for both in-office and remote teams.", ar: "تتيح حلول جوراء تواصلًا سلسًا وتعاونًا منتجًا لكل من فرق العمل داخل المكتب وعن بُعد." }, image: "/assets/pages/infra-18.webp" },
      { title: { en: "Foster Engagement and Drive Business Success", ar: "تعزيز التفاعل ودفع نجاح الأعمال" }, description: { en: "Jawraa’s enterprise-grade digital signage solutions elevate workplace communication and employee engagement.", ar: "ترتقي حلول اللافتات الرقمية المؤسسية من جوراء بتواصل بيئة العمل وتفاعل الموظفين." }, image: "/assets/pages/infra-05.webp" },
    ],
    includedTitle: {
      en: "Passive Infrastructure",
      ar: "البنية التحتية غير النشطة (Passive Infrastructure)",
    },
    included: [
      { title: { en: "Data Connectivity (LAN/WAN)", ar: "اتصال البيانات (LAN/WAN)" }, description: { en: "", ar: "" } },
      { title: { en: "Data Center & Site Preparation", ar: "مركز البيانات وتجهيز الموقع" }, description: { en: "", ar: "" } },
      { title: { en: "Computers for Business", ar: "أجهزة الكمبيوتر للأعمال" }, description: { en: "", ar: "" } },
      { title: { en: "Security & Surveillance", ar: "الأمن والمراقبة" }, description: { en: "", ar: "" } },
      { title: { en: "Access Control Systems", ar: "أنظمة التحكم بالوصول" }, description: { en: "", ar: "" } },
      { title: { en: "Integration System Architecture", ar: "بنية أنظمة التكامل" }, description: { en: "", ar: "" } },
    ],
  },
  "systems-cloud": {
    slug: "systems-cloud",
    eyebrow: { en: "Systems and Clouds", ar: "الأنظمة والحلول السحابية" },
    title: {
      en: "Transforming operations with intelligent cloud ecosystems",
      ar: "تحويل العمليات باستخدام منظومات سحابية ذكية",
    },
    description: {
      en: "Jawraa leads digital transformation through a Saudi vision that integrates innovation and progress, delivering solutions that make a tangible difference..",
      ar: "تقود جوراء التحول الرقمي من خلال رؤية سعودية تدمج الابتكار والتقدم، وتقدّم حلولًا تصنع فرقًا ملموسًا..",
    },
    introTitle: {
      en: "We empower our clients’ businesses with cloud-first solutions.",
      ar: "نُمكّن أعمال عملائنا بحلول تعتمد على السحابة أولًا.",
    },
    introBody: {
      en: "Jawraa is a trusted partner for comprehensive system and cloud solutions our subject matter experts deliver customized solutions that optimize organizations' business operations, enhance efficiency, and drive digital transformation We specialize in ERP implementation, software integration, cloud migration, data management, and more.",
      ar: "جوراء شريك موثوق للحلول الشاملة للأنظمة والسحابة، ويقدّم خبراؤنا المتخصصون حلولًا مخصصة تُحسّن عمليات الأعمال في المؤسسات، وتعزّز الكفاءة، وتقود التحول الرقمي. نحن متخصصون في تنفيذ أنظمة ERP، وتكامل البرمجيات، والهجرة إلى السحابة، وإدارة البيانات، والمزيد.",
    },
    overviewEyebrow: {
      en: "Systems & Cloud Services",
      ar: "خدمات الأنظمة والحلول السحابية",
    },
    featureCards: [
      { title: { en: "Unlock the Power of the Cloud", ar: "استثمر القوة الكاملة للحوسبة السحابية" }, description: { en: "Jawraa plays a pivotal role in enabling its clients to leverage the cloud's benefits by maximizing efficiency and minimizing costs Whether moving systems to the cloud or optimizing existing solutions, our experts assess, evaluate, and choose the optimal solution.", ar: "تلعب جوراء دورًا محوريًا في تمكين عملائها من الاستفادة من مزايا السحابة عبر تعظيم الكفاءة وتقليل التكاليف. سواءً بنقل الأنظمة إلى السحابة أو تحسين الحلول الحالية، فإن خبراءنا يقيّمون ويحلّلون ويختارون الحل الأمثل." }, image: "/assets/pages/cloud-11.webp" },
      { title: { en: "Drive business value and optimize operations", ar: "عزّز قيمة الأعمال وحسّن العمليات" }, description: { en: "Jawraa delivers comprehensive software implementation and integration services focused on efficiency and effectiveness our experts assist in selecting the right software solutions, customizing them, and integrating them with existing systems.", ar: "تقدّم جوراء خدمات شاملة لتنفيذ البرمجيات وتكاملها تركّز على الكفاءة والفعالية، ويساعد خبراؤنا في اختيار الحلول البرمجية المناسبة، وتخصيصها، ودمجها مع الأنظمة الحالية." }, image: "/assets/pages/cloud-18.webp" },
      { title: { en: "Prioritize security, accessibility, and integrity of data.", ar: "إعطاء الأولوية لأمن البيانات وإمكانية الوصول إليها وسلامتها." }, description: { en: "Jawraa safeguards critical data with robust data management and backup solutions our experts ensure data security, accessibility, and business continuity through strategic planning and advanced technologies.", ar: "تحمي جوراء البيانات الحيوية من خلال حلول قوية لإدارة البيانات والنسخ الاحتياطي، ويضمن خبراؤنا أمن البيانات، وإمكانية الوصول إليها، واستمرارية الأعمال عبر التخطيط الاستراتيجي والتقنيات المتقدمة." }, image: "/assets/pages/cloud-24.webp" },
      { title: { en: "Scale business operations.", ar: "وسّع نطاق عمليات الأعمال." }, description: { en: "Jawraa offers expert ERP implementation, customization, and support services tailored to business needs our experts analyze existing processes, help select the right ERP system, configure it, and provide ongoing maintenance.", ar: "تقدّم جوراء خدمات متخصصة في تنفيذ أنظمة ERP وتخصيصها ودعمها بما يتناسب مع احتياجات الأعمال. ويحلل خبراؤنا العمليات الحالية، ويساعدون في اختيار نظام ERP المناسب، وتهيئته، وتقديم الصيانة المستمرة." }, image: "/assets/pages/cloud-28.webp" },
    ],
    includedTitle: { en: "Systems & Cloud Services Include:", ar: "تشمل خدمات الأنظمة والسحابة:" },
    included: [
      { title: { en: "Systems and Applications", ar: "الأنظمة والتطبيقات" }, description: { en: "", ar: "" } },
      { title: { en: "Business Intelligence", ar: "ذكاء الأعمال" }, description: { en: "", ar: "" } },
      { title: { en: "IaaS, PaaS, SaaS", ar: "IaaS, PaaS, SaaS" }, description: { en: "", ar: "" } },
      { title: { en: "ERP", ar: "ERP" }, description: { en: "", ar: "" } },
      { title: { en: "Workflow", ar: "سير العمل" }, description: { en: "", ar: "" } },
      { title: { en: "Site co-location", ar: "الاستضافة المشتركة للموقع" }, description: { en: "", ar: "" } },
      { title: { en: "EPM Dashboard", ar: "لوحة معلومات EPM" }, description: { en: "", ar: "" } },
      { title: { en: "DR solution", ar: "حل DR" }, description: { en: "", ar: "" } },
      { title: { en: "Azure Pack", ar: "حزمة Azure" }, description: { en: "", ar: "" } },
    ],
  },
  cybersecurity: {
    slug: "cybersecurity",
    eyebrow: { en: "Cybersecurity", ar: "الأمن السيبراني" },
    title: { en: "Protecting what matters in a connected world", ar: "حماية ما يهم في عالم متصل" },
    description: {
      en: "Jawraa leads digital transformation through a Saudi vision that integrates innovation and progress, delivering solutions that make a tangible difference..",
      ar: "تقود جوراء التحول الرقمي من خلال رؤية سعودية تدمج الابتكار والتقدم، وتقدم حلولًا تُحدث فرقًا ملموسًا..",
    },
    introTitle: { en: "We safeguard digital journeys", ar: "نحمي الرحلات الرقمية" },
    introBody: {
      en: "In today’s rapidly evolving digital landscape, safety and security are paramount. Organizations’ critical data is at risk as cyber threats multiply, from sophisticated attacks to inadvertent breaches. At jawraa, we empower digital transformation with robust cybersecurity solutions designed to protect every step of the way.",
      ar: "في المشهد الرقمي سريع التطور اليوم، تُعد السلامة والأمن أمرين بالغَي الأهمية. تتعرض البيانات الحساسة للمنظمات للخطر مع تزايد التهديدات السيبرانية، من الهجمات المتطورة إلى الاختراقات غير المقصودة. في جوراء، نمكّن التحول الرقمي من خلال حلول أمن سيبراني قوية مصممة لحماية كل خطوة في الطريق.",
    },
    featureCards: [
      { title: { en: "Simplifying compliance for a secure future.", ar: "تبسيط الامتثال من أجل مستقبل آمن." }, description: { en: "Navigating the complexities of regulations can be daunting. At jawraa, we streamline this process by offering expert guidance on governance, risk, and compliance (GRC) tailored specifically to the laws and regulations of the gulf region, ensuring your organization remains compliant and secure.", ar: "قد يكون التعامل مع تعقيدات اللوائح أمرًا مرهقًا. في جوراء، نبسط هذه العملية من خلال تقديم إرشاد متخصص في الحوكمة والمخاطر والامتثال (GRC) مصمم خصيصًا لقوانين ولوائح منطقة الخليج، مما يضمن بقاء منظمتك ممتثلة وآمنة." } },
      { title: { en: "Comprehensive defense against cyber threats", ar: "دفاع شامل ضد التهديدات السيبرانية" }, description: { en: "Jawraa’s proactive measures protect systems and sensitive information by preventing hackers and unauthorized access. We implement robust security protocols to ensure data remains secure and operations remain uninterrupted.", ar: "تحمي إجراءات جوراء الاستباقية الأنظمة والمعلومات الحساسة من خلال منع المخترقين والوصول غير المصرح به. نطبق بروتوكولات أمنية قوية لضمان بقاء البيانات آمنة واستمرار العمليات دون انقطاع." } },
      { title: { en: "Integrated security for seamless transformation.", ar: "أمن متكامل لتحول سلس." }, description: { en: "As organizations adopt new technologies, jawraa’s scalable cybersecurity solutions integrate security into the digital infrastructure, minimizing risks. Whether a small business or a large enterprise, our tailored frameworks protect vital data and systems for success.", ar: "مع تبني المنظمات للتقنيات الجديدة، تدمج حلول جوراء القابلة للتوسع في الأمن السيبراني الأمان ضمن البنية التحتية الرقمية، مما يقلل المخاطر. سواء كانت منشأة صغيرة أو مؤسسة كبيرة، فإن أطرنا المصممة خصيصًا تحمي البيانات والأنظمة الحيوية لتحقيق النجاح." } },
      { title: { en: "Empowering teams as cyber defenders.", ar: "تمكين الفرق كمدافعين سيبرانيين." }, description: { en: "Equip your staff to be the frontline guardians against cyber threats. Jawraa’s engaging and practical training modules ensure your team is well-informed and prepared to identify and respond to potential security challenges.", ar: "جهّز موظفيك ليكونوا خط الدفاع الأول ضد التهديدات السيبرانية. تضمن وحدات جوراء التدريبية التفاعلية والعملية أن يكون فريقك على دراية جيدة ومستعدًا لتحديد التحديات الأمنية المحتملة والاستجابة لها." } },
    ],
    includedTitle: { en: "Our Cybersecurity Services Include:", ar: "تشمل خدماتنا في الأمن السيبراني:" },
    included: [
      { title: { en: "Threat Assessment", ar: "تقييم التهديدات" }, description: { en: "", ar: "" } },
      { title: { en: "Incident Response", ar: "الاستجابة للحوادث" }, description: { en: "", ar: "" } },
      { title: { en: "Compliance & Governance", ar: "الامتثال والحوكمة" }, description: { en: "", ar: "" } },
      { title: { en: "Security Architecture Design", ar: "تصميم البنية الأمنية" }, description: { en: "", ar: "" } },
      { title: { en: "Training & Awareness", ar: "التدريب والتوعية" }, description: { en: "", ar: "" } },
      { title: { en: "Managed Security Services", ar: "خدمات الأمن المُدارة" }, description: { en: "", ar: "" } },
    ],
  },
};

const publicPartnerItems: SimpleCard[] = [
  {
    title: { en: "Qmatic", ar: "Qmatic" },
    description: {
      en: "A trusted customer journey management platform by leading brands to improve operations, increase profit, and enhance expertise.",
      ar: "منصة موثوقة لإدارة رحلة العميل من قبل العلامات التجارية الرائدة لتحسين العمليات، وزيادة الأرباح، وتعزيز الخبرات.",
    },
    image: "/assets/home/partner-qmatic.webp",
  },
  {
    title: { en: "APPSWAVE", ar: "APPSWAVE" },
    description: {
      en: "is a technology company specializing in AI, automation, and cloud solutions to enable smarter, more agile digital work environments.",
      ar: "هي شركة تقنية متخصصة في الذكاء الاصطناعي، والأتمتة، والحلول السحابية لتمكين بيئات عمل رقمية أكثر ذكاءً ومرونة.",
    },
    image: "/assets/home/partner-appswave.webp",
  },
  {
    title: { en: "Huawei", ar: "Huawei" },
    description: {
      en: "Huawei is a leading global provider of information and communications technology (ICT) infrastructure and smart devices.",
      ar: "تُعد Huawei مزودًا عالميًا رائدًا للبنية التحتية لتقنية المعلومات والاتصالات (ICT) والأجهزة الذكية.",
    },
    image: "/assets/home/partner-huawei.webp",
  },
  {
    title: { en: "Cisco", ar: "Cisco" },
    description: {
      en: "Cisco is a leading global provider of information and communications technology (ICT) infrastructure and enterprise networking.",
      ar: "تُعد Cisco مزودًا عالميًا رائدًا للبنية التحتية لتقنية المعلومات والاتصالات (ICT) وشبكات المؤسسات.",
    },
    image: "/assets/home/partner-cisco.webp",
  },
  {
    title: { en: "IntelexVision", ar: "IntelexVision" },
    description: {
      en: "With deep knowledge and expertise in AI, video surveillance and software integration including many years exp. in the CCTV industry.",
      ar: "بمعرفة وخبرة عميقة في الذكاء الاصطناعي، والمراقبة بالفيديو، وتكامل البرمجيات، بما في ذلك سنوات عديدة من الخبرة في مجال أنظمة كاميرات المراقبة (CCTV).",
    },
    image: "/assets/home/partner-intelexvision.webp",
  },
];

const publicClientItems: SimpleCard[] = [
  {
    title: { en: "Ministry of Education", ar: "وزارة التعليم" },
    description: {
      en: "The Ministry of Education oversees the development of Saudi Arabia’s education system, advancing learning, research, and innovation across schools and universities.",
      ar: "تشرف وزارة التعليم على تطوير نظام التعليم في المملكة العربية السعودية، وتعزيز التعلم والبحث والابتكار في المدارس والجامعات.",
    },
    image: "/assets/home/client-education.webp",
  },
  {
    title: { en: "Ministry of Culture", ar: "وزارة الثقافة" },
    description: {
      en: "The Ministry of Culture leads initiatives that promote cultural development, creativity, and the preservation of Saudi Arabia’s rich cultural heritage.",
      ar: "تقود وزارة الثقافة مبادرات تعزز التنمية الثقافية والإبداع والحفاظ على التراث الثقافي الغني للمملكة العربية السعودية.",
    },
    image: "/assets/home/client-culture.webp",
  },
  {
    title: { en: "EXPRO", ar: "EXPRO" },
    description: {
      en: "EXPRO is a Saudi technology company providing digital transformation, IT services, and innovative technology solutions for organizations and enterprises.",
      ar: "EXPRO هي شركة تقنية سعودية تقدم التحول الرقمي وخدمات تقنية المعلومات والحلول التقنية المبتكرة للمنظمات والمنشآت.",
    },
    image: "/assets/home/client-expo.webp",
  },
  {
    title: { en: "Ministry of Health", ar: "وزارة الصحة" },
    description: {
      en: "The Ministry of Health is responsible for managing and developing healthcare services in Saudi Arabia, improving public health and medical care nationwide.",
      ar: "وزارة الصحة مسؤولة عن إدارة وتطوير خدمات الرعاية الصحية في المملكة العربية السعودية، وتحسين الصحة العامة والرعاية الطبية على مستوى البلاد.",
    },
    image: "/assets/home/client-health.webp",
  },
  {
    title: {
      en: "Princess Nourah bint Abdulrahman University",
      ar: "جامعة الأميرة نورة بنت عبدالرحمن",
    },
    description: {
      en: "Princess Nourah bint Abdulrahman University is the largest women’s university in the world, dedicated to advancing education, research, and leadership for women in Saudi Arabia.",
      ar: "جامعة الأميرة نورة بنت عبدالرحمن هي أكبر جامعة نسائية في العالم، ومكرسة لتعزيز التعليم والبحث والقيادة للنساء في المملكة العربية السعودية.",
    },
    image: "/assets/home/client-pnu.webp",
  },
];

export const partnerPage = {
  active: "/partners",
  eyebrow: { en: "partner", ar: "الشركاء" },
  title: {
    en: "Collaborating with global leaders to deliver excellence",
    ar: "نتعاون مع القادة العالميين لتحقيق التميز",
  },
  description: {
    en: "Jawraa leads digital transformation through a Saudi vision that integrates innovation and progress, delivering solutions that make a tangible difference..",
    ar: "تقود جوراء التحول الرقمي من خلال رؤية سعودية تدمج الابتكار والتقدم، وتقدم حلولًا تُحدث فرقًا ملموسًا..",
  },
  gridEyebrow: { en: "OUR PARTNERS", ar: "شركاؤنا" },
  gridTitle: {
    en: "Organizations that trust Jawraa to support critical initiatives.",
    ar: "منظمات تثق بجوراء لدعم المبادرات الحيوية.",
  },
  gridDescription: {
    en: "Each relationship reflects confidence in Jawraa’s ability to deliver dependable digital solutions across education, health, culture, technology, and institutional transformation.",
    ar: "تعكس كل علاقة الثقة في قدرة جوراء على تقديم حلول رقمية موثوقة عبر التعليم، والصحة، والثقافة، والتقنية، والتحول المؤسسي.",
  },
  items: publicPartnerItems,
  strip: [] as string[],
};

export const clientsPage = {
  active: "/clients",
  eyebrow: { en: "CLIENTS", ar: "العملاء" },
  title: {
    en: "Delivering value to clients across critical sectors",
    ar: "تقديم قيمة للعملاء عبر قطاعات حيوية",
  },
  description: {
    en: "Jawraa leads digital transformation through a Saudi vision that integrates innovation and progress, delivering solutions that make a tangible difference..",
    ar: "تقود جوراء التحول الرقمي من خلال رؤية سعودية تدمج الابتكار والتقدم، وتقدم حلولًا تصنع فرقًا ملموسًا..",
  },
  gridEyebrow: { en: "OUR CLIENTS", ar: "عملاؤنا" },
  gridTitle: {
    en: "Organizations that trust Jawraa to support critical initiatives.",
    ar: "منظمات تثق بجوراء لدعم المبادرات الحيوية.",
  },
  gridDescription: {
    en: "Each relationship reflects confidence in Jawraa's ability to deliver dependable digital solutions across education, health, culture, technology, and institutional transformation.",
    ar: "تعكس كل علاقة الثقة في قدرة جوراء على تقديم حلول رقمية موثوقة عبر التعليم، والصحة، والثقافة، والتقنية، والتحول المؤسسي.",
  },
  items: publicClientItems,
};

export const mediaPage = {
  active: "/media-center",
  eyebrow: { en: "Media Center", ar: "المركز الإعلامي" },
  title: {
    en: "Where our innovations, news, and milestones come to life",
    ar: "حيث تنبض ابتكاراتنا وأخبارنا وإنجازاتنا بالحياة",
  },
  description: {
    en: "Jawraa leads digital transformation through a Saudi vision that integrates innovation and progress, delivering solutions that make a tangible difference..",
    ar: "تقود جوراء التحول الرقمي من خلال رؤية سعودية تدمج الابتكار والتقدم، وتقدم حلولًا تصنع فرقًا ملموسًا..",
  },
  searchLabel: { en: "Search updates", ar: "البحث في التحديثات" },
  filters: {
    all: { en: "All", ar: "الكل" },
    latest: { en: "Latest updates", ar: "آخر التحديثات" },
  },
  news: [
    {
      title: { en: "Saudi Founding Day", ar: "يوم التأسيس السعودي" },
      description: {
        en: "On the anniversary of #FoundingDay, we recall the story of the beginning three centuries ago; a story that was not just about building a state, but about laying the foundation for a solid national identity and professional values that we cherish today.",
        ar: "في ذكرى #يوم_التأسيس، نستذكر قصة البداية قبل ثلاثة قرون؛ قصة لم تكن فقط عن بناء دولة، بل عن وضع الأساس لهوية وطنية راسخة وقيم مهنية نعتز بها اليوم.",
      },
      image: "/assets/pages/media-11.webp",
    },
    {
      title: { en: "Ramadan Kareem from Jawraa", ar: "رمضان كريم من جوراء" },
      description: {
        en: "Jawraa extends its warmest wishes to our partners, clients, and community on the occasion of the holy month of Ramadan. May this blessed month bring peace, prosperity, and continued success. We look forward to strengthening the spirit of collaboration and growth together.",
        ar: "تتقدم جوراء بأصدق التهاني لشركائنا وعملائنا ومجتمعنا بمناسبة شهر رمضان المبارك. عسى أن يحمل هذا الشهر الفضيل السلام والازدهار والنجاح المستمر. ونتطلع إلى تعزيز روح التعاون والنمو معًا.",
      },
      image: "/assets/pages/media-10.webp",
    },
    {
      title: {
        en: "Strategic Partnership with Waseela at GITEX 2025",
        ar: "شراكة استراتيجية مع وسيلة في جيتكس 2025",
      },
      description: {
        en: "Jawraa signed a strategic partnership agreement with Waseela during GITEX 2025 to strengthen collaboration in technology solutions and digital integration, supporting innovation and expanding digital services across the Kingdom.",
        ar: "وقعت جوراء اتفاقية شراكة استراتيجية مع وسيلة خلال جيتكس 2025 لتعزيز التعاون في حلول التقنية والتكامل الرقمي، ودعم الابتكار وتوسيع الخدمات الرقمية في أنحاء المملكة.",
      },
      image: "/assets/pages/media-12.webp",
    },
    {
      title: {
        en: "Memorandum of Understanding with APPSWAVE",
        ar: "مذكرة تفاهم مع APPSWAVE",
      },
      description: {
        en: "Jawraa signed an MoU with APPSWAVE to advance cooperation in digital transformation and artificial intelligence solutions, supporting the Kingdom’s vision for a strong digital economy.",
        ar: "وقعت جوراء مذكرة تفاهم مع APPSWAVE لتعزيز التعاون في حلول التحول الرقمي والذكاء الاصطناعي، دعمًا لرؤية المملكة نحو اقتصاد رقمي قوي.",
      },
      image: "/assets/pages/media-13.webp",
    },
    {
      title: {
        en: "Jawraa Honored at NABH 2025 Cybersecurity Exhibition",
        ar: "تكريم جوراء في معرض NABH 2025 للأمن السيبراني",
      },
      description: {
        en: "Jawraa was recognized during the NABH 2025 Cybersecurity Awareness Exhibition for its contributions to digital transformation and knowledge development in collaboration with academic and industry partners.",
        ar: "تم تكريم جوراء خلال معرض NABH 2025 للتوعية بالأمن السيبراني نظير إسهاماتها في التحول الرقمي وتطوير المعرفة بالتعاون مع الشركاء الأكاديميين والصناعيين.",
      },
      image: "/assets/pages/media-02.webp",
    },
  ],
  contact: {
    title: {
      en: "Reach out to explore tailored solutions for your needs.",
      ar: "تواصل معنا لاستكشاف حلول مصممة خصيصًا لاحتياجاتك.",
    },
    fields: {
      name: { en: "full name", ar: "الاسم الكامل" },
      email: { en: "your email", ar: "بريدك الإلكتروني" },
      phone: { en: "your number", ar: "رقمك" },
      message: { en: "Write your message here .", ar: "اكتب رسالتك هنا ." },
    },
    send: { en: "send", ar: "إرسال" },
  },
};

export const contactPage = {
  active: "/contact",
  eyebrow: { en: "Contact Us", ar: "اتصل بنا" },
  title: { en: "Start a conversation with Jawraa", ar: "ابدأ حوارا مع جوراء" },
  description: { en: "Connect with our team to discuss your next digital infrastructure, cloud, cybersecurity, or managed services initiative.", ar: "تواصل مع فريقنا لمناقشة مبادرتك القادمة في البنية التحتية أو السحابة أو الأمن السيبراني أو الخدمات المدارة." },
};
