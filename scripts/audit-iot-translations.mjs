import { readFile } from "node:fs/promises";

const translations = JSON.parse(
  await readFile(new URL("../src/data/iot-ar-translations.json", import.meta.url)),
);
const normalize = (value) =>
  value
    .replace(/[’‘]/g, "'")
    .replace(/[–—]/g, "-")
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
const expectedByEnglish = new Map(
  Object.entries(translations).map(([english, arabic]) => [
    normalize(english),
    arabic,
  ]),
);
const decode = (value) =>
  value
    .replaceAll("&amp;", "&")
    .replace(/&#x27;|&#39;|&apos;/g, "'")
    .replaceAll("&quot;", '"');
const textNodes = (html) => {
  const content = html.replace(/<(script|style)[\s\S]*?<\/\1>/g, "");
  return [...content.matchAll(/>([^<>]+)</g)]
    .map((match) => decode(match[1]).replace(/\s+/g, " ").trim())
    .filter(Boolean);
};

let failures = 0;
for (const slug of ["iot", "iot/ai", "iot/dt", "iot/vsat", "iot/low-current"]) {
  const [englishHtml, arabicHtml] = await Promise.all(
    ["en", "ar"].map((locale) =>
      fetch(`http://127.0.0.1:3000/${locale}/${slug}`).then((response) => {
        if (!response.ok) throw new Error(`${locale}/${slug}: ${response.status}`);
        return response.text();
      }),
    ),
  );
  const english = textNodes(englishHtml);
  const arabic = textNodes(arabicHtml);
  const mismatches = [];
  const unmatched = new Set();
  let matches = 0;

  for (let index = 0; index < Math.min(english.length, arabic.length); index += 1) {
    const expected = expectedByEnglish.get(normalize(english[index]));
    if (expected !== undefined) {
      matches += 1;
      if (arabic[index] !== expected) {
        mismatches.push({ english: english[index], expected, actual: arabic[index] });
      }
    } else if (
      /[A-Za-z]{4}/.test(english[index]) &&
      !/^(Jawraa|JAWRAA|EN|VSAT|SATCOM|Facebook|LinkedIn|Instagram|TikTok|Copyright)/.test(
        english[index],
      )
    ) {
      unmatched.add(english[index]);
    }
  }

  failures += mismatches.length;
  console.log(
    `${slug}: ${matches} Excel matches, ${mismatches.length} mismatches, ${unmatched.size} unmatched source phrases`,
  );
  if (mismatches.length) console.log(JSON.stringify(mismatches, null, 2));
  if (unmatched.size) console.log("Unmatched:", [...unmatched]);
}

if (failures) process.exitCode = 1;
