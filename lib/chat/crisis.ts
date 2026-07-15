/**
 * Client-side crisis detection for suicidal ideation / extreme distress.
 * If matched, stop normal chat flow and show crisis resources instead.
 */

const CRISIS_PATTERNS: RegExp[] = [
  /\bkill(?:ing)? myself\b/i,
  /\bend (?:my|this) life\b/i,
  /\bsuicid(?:e|al)\b/i,
  /\bwant(?:s|ed)? to die\b/i,
  /\bdon'?t want to (?:live|be alive)\b/i,
  /\bself[-\s]?harm\b/i,
  /\bhurt myself\b/i,
  /自杀|自殺/,
  /不想活/,
  /活不下去/,
  /结束生命|了結性命/,
  /死了算了|不如死/,
  /자해|자살|죽고\s*싶/,
  /死にたい|自殺/,
];

export function detectsCrisis(text: string): boolean {
  const trimmed = text.trim();
  if (!trimmed) return false;
  return CRISIS_PATTERNS.some((pattern) => pattern.test(trimmed));
}

export const CRISIS_MESSAGE = `I'm really glad you reached out — please get real help now. IslandMed can't support this moment safely.

Call emergency services in Hainan: 120 (ambulance) or 110 (police). You can speak English on 120 — they will connect you to an interpreter.

If you can, also contact someone you trust nearby, or a crisis line:
• International Association for Suicide Prevention: https://www.iasp.info/suicidalthoughts/
• Beijing Suicide Research & Prevention Center: 800-810-1117 (toll-free in China)

You are not alone. Please reach a real person now.`;
