import type { UiMessage } from "@/lib/chat/types";

type MessageBubbleProps = {
  message: UiMessage;
};

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 text-[15px] leading-relaxed whitespace-pre-wrap sm:max-w-[75%] ${
          isUser
            ? "rounded-br-md bg-sky-600 text-white"
            : "rounded-bl-md border border-slate-200/80 bg-white text-slate-800 shadow-sm"
        }`}
      >
        {message.content}
      </div>
    </div>
  );
}
