export type ChatRole = "user" | "assistant";

export type ChatMessage = {
  role: ChatRole;
  content: string;
};

export type ChatRequest = {
  messages: ChatMessage[];
  locale?: string;
};

export type ChatResponse = {
  message: ChatMessage & { role: "assistant" };
};

/** Area used to enforce phone rules: numbers only for Haikou / Sanya. */
export type HospitalArea = "haikou" | "sanya" | "other";

export type ChatHospitalCard = {
  name: string;
  nameZh: string;
  languages: string[];
  /** Only set for verified Haikou/Sanya contacts. Omit outside those cities. */
  phone?: string;
  area: HospitalArea;
  verified: boolean;
};

export type UiMessage = ChatMessage & {
  id: string;
  hospitals?: ChatHospitalCard[];
};
