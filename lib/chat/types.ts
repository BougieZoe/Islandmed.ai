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

export type ChatHospitalCard = {
  name: string;
  nameZh: string;
  languages: string[];
  phone: string;
  verified: boolean;
};

export type UiMessage = ChatMessage & {
  id: string;
  hospitals?: ChatHospitalCard[];
};
