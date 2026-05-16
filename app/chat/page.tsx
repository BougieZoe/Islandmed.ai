import { ChatPage } from "@/components/chat/ChatPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chat | IslandMed AI",
  description:
    "Describe your symptoms and get calm guidance on what to do next.",
};

export default function Page() {
  return <ChatPage />;
}
