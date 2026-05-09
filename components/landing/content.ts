export type Feature = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  accent: "blue" | "green" | "coral";
};

export const navItems = [
  { label: "Directory", href: "#directory" },
  { label: "Translator", href: "#translator" },
  { label: "Symptoms", href: "#symptoms" },
];

export const features: Feature[] = [
  {
    id: "directory",
    eyebrow: "Hospital Directory",
    title: "Find care that is ready for international patients.",
    description:
      "Browse nearby hospitals, filter by spoken language, and see which clinics support foreigners before you travel across town.",
    points: [
      "Language and international clinic filters",
      "Map-ready hospital cards",
      "Clear care options without medical jargon",
    ],
    accent: "blue",
  },
  {
    id: "translator",
    eyebrow: "AI Medical Translator",
    title: "A calmer conversation between patient and doctor.",
    description:
      "Real-time translation for English, Chinese, Korean, and Japanese helps both sides stay understood during the visit.",
    points: [
      "Patient and doctor conversation mode",
      "Plain-language medical phrasing",
      "Designed for fast handoff at the clinic",
    ],
    accent: "green",
  },
  {
    id: "symptoms",
    eyebrow: "Symptom Assistant",
    title: "Turn uncertainty into a simple next step.",
    description:
      "Visitors describe symptoms in their own words and receive guidance on department, urgency, and the right hospital type nearby.",
    points: [
      "Department suggestions",
      "Urgency signals that are easy to understand",
      "Nearby care type recommendations",
    ],
    accent: "coral",
  },
];

export const medicalCards = [
  {
    label: "International clinic",
    value: "Open today",
    meta: "English + Chinese",
    className: "medical-card-one",
  },
  {
    label: "Translation",
    value: "Patient -> Doctor",
    meta: "EN / CN / KR / JP",
    className: "medical-card-two",
  },
  {
    label: "Suggested department",
    value: "Internal medicine",
    meta: "Moderate urgency",
    className: "medical-card-three",
  },
];
