import {
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";
import type { Locale } from "@/config/site";
import translations from "@/data/iot-ar-translations.json";

const arabicByEnglish = new Map(
  Object.entries(translations).map(([english, arabic]) => [
    normalize(english),
    arabic,
  ]),
);

for (const [english, arabic] of Object.entries(translations)) {
  const englishPart = english.match(/^\d+\s*[-–—]\s*(.+)$/)?.[1];
  const arabicPart = arabic.match(/^\d+\s*[-–—]\s*(.+)$/)?.[1];
  if (
    englishPart &&
    arabicPart &&
    !arabicByEnglish.has(normalize(englishPart))
  ) {
    arabicByEnglish.set(normalize(englishPart), arabicPart);
  }
}

const workbookAliases: Record<string, string> = {
  "AI Engine, Databases, Models, Digital Twins, Business Intelligence":
    "AI Engine, Databases, Models, Digital Twins, Business Intelligence",
  "Digital Twin, 3D models, network graphs, and flow diagrams systems":
    "Digital Twin, 3D models, network graphs, and flow diagram systems",
  "Analytics techniques are used to analyse the data through algorithmic simulations and visualization routines that are used by the digital twin to produce insights.":
    "Analytics techniques are used to analyze the data through algorithmic simulations and visualization routines that are used by the digital twin to produce insights.",
  "Urban development digital twins streamline land management, enhance planning, and optimize maintenance for efficient and sustainable operations.":
    "Urban development digital twins streamline land management, enhance planning, and optimize maintenance for efficient and sustainable operation.",
  "Smart-infrastructure digital twins can support urban planning, improve resource allocation, and strengthen resilience for more sustainable development.":
    "Smart infrastructure digital twins can support urban planning, improve resource allocation, and strengthen resilience for more sustainable development.",
  "Site survey, Installation, Antenna alignment, Modem configuration, Gateway integration, Commissioning, Connectivity validation, Testing, Documentation, Operational handover":
    "Site survey, installation, antenna alignment, modem configuration, gateway integration, commissioning, connectivity validation, testing, documentation, and operational handover.",
};

for (const [phrase, workbookPhrase] of Object.entries(workbookAliases)) {
  const arabic = arabicByEnglish.get(normalize(workbookPhrase));
  if (arabic) arabicByEnglish.set(normalize(phrase), arabic);
}

const supplementalTranslations: Record<string, string> = {
  "Hosted": "مستضافة",
  "In Saudi Arabia": "داخل المملكة العربية السعودية",
  "4 Core": "4 وظائف أساسية",
  "Platform functions": "وظائف المنصة",
  "Listed IoT use cases": "حالات استخدام إنترنت الأشياء المدرجة",
  "IoT & radio deployment": "نشر حلول إنترنت الأشياء وشبكات الراديو",
  "AI Engine, Databases, Models, Digital Twins, Business Intelligence":
    "محرك الذكاء الاصطناعي، وقواعد البيانات، والنماذج، والتوائم الرقمية، وذكاء الأعمال",
  "PwC projection: potential global contribution by 2030":
    "تقديرات PwC للمساهمة العالمية المحتملة بحلول عام 2030",
  "Global private AI investment was $91.9 billion in 2022; this was a 26.7% decrease from 2021, not an increase (Stanford AI Index 2023).":
    "بلغ الاستثمار الخاص العالمي في الذكاء الاصطناعي 91.9 مليار دولار في عام 2022؛ مسجلًا انخفاضًا بنسبة 26.7% مقارنة بعام 2021، وليس زيادة (مؤشر ستانفورد للذكاء الاصطناعي 2023).",
  "WIPO reports 37,808 published GenAI patent families in 2025, representing about 8.7% of all AI patent-family publications.":
    "تفيد المنظمة العالمية للملكية الفكرية (WIPO) بوجود 37,808 عائلة براءات اختراع منشورة في مجال الذكاء الاصطناعي التوليدي خلال عام 2025، بما يمثل نحو 8.7% من إجمالي منشورات عائلات براءات الاختراع المتعلقة بالذكاء الاصطناعي.",
  "Digital Twin": "التوأم الرقمي",
  "Low Current": "التيار المنخفض",
  "Low Current is used here as the service-category name from JAWRAA's source profile. For structured telecommunications cabling, the applicable design, installation, testing, documentation, and acceptance requirements should be defined by the project specifications and relevant standards. References to CCTV, access control, IoT, telecom, and network endpoints describe device-side installation and physical connectivity; they do not by themselves claim full system design, software configuration, regulatory approval, or certification.":
    "يُستخدم مصطلح التيار المنخفض هنا بوصفه اسم فئة الخدمة كما ورد في الملف المرجعي الخاص بجوراء. وبالنسبة لأعمال الكابلات الهيكلية الخاصة بالاتصالات، يجب أن تُحدد متطلبات التصميم والتركيب والاختبارات والتوثيق والاعتماد وفق مواصفات المشروع والمعايير ذات الصلة. وتشير الإشارات إلى أنظمة CCTV والتحكم في الدخول وإنترنت الأشياء والاتصالات ونقاط الشبكات إلى أعمال تركيب الأجهزة والربط الفيزيائي فقط، ولا تعني بحد ذاتها تقديم تصميم كامل للنظام أو إعداد البرمجيات أو الحصول على الموافقات التنظيمية أو الشهادات الفنية.",
  "Ready to explore Jawraa's next chapter?":
    "هل أنتم مستعدون لاستكشاف الفصل القادم من مسيرة جوراء؟",
  "Let's transform this company story into a stronger digital experience that reflects leadership, trust, and future-ready ambition.":
    "لنحوّل قصة الشركة إلى تجربة رقمية أقوى تعكس الريادة والثقة والطموح المستقبلي.",
  "Contact Jawraa": "تواصل مع جوراء",
};

for (const [english, arabic] of Object.entries(supplementalTranslations)) {
  arabicByEnglish.set(normalize(english), arabic);
}

const translatedProps = new Set([
  "alt",
  "aria-label",
  "description",
  "eyebrow",
  "footer",
  "label",
  "placeholder",
  "text",
  "title",
  "value",
]);

export function LocalizedIotContent({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  if (locale !== "ar") return children;
  return Children.toArray(children).map(localizeNode);
}

function localizeNode(node: ReactNode): ReactNode {
  if (typeof node === "string") return translate(node);
  if (Array.isArray(node)) return node.map(localizeNode);
  if (!isValidElement(node)) return node;

  const element = node as ReactElement<Record<string, unknown>>;
  const props = { ...element.props };

  for (const key of translatedProps) {
    if (typeof props[key] === "string") props[key] = translate(props[key]);
  }

  for (const [key, value] of Object.entries(props)) {
    if (key !== "children" && (Array.isArray(value) || isPlainObject(value))) {
      props[key] = localizeData(value);
    }
  }

  if ("children" in props) {
    props.children = Children.map(props.children as ReactNode, localizeNode);
  }

  return cloneElement(element, props);
}

function localizeData(value: unknown): unknown {
  if (typeof value === "string") return translate(value);
  if (Array.isArray(value)) return value.map(localizeData);
  if (!isPlainObject(value)) return value;

  return Object.fromEntries(
    Object.entries(value).map(([key, item]) => [key, localizeData(item)]),
  );
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !isValidElement(value);
}

function translate(value: string) {
  const leading = value.match(/^\s*/)?.[0] ?? "";
  const trailing = value.match(/\s*$/)?.[0] ?? "";
  const arabic = arabicByEnglish.get(normalize(value));
  return arabic ? `${leading}${arabic}${trailing}` : value;
}

function normalize(value: string) {
  return value
    .replace(/[’‘]/g, "'")
    .replace(/[–—]/g, "-")
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLocaleLowerCase("en");
}
