import type { UiMessage } from "@/lib/chat/types";
import { HospitalCard } from "./HospitalCard";
import { MessageBubble } from "./MessageBubble";

type MessageListProps = {
  messages: UiMessage[];
  isLoading: boolean;
};

export function MessageList({ messages, isLoading }: MessageListProps) {
  if (messages.length === 0 && !isLoading) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <p className="max-w-xs text-lg font-medium text-slate-800">
          What&apos;s going on?
        </p>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-500">
          Describe how you feel — fever, pain, when it started, anything that
          worries you. I&apos;ll ask a few questions and help you decide what to
          do next.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {messages.map((message) => (
        <div key={message.id} className="flex flex-col gap-2">
          <MessageBubble message={message} />
          {message.role === "assistant" && message.hospitals?.length ? (
            <div className="flex max-w-[85%] flex-col gap-2 sm:max-w-[75%]">
              {message.hospitals.map((hospital) => (
                <HospitalCard
                  key={`${message.id}-${hospital.nameZh}`}
                  name={hospital.name}
                  nameZh={hospital.nameZh}
                  languages={hospital.languages}
                  phone={hospital.phone}
                  verified={hospital.verified}
                />
              ))}
            </div>
          ) : null}
        </div>
      ))}
      {isLoading ? (
        <div className="flex justify-start">
          <div className="rounded-2xl rounded-bl-md border border-slate-200/80 bg-white px-4 py-3 shadow-sm">
            <span className="text-sm text-slate-500">Thinking…</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
