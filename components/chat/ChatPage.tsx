"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { ChatMessage, ChatResponse, UiMessage } from "@/lib/chat/types";
import { ChatInput } from "./ChatInput";
import { MessageList } from "./MessageList";

function createMessage(role: ChatMessage["role"], content: string): UiMessage {
  return {
    id: crypto.randomUUID(),
    role,
    content,
  };
}

export function ChatPage() {
  const [messages, setMessages] = useState<UiMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  async function sendMessage(text: string) {
    const userMessage = createMessage("user", text);
    const nextMessages = [...messages, userMessage];

    setMessages(nextMessages);
    setIsLoading(true);
    setError(null);

    try {
      const apiMessages: ChatMessage[] = nextMessages.map(({ role, content }) => ({
        role,
        content,
      }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: apiMessages,
          locale: navigator.language,
        }),
      });

      const data = (await response.json()) as ChatResponse & { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Request failed");
      }

      setMessages((current) => [
        ...current,
        createMessage("assistant", data.message.content),
      ]);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex min-h-dvh flex-col bg-gradient-to-b from-sky-50/80 to-white">
      <header className="shrink-0 border-b border-slate-200/80 bg-white/80 px-4 py-3 backdrop-blur-sm">
        <div className="mx-auto flex max-w-lg items-center gap-3">
          <Link
            href="/"
            className="text-sm font-medium text-sky-700 hover:text-sky-800"
          >
            ← Home
          </Link>
          <div className="min-w-0 flex-1 text-center">
            <h1 className="truncate text-base font-semibold text-slate-900">
              IslandMed
            </h1>
            <p className="truncate text-xs text-slate-500">
              Healthcare companion · not a doctor
            </p>
          </div>
          <span className="w-12" aria-hidden />
        </div>
      </header>

      <main className="flex flex-1 flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <div className="mx-auto max-w-lg">
            {error ? (
              <p className="mb-4 rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-center text-sm text-rose-700">
                {error}
              </p>
            ) : null}
            <MessageList messages={messages} isLoading={isLoading} />
            <div ref={bottomRef} />
          </div>
        </div>

        <ChatInput onSend={sendMessage} disabled={isLoading} />
      </main>
    </div>
  );
}
