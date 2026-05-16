import { NextResponse } from "next/server";
import { createChatCompletion } from "@/lib/ai/client";
import { buildChatMessages } from "@/lib/ai/prompts";
import type { ChatMessage, ChatRequest } from "@/lib/chat/types";

function isValidMessage(message: unknown): message is ChatMessage {
  if (!message || typeof message !== "object") return false;

  const { role, content } = message as ChatMessage;

  return (
    (role === "user" || role === "assistant") &&
    typeof content === "string" &&
    content.trim().length > 0
  );
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ChatRequest;

    if (!Array.isArray(body.messages) || body.messages.length === 0) {
      return NextResponse.json(
        { error: "messages must be a non-empty array" },
        { status: 400 },
      );
    }

    if (!body.messages.every(isValidMessage)) {
      return NextResponse.json(
        { error: "each message needs role and content" },
        { status: 400 },
      );
    }

    const content = await createChatCompletion(
      buildChatMessages(body.messages, body.locale),
    );

    return NextResponse.json({
      message: { role: "assistant" as const, content },
    });
  } catch (error) {
    console.error("[chat]", error);

    return NextResponse.json(
      {
        error:
          "Something went wrong. Please try again in a moment.",
      },
      { status: 500 },
    );
  }
}
