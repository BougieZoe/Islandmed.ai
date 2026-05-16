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

export type UiMessage = ChatMessage & {
  id: string;
};
