"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CRISIS_MESSAGE, detectsCrisis } from "@/lib/chat/crisis";
import { getMatchedHospitals } from "@/lib/chat/hospitals";
import type { ChatMessage, ChatResponse, UiMessage } from "@/lib/chat/types";
import { ChatInput } from "./ChatInput";
import { MessageList } from "./MessageList";

const CITIES = ["Haikou", "Sanya", "Other"] as const;

const DISCLAIMER =
  "IslandMed is not a doctor. This is not medical advice.";

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
  const [city, setCity] = useState<string | null>(null);
  const [crisisMode, setCrisisMode] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const shownHospitalNames = useRef(new Set<string>());

  const chatStarted = city !== null;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading, crisisMode]);

  function selectCity(selectedCity: string) {
    if (chatStarted || isLoading || crisisMode) return;

    setCity(selectedCity);
    void sendMessage(`I am currently in ${selectedCity}, Hainan.`);
  }

  async function sendMessage(text: string) {
    if (crisisMode || isLoading) return;

    const userMessage = createMessage("user", text);
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setError(null);

    if (detectsCrisis(text)) {
      setCrisisMode(true);
      setMessages((current) => [
        ...current,
        createMessage("assistant", CRISIS_MESSAGE),
      ]);
      return;
    }

    setIsLoading(true);

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

      const assistantContent = data.message.content;
      const hospitals = getMatchedHospitals(assistantContent).filter(
        (hospital) => !shownHospitalNames.current.has(hospital.name),
      );
      for (const hospital of hospitals) {
        shownHospitalNames.current.add(hospital.name);
      }

      setMessages((current) => [
        ...current,
        {
          ...createMessage("assistant", assistantContent),
          ...(hospitals.length > 0 ? { hospitals } : {}),
        },
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
              Healthcare companion · Hainan
            </p>
          </div>
          <span className="w-12" aria-hidden />
        </div>
      </header>

      <div className="shrink-0 border-b border-amber-200/80 bg-amber-50 px-4 py-2">
        <p className="mx-auto max-w-lg text-center text-xs leading-relaxed text-amber-950">
          {DISCLAIMER}
        </p>
      </div>

      <main className="flex flex-1 flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <div className="mx-auto max-w-lg">
            {crisisMode ? (
              <div
                role="alert"
                className="mb-4 rounded-2xl border border-rose-300 bg-rose-50 px-4 py-3 text-sm leading-relaxed text-rose-950"
              >
                <p className="font-semibold">Please get real help now</p>
                <p className="mt-1">
                  Normal chat is paused. Call{" "}
                  <a href="tel:120" className="font-semibold underline">
                    120
                  </a>{" "}
                  (ambulance) or{" "}
                  <a href="tel:110" className="font-semibold underline">
                    110
                  </a>{" "}
                  (police). You can speak English on 120 — they will connect you
                  to an interpreter.
                </p>
              </div>
            ) : null}

            {!chatStarted && !crisisMode ? (
              <div className="flex flex-col items-center justify-center py-8">
                <p className="mb-1 text-center text-lg font-medium text-slate-800">
                  Where are you in Hainan?
                </p>
                <p className="mb-5 text-center text-sm text-slate-500">
                  This helps tailor guidance to your area.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {CITIES.map((name) => (
                    <button
                      key={name}
                      type="button"
                      onClick={() => selectCity(name)}
                      disabled={isLoading}
                      className="rounded-full border border-sky-200 bg-white px-5 py-2.5 text-sm font-medium text-sky-800 shadow-sm transition hover:border-sky-300 hover:bg-sky-50 disabled:opacity-50"
                    >
                      {name}
                    </button>
                  ))}
                </div>
              </div>
            ) : chatStarted ? (
              <div className="mb-4 flex justify-center">
                <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-700">
                  {city}, Hainan
                </span>
              </div>
            ) : null}

            {error ? (
              <p className="mb-4 rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-center text-sm text-rose-700">
                {error}
              </p>
            ) : null}

            {chatStarted || crisisMode ? (
              <MessageList messages={messages} isLoading={isLoading} />
            ) : null}
            <div ref={bottomRef} />
          </div>
        </div>

        {chatStarted && !crisisMode ? (
          <ChatInput onSend={sendMessage} disabled={isLoading} />
        ) : null}
      </main>
    </div>
  );
}
