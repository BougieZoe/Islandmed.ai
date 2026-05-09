export type CityCode = "haikou" | "sanya";

export type LanguageCode = "en" | "ko" | "ja" | "zh";

export type CareLevel = "tertiary" | "secondary" | "specialty" | "clinic";

export type HospitalLanguageSupport = {
  code: LanguageCode;
  name: string;
  nativeName: string;
  availability: "daily" | "business_hours" | "on_request";
  notes?: string;
};

export type HospitalContact = {
  phone: string;
  internationalPhone: string;
  emergencyPhone?: string;
};

export type HospitalLocation = {
  cityCode: CityCode;
  cityName: string;
  district: string;
  addressEn: string;
  addressZh: string;
  latitude: number;
  longitude: number;
  mapUrl: string;
};

export type HospitalServices = {
  hasInternationalClinic: boolean;
  hasEmergency: boolean;
  emergencyHours?: string;
  departments: string[];
};

export type Hospital = {
  id: string;
  slug: string;
  nameEn: string;
  nameZh: string;
  careLevel: CareLevel;
  summary: string;
  languages: HospitalLanguageSupport[];
  openingHours: string;
  contact: HospitalContact;
  location: HospitalLocation;
  services: HospitalServices;
  lastVerifiedAt: string;
};

export type HospitalFilterKey =
  | "english"
  | "korean"
  | "japanese"
  | "internationalClinic"
  | "emergency";

export type HospitalFilters = Record<HospitalFilterKey, boolean>;
