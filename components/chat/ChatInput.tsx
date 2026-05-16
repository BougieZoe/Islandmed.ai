"use client";

import { FormEvent, KeyboardEvent, useState } from "react";

type ChatInputProps = {
  onSend: (text: string) => void;
  disabled: boolean;
};

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [text, setText] = useState("");

  function submit() {
    const trimmed = text.trim();
    if (!trimmed || disabled) return;

    onSend(trimmed);
    setText("");
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    submit();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      submit();
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border-t border-slate-200/80 bg-white/90 px-4 py-3 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-lg items-end gap-2">
        <label htmlFor="chat-input" className="sr-only">
          Your message
        </label>
        <textarea
          id="chat-input"
          rows={1}
          value={text}
          onChange={(event) => setText(event.target.value)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          placeholder="Describe your symptoms…"
          className="max-h-32 min-h-11 flex-1 resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-[15px] text-slate-900 placeholder:text-slate-400 focus:border-sky-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-100 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={disabled || !text.trim()}
          className="inline-flex h-11 shrink-0 items-center justify-center rounded-2xl bg-sky-600 px-4 text-sm font-semibold text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Send
        </button>
      </div>
    </form>
  );
}
