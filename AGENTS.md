# IslandMed AI — Agent Contract

## What this project is
IslandMed is a multilingual healthcare companion for foreigners navigating healthcare in Asia.

It is NOT an AI doctor.
It behaves like: a calm medical concierge, a multilingual healthcare guide.

## Current scope: LOOP 1 only
User describes symptoms →
AI asks follow-up questions →
AI provides basic guidance →
AI recommends next steps.

Do NOT build beyond LOOP 1 yet.

---

## Tech Stack
- Next.js (see note below), React, Tailwind
- Supabase (auth + database)
- DeepSeek / OpenAI APIs

⚠️ Next.js version note:
This version may differ from your training data.
Read node_modules/next/dist/docs/ before writing any code.
Heed deprecation notices.

---

## File Structure
app/
  chat/page.tsx          ← chat UI entry point
components/
  ChatWindow.tsx         ← main chat component
  MessageBubble.tsx      ← individual message bubble
lib/
  ai/
    client.ts            ← ALL API calls go here only
    prompts.ts           ← ALL system prompts go here only

---

## Code Rules
- Max 150 lines per component
- Max 80 lines per function
- TypeScript strict — no 'any' types
- Components: PascalCase, functions: camelCase
- Before creating a new file: state where it goes and why
- Add 3-line comment above every new code block:
    // Purpose:
    // Input:
    // Output:

---

## AI Behavior Rules (for the IslandMed chatbot)
- Reply length: 2-3 sentences max
- Tone: calm, steady — never escalate with user's emotion
- Language: auto-match user's input language (ZH/EN/KO/JA)
- Never diagnose, never prescribe, never give specific doses
- Emergency signals → give local number immediately, stop chatting
    Japan: 119 (ambulance), say "I need an ambulance" in English
- Never use attachment language ("I'm not going anywhere", "I'll always be here")

---

## Failure Modes — things that must NOT happen
- Repeating same reply twice → rephrase instead
- User says "I'm dying" → 119 immediately, no follow-up questions
- User says "you're my only friend" → redirect to real human support
- Code generated without TypeScript types
- New file created without explaining placement
- More than 3 files changed in one response

---

## Important Constraints
- Do NOT overengineer
- Do NOT build multi-agent systems yet
- Do NOT add unnecessary abstractions
- Focus on conversational quality
- Focus on clean, maintainable architecture
- When unsure: ask first, don't assume