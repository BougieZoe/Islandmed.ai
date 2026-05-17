Update AGENTS.md with these changes:

1. FIX ERRORS:
   - Replace "Japan: 119" with "China (Hainan): 120 (ambulance), 110 (police). Never say 119."
   - Update File Structure to match actual project:
     app/
       chat/page.tsx
       api/chat/route.ts
     components/
       chat/
         ChatPage.tsx
         ChatInput.tsx
         MessageBubble.tsx
         MessageList.tsx
         HospitalCard.tsx
     lib/
       ai/
         client.ts
         prompts.ts
       chat/
         types.ts
         hospitals.ts

2. ADD — Risk & Data Rules section:
   ## Risk & Data Rules
   - Do NOT store any user conversation data — sessions are ephemeral
   - Do NOT add user accounts or auth until legally reviewed
   - Every chat session must show disclaimer: "IslandMed is not a doctor. This is not medical advice."
   - If user expresses suicidal ideation or extreme distress → immediately show crisis line, stop normal flow
   - Never fabricate hospital phone numbers or addresses — only use verified data from lib/chat/hospitals.ts
   - If hospital data is unverified, say so explicitly — never present uncertain info as fact

3. ADD — Hospital Data Rules section:
   ## Hospital Data Rules
   - All hospital info lives in lib/chat/hospitals.ts only
   - Each hospital must have verified: boolean field
   - verified: true = confirmed from official source (cite the source in a comment)
   - verified: false = must show "⚠️ Language support unconfirmed" in UI
   - Never add a phone number without a verified source
   - For areas outside Haikou/Sanya: do not show phone numbers at all

4. UPDATE — AI Behavior Rules:
   - Add: "For 120 calls, always add: you can speak English, they will connect you to an interpreter"
   - Add: "Always mention travel insurance when recommending hospital visits"
   - Add: "Never claim a hospital supports a specific language unless it appears in verified hospital data"
   - Add: "For areas outside Haikou and Sanya: say I don't have verified info for this area, search Baidu Maps or go directly"
   - Change language list from ZH/EN/KO/JA to: auto-match any language the user writes in

5. UPDATE — What this project is:
   - Change "foreigners navigating healthcare in Asia" to "foreigners navigating healthcare in Hainan Island, China"