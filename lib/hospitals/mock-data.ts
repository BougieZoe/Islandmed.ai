import type { Hospital } from "./types";

/**
 * Prototype directory data for /hospitals UI only.
 * Chat contact numbers and verified languages must come from lib/chat/hospitals.ts.
 */
export const hospitals: Hospital[] = [
  {
    id: "hos_hak_hainan_general",
    slug: "hainan-general-hospital",
    nameEn: "Hainan General Hospital",
    nameZh: "海南省人民医院",
    careLevel: "tertiary",
    summary:
      "Large public hospital in Haikou with broad specialist coverage and 24-hour emergency care.",
    languages: [
      {
        code: "en",
        name: "English",
        nativeName: "English",
        availability: "business_hours",
        notes: "International desk support during weekday daytime hours.",
      },
      {
        code: "zh",
        name: "Chinese",
        nativeName: "中文",
        availability: "daily",
      },
    ],
    openingHours: "Outpatient 08:00-12:00, 14:30-17:30; emergency 24 hours",
    contact: {
      phone: "0898 6862 2355",
      internationalPhone: "+86 898 6862 2355",
      emergencyPhone: "0898 6864 2999",
    },
    location: {
      cityCode: "haikou",
      cityName: "Haikou",
      district: "Xiuying District",
      addressEn: "19 Xiuhua Road, Xiuying District, Haikou, Hainan",
      addressZh: "海南省海口市秀英区秀华路19号",
      latitude: 20.0076,
      longitude: 110.2852,
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Hainan%20General%20Hospital%20Haikou",
    },
    services: {
      hasInternationalClinic: true,
      hasEmergency: true,
      emergencyHours: "24 hours",
      departments: ["Emergency", "Internal medicine", "Surgery", "Pediatrics"],
    },
    lastVerifiedAt: "2026-04-15",
  },
  {
    id: "hos_hak_hainan_affiliated",
    slug: "first-affiliated-hainan-medical-university",
    nameEn: "The First Affiliated Hospital of Hainan Medical University",
    nameZh: "海南医学院第一附属医院",
    careLevel: "tertiary",
    summary:
      "Central Haikou teaching hospital with emergency care and strong general medicine coverage.",
    languages: [
      {
        code: "en",
        name: "English",
        nativeName: "English",
        availability: "on_request",
        notes: "English support may require advance request.",
      },
      {
        code: "zh",
        name: "Chinese",
        nativeName: "中文",
        availability: "daily",
      },
    ],
    openingHours: "Outpatient 08:00-12:00, 14:30-17:30; emergency 24 hours",
    contact: {
      phone: "0898 6677 2255",
      internationalPhone: "+86 898 6677 2255",
      emergencyPhone: "0898 6671 1999",
    },
    location: {
      cityCode: "haikou",
      cityName: "Haikou",
      district: "Longhua District",
      addressEn: "31 Longhua Road, Longhua District, Haikou, Hainan",
      addressZh: "海南省海口市龙华区龙华路31号",
      latitude: 20.0363,
      longitude: 110.3388,
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=First%20Affiliated%20Hospital%20of%20Hainan%20Medical%20University",
    },
    services: {
      hasInternationalClinic: false,
      hasEmergency: true,
      emergencyHours: "24 hours",
      departments: ["Emergency", "Cardiology", "Neurology", "Respiratory medicine"],
    },
    lastVerifiedAt: "2026-04-10",
  },
  {
    id: "hos_hak_hainan_women_children",
    slug: "hainan-women-children-medical-center",
    nameEn: "Hainan Women and Children Medical Center",
    nameZh: "海南省妇女儿童医学中心",
    careLevel: "specialty",
    summary:
      "Specialty hospital in Haikou for pediatric, maternity, and family health needs.",
    languages: [
      {
        code: "en",
        name: "English",
        nativeName: "English",
        availability: "on_request",
      },
      {
        code: "ja",
        name: "Japanese",
        nativeName: "日本語",
        availability: "on_request",
      },
      {
        code: "zh",
        name: "Chinese",
        nativeName: "中文",
        availability: "daily",
      },
    ],
    openingHours: "Outpatient 08:00-12:00, 14:30-17:30; emergency 24 hours",
    contact: {
      phone: "0898 3668 8888",
      internationalPhone: "+86 898 3668 8888",
      emergencyPhone: "0898 3669 5120",
    },
    location: {
      cityCode: "haikou",
      cityName: "Haikou",
      district: "Qiongshan District",
      addressEn: "15 Longkun South Road, Qiongshan District, Haikou, Hainan",
      addressZh: "海南省海口市琼山区龙昆南路15号",
      latitude: 19.9989,
      longitude: 110.3504,
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Hainan%20Women%20and%20Children%20Medical%20Center",
    },
    services: {
      hasInternationalClinic: false,
      hasEmergency: true,
      emergencyHours: "24 hours for pediatric and maternity emergency",
      departments: ["Pediatrics", "Obstetrics", "Gynecology", "Child health"],
    },
    lastVerifiedAt: "2026-03-28",
  },
  {
    id: "hos_sya_sanya_central",
    slug: "sanya-central-hospital",
    nameEn: "Sanya Central Hospital",
    nameZh: "三亚中心医院",
    careLevel: "tertiary",
    summary:
      "Major Sanya hospital with emergency service and broad coverage for travel-related care.",
    languages: [
      {
        code: "en",
        name: "English",
        nativeName: "English",
        availability: "business_hours",
      },
      {
        code: "ko",
        name: "Korean",
        nativeName: "한국어",
        availability: "on_request",
      },
      {
        code: "zh",
        name: "Chinese",
        nativeName: "中文",
        availability: "daily",
      },
    ],
    openingHours: "Outpatient 08:00-12:00, 14:30-17:30; emergency 24 hours",
    contact: {
      phone: "0898 3822 5666",
      internationalPhone: "+86 898 3822 5666",
      emergencyPhone: "0898 3822 5120",
    },
    location: {
      cityCode: "sanya",
      cityName: "Sanya",
      district: "Tianya District",
      addressEn: "1154 Jiefang Road, Tianya District, Sanya, Hainan",
      addressZh: "海南省三亚市天涯区解放路1154号",
      latitude: 18.2738,
      longitude: 109.5069,
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Sanya%20Central%20Hospital",
    },
    services: {
      hasInternationalClinic: true,
      hasEmergency: true,
      emergencyHours: "24 hours",
      departments: ["Emergency", "Internal medicine", "Orthopedics", "Dermatology"],
    },
    lastVerifiedAt: "2026-04-18",
  },
  {
    id: "hos_sya_people",
    slug: "sanya-peoples-hospital",
    nameEn: "Sanya People's Hospital",
    nameZh: "三亚市人民医院",
    careLevel: "tertiary",
    summary:
      "General hospital in central Sanya with emergency care and outpatient departments.",
    languages: [
      {
        code: "en",
        name: "English",
        nativeName: "English",
        availability: "on_request",
      },
      {
        code: "ja",
        name: "Japanese",
        nativeName: "日本語",
        availability: "on_request",
      },
      {
        code: "zh",
        name: "Chinese",
        nativeName: "中文",
        availability: "daily",
      },
    ],
    openingHours: "Outpatient 08:00-12:00, 14:30-17:30; emergency 24 hours",
    contact: {
      phone: "0898 8827 3888",
      internationalPhone: "+86 898 8827 3888",
      emergencyPhone: "0898 8825 1120",
    },
    location: {
      cityCode: "sanya",
      cityName: "Sanya",
      district: "Jiyang District",
      addressEn: "558 Jiefang Road, Jiyang District, Sanya, Hainan",
      addressZh: "海南省三亚市吉阳区解放路558号",
      latitude: 18.2523,
      longitude: 109.5117,
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Sanya%20People%27s%20Hospital",
    },
    services: {
      hasInternationalClinic: false,
      hasEmergency: true,
      emergencyHours: "24 hours",
      departments: ["Emergency", "ENT", "Gastroenterology", "General surgery"],
    },
    lastVerifiedAt: "2026-04-05",
  },
  {
    id: "hos_sya_harmonious",
    slug: "sanya-harmonious-international-clinic",
    nameEn: "Sanya Harmonious International Clinic",
    nameZh: "三亚和睦国际诊所",
    careLevel: "clinic",
    summary:
      "Private-style clinic option for non-emergency consultations, travel illness, and multilingual support.",
    languages: [
      {
        code: "en",
        name: "English",
        nativeName: "English",
        availability: "daily",
      },
      {
        code: "ko",
        name: "Korean",
        nativeName: "한국어",
        availability: "business_hours",
      },
      {
        code: "ja",
        name: "Japanese",
        nativeName: "日本語",
        availability: "business_hours",
      },
      {
        code: "zh",
        name: "Chinese",
        nativeName: "中文",
        availability: "daily",
      },
    ],
    openingHours: "Daily 09:00-18:00; closed for major public holidays",
    contact: {
      phone: "0898 8888 6120",
      internationalPhone: "+86 898 8888 6120",
    },
    location: {
      cityCode: "sanya",
      cityName: "Sanya",
      district: "Haitang District",
      addressEn: "Haitang Bay Resort Area, Haitang District, Sanya, Hainan",
      addressZh: "海南省三亚市海棠区海棠湾度假区",
      latitude: 18.3165,
      longitude: 109.7357,
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Sanya%20International%20Clinic%20Haitang%20Bay",
    },
    services: {
      hasInternationalClinic: true,
      hasEmergency: false,
      departments: ["General practice", "Travel medicine", "Minor injury care"],
    },
    lastVerifiedAt: "2026-04-20",
  },
];
