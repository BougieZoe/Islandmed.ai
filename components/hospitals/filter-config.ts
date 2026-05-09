import type { HospitalFilterKey } from "@/lib/hospitals/types";

export const hospitalFilters = [
  {
    key: "english",
    label: "English",
    description: "English support",
  },
  {
    key: "korean",
    label: "Korean",
    description: "Korean support",
  },
  {
    key: "japanese",
    label: "Japanese",
    description: "Japanese support",
  },
  {
    key: "internationalClinic",
    label: "International clinic",
    description: "International clinic available",
  },
  {
    key: "emergency",
    label: "Emergency",
    description: "Emergency service",
  },
] satisfies Array<{
  key: HospitalFilterKey;
  label: string;
  description: string;
}>;
