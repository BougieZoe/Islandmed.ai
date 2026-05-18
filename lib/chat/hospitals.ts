import type { ChatHospitalCard } from "@/lib/chat/types";

const STRAIGHT_APOSTROPHE = "'";
const CURLY_APOSTROPHE = "\u2019"; // '

/** Adds straight (') and curly (') apostrophe variants for each phrase. */
function expandMatchers(matchers: string[]): string[] {
  const expanded = new Set<string>();

  for (const phrase of matchers) {
    expanded.add(phrase);

    if (phrase.includes(STRAIGHT_APOSTROPHE)) {
      expanded.add(phrase.replaceAll(STRAIGHT_APOSTROPHE, CURLY_APOSTROPHE));
    }

    if (phrase.includes(CURLY_APOSTROPHE)) {
      expanded.add(phrase.replaceAll(CURLY_APOSTROPHE, STRAIGHT_APOSTROPHE));
    }
  }

  return [...expanded];
}

const CHAT_HOSPITALS: { matchers: string[]; card: ChatHospitalCard }[] = [
  {
    matchers: expandMatchers([
      "Haikou People's Hospital",
      "Haikou People's Hospital International Clinic",
      "海口市人民医院",
      "海口人民医院",
    ]),
    card: {
      name: "Haikou People's Hospital International Clinic",
      nameZh: "海口市人民医院 国际门诊",
      languages: ["EN", "中文", "Español", "Français"],
      phone: "0898-66151024",
      verified: true,
    },
  },
  {
    matchers: expandMatchers(["Sanya Central Hospital", "三亚中心医院"]),
    card: {
      name: "Sanya Central Hospital",
      nameZh: "三亚中心医院",
      languages: ["EN", "中文", "Español", "Français"],
      phone: "0898-38224488",
      verified: false,
    },
  },
  {
    matchers: expandMatchers([
      "Sanya People's Hospital",
      "三亚市人民医院",
      "华西三亚医院",
    ]),
    card: {
      name: "Sanya People's Hospital",
      nameZh: "三亚市人民医院 华西三亚医院",
      languages: ["EN", "中文"],
      phone: "0898-88856120",
      verified: false,
    },
  },
  {
    matchers: expandMatchers([
      "PLA General Hospital",
      "解放军总医院海南医院",
      "解放军医院",
    ]),
    card: {
      name: "PLA General Hospital Hainan",
      nameZh: "解放军总医院海南医院",
      languages: ["EN", "中文"],
      phone: "0898-38865000",
      verified: false,
    },
  },
  {
    matchers: ["Boao", "博鳌", "博鳌乐城", "Lecheng"],
    card: {
      name: "Boao Lecheng International Medical Zone",
      nameZh: "博鳌乐城国际医疗旅游先行区",
      languages: ["EN", "中文"],
      phone: "0898-62861888",
      verified: false,
    },
  },
];

export function getMatchedHospitals(content: string): ChatHospitalCard[] {
  return CHAT_HOSPITALS.filter(({ matchers }) =>
    matchers.some((matcher) => content.includes(matcher)),
  ).map(({ card }) => card);
}
